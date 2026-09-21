/* =========================================================
   MADNI CREATIONS
   KALAM & TAZMEEN COLLECTION
   ========================================================= */

:root {
  --emerald: #0b4f3a;
  --emerald-dark: #062d22;
  --emerald-light: #12684d;

  --gold: #d4af5a;
  --gold-light: #f0d58a;
  --gold-dark: #a77d28;

  --cream: #f8f3e7;
  --cream-dark: #eee4cf;

  --white: #ffffff;
  --black: #101714;

  --text: #26332e;
  --text-light: #6d7772;

  --card: rgba(255, 255, 255, 0.88);
  --border: rgba(212, 175, 90, 0.25);

  --shadow: 0 20px 60px rgba(4, 38, 28, 0.12);

  --radius: 22px;

  --font-heading: "Cormorant Garamond", serif;
  --font-body: "Poppins", sans-serif;

  --transition: 0.35s ease;
}


/* =========================================================
   RESET
   ========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.7;
}

body.modal-open {
  overflow: hidden;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}


/* =========================================================
   CONTAINER
   ========================================================= */

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}


/* =========================================================
   PRELOADER
   ========================================================= */

.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle at center,
      rgba(212, 175, 90, 0.08),
      transparent 35%
    ),
    var(--emerald-dark);

  transition:
    opacity 0.7s ease,
    visibility 0.7s ease;
}

.preloader.hide {
  opacity: 0;
  visibility: hidden;
}

.loader-logo {
  text-align: center;
  color: var(--white);
  animation: loaderFloat 2s ease-in-out infinite;
}

.logo-symbol {
  width: 75px;
  height: 75px;

  margin: 0 auto 18px;

  border: 1px solid rgba(240, 213, 138, 0.5);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gold-light);
  font-size: 35px;

  box-shadow:
    0 0 40px rgba(212, 175, 90, 0.15),
    inset 0 0 20px rgba(212, 175, 90, 0.05);
}

.loader-logo h2 {
  font-family: var(--font-heading);
  font-size: 30px;
  letter-spacing: 1px;
}

.loader-logo p {
  color: var(--gold-light);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.loader-line {
  width: 90px;
  height: 2px;

  margin: 18px auto 0;

  background: linear-gradient(
    90deg,
    transparent,
    var(--gold),
    transparent
  );

  animation: loaderLine 1.4s ease-in-out infinite;
}


/* =========================================================
   BACKGROUND
   ========================================================= */

.bg-pattern {
  position: fixed;
  inset: 0;

  z-index: -5;

  opacity: 0.045;

  background-image:
    linear-gradient(
      30deg,
      var(--emerald) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--emerald) 87.5%,
      var(--emerald)
    ),
    linear-gradient(
      150deg,
      var(--emerald) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--emerald) 87.5%,
      var(--emerald)
    );

  background-size: 55px 95px;
}

.particles {
  position: fixed;
  inset: 0;

  z-index: -3;

  pointer-events: none;
  overflow: hidden;
}

.particles span {
  position: absolute;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: var(--gold);

  opacity: 0.3;

  animation: particleFloat 10s linear infinite;
}

.particles span:nth-child(1) {
  left: 8%;
  top: 70%;
  animation-delay: 0s;
}

.particles span:nth-child(2) {
  left: 18%;
  top: 35%;
  animation-delay: 2s;
}

.particles span:nth-child(3) {
  left: 35%;
  top: 80%;
  animation-delay: 4s;
}

.particles span:nth-child(4) {
  left: 50%;
  top: 25%;
  animation-delay: 1s;
}

.particles span:nth-child(5) {
  left: 66%;
  top: 65%;
  animation-delay: 5s;
}

.particles span:nth-child(6) {
  left: 78%;
  top: 30%;
  animation-delay: 3s;
}

.particles span:nth-child(7) {
  left: 90%;
  top: 75%;
  animation-delay: 6s;
}

