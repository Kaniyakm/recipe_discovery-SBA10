import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import "./style.css";
import "./fonts.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "contact" && <Contact setPage={setPage} />}
      {page === "shop" && <Shop setPage={setPage} />}
    </>
  );
}