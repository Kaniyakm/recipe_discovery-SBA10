// src/hooks/useFetch.js
// ------------------------------------------------------
// useFetch
// Purpose:
//  - Generic data fetching hook.
//  - Returns { data, loading, error }.
//  - Uses AbortController to cancel in-flight requests on unmount.
// Notes:
//  - If `url` is falsy return early (no request). Callers decide how to render.
//  - The catch block uses safe checks (optional chaining) so non-Error values
//    or strings won't cause a runtime TypeError when accessing `.name` or `.message`.
// ------------------------------------------------------

import { useEffect, useState } from "react";

/**
 * useFetch - fetch JSON from `url`.
 * @param {string|null} url - request URL; if falsy, no request is made.
 * @param {Array} deps - optional extra dependencies that should retrigger the effect
 *                       (useful if you want to re-run the fetch when other values change).
 * @returns {{ data: any, loading: boolean, error: string|null }}
 */
export default function useFetch(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Do nothing when url is falsy (caller controls when to call)
    if (!url) {
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok (${res.status})`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        // Safe check: err may not be an Error object (could be a string),
        // so use optional chaining and fallbacks to avoid runtime errors.
        if (err?.name === "AbortError") {
          // Fetch was aborted — do not update error state.
          return;
        }

        const message =
          (typeof err === "string" && err) ||
          err?.message ||
          "An error occurred while fetching data.";

        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      // Abort on cleanup (unmount or url/deps change)
      controller.abort();
    };
    // include url and any extra deps the caller passed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...deps]);

  return { data, loading, error };
}
