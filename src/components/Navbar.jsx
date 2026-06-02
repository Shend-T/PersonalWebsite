import React from "react";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav role="navigation" aria-label="Navigimi kryesor">
      <Link to={pathname === "/" ? "#hero" : "/"} className="nav-logo">
        <img src={logo} alt="Shend Tytynxhiu" />
      </Link>
      <ul class="nav-links">
        <li>
          <a href="#about">Rreth meje</a>
        </li>
        <li>
          <a href="#experience">Përvoja Ime</a>
        </li>
        <li>
          <a href="#projects">Projektet</a>
        </li>
        <li>
          <a href="#education">Edukimi</a>
        </li>
        <li>
          <a href="#contact">Kontakti</a>
        </li>
      </ul>
      <div class="nav-socials">
        <a
          href="https://github.com/Shend-T"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shend-tytynxhiu-a97794227/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