.particles span:nth-child(8) {
  left: 45%;
  top: 55%;
  animation-delay: 7s;
}


/* =========================================================
   HEADER
   ========================================================= */

.site-header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  z-index: 1000;

  padding: 16px 0;

  transition:
    background var(--transition),
    padding var(--transition),
    box-shadow var(--transition);
}

.site-header.scrolled {
  padding: 10px 0;

  background: rgba(6, 45, 34, 0.94);

  backdrop-filter: blur(18px);

  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.15);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =========================================================
   BRAND
   ========================================================= */

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  position: relative;

  width: 48px;
  height: 48px;

  border: 1px solid rgba(212, 175, 90, 0.55);
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gold-light);

  background: rgba(255, 255, 255, 0.04);

  overflow: hidden;

  box-shadow:
    inset 0 0 20px rgba(212, 175, 90, 0.06),
    0 0 25px rgba(212, 175, 90, 0.08);

  transition: var(--transition);
}

.brand:hover .brand-logo {
  transform: rotate(-5deg) scale(1.04);
  border-color: var(--gold);
}

.logo-crescent {
  position: absolute;

  font-size: 24px;

  transform: translateY(-2px);
}

.logo-star {
  position: absolute;

  top: 5px;
  right: 7px;

  font-size: 10px;
}

.brand-logo span {
  position: relative;

  margin-top: 25px;

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
}

.brand-text {
  display: flex;
  flex-direction: column;

  line-height: 1;
}

.brand-text strong {
  color: var(--white);

  font-family: var(--font-heading);

  font-size: 23px;
  font-weight: 700;
}

.brand-text small {
  margin-top: 5px;

  color: var(--gold-light);

  font-size: 8px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 2.5px;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  position: relative;

  padding: 9px 15px;

  color: rgba(255, 255, 255, 0.76);

  font-size: 13px;
  font-weight: 500;

  transition: var(--transition);
}

.nav-link i {
  margin-right: 5px;

  color: var(--gold-light);

  font-size: 11px;
}

.nav-link::after {
  content: "";

  position: absolute;

  left: 15px;
  right: 15px;
  bottom: 1px;

  height: 2px;

  background: var(--gold);

  transform: scaleX(0);

  transform-origin: center;

  transition: transform var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--white);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}


/* =========================================================
   NAV ACTIONS
   ========================================================= */

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn,
.menu-btn {
  width: 40px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.05);

  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: var(--transition);
}

.icon-btn:hover,
.menu-btn:hover {
  border-color: var(--gold);
  color: var(--gold-light);

  transform: translateY(-2px);
}

.menu-btn {
  display: none;
}


/* =========================================================
   MOBILE NAV
   ========================================================= */

.mobile-nav {
  display: none;

  position: absolute;

  top: 100%;
  left: 20px;
  right: 20px;

  padding: 10px;

  border: 1px solid rgba(212, 175, 90, 0.2);
  border-radius: 16px;

  background: rgba(6, 45, 34, 0.98);

  backdrop-filter: blur(20px);

  box-shadow: var(--shadow);
}

.mobile-nav.open {
  display: block;
  animation: menuReveal 0.3s ease forwards;
}

.mobile-nav a {
  display: block;

  padding: 12px 15px;

  color: rgba(255, 255, 255, 0.85);

  border-radius: 10px;

  font-size: 13px;

  transition: var(--transition);
}

.mobile-nav a:hover {
  color: var(--gold-light);
  background: rgba(212, 175, 90, 0.08);
}

.mobile-nav i {
  width: 20px;
  color: var(--gold);
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 30%,
      rgba(212, 175, 90, 0.1),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      var(--emerald-dark),
      var(--emerald)
    );

  color: var(--white);
}

