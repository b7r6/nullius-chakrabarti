#!/usr/bin/env node

/**
 * NULLIUS CHAKRABARTI - Static Site Generator
 *
 * Generates four views:
 * - red/en: Republican framing, English
 * - red/es: Republican framing, Spanish
 * - blue/en: Democratic framing, English
 * - blue/es: Democratic framing, Spanish
 *
 * Tab key cycles through all four.
 */

import * as fs from "fs";
import * as path from "path";
import { content } from "./content.js";

const DIST = "./dist";

const VIEWS = [
  {
    party: "red",
    lang: "en",
    label: "RED / EN",
    labelFull: "Republican • English",
  },
  {
    party: "red",
    lang: "es",
    label: "RED / ES",
    labelFull: "Republicano • Español",
  },
  {
    party: "blue",
    lang: "en",
    label: "BLUE / EN",
    labelFull: "Democrat • English",
  },
  {
    party: "blue",
    lang: "es",
    label: "BLUE / ES",
    labelFull: "Demócrata • Español",
  },
];

// Get text for a given lang/party combo
function t(obj, lang, party = null) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  if (party && obj[party]) {
    return obj[party][lang] || obj[party].en || "";
  }
  return obj[lang] || obj.en || "";
}

// Generate the tab switcher UI
function generateTabSwitcher(currentView) {
  const tabs = VIEWS.map((v, i) => {
    const isCurrent =
      v.party === currentView.party && v.lang === currentView.lang;
    const href = `index-${v.party}-${v.lang}.html`;
    return `<a href="${href}" class="tab ${v.party} ${isCurrent ? "active" : ""}" data-index="${i}">${v.label}</a>`;
  }).join("");

  return `
    <div class="tab-switcher">
      <div class="tabs">${tabs}</div>
      <div class="tab-hint">${currentView.lang === "en" ? "Press TAB to cycle views" : "Presiona TAB para cambiar vistas"}</div>
    </div>`;
}

function generateNav(view) {
  const nav = content.nav[view.lang];
  return `
    <nav class="nav ${view.party}">
      <div class="nav-inner">
        <a href="index-${view.party}-${view.lang}.html" class="nav-logo">NULLIUS</a>
        <div class="nav-links">
          <a href="index-${view.party}-${view.lang}.html" class="nav-link">${nav.home}</a>
          <a href="biography-${view.party}-${view.lang}.html" class="nav-link">${nav.biography}</a>
          <a href="analysis-${view.party}-${view.lang}.html" class="nav-link">${nav.analysis}</a>
          <a href="methodology-${view.party}-${view.lang}.html" class="nav-link">${nav.methodology}</a>
          <a href="sources-${view.party}-${view.lang}.html" class="nav-link">${nav.sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="nav-link nav-link-external" target="_blank">${nav.github}</a>
        </div>
      </div>
    </nav>`;
}

function generateFooter(view) {
  return `
    <footer class="footer ${view.party}">
      <div class="footer-inner">
        <p class="footer-tagline">${t(content.footer.tagline, view.lang)}</p>
        <div class="footer-links">
          <a href="methodology-${view.party}-${view.lang}.html" class="footer-link">${content.nav[view.lang].methodology}</a>
          <a href="sources-${view.party}-${view.lang}.html" class="footer-link">${content.nav[view.lang].sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="footer-link" target="_blank">GitHub</a>
        </div>
        <p class="footer-copy">${t(content.footer.copy, view.lang)}</p>
      </div>
    </footer>`;
}

function generateTabScript() {
  const viewUrls = JSON.stringify(
    VIEWS.map((v) => `index-${v.party}-${v.lang}.html`),
  );
  return `
    <script>
      const views = ${viewUrls};
      let currentIndex = views.findIndex(v => window.location.pathname.endsWith(v)) || 0;
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.target.matches('input, textarea')) {
          e.preventDefault();
          currentIndex = (currentIndex + (e.shiftKey ? -1 : 1) + views.length) % views.length;
          window.location.href = views[currentIndex];
        }
      });
    </script>`;
}

