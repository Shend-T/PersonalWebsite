import React from "react";
import "./Main.css";

import work from "../assets/work1.png";

function Main() {
  return (
    <div>
      <section id="hero" aria-label="Prezantimi">
        {/* <div className="hero-eyebrow fade-in">I disponueshëm për mundësi</div> */}
        <h1 className="hero-title fade-in">
          Shend
          <br />
          <span className="accent">Tytynxhiu</span>
        </h1>
        <p className="hero-subtitle fade-in">
          Student i vitit të tretë në Inxhinieri Kompjuterike. Full-stack
          developer dhe ML/Data Science entuziastë nga Prishtina, Kosovë.
        </p>
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
            Më Kontaktoni
          </a>
          <a href="#projects" className="btn-ghost">
            Shiko Projektet
          </a>
        </div>
      </section>

      <section id="about" aria-label="Rreth meje">
        <p className="section-label">Rreth Meje</p>
        <h2 className="section-title">Kush Jam Unë</h2>
        <div className="divider"></div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Jam student i vitit të tretë në Inxhinieri Kompjuterike, me pasion
              të thellë për Machine Learning dhe Data Science. Punoj si
              zhvillues full-stack — kryesisht me Django, Laravel dhe React.js —
              por aty ku ndjehem më në shtëpi është te të dhënat dhe modelet,
              duke përdorur PyTorch dhe ekosistemi i Python-it.
            </p>
            <p>
              Kam pak përvojë si freelancer, duke ndërtuar zgjidhje të plota nga
              dizajni deri tek "deployment"-i. Aktualisht jam duke ndërtuar
              portfolio tim dhe duke kërkuar mundësinë e parë profesionale ku
              mund të kontribuoj me aftësitë e mia.
            </p>
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

      <section id="experience" aria-label="Përvoja e punës">
        <p className="section-label">Përvojë</p>
        <h2 className="section-title">Çfarë kam ndërtuar</h2>
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
              <p className="exp-desc">
                Ndërtova "web" faqen kompanisë Rent a Car Visi — duke përfshirë
                dizajnin, zhvillimin front-end dhe publikimin online.
              </p>
              <p className="exp-desc">
                Një web faqe e thjesht për atraktimin e sa më shumë klientëve.
              </p>
              <div className="exp-tech">
                <span className="tag">React</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" aria-label="Projektet e GitHub">
        <p className="section-label">Projektet</p>
        <h2 className="section-title">Projektet Në GitHub</h2>
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
            <p className="project-desc">
              Projekt i fakulltetit, ku zhvillova një Web App/CRUD App të
              Hostingut( diqka si Netlify/Hostinger).
            </p>
            <p className="project-desc">
              Isha "lead"-er i grupit, ku edhe isha si "Full-Stack Developer".
            </p>
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
            <p className="project-desc">
              Projekt i fakulltetit, ku duhej t'i kodojmë disa "Use Cases".
            </p>
            <p className="project-desc">
              Projekti përfshinë menaxhimin e autentikimit, dërgimin e
              "E-Mail"-eve, etj.
            </p>
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
            <p className="project-desc">
              Projektit i fakulltetit, një "Website" ku studentët mund t'i
              paraqesin gjë sendet që i kanë humbur/gjetur në kampus.
            </p>
            <div className="project-tech">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">PHP</span>
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
            <p className="project-desc">
              Një web faqe e thjesht për atraktimin e sa më shumë klientëve. Për
              kompaninë Rent A Car Visi.
            </p>
            <div className="project-tech">
              <span className="tag">React.js</span>
            </div>
          </a>
        </div>
      </section>

      <section id="education" aria-label="Arsimimi dhe certifikatat">
        <p className="section-label">Arsimimi & Certifikatat</p>
        <h2 className="section-title">Edukimi Im</h2>
        <div className="divider"></div>

        <div className="edu-grid">
          <div className="edu-card">
            <h3>Shkenca Kompjuterike dhe Inxhinieri</h3>
            <div className="edu-sub">UBT</div>
            <div className="edu-meta">
              Prishtinë, Kosovë · 2024 - 2026 (në vazhdim)
            </div>
            <p>
              Viti i tretë i studimeve Bachelor. Fushat kryesore të interesit:
              Machine Learning, Algoritmat, Zhvillimi i Softuerit.
            </p>
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
              Certifikatat:
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

                <div className="cert-issuer">FreeCodeCamp · 6 Shkurt 2023</div>
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

                <div className="cert-issuer">FreeCodeCamp · 16 Prill 2023</div>
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

                <div className="cert-issuer">FreeCodeCamp · 17 Janar 2023</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Kontakti">
        <div class="contact-inner">
          <p class="section-label">Kontakti</p>
          <h2 class="section-title">Le të flasim</h2>
          <div class="divider" style={{ margin: "0 auto 2rem" }}></div>
          <p>
            Jam i hapur për mundësi pune, bashkëpunime, apo thjesht një bisedë
            rreth teknologjisë. Mos ngurroni të më shkruani.
          </p>
          <div class="contact-links">
            <a href="mailto:sheend102@gmail.com" class="btn-primary">
              Më shkruani ↗
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