.hero::before {
  content: "";

  position: absolute;

  width: 600px;
  height: 600px;

  left: 50%;
  top: 42%;

  transform: translate(-50%, -50%);

  border: 1px solid rgba(212, 175, 90, 0.08);
  border-radius: 50%;

  box-shadow:
    0 0 0 60px rgba(212, 175, 90, 0.02),
    0 0 0 120px rgba(212, 175, 90, 0.015);

  pointer-events: none;
}

.hero-glow {
  position: absolute;

  width: 400px;
  height: 400px;

  left: 50%;
  top: 45%;

  transform: translate(-50%, -50%);

  background: rgba(212, 175, 90, 0.07);

  filter: blur(100px);

  border-radius: 50%;
}

.hero-content {
  position: relative;

  z-index: 2;

  text-align: center;

  padding-top: 70px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 8px 15px;

  border: 1px solid rgba(212, 175, 90, 0.3);
  border-radius: 50px;

  background: rgba(212, 175, 90, 0.06);

  color: var(--gold-light);

  font-size: 10px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 2px;
}

.badge-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: var(--gold);

  box-shadow: 0 0 10px var(--gold);

  animation: pulse 2s infinite;
}

.hero h1 {
  max-width: 850px;

  margin: 25px auto 15px;

  font-family: var(--font-heading);

  font-size: clamp(55px, 8vw, 100px);

  line-height: 0.9;

  font-weight: 600;

  letter-spacing: -2px;
}

.hero h1 span {
  display: block;

  color: var(--gold-light);

  font-style: italic;

  text-shadow: 0 0 35px rgba(212, 175, 90, 0.15);
}

.hero-description {
  max-width: 600px;

  margin: 25px auto;

  color: rgba(255, 255, 255, 0.67);

  font-size: 14px;
  font-weight: 300;
}

.hero-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-top: 28px;
}


/* =========================================================
   BUTTONS
   ========================================================= */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 48px;

  padding: 0 21px;

  border-radius: 50px;

  font-size: 12px;
  font-weight: 600;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.btn i {
  font-size: 12px;
}

.btn-primary {
  border: 1px solid var(--gold);

  background: linear-gradient(
    135deg,
    var(--gold),
    var(--gold-light)
  );

  color: var(--emerald-dark);

  box-shadow:
    0 10px 25px rgba(212, 175, 90, 0.15);
}

.btn-primary:hover {
  transform: translateY(-3px);

  box-shadow:
    0 15px 35px rgba(212, 175, 90, 0.25);
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.22);

  background: rgba(255, 255, 255, 0.04);

  color: var(--white);
}

.btn-outline:hover {
  border-color: var(--gold);

  color: var(--gold-light);

  transform: translateY(-3px);
}


/* =========================================================
   HERO STATS
   ========================================================= */

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 55px;

  color: rgba(255, 255, 255, 0.7);
}

.stat {
  min-width: 110px;

  display: flex;
  flex-direction: column;
}

.stat strong {
  color: var(--gold-light);

  font-family: var(--font-heading);

  font-size: 28px;
  line-height: 1;
}