function generatePage(title, bodyContent, view, pageClass = "") {
  return `<!DOCTYPE html>
<html lang="${view.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Nullius Chakrabarti</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="site ${view.party} ${pageClass}">
  ${generateTabSwitcher(view)}
  ${generateNav(view)}
  <main class="main">
    ${bodyContent}
  </main>
  ${generateFooter(view)}
  ${generateTabScript()}
</body>
</html>`;
}

// Page generators

function generateHomePage(view) {
  const findings = content.findings.items
    .map(
      (f) => `
    <div class="finding-card">
      <div class="finding-stat">${f.stat}</div>
      <div class="finding-label">${t(f.label, view.lang)}</div>
      <div class="finding-context">${t(f.context, view.lang, view.party)}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="hero ${view.party}">
      <div class="hero-inner">
        <h1 class="hero-headline">${t(content.hero.headline, view.lang)}</h1>
        <p class="hero-subhead">${t(content.hero.subhead, view.lang, view.party)}</p>
        <p class="hero-tagline">${t(content.hero.tagline, view.lang)}</p>
        <a href="analysis-${view.party}-${view.lang}.html" class="btn btn-primary btn-large">${view.lang === "en" ? "See the Analysis" : "Ver el Análisis"}</a>
      </div>
    </section>
    
    <section class="section section-question">
      <div class="section-inner">
        <h2 class="section-headline">${t(content.question.headline, view.lang)}</h2>
        <div class="section-body">${t(content.question.body, view.lang, view.party)}</div>
      </div>
    </section>
    
    <section class="section section-findings ${view.party}">
      <div class="section-inner">
        <h2 class="section-headline">${t(content.findings.headline, view.lang)}</h2>
        <div class="findings-grid">
          ${findings}
        </div>
      </div>
    </section>
    
    <section class="section section-cta ${view.party}">
      <div class="section-inner">
        <p class="cta-text">${view.lang === "en" ? "Every claim is cited. Every calculation is shown. Verify independently." : "Cada afirmación está citada. Cada cálculo se muestra. Verifica independientemente."}</p>
        <a href="sources-${view.party}-${view.lang}.html" class="btn btn-secondary">${view.lang === "en" ? "View All Sources" : "Ver Todas las Fuentes"}</a>
      </div>
    </section>
  `;

  return generatePage(
    view.lang === "en" ? "Home" : "Inicio",
    body,
    view,
    "page-home",
  );
}

function generateBiographyPage(view) {
  const summaryRows = content.bio.summary.facts[view.lang]
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  const sections = content.bio.sections
    .map(
      (s) => `
    <div class="bio-section" id="${s.id}">
      <h2 class="bio-section-title">${t(s.title, view.lang)}</h2>
      <div class="bio-section-facts">${t(s.facts, view.lang)}</div>
      ${s.framing ? t(s.framing, view.lang, view.party) : ""}
      ${
        s.quote
          ? `
        <blockquote class="bio-quote">
          ${t(s.quote.text, view.lang)}
          <cite>— ${s.quote.cite}</cite>
        </blockquote>
      `
          : ""
      }
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small ${view.party}">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.bio.summary.headline, view.lang)}</h1>
      </div>
    </section>
    
    <section class="section section-bio-summary">
      <div class="section-inner">
        <table class="bio-table">
          ${summaryRows}
        </table>
      </div>
    </section>
    
    <section class="section section-biography">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage(
    view.lang === "en" ? "Biography" : "Biografía",
    body,
    view,
    "page-biography",
  );
}

function generateAnalysisPage(view) {
  const bayesRows = content.analysis.bayesTable.rows[view.lang]
    .map((row, i) => {
      const cls =
        i === content.analysis.bayesTable.rows[view.lang].length - 1
          ? "final"
          : "";
      return `<tr class="${cls}"><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`;
    })
    .join("");

  const decisionRows = content.analysis.decision.rows[view.lang]
    .map((row, i) => {
      const cls = i === 2 ? "optimal" : "";
      return `<tr class="${cls}"><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    })
    .join("");

  const body = `
    <section class="section-hero-small ${view.party}">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.analysis.headline, view.lang)}</h1>
        <p class="page-intro">${t(content.analysis.intro, view.lang)}</p>
      </div>
    </section>
    
    <section class="section section-analysis">
      <div class="section-inner">
        <div class="analysis-section">
          <h2 class="analysis-section-title">${view.lang === "en" ? "1. The Endorsement Chain" : "1. La Cadena de Respaldo"}</h2>
          <pre class="chain-diagram">${t(content.analysis.chain, view.lang)}</pre>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${view.lang === "en" ? "2. Bayesian Belief Propagation" : "2. Propagación de Creencias Bayesianas"}</h2>
          <table class="bayes-table">
            <thead>
              <tr>${content.analysis.bayesTable.header[view.lang].map((h) => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>${bayesRows}</tbody>
          </table>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${view.lang === "en" ? "3. Decision Analysis" : "3. Análisis de Decisión"}</h2>
          <table class="decision-table">
            <thead>
              <tr>${content.analysis.decision.header[view.lang].map((h) => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>${decisionRows}</tbody>
          </table>
          <div class="conclusion ${view.party}">${t(content.analysis.conclusion, view.lang, view.party)}</div>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${view.lang === "en" ? "4. The Meta-Question" : "4. La Meta-Pregunta"}</h2>
          <blockquote class="key-question">${t(content.analysis.metaQuestion, view.lang)}</blockquote>
          <p>${
            view.lang === "en"
              ? "If strategic (not informative), EV(endorse) jumps from +11 to +38. The value of answering this question: ~13.5 utils."
              : "Si es estratégico (no informativo), VE(respaldar) salta de +11 a +38. El valor de responder esta pregunta: ~13.5 utils."
          }</p>
        </div>
      </div>
    </section>
    
    <section class="section section-github-cta ${view.party}">
      <div class="section-inner">
        <h3>${view.lang === "en" ? "Full Lean4 Formalization" : "Formalización Completa en Lean4"}</h3>
        <p>${view.lang === "en" ? "The proofs type-check." : "Las pruebas verifican tipos."}</p>
        <a href="https://github.com/b7r6/chakrabarti-game" class="btn btn-primary" target="_blank">GitHub</a>
      </div>
    </section>
  `;

  return generatePage(
    view.lang === "en" ? "Analysis" : "Análisis",
    body,
    view,
    "page-analysis",
  );
}

