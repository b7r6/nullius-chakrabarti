#!/usr/bin/env node

/**
 * NULLIUS CHAKRABARTI - Static Site Generator
 *
 * Three views:
 * - balanced: Fair side-by-side comparison (default) - red/white/blue patriotic
 * - conservative: Steelman conservative critique
 * - progressive: Steelman progressive defense
 *
 * Two languages: en, es
 *
 * Dropdown to switch views, language toggle
 */

import * as fs from "fs";
import * as path from "path";
import { content } from "./content.js";

const DIST = "./dist";

const VIEWS = ["balanced", "conservative", "progressive"];
const LANGS = ["en", "es"];

// Get text for a given lang/view combo
function t(obj, lang, view = null) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  if (view && obj[view]) {
    return obj[view][lang] || obj[view].en || "";
  }
  return obj[lang] || obj.en || "";
}

// Generate the header with view dropdown and language toggle
function generateHeader(currentView, currentLang, pageName) {
  const viewOptions = VIEWS.map((v) => {
    const selected = v === currentView ? "selected" : "";
    return `<option value="${v}" ${selected}>${content.views[currentLang][v]}</option>`;
  }).join("");

  const otherLang = currentLang === "en" ? "es" : "en";
  const langLabel = currentLang === "en" ? "ES" : "EN";
  const langUrl = `${pageName}-${currentView}-${otherLang}.html`;

  return `
    <header class="site-header">
      <div class="header-inner">
        <div class="header-flag">
          <span class="flag-stripe red"></span>
          <span class="flag-stripe white"></span>
          <span class="flag-stripe blue"></span>
        </div>
        <div class="header-controls">
          <div class="view-selector">
            <label for="view-select">${currentLang === "en" ? "View" : "Vista"}:</label>
            <select id="view-select" onchange="switchView(this.value)">
              ${viewOptions}
            </select>
          </div>
          <a href="${langUrl}" class="lang-toggle">${langLabel}</a>
        </div>
      </div>
    </header>`;
}

function generateNav(currentView, currentLang) {
  const nav = content.nav[currentLang];
  return `
    <nav class="nav ${currentView}">
      <div class="nav-inner">
        <a href="index-${currentView}-${currentLang}.html" class="nav-logo">NULLIUS</a>
        <div class="nav-links">
          <a href="index-${currentView}-${currentLang}.html" class="nav-link">${nav.home}</a>
          <a href="biography-${currentView}-${currentLang}.html" class="nav-link">${nav.biography}</a>
          <a href="analysis-${currentView}-${currentLang}.html" class="nav-link">${nav.analysis}</a>
          <a href="methodology-${currentView}-${currentLang}.html" class="nav-link">${nav.methodology}</a>
          <a href="sources-${currentView}-${currentLang}.html" class="nav-link">${nav.sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="nav-link nav-link-external" target="_blank">${nav.github}</a>
        </div>
      </div>
    </nav>`;
}

function generateFooter(currentView, currentLang) {
  return `
    <footer class="footer ${currentView}">
      <div class="footer-inner">
        <p class="footer-tagline">${t(content.footer.tagline, currentLang)}</p>
        <div class="footer-links">
          <a href="methodology-${currentView}-${currentLang}.html" class="footer-link">${content.nav[currentLang].methodology}</a>
          <a href="sources-${currentView}-${currentLang}.html" class="footer-link">${content.nav[currentLang].sources}</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="footer-link" target="_blank">GitHub</a>
        </div>
        <p class="footer-copy">${t(content.footer.copy, currentLang)}</p>
      </div>
    </footer>`;
}

function generateViewScript(currentLang, pageName) {
  return `
    <script>
      function switchView(view) {
        const lang = '${currentLang}';
        const page = '${pageName}';
        window.location.href = page + '-' + view + '-' + lang + '.html';
      }
    </script>`;
}

function generatePage(
  title,
  bodyContent,
  currentView,
  currentLang,
  pageName,
  pageClass = "",
) {
  return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Nullius</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="site ${currentView} ${pageClass}">
  ${generateHeader(currentView, currentLang, pageName)}
  ${generateNav(currentView, currentLang)}
  <main class="main">
    ${bodyContent}
  </main>
  ${generateFooter(currentView, currentLang)}
  ${generateViewScript(currentLang, pageName)}
</body>
</html>`;
}

// Page generators

function generateHomePage(view, lang) {
  const findings = content.findings.items
    .map(
      (f) => `
    <div class="finding-card">
      <div class="finding-stat">${f.stat}</div>
      <div class="finding-label">${t(f.label, lang)}</div>
      <div class="finding-context">${t(f.context, lang, view)}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="hero ${view}">
      <div class="hero-inner">
        <h1 class="hero-headline">${t(content.hero.headline, lang)}</h1>
        <p class="hero-subhead">${t(content.hero.subhead, lang, view)}</p>
        <p class="hero-tagline">${t(content.hero.tagline, lang)}</p>
        <a href="analysis-${view}-${lang}.html" class="btn btn-primary btn-large">${lang === "en" ? "See the Analysis" : "Ver el Análisis"}</a>
      </div>
    </section>
    
    <section class="section section-question">
      <div class="section-inner">
        <h2 class="section-headline">${t(content.question.headline, lang)}</h2>
        <div class="section-body">${t(content.question.body, lang, view)}</div>
      </div>
    </section>
    
    <section class="section section-findings ${view}">
      <div class="section-inner">
        <h2 class="section-headline">${t(content.findings.headline, lang)}</h2>
        <div class="findings-grid">
          ${findings}
        </div>
      </div>
    </section>
    
    <section class="section section-cta ${view}">
      <div class="section-inner">
        <p class="cta-text">${lang === "en" ? "Every claim is cited. Every calculation is shown. Verify independently." : "Cada afirmación está citada. Cada cálculo se muestra. Verifica independientemente."}</p>
        <a href="sources-${view}-${lang}.html" class="btn btn-secondary">${lang === "en" ? "View All Sources" : "Ver Todas las Fuentes"}</a>
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Home" : "Inicio",
    body,
    view,
    lang,
    "index",
    "page-home",
  );
}