.stat span {
  margin-top: 4px;

  font-size: 9px;

  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.stat-divider {
  width: 1px;
  height: 32px;

  background: rgba(255, 255, 255, 0.15);
}


/* =========================================================
   SCROLL INDICATOR
   ========================================================= */

.scroll-indicator {
  position: absolute;

  left: 50%;
  bottom: 22px;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: rgba(255, 255, 255, 0.4);

  font-size: 9px;

  text-transform: uppercase;
  letter-spacing: 2px;

  animation: scrollBounce 2s infinite;
}

.scroll-indicator i {
  margin-top: 7px;
  color: var(--gold);
}


/* =========================================================
   COLLECTION
   ========================================================= */

.collection-section {
  position: relative;

  padding: 110px 0;

  background:
    linear-gradient(
      180deg,
      var(--cream),
      #f4ecda
    );
}

.section-heading {
  text-align: center;
}

.section-kicker {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: var(--gold-dark);

  font-size: 10px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 2.5px;
}

.section-kicker span {
  width: 30px;
  height: 1px;

  background: var(--gold);
}

.section-heading h2 {
  margin-top: 8px;

  color: var(--emerald-dark);

  font-family: var(--font-heading);

  font-size: clamp(42px, 6vw, 65px);

  line-height: 1;
}

.section-heading h2 em {
  color: var(--gold-dark);
}

.section-heading p {
  max-width: 500px;

  margin: 12px auto 0;

  color: var(--text-light);

  font-size: 13px;
}


/* =========================================================
   COLLECTION TOOLS
   ========================================================= */

.collection-tools {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  margin: 45px 0 30px;
}

.search-box {
  position: relative;

  flex: 1;

  max-width: 600px;
}

.search-box > i {
  position: absolute;

  left: 18px;
  top: 50%;

  transform: translateY(-50%);

  color: var(--gold-dark);

  font-size: 13px;
}

.search-box input {
  width: 100%;
  height: 50px;

  padding: 0 45px;

  border: 1px solid rgba(11, 79, 58, 0.12);
  border-radius: 50px;

  outline: none;

  background: rgba(255, 255, 255, 0.75);

  color: var(--text);

  font-size: 12px;

  transition: var(--transition);
}

.search-box input:focus {
  border-color: rgba(212, 175, 90, 0.65);

  box-shadow:
    0 0 0 4px rgba(212, 175, 90, 0.08);
}

.clear-search {
  position: absolute;

  right: 10px;
  top: 50%;

  transform: translateY(-50%);

  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;

  background: transparent;

  color: var(--text-light);

  opacity: 0;

  pointer-events: none;

  transition: var(--transition);
}

.clear-search.show {
  opacity: 1;
  pointer-events: auto;
}

.clear-search:hover {
  background: var(--cream-dark);
  color: var(--emerald);
}

.filter-wrapper {
  height: 50px;

  min-width: 200px;

  position: relative;

  display: flex;
  align-items: center;
}

.filter-wrapper > i {
  position: absolute;

  left: 17px;

  color: var(--gold-dark);

  font-size: 12px;

  z-index: 2;
}

.filter-wrapper select {
  width: 100%;
  height: 100%;

  padding: 0 15px 0 40px;

  border: 1px solid rgba(11, 79, 58, 0.12);
  border-radius: 50px;

  outline: none;

  background: rgba(255, 255, 255, 0.75);

  color: var(--text);

  font-size: 11px;

  cursor: pointer;
}


/* =========================================================
   KALAM GRID
   ========================================================= */

.kalam-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 20px;
}

.kalam-card {
  position: relative;

  padding: 28px;

  min-height: 260px;

  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: var(--card);

  backdrop-filter: blur(12px);

  overflow: hidden;

  box-shadow: 0 10px 35px rgba(4, 38, 28, 0.05);

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}

.kalam-card::before {
  content: "";

  position: absolute;

  width: 150px;
  height: 150px;

  top: -70px;
  right: -70px;

  border-radius: 50%;

  background: rgba(212, 175, 90, 0.07);

  transition: transform 0.5s ease;
}

.kalam-card:hover {
  transform: translateY(-8px);

  border-color: rgba(212, 175, 90, 0.5);

  box-shadow:
    0 25px 55px rgba(4, 38, 28, 0.1),
    0 0 35px rgba(212, 175, 90, 0.08);
}

.kalam-card:hover::before {
  transform: scale(2);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
}

.card-category {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 5px 10px;

  border-radius: 50px;

  background: rgba(11, 79, 58, 0.07);

  color: var(--emerald);

  font-size: 8px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1.3px;
}

.card-category i {
  color: var(--gold-dark);
}

.card-number {
  color: rgba(11, 79, 58, 0.22);

  font-family: var(--font-heading);

  font-size: 25px;
  font-weight: 700;
}

.kalam-card h3 {
  position: relative;

  color: var(--emerald-dark);

  font-family: var(--font-heading);

  font-size: 28px;
  line-height: 1.05;
}