function generateMethodologyPage(view) {
  const sections = content.methodology.sections
    .map(
      (s) => `
    <div class="methodology-section">
      <h2 class="methodology-section-title">${t(s.title, view.lang)}</h2>
      <div class="methodology-section-body">${t(s.body, view.lang)}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small ${view.party}">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.methodology.headline, view.lang)}</h1>
        <p class="page-intro">${t(content.methodology.intro, view.lang)}</p>
      </div>
    </section>
    
    <section class="section section-methodology">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage(
    view.lang === "en" ? "Methodology" : "Metodología",
    body,
    view,
    "page-methodology",
  );
}

function generateSourcesPage(view) {
  const categories = [
    {
      title: { en: "FEC Filings", es: "Documentos de la FEC" },
      items: [
        {
          text: "Chakrabarti 2026 Campaign (C00897314)",
          url: "https://www.fec.gov/data/committee/C00897314/",
        },
        {
          text: "Justice Democrats PAC",
          url: "https://www.fec.gov/data/committee/C00630665/",
        },
        {
          text: "Brand New Congress PAC",
          url: "https://www.fec.gov/data/committee/C00608380/",
        },
      ],
    },
    {
      title: { en: "IRS 990 Filings", es: "Documentos 990 del IRS" },
      items: [
        {
          text: "New Consensus 990s (ProPublica)",
          url: "https://projects.propublica.org/nonprofits/",
        },
      ],
    },
    {
      title: { en: "News Sources", es: "Fuentes de Noticias" },
      items: [
        { text: "Business Insider: Chakrabarti wealth (Aug 2025)", url: "#" },
        { text: "Rolling Stone: Sanders campaign (Nov 2018)", url: "#" },
        { text: "Washington Post: GND interview (Jul 2019)", url: "#" },
        { text: "The Intercept: Departure (Aug 2019)", url: "#" },
      ],
    },
    {
      title: { en: "Formal Model", es: "Modelo Formal" },
      items: [
        {
          text: "ChakrabartiGame.lean",
          url: "https://github.com/b7r6/chakrabarti-game/blob/main/ChakrabartiGame.lean",
        },
        {
          text: "Compute.lean",
          url: "https://github.com/b7r6/chakrabarti-game/blob/main/Compute.lean",
        },
      ],
    },
    {
      title: { en: "Methodology", es: "Metodología" },
      items: [
        {
          text: "Covenant of Mutual Accountability",
          url: "https://gist.github.com/b7r6/bed1551cc2bb6551eb279b68c5db8de4",
        },
        {
          text: "Meta-Protocol for AI Collaboration",
          url: "https://gist.github.com/b7r6/193a89d393dd5508c22ca4e6595cdb5a",
        },
      ],
    },
  ];

  const categoriesHtml = categories
    .map(
      (cat) => `
    <div class="sources-category">
      <h2 class="sources-category-title">${t(cat.title, view.lang)}</h2>
      <ul class="sources-list">
        ${cat.items.map((item) => `<li><a href="${item.url}" target="_blank">${item.text}</a></li>`).join("")}
      </ul>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small ${view.party}">
      <div class="section-inner">
        <h1 class="page-headline">${view.lang === "en" ? "Sources" : "Fuentes"}</h1>
        <p class="page-intro">${
          view.lang === "en"
            ? "Every factual claim is cited. Primary sources preferred. Verify independently."
            : "Cada afirmación factual está citada. Fuentes primarias preferidas. Verifica independientemente."
        }</p>
      </div>
    </section>
    
    <section class="section section-sources">
      <div class="section-inner">
        ${categoriesHtml}
      </div>
    </section>
  `;

  return generatePage(
    view.lang === "en" ? "Sources" : "Fuentes",
    body,
    view,
    "page-sources",
  );
}

// Build

function build() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  // Generate pages for each view
  for (const view of VIEWS) {
    const suffix = `${view.party}-${view.lang}`;
    fs.writeFileSync(
      path.join(DIST, `index-${suffix}.html`),
      generateHomePage(view),
    );
    fs.writeFileSync(
      path.join(DIST, `biography-${suffix}.html`),
      generateBiographyPage(view),
    );
    fs.writeFileSync(
      path.join(DIST, `analysis-${suffix}.html`),
      generateAnalysisPage(view),
    );
    fs.writeFileSync(
      path.join(DIST, `methodology-${suffix}.html`),
      generateMethodologyPage(view),
    );
    fs.writeFileSync(
      path.join(DIST, `sources-${suffix}.html`),
      generateSourcesPage(view),
    );
  }

  // Default index redirects to red/en
  fs.writeFileSync(
    path.join(DIST, "index.html"),
    `<!DOCTYPE html>
<html><head><meta http-equiv="refresh" content="0; url=index-red-en.html"></head></html>`,
  );

  // Copy CSS
  if (fs.existsSync("./static/style.css")) {
    fs.copyFileSync("./static/style.css", path.join(DIST, "style.css"));
  }

  console.log("Built to ./dist (4 views × 5 pages = 20 pages)");
}

build();
