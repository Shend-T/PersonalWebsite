import "./Main.css";
import { useLang } from "../hooks/useLang";

import work from "../assets/work1.png";

function Main() {
  const { t } = useLang();

  return (
    <div>
      <section id="hero" aria-label="Prezantimi">
        {/* <div className="hero-eyebrow fade-in">I disponueshëm për mundësi</div> */}
        <h1 className="hero-title fade-in">
          Shend
          <br />
          <span className="accent">Tytynxhiu</span>
        </h1>
        <p className="hero-subtitle fade-in">{t("home").heroText}</p>
        <div className="hero-tags fade-in">
          <span className="tag">Python</span>
          <span className="tag">Django</span>
          <span className="tag">React</span>
          <span className="tag">Laravel</span>
          <span className="tag">PyTorch</span>
          <span className="tag">Machine Learning</span>
          <span className="tag">Data Science</span>
        </div>
        <div className="hero-cta fade-in">
          <a href="#contact" className="btn-primary">
            {t("home").heroButton1}
          </a>
          <a href="#projects" className="btn-ghost">
            {t("home").heroButton2}
          </a>
        </div>
      </section>

      <section id="about" aria-label="Rreth meje">
        <p className="section-label">{t("home").aboutLabel}</p>
        <h2 className="section-title">{t("home").aboutTitle}</h2>
        <div className="divider"></div>
        <div className="about-grid">
          <div className="about-text">
            <p>{t("home").aboutText1}</p>
            <p>{t("home").aboutText2}</p>
          </div>
          {/* <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">2+</div>
              <div className="stat-label">Vite kodim</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projekte të përfunduara</div>
            </div>
          </div> */}
        </div>
      </section>

      <section id="experience" aria-label={t("home").experienceLabel}>
        <p className="section-label">{t("home").experienceLabel}</p>
        <h2 className="section-title">{t("home").experienceTitle}</h2>
        <div className="divider"></div>
        <div className="experience-list">
          <article className="exp-card">
            <img src={work} className="exp-icon" alt="" />

            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-role">Web Developer - Freelance</div>
                <span className="exp-date">2026</span>
              </div>

              <a
                href="https://rentacarvisi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-company"
              >
                Rent a Car Visi ↗
              </a>
              <p className="exp-desc">{t("home").experienceDesc1}</p>
              <p className="exp-desc">{t("home").experienceDesc2}</p>
              <div className="exp-tech">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Vite</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" aria-label={t("home").projectsTitle}>
        <p className="section-label">{t("home").projectsLabel}</p>
        <h2 className="section-title">{t("home").projectsTitle}</h2>
        <div className="divider"></div>

        <div className="projects-grid">
          <a
            href="https://github.com/Shend-T/Hosting-Service"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Hosting Service"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="6" rx="1" />
                  <line x1="6" y1="5" x2="6" y2="5.01" />
                  <line x1="10" y1="5" x2="10" y2="5.01" />

                  <rect x="2" y="9" width="20" height="6" rx="1" />
                  <line x1="6" y1="12" x2="6" y2="12.01" />
                  <line x1="10" y1="12" x2="10" y2="12.01" />

                  <rect x="2" y="16" width="20" height="6" rx="1" />
                  <line x1="6" y1="19" x2="6" y2="19.01" />
                  <line x1="10" y1="19" x2="10" y2="19.01" />
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Hosting Service</div>
            <p className="project-desc">{t("home").projects[0].desc1}</p>
            <p className="project-desc">{t("home").projects[0].desc2}</p>
            <div className="project-tech">
              <span className="tag">Laravel</span>
              <span className="tag">React</span>
              <span className="tag">MySQL</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/Online-Banking-Service"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Projekti 2"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Online Banking Service</div>
            <p className="project-desc">{t("home").projects[1].desc1}</p>
            <p className="project-desc">{t("home").projects[1].desc2}</p>
            <div className="project-tech">
              <span className="tag">Laravel</span>
              <span className="tag">React</span>
              <span className="tag">MySQL</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/Lost_And_Found"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Lost And Found"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="M3.3 7 12 12l8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Lost And Found</div>
            <p className="project-desc">{t("home").projects[2].desc1}</p>
            <p className="project-desc">{t("home").projects[2].desc2}</p>
            <div className="project-tech">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">PHP</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/Loopback"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Loopback"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M18 4L21 7M21 7L18 10M21 7H7C4.79086 7 3 8.79086 3 11M6 20L3 17M3 17L6 14M3 17H17C19.2091 17 21 15.2091 21 13"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>

            <div className="project-name">Loopback</div>
            <p className="project-desc">{t("home").projects[3].desc1}</p>
            <p className="project-desc">{t("home").projects[3].desc2}</p>
            <div className="project-tech">
              <span className="tag">.NET</span>
              <span className="tag">Angular</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/Visi-Rent"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Rent A Car Visi"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Rent A Car Visi</div>
            <p className="project-desc">{t("home").projects[4].desc1}</p>
            <p className="project-desc">{t("home").projects[4].desc2}</p>
            <div className="project-tech">
              <span className="tag">React.js</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/ML_Beginner_Projects/tree/master/bike"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Bike Regressor"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 12.5L8.5 9.5M8.5 9.5H16M8.5 9.5L10.5 16.5L16 9.5M8.5 9.5L7.5 7M16 9.5L17 12.5M16 9.5L15.5 8.5L18.5 8V9.5M9 15.5C9 17.433 7.433 19 5.5 19C3.567 19 2 17.433 2 15.5C2 13.567 3.567 12 5.5 12C7.433 12 9 13.567 9 15.5Z"
                      stroke-width="1"
                      stroke-linejoin="round"
                    ></path>
                    <circle
                      cx="18.5"
                      cy="15.5"
                      r="3.5"
                      stroke-width="1"
                    ></circle>
                  </g>
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Bike Rental Regressor</div>
            <p className="project-desc">{t("home").projects[5].desc1}</p>
            <p className="project-desc">{t("home").projects[5].desc2}</p>
            <div className="project-tech">
              <span className="tag">PyTorch</span>
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
            </div>
          </a>

          <a
            href="https://github.com/Shend-T/ML_Beginner_Projects/tree/master/car_price"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Car Regressor"
          >
            <div className="project-card-header">
              <div className="project-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18 0C13.570313 0 10 3.570313 10 8C10 12.429688 13.570313 16 18 16C20.964844 16 23.523438 14.386719 24.90625 12L37 12C37.265625 12.007813 37.527344 11.90625 37.71875 11.71875L39.71875 9.71875C39.90625 9.527344 40.007813 9.265625 40 9L40 7C40.007813 6.734375 39.90625 6.472656 39.71875 6.28125L37.71875 4.28125C37.527344 4.09375 37.265625 3.992188 37 4L35 4C34.734375 3.992188 34.472656 4.09375 34.28125 4.28125L33.5 5.0625L32.71875 4.28125C32.527344 4.09375 32.265625 3.992188 32 4L30 4C29.800781 3.996094 29.605469 4.050781 29.4375 4.15625L28.5 4.78125L27.5625 4.15625C27.394531 4.050781 27.199219 3.996094 27 4L24.90625 4C23.523438 1.613281 20.964844 0 18 0 Z M 18 2C21.371094 2 24 4.628906 24 8C24 11.371094 21.371094 14 18 14C14.628906 14 12 11.371094 12 8C12 4.628906 14.628906 2 18 2 Z M 16 6C14.894531 6 14 6.894531 14 8C14 9.105469 14.894531 10 16 10C17.105469 10 18 9.105469 18 8C18 6.894531 17.105469 6 16 6 Z M 25.75 6L26.6875 6L27.9375 6.84375C28.277344 7.074219 28.722656 7.074219 29.0625 6.84375L30.3125 6L31.5625 6L32.78125 7.21875C32.96875 7.414063 33.230469 7.523438 33.5 7.523438C33.769531 7.523438 34.03125 7.414063 34.21875 7.21875L35.4375 6L36.5625 6L38 7.4375L38 8.5625L36.5625 10L25.75 10C25.914063 9.359375 26 8.691406 26 8C26 7.308594 25.914063 6.640625 25.75 6 Z M 15.6875 18C13.6875 18 11.859375 19.226563 11.09375 21.09375C11.089844 21.109375 11.066406 21.109375 11.0625 21.125L8.125 28L7 28C5.355469 28 4 29.355469 4 31C4 32.644531 5.355469 34 7 34L7 47C7 48.644531 8.355469 50 10 50L13 50C14.644531 50 16 48.644531 16 47L16 46L34 46L34 47C34 48.644531 35.355469 50 37 50L40 50C41.644531 50 43 48.644531 43 47L43 34C44.644531 34 46 32.644531 46 31C46 29.355469 44.644531 28 43 28L41.875 28L38.9375 21.125C38.933594 21.109375 38.910156 21.109375 38.90625 21.09375C38.140625 19.226563 36.3125 18 34.3125 18 Z M 15.6875 20L34.3125 20C35.496094 20 36.617188 20.765625 37.0625 21.875L37.09375 21.90625L39.90625 28.5L38.9375 29.15625L38.9375 29.1875C38.109375 29.765625 37.222656 30 36.1875 30L13.8125 30C12.777344 30 11.890625 29.765625 11.0625 29.1875L11.0625 29.15625L10.09375 28.5L12.90625 21.90625L12.9375 21.875C13.382813 20.765625 14.503906 20 15.6875 20 Z M 7 30L8.6875 30L9.9375 30.84375L9.9375 30.8125L9.96875 30.8125C11.136719 31.621094 12.457031 32 13.8125 32L36.1875 32C37.542969 32 38.863281 31.621094 40.03125 30.8125C40.039063 30.808594 40.054688 30.816406 40.0625 30.8125L40.0625 30.84375L41.3125 30L43 30C43.554688 30 44 30.445313 44 31C44 31.554688 43.554688 32 43 32L41 32L41 44L9 44L9 32L7 32C6.445313 32 6 31.554688 6 31C6 30.445313 6.445313 30 7 30 Z M 14.5 35C12.578125 35 11 36.578125 11 38.5C11 40.421875 12.578125 42 14.5 42C16.421875 42 18 40.421875 18 38.5C18 36.578125 16.421875 35 14.5 35 Z M 35.5 35C33.578125 35 32 36.578125 32 38.5C32 40.421875 33.578125 42 35.5 42C37.421875 42 39 40.421875 39 38.5C39 36.578125 37.421875 35 35.5 35 Z M 14.5 37C15.375 37 16 37.625 16 38.5C16 39.375 15.375 40 14.5 40C13.625 40 13 39.375 13 38.5C13 37.625 13.625 37 14.5 37 Z M 35.5 37C36.375 37 37 37.625 37 38.5C37 39.375 36.375 40 35.5 40C34.625 40 34 39.375 34 38.5C34 37.625 34.625 37 35.5 37 Z M 9 46L14 46L14 47C14 47.554688 13.554688 48 13 48L10 48C9.445313 48 9 47.554688 9 47 Z M 36 46L41 46L41 47C41 47.554688 40.554688 48 40 48L37 48C36.445313 48 36 47.554688 36 47Z"></path>
                  </g>
                </svg>
              </div>
              <span className="project-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <div className="project-name">Car Price Regressor</div>
            <p className="project-desc">{t("home").projects[6].desc1}</p>
            <p className="project-desc">{t("home").projects[6].desc2}</p>
            <div className="project-tech">
              <span className="tag">PyTorch</span>
              <span className="tag">Pandas</span>
              <span className="tag">Matplotlib</span>
            </div>
          </a>
        </div>
      </section>

      <section id="education" aria-label={t("home").eduLabel}>
        <p className="section-label">{t("home").eduLabel}</p>
        <h2 className="section-title">{t("home").eduTitle}</h2>
        <div className="divider"></div>

        <div className="edu-grid">
          <div className="edu-card">
            <h3>{t("home").eduUniversity}</h3>
            <div className="edu-sub">UBT</div>
            <div className="edu-meta">Prishtinë, Kosovë · 2024 - 2027</div>
            <p>{t("home").eduUniversityDesc}</p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "var(--text-dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {t("home").eduCert}:
            </h3>
            <div className="cert-list">
              <a
                href="https://www.freecodecamp.org/certification/shend/front-end-development-libraries"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <div className="cert-item-header">
                  <div className="cert-item-left">
                    <div className="cert-dot"></div>
                    <div className="cert-name">
                      Frontend Development Libraries
                    </div>
                  </div>

                  <span className="project-arrow">
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>

                <div className="cert-issuer">
                  FreeCodeCamp · 6 {t("home").eduCert1} 2023
                </div>
              </a>

              <a
                href="https://www.freecodecamp.org/certification/shend/javascript-algorithms-and-data-structures"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <div className="cert-item-header">
                  <div className="cert-item-left">
                    <div className="cert-dot"></div>
                    <div className="cert-name">
                      Javascript Algorithms And Data Structures
                    </div>
                  </div>

                  <span className="project-arrow">
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>

                <div className="cert-issuer">
                  FreeCodeCamp · 16 {t("home").eduCert2} 2023
                </div>
              </a>

              <a
                href="https://www.freecodecamp.org/certification/shend/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <div className="cert-item-header">
                  <div className="cert-item-left">
                    <div className="cert-dot"></div>
                    <div className="cert-name">Responsive Web Design</div>
                  </div>

                  <span className="project-arrow">
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>

                <div className="cert-issuer">
                  FreeCodeCamp · 17 {t("home").eduCert3} 2023
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Kontakti">
        <div class="contact-inner">
          <p class="section-label">{t("home").contactLabel}</p>
          <h2 class="section-title">{t("home").contactTitle}</h2>
          <div class="divider" style={{ margin: "0 auto 2rem" }}></div>
          <p>{t("home").contactP}</p>
          <div class="contact-links">
            <a href="mailto:shend@shendt.dev" class="btn-primary">
              {t("home").contactEmail} ↗
            </a>
            <a
              href="https://github.com/Shend-T"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shend-tytynxhiu-a97794227/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