.card-subtitle {
  margin-top: 8px;

  color: var(--text-light);

  font-size: 10px;
}

.card-preview {
  margin-top: 18px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  overflow: hidden;

  color: #65716c;

  font-family: var(--font-heading);

  font-size: 16px;
  line-height: 1.45;

  font-style: italic;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;

  padding-top: 16px;

  border-top: 1px solid rgba(11, 79, 58, 0.08);
}

.read-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  border: none;

  background: transparent;

  color: var(--emerald);

  font-size: 10px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1px;

  transition: var(--transition);
}

.read-btn i {
  color: var(--gold-dark);

  transition: transform var(--transition);
}

.read-btn:hover {
  color: var(--gold-dark);
}

.read-btn:hover i {
  transform: translateX(4px);
}

.card-language {
  color: #9a9e9b;

  font-size: 8px;

  text-transform: uppercase;
  letter-spacing: 1px;
}


/* =========================================================
   EMPTY STATE
   ========================================================= */

.empty-state {
  display: none;

  text-align: center;

  padding: 70px 20px;
}

.empty-state.show {
  display: block;
  animation: fadeUp 0.5s ease;
}

.empty-icon {
  width: 70px;
  height: 70px;

  margin: 0 auto 15px;

  border: 1px solid var(--border);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gold-dark);

  background: rgba(255, 255, 255, 0.5);

  font-size: 20px;
}

.empty-state h3 {
  color: var(--emerald-dark);

  font-family: var(--font-heading);

  font-size: 30px;
}

.empty-state p {
  margin: 5px 0 20px;

  color: var(--text-light);

  font-size: 12px;
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-section {
  position: relative;

  padding: 110px 0;

  background:
    linear-gradient(
      145deg,
      var(--emerald-dark),
      #0c6045
    );

  color: var(--white);

  overflow: hidden;
}

.about-section::before {
  content: "";

  position: absolute;

  width: 500px;
  height: 500px;

  left: -250px;
  bottom: -250px;

  border-radius: 50%;

  border: 1px solid rgba(212, 175, 90, 0.1);

  box-shadow:
    0 0 0 60px rgba(212, 175, 90, 0.02),
    0 0 0 120px rgba(212, 175, 90, 0.015);
}

.about-container {
  position: relative;

  display: grid;

  grid-template-columns: 0.8fr 1.2fr;

  align-items: center;

  gap: 70px;
}

.about-decoration {
  height: 360px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
}

.about-decoration::before {
  content: "";

  width: 280px;
  height: 280px;

  border: 1px solid rgba(212, 175, 90, 0.3);

  transform: rotate(45deg);

  position: absolute;
}

.about-decoration::after {
  content: "";

  width: 210px;
  height: 210px;

  border: 1px solid rgba(212, 175, 90, 0.2);

  transform: rotate(45deg);

  position: absolute;
}

.about-star {
  position: absolute;

  top: 55px;
  right: 90px;

  color: var(--gold-light);

  font-size: 24px;

  animation: starGlow 2s infinite alternate;
}

.about-crescent {
  position: relative;

  z-index: 2;

  color: var(--gold-light);

  font-size: 105px;

  filter: drop-shadow(
    0 10px 25px rgba(212, 175, 90, 0.15)
  );
}

.about-content .section-kicker {
  justify-content: flex-start;

  color: var(--gold-light);
}

.about-content h2 {
  margin-top: 10px;

  font-family: var(--font-heading);

  font-size: clamp(43px, 5vw, 65px);

  line-height: 0.95;
}

.about-content h2 em {
  color: var(--gold-light);
}

.about-content p {
  max-width: 620px;

  margin-top: 20px;

  color: rgba(255, 255, 255, 0.67);

  font-size: 13px;
}

.about-signature {
  display: flex;
  flex-direction: column;

  margin-top: 28px;

  padding-left: 15px;

  border-left: 2px solid var(--gold);
}

.about-signature span {
  color: rgba(255, 255, 255, 0.4);

  font-size: 9px;

  text-transform: uppercase;
  letter-spacing: 2px;
}

.about-signature strong {
  margin-top: 2px;

  color: var(--gold-light);

  font-family: var(--font-heading);

  font-size: 23px;
}


/* =========================================================
   READER MODAL
   ========================================================= */

.reader-modal {
  position: fixed;

  inset: 0;

  z-index: 5000;

  display: none;

  padding: 30px 20px;

  align-items: center;
  justify-content: center;
}

.reader-modal.open {
  display: flex;
}

.modal-overlay {
  position: absolute;

  inset: 0;

  background: rgba(3, 25, 19, 0.82);

  backdrop-filter: blur(10px);

  animation: fadeIn 0.3s ease;
}

.reader-container {
  position: relative;

  z-index: 2;

  width: min(900px, 100%);

  max-height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(212, 175, 90, 0.25);
  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      #fbf6ea,
      #f0e7d3
    );

  box-shadow:
    0 35px 100px rgba(0, 0, 0, 0.35);

  overflow: hidden;

  animation: modalReveal 0.4s ease;
}

