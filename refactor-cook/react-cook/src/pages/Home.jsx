import React from "react";

export default function Home({ setPage }) {
  return (
    <>
      <main id="homePage">
        <h1>Welcome to my website</h1>
      </main>

      <footer className="footerNav">
        <nav>
          <ul id="homeNav">
            <li><button onClick={() => setPage("home")}>Home</button></li>
            <li><button onClick={() => setPage("about")}>About</button></li>
            <li><button onClick={() => setPage("contact")}>Contact</button></li>
            <li><button onClick={() => setPage("shop")}>Shop</button></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}