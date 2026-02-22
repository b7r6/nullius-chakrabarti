#!/usr/bin/env node

/**
 * NULLIUS CHAKRABARTI - Static Site Generator
 *
 * 2×3 Matrix Framework:
 * - Rows: Conservative, Progressive
 * - Columns: Strawman, Steelman, Reasonable Man
 *
 * Single view with all perspectives shown. Language toggle (EN/ES).
 */

import * as fs from "fs";
import * as path from "path";
import { content } from "./content.js";

const DIST = "./dist";
const LANGS = ["en", "es"];

function t(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}

function generateHeader(lang, pageName) {
  const otherLang = lang === "en" ? "es" : "en";
  const langLabel = lang === "en" ? "ES" : "EN";
  const langUrl = `${pageName}-${otherLang}.html`;

  return `
    <header class="site-header">
      <div class="header-inner">
        <div class="header-flag">
          <span class="flag-stripe red"></span>
          <span class="flag-stripe white"></span>
          <span class="flag-stripe blue"></span>
        </div>
        <div class="header-title">NULLIUS IN VERBA</div>
        <div class="header-controls">
          <a href="${langUrl}" class="lang-toggle">${langLabel}</a>
        </div>
      </div>
    </header>`;
}

function generateNav(lang) {
  const nav = content.nav[lang];
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index-${lang}.html" class="nav-logo">NULLIUS</a>
        <div class="nav-links">
          <a href="index-${lang}.html" class="nav-link">${nav.home}</a>
          <a href="biography-${lang}.html" class="nav-link">${nav.biography}</a>
          <a href="analysis-${lang}.html" class="nav-link">${nav.analysis}</a>
          <a href="methodology-${lang}.html" class="nav-link">${nav.methodology}</a>
          <a href="sources-${lang}.html" class="nav-link">${nav.sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="nav-link nav-link-external" target="_blank">${nav.github}</a>
        </div>
      </div>
    </nav>`;
}

function generateFooter(lang) {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-tagline">${t(content.footer.tagline, lang)}</p>
        <div class="footer-links">
          <a href="methodology-${lang}.html" class="footer-link">${content.nav[lang].methodology}</a>
          <a href="sources-${lang}.html" class="footer-link">${content.nav[lang].sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="footer-link" target="_blank">GitHub</a>
        </div>
        <p class="footer-copy">${t(content.footer.copy, lang)}</p>
      </div>
    </footer>`;
}

function generatePage(title, bodyContent, lang, pageName, pageClass = "") {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Nullius</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="site ${pageClass}">
  ${generateHeader(lang, pageName)}
  ${generateNav(lang)}
  <main class="main">
    ${bodyContent}
  </main>
  ${generateFooter(lang)}
</body>
</html>`;
}

function generateMatrix(claim, lang) {
  const cols = content.matrix.columns[lang];
  const rows = content.matrix.rows[lang];

  return `
    <div class="claim-card" id="${claim.id}">
      <div class="claim-fact">
        <div class="claim-fact-label">${lang === "en" ? "THE FACT" : "EL HECHO"}</div>
        <div class="claim-fact-text">${t(claim.fact, lang)}</div>
        <div class="claim-fact-source">${lang === "en" ? "Source" : "Fuente"}: ${claim.source}</div>
      </div>
      
      <div class="matrix">
        <div class="matrix-header">
          <div class="matrix-corner"></div>
          <div class="matrix-col-header strawman">${cols[0]}</div>
          <div class="matrix-col-header steelman">${cols[1]}</div>
          <div class="matrix-col-header reasonable">${cols[2]}</div>
        </div>
        
        <div class="matrix-row conservative">
          <div class="matrix-row-header">${rows[0]}</div>
          <div class="matrix-cell strawman">${t(claim.matrix.conservative.strawman, lang)}</div>
          <div class="matrix-cell steelman">${t(claim.matrix.conservative.steelman, lang)}</div>
          <div class="matrix-cell reasonable">${t(claim.matrix.conservative.reasonable, lang)}</div>
        </div>
        
        <div class="matrix-row progressive">
          <div class="matrix-row-header">${rows[1]}</div>
          <div class="matrix-cell strawman">${t(claim.matrix.progressive.strawman, lang)}</div>
          <div class="matrix-cell steelman">${t(claim.matrix.progressive.steelman, lang)}</div>
          <div class="matrix-cell reasonable">${t(claim.matrix.progressive.reasonable, lang)}</div>
        </div>
      </div>
      
      <div class="convergence">
        <div class="convergence-label">${lang === "en" ? "CONVERGENCE" : "CONVERGENCIA"}</div>
        <div class="convergence-text">${t(claim.matrix.convergence, lang)}</div>
      </div>
    </div>`;
}

function generateHomePage(lang) {
  const claimsHtml = content.claims
    .map((c) => generateMatrix(c, lang))
    .join("");

  const body = `
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-headline">${t(content.hero.headline, lang)}</h1>
        <p class="hero-subhead">${t(content.hero.subhead, lang)}</p>
        <p class="hero-tagline">${t(content.hero.tagline, lang)}</p>
        <a href="analysis-${lang}.html" class="btn btn-primary btn-large">${lang === "en" ? "See the Analysis" : "Ver el Análisis"}</a>
      </div>
    </section>
    
    <section class="section section-intro">
      <div class="section-inner">
        <h2 class="section-headline">${t(content.intro.headline, lang)}</h2>
        <div class="section-body">${t(content.intro.body, lang)}</div>
      </div>
    </section>
    
    <section class="section section-claims">
      <div class="section-inner">
        <h2 class="section-headline">${lang === "en" ? "The Evidence" : "La Evidencia"}</h2>
        <div class="claims-grid">
          ${claimsHtml}
        </div>
      </div>
    </section>
    
    <section class="section section-cta">
      <div class="section-inner">
        <p class="cta-text">${lang === "en" ? "Every claim is cited. Every calculation is shown. Verify independently." : "Cada afirmación está citada. Cada cálculo se muestra. Verifica independientemente."}</p>
        <a href="sources-${lang}.html" class="btn btn-secondary">${lang === "en" ? "View All Sources" : "Ver Todas las Fuentes"}</a>
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Home" : "Inicio",
    body,
    lang,
    "index",
    "page-home",
  );
}

function generateBiographyPage(lang) {
  const summaryRows = content.bio.summary.facts[lang]
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  // Show claims as matrices on biography page too
  const claimsHtml = content.claims
    .map((c) => generateMatrix(c, lang))
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.bio.summary.headline, lang)}</h1>
      </div>
    </section>
    
    <section class="section section-bio-summary">
      <div class="section-inner">
        <table class="bio-table">
          ${summaryRows}
        </table>
      </div>
    </section>
    
    <section class="section section-claims">
      <div class="section-inner">
        <h2 class="section-headline">${lang === "en" ? "Key Claims Examined" : "Afirmaciones Clave Examinadas"}</h2>
        <div class="claims-grid">
          ${claimsHtml}
        </div>
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Biography" : "Biografía",
    body,
    lang,
    "biography",
    "page-biography",
  );
}

function generateAnalysisPage(lang) {
  const bayesRows = content.analysis.bayesTable.rows[lang]
    .map((row, i) => {
      const cls =
        i === content.analysis.bayesTable.rows[lang].length - 1 ? "final" : "";
      return `<tr class="${cls}"><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`;
    })
    .join("");

  const decisionRows = content.analysis.decision.rows[lang]
    .map((row, i) => {
      const cls = i === 2 ? "optimal" : "";
      return `<tr class="${cls}"><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    })
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.analysis.headline, lang)}</h1>
        <p class="page-intro">${t(content.analysis.intro, lang)}</p>
      </div>
    </section>
    
    <section class="section section-analysis">
      <div class="section-inner">
        <div class="analysis-section">
          <h2 class="analysis-section-title">${lang === "en" ? "1. The Endorsement Chain" : "1. La Cadena de Respaldo"}</h2>
          <pre class="chain-diagram">${t(content.analysis.chain, lang)}</pre>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${lang === "en" ? "2. Bayesian Belief Propagation" : "2. Propagación de Creencias Bayesianas"}</h2>
          <table class="bayes-table">
            <thead>
              <tr>${content.analysis.bayesTable.header[lang].map((h) => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>${bayesRows}</tbody>
          </table>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${lang === "en" ? "3. Decision Analysis" : "3. Análisis de Decisión"}</h2>
          <table class="decision-table">
            <thead>
              <tr>${content.analysis.decision.header[lang].map((h) => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>${decisionRows}</tbody>
          </table>
          <div class="conclusion">${t(content.analysis.conclusion, lang)}</div>
        </div>
        
        <div class="analysis-section">
          <h2 class="analysis-section-title">${lang === "en" ? "4. The Meta-Question" : "4. La Meta-Pregunta"}</h2>
          <blockquote class="key-question">${t(content.analysis.metaQuestion, lang)}</blockquote>
          <p>${
            lang === "en"
              ? "If strategic (not informative), EV(endorse) jumps from +11 to +38. The value of answering this question: ~13.5 utils."
              : "Si es estratégico (no informativo), VE(respaldar) salta de +11 a +38. El valor de responder esta pregunta: ~13.5 utils."
          }</p>
        </div>
      </div>
    </section>
    
    <section class="section section-github-cta">
      <div class="section-inner">
        <h3>${lang === "en" ? "Full Lean4 Formalization" : "Formalización Completa en Lean4"}</h3>
        <p>${lang === "en" ? "The proofs type-check." : "Las pruebas verifican tipos."}</p>
        <a href="https://github.com/b7r6/chakrabarti-game" class="btn btn-primary" target="_blank">GitHub</a>
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Analysis" : "Análisis",
    body,
    lang,
    "analysis",
    "page-analysis",
  );
}

function generateMethodologyPage(lang) {
  const sections = content.methodology.sections
    .map(
      (s) => `
    <div class="methodology-section">
      <h2 class="methodology-section-title">${t(s.title, lang)}</h2>
      <div class="methodology-section-body">${t(s.body, lang)}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${t(content.methodology.headline, lang)}</h1>
        <p class="page-intro">${t(content.methodology.intro, lang)}</p>
      </div>
    </section>
    
    <section class="section section-methodology">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Methodology" : "Metodología",
    body,
    lang,
    "methodology",
    "page-methodology",
  );
}

function generateSourcesPage(lang) {
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
      <h2 class="sources-category-title">${t(cat.title, lang)}</h2>
      <ul class="sources-list">
        ${cat.items.map((item) => `<li><a href="${item.url}" target="_blank">${item.text}</a></li>`).join("")}
      </ul>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${lang === "en" ? "Sources" : "Fuentes"}</h1>
        <p class="page-intro">${
          lang === "en"
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
    lang === "en" ? "Sources" : "Fuentes",
    body,
    lang,
    "sources",
    "page-sources",
  );
}

function build() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  const pages = ["index", "biography", "analysis", "methodology", "sources"];
  const generators = {
    index: generateHomePage,
    biography: generateBiographyPage,
    analysis: generateAnalysisPage,
    methodology: generateMethodologyPage,
    sources: generateSourcesPage,
  };

  for (const lang of LANGS) {
    for (const page of pages) {
      const filename = `${page}-${lang}.html`;
      const html = generators[page](lang);
      fs.writeFileSync(path.join(DIST, filename), html);
    }
  }

  // Default index redirects to English
  fs.writeFileSync(
    path.join(DIST, "index.html"),
    `<!DOCTYPE html>
<html><head><meta http-equiv="refresh" content="0; url=index-en.html"></head></html>`,
  );

  if (fs.existsSync("./static/style.css")) {
    fs.copyFileSync("./static/style.css", path.join(DIST, "style.css"));
  }

  console.log(
    `Built to ./dist (${LANGS.length} langs × ${pages.length} pages = ${LANGS.length * pages.length} pages)`,
  );
}

build();