.modal-close {
  position: absolute;

  top: 17px;
  right: 17px;

  z-index: 5;

  width: 38px;
  height: 38px;

  border: 1px solid rgba(11, 79, 58, 0.12);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.55);

  color: var(--emerald);

  transition: var(--transition);
}

.modal-close:hover {
  background: var(--emerald);
  color: var(--white);

  transform: rotate(90deg);
}

.reader-header {
  padding: 40px 55px 20px;

  text-align: center;

  border-bottom: 1px solid rgba(11, 79, 58, 0.08);
}

.reader-category {
  color: var(--gold-dark);

  font-size: 9px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 2px;
}

.reader-header h2 {
  margin-top: 5px;

  color: var(--emerald-dark);

  font-family: var(--font-heading);

  font-size: clamp(34px, 5vw, 55px);

  line-height: 1;
}

.reader-header p {
  margin-top: 5px;

  color: var(--text-light);

  font-size: 10px;
}

.reader-tools {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  padding: 10px;

  border-bottom: 1px solid rgba(11, 79, 58, 0.07);

  background: rgba(255, 255, 255, 0.25);
}

.reader-tools button {
  width: 34px;
  height: 34px;

  border: 1px solid rgba(11, 79, 58, 0.1);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.6);

  color: var(--emerald);

  transition: var(--transition);
}

.reader-tools button:hover {
  border-color: var(--gold);

  color: var(--gold-dark);

  transform: translateY(-2px);
}

.reader-tools span {
  width: 30px;

  text-align: center;

  color: var(--gold-dark);

  font-size: 12px;
}

.tool-divider {
  width: 1px;
  height: 22px;

  margin: 0 5px;

  background: rgba(11, 79, 58, 0.1);
}

.reader-content {
  flex: 1;

  overflow-y: auto;

  padding: 30px 55px 40px;

  color: #38433e;

  font-family: var(--font-heading);

  font-size: 21px;

  line-height: 1.65;

  text-align: center;

  scroll-behavior: smooth;
}

.reader-stanza {
  margin-bottom: 28px;

  animation: stanzaReveal 0.5s ease both;
}

.reader-line {
  display: block;
}

.reader-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 22px;

  border-top: 1px solid rgba(11, 79, 58, 0.08);

  background: rgba(255, 255, 255, 0.25);

  color: var(--text-light);

  font-size: 9px;

  text-transform: uppercase;
  letter-spacing: 1px;
}

.reader-footer i {
  color: var(--gold-dark);
}

.reader-footer button {
  border: none;

  background: transparent;

  color: var(--emerald);

  font-size: 9px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1px;
}


/* =========================================================
   TOAST
   ========================================================= */

