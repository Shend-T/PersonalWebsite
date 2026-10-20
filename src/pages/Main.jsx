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