function generateBiographyPage(view, lang) {
  const summaryRows = content.bio.summary.facts[lang]
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  const sections = content.bio.sections
    .map((s) => {
      // For balanced view, show both framings side by side
      let framingHtml = "";
      if (s.framing) {
        if (view === "balanced") {
          framingHtml = `
            <div class="framing-comparison">
              <div class="framing-side conservative">
                <div class="framing-label">${lang === "en" ? "Conservative View" : "Vista Conservadora"}</div>
                <p class="framing-text">${t(s.framing.conservative, lang)}</p>
              </div>
              <div class="framing-side progressive">
                <div class="framing-label">${lang === "en" ? "Progressive View" : "Vista Progresista"}</div>
                <p class="framing-text">${t(s.framing.progressive, lang)}</p>
              </div>
            </div>`;
        } else {
          framingHtml = `<p class="framing ${view}">${t(s.framing, lang, view)}</p>`;
        }
      }

      return `
    <div class="bio-section" id="${s.id}">
      <h2 class="bio-section-title">${t(s.title, lang)}</h2>
      <div class="bio-section-facts">${t(s.facts, lang)}</div>
      ${framingHtml}
      ${
        s.quote
          ? `
        <blockquote class="bio-quote">
          ${t(s.quote.text, lang)}
          <cite>— ${s.quote.cite}</cite>
        </blockquote>
      `
          : ""
      }
    </div>
  `;
    })
    .join("");

  const body = `
    <section class="section-hero-small ${view}">
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
    
    <section class="section section-biography">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage(
    lang === "en" ? "Biography" : "Biografía",
    body,
    view,
    lang,
    "biography",
    "page-biography",
  );
}

function generateAnalysisPage(view, lang) {
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

  // For balanced view, show both conclusions
  let conclusionHtml = "";
  if (view === "balanced") {
    conclusionHtml = `
      <div class="conclusion balanced">${t(content.analysis.conclusion, lang, "balanced")}</div>
      <div class="framing-comparison conclusion-comparison">
        <div class="framing-side conservative">
          <div class="framing-label">${lang === "en" ? "Conservative Interpretation" : "Interpretación Conservadora"}</div>
          <p class="framing-text">${t(content.analysis.conclusion.conservative, lang)}</p>
        </div>
        <div class="framing-side progressive">
          <div class="framing-label">${lang === "en" ? "Progressive Interpretation" : "Interpretación Progresista"}</div>
          <p class="framing-text">${t(content.analysis.conclusion.progressive, lang)}</p>
        </div>
      </div>`;
  } else {
    conclusionHtml = `<div class="conclusion ${view}">${t(content.analysis.conclusion, lang, view)}</div>`;
  }

  const body = `
    <section class="section-hero-small ${view}">
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
          ${conclusionHtml}
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
    
    <section class="section section-github-cta ${view}">
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
    view,
    lang,
    "analysis",
    "page-analysis",
  );
}

function generateMethodologyPage(view, lang) {
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
    <section class="section-hero-small ${view}">
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
    view,
    lang,
    "methodology",
    "page-methodology",
  );
}

function generateSourcesPage(view, lang) {
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
    <section class="section-hero-small ${view}">
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
    view,
    lang,
    "sources",
    "page-sources",
  );
}

// Build

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

  // Generate pages for each view/lang combo
  for (const view of VIEWS) {
    for (const lang of LANGS) {
      for (const page of pages) {
        const filename = `${page}-${view}-${lang}.html`;
        const html = generators[page](view, lang);
        fs.writeFileSync(path.join(DIST, filename), html);
      }
    }
  }

  // Default index redirects to balanced/en
  fs.writeFileSync(
    path.join(DIST, "index.html"),
    `<!DOCTYPE html>
<html><head><meta http-equiv="refresh" content="0; url=index-balanced-en.html"></head></html>`,
  );

  // Copy CSS
  if (fs.existsSync("./static/style.css")) {
    fs.copyFileSync("./static/style.css", path.join(DIST, "style.css"));
  }

  console.log(
    `Built to ./dist (${VIEWS.length} views × ${LANGS.length} langs × ${pages.length} pages = ${VIEWS.length * LANGS.length * pages.length} pages)`,
  );
}

build();