.toast {
  position: fixed;

  right: 25px;
  bottom: 25px;

  z-index: 8000;

  min-width: 270px;

  padding: 13px 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  border: 1px solid rgba(212, 175, 90, 0.25);
  border-radius: 15px;

  background: rgba(6, 45, 34, 0.96);

  color: var(--white);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;

  transition: var(--transition);
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.toast-icon {
  width: 30px;
  height: 30px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(212, 175, 90, 0.12);

  color: var(--gold-light);

  font-size: 11px;
}

.toast-content {
  display: flex;
  flex-direction: column;
}

.toast-content strong {
  font-size: 11px;
}

.toast-content span {
  color: rgba(255, 255, 255, 0.55);

  font-size: 9px;
}


/* =========================================================
   FOOTER
   ========================================================= */

.site-footer {
  padding: 45px 0 25px;

  background: #041f18;

  color: var(--white);
}

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 13px;
}

.footer-logo {
  width: 45px;
  height: 45px;

  border: 1px solid rgba(212, 175, 90, 0.4);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gold-light);

  font-size: 22px;
}

.footer-brand strong {
  font-family: var(--font-heading);

  font-size: 22px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.4);

  font-size: 9px;
}

.footer-links {
  display: flex;
  gap: 20px;

  margin-top: 30px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.5);

  font-size: 10px;

  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--gold-light);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.07);

  color: rgba(255, 255, 255, 0.35);

  font-size: 8px;

  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-made i {
  color: #d4af5a;
  margin: 0 3px;
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

.reveal {
  opacity: 0;
  transform: translateY(25px);

  animation: fadeUp 0.9s ease forwards;
}

.hero .reveal:nth-child(1) {
  animation-delay: 0.2s;
}

.hero .reveal:nth-child(2) {
  animation-delay: 0.35s;
}

.hero .reveal:nth-child(3) {
  animation-delay: 0.5s;
}

.hero .reveal:nth-child(4) {
  animation-delay: 0.65s;
}

.hero .reveal:nth-child(5) {
  animation-delay: 0.8s;
}


/* =========================================================
   DARK MODE
   ========================================================= */

body.dark-mode {
  --cream: #07130f;
  --cream-dark: #0d1d17;

  --text: #d9e1dc;
  --text-light: #96a29c;

  --card: rgba(12, 34, 26, 0.9);

  background: #07130f;
  color: var(--text);
}

body.dark-mode .collection-section {
  background:
    linear-gradient(
      180deg,
      #07130f,
      #0a1914
    );
}

body.dark-mode .section-heading h2,
body.dark-mode .kalam-card h3,
body.dark-mode .empty-state h3 {
  color: var(--gold-light);
}

body.dark-mode .search-box input,
body.dark-mode .filter-wrapper select {
  background: rgba(255, 255, 255, 0.05);

  color: var(--white);

  border-color: rgba(212, 175, 90, 0.15);
}

body.dark-mode .kalam-card {
  background: rgba(10, 32, 24, 0.8);
}

body.dark-mode .reader-container {
  background: #0d1d17;
}

body.dark-mode .reader-header h2,
body.dark-mode .reader-content {
  color: var(--gold-light);
}

body.dark-mode .reader-content {
  color: #d1d9d4;
}

body.dark-mode .reader-tools,
body.dark-mode .reader-footer {
  background: rgba(255, 255, 255, 0.03);
}

body.dark-mode .reader-tools button,
body.dark-mode .modal-close {
  background: rgba(255, 255, 255, 0.05);

  color: var(--gold-light);
}

body.dark-mode .reader-footer {
  color: rgba(255, 255, 255, 0.45);
}


/* =========================================================
   KEYFRAMES
   ========================================================= */

@keyframes loaderFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

@keyframes loaderLine {
  0% {
    transform: scaleX(0.3);
    opacity: 0.4;
  }

  50% {
    transform: scaleX(1);
    opacity: 1;
  }

  100% {
    transform: scaleX(0.3);
    opacity: 0.4;
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  20% {
    opacity: 0.3;
  }

  80% {
    opacity: 0.2;
  }

  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, 7px);
  }
}

