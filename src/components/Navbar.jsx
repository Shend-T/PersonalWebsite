import "./Navbar.css";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "../hooks/useLang";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  const { pathname } = useLocation();
  const { t } = useLang();

  return (
    <nav role="navigation" aria-label="Navigimi kryesor">
      <Link to={pathname === "/" ? "#hero" : "/"} className="nav-logo">
        <img src={logo} alt="Shend Tytynxhiu" />
      </Link>
      <ul class="nav-links">
        {t("navbar").map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
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
        <LanguageToggle />
      </div>
    </nav>
  );
}

export default Navbar;