@keyframes menuReveal {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modalReveal {
  from {
    opacity: 0;
    transform: scale(0.94) translateY(15px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes stanzaReveal {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes starGlow {
  from {
    opacity: 0.5;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1.1);
  }
}


/* =========================================================
   RESPONSIVE — TABLET
   ========================================================= */

@media (max-width: 900px) {

  .desktop-nav {
    display: none;
  }

  .menu-btn {
    display: flex;
  }

  .kalam-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .about-container {
    grid-template-columns: 1fr;

    text-align: center;

    gap: 30px;
  }

  .about-decoration {
    height: 280px;
  }

  .about-content .section-kicker {
    justify-content: center;
  }

  .about-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .about-signature {
    width: max-content;
    margin-left: auto;
    margin-right: auto;

    text-align: left;
  }

}


/* =========================================================
   RESPONSIVE — MOBILE
   ========================================================= */

@media (max-width: 650px) {

  .container {
    width: min(100% - 28px, 1180px);
  }

  .site-header {
    padding: 11px 0;
  }

  .brand-logo {
    width: 42px;
    height: 42px;
  }

  .brand-text strong {
    font-size: 20px;
  }

  .brand-text small {
    font-size: 7px;
  }

  .icon-btn,
  .menu-btn {
    width: 37px;
    height: 37px;
  }

  .hero {
    min-height: 100svh;
  }

  .hero-content {
    padding-top: 75px;
  }

  .hero h1 {
    font-size: clamp(48px, 15vw, 75px);

    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 12px;

    max-width: 350px;
  }

  .hero-buttons {
    flex-direction: column;

    width: 100%;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .hero-stats {
    margin-top: 40px;
  }

  .stat {
    min-width: 85px;
  }

  .stat strong {
    font-size: 24px;
  }

  .stat span {
    font-size: 7px;
  }

  .collection-section,
  .about-section {
    padding: 80px 0;
  }

  .collection-tools {
    flex-direction: column;
    align-items: stretch;

    margin-top: 35px;
  }

  .search-box {
    max-width: none;
  }

  .filter-wrapper {
    width: 100%;
  }

  .kalam-grid {
    grid-template-columns: 1fr;

    gap: 15px;
  }

  .kalam-card {
    padding: 23px;

    min-height: auto;
  }

  .kalam-card h3 {
    font-size: 26px;
  }

  .about-decoration {
    height: 220px;
  }

  .about-decoration::before {
    width: 180px;
    height: 180px;
  }

  .about-decoration::after {
    width: 135px;
    height: 135px;
  }

  .about-crescent {
    font-size: 75px;
  }

  .about-star {
    top: 25px;
    right: 25%;
  }

  .reader-modal {
    padding: 10px;
  }

  .reader-container {
    max-height: calc(100vh - 20px);

    border-radius: 20px;
  }

  .reader-header {
    padding: 35px 30px 18px;
  }

  .reader-header h2 {
    font-size: 35px;
  }

  .reader-content {
    padding: 25px 22px 35px;

    font-size: 19px;
  }

  .reader-footer {
    padding: 12px 15px;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 8px;
  }

  .toast {
    left: 14px;
    right: 14px;
    bottom: 14px;

    min-width: auto;
  }

}


/* =========================================================
   VERY SMALL DEVICES
   ========================================================= */

@media (max-width: 380px) {

  .hero h1 {
    font-size: 45px;
  }

  .hero-stats {
    gap: 0;
  }

  .stat {
    min-width: 75px;
  }

  .stat strong {
    font-size: 21px;
  }

  .reader-content {
    font-size: 17px;
  }

}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

:focus-visible {
  outline: 2px solid var(--gold);

  outline-offset: 3px;
}

::selection {
  background: var(--gold);

  color: var(--emerald-dark);
}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

}
