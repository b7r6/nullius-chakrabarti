#!/usr/bin/env node

/**
 * NULLIUS CHAKRABARTI - Static Site Generator
 * Applying Nullius in Verba methodology to political candidate analysis
 */

import * as fs from "fs";
import * as path from "path";

const DIST = "./dist";

const content = {
  siteName: "NULLIUS",
  siteSubtitle: "Chakrabarti Analysis",

  nav: {
    home: "Home",
    biography: "Biography",
    analysis: "Analysis",
    methodology: "Methodology",
    sources: "Sources",
    github: "GitHub",
  },

  hero: {
    headline: "NULLIUS IN VERBA",
    subhead:
      "A formal analysis of Saikat Chakrabarti's 2026 congressional campaign.",
    tagline: "Take nobody's word for it.",
  },

  summary: {
    headline: "The Question",
    body: `A friend-of-a-friend endorses Saikat Chakrabarti for Congress. Should you trust the endorsement?

This site applies the <strong>Nullius in Verba</strong> methodology: formal game-theoretic analysis, Bayesian belief propagation, and full source transparency. Every claim is cited. Every calculation is auditable. You don't have to trust us—you can verify.

<strong>The finding:</strong> After updating on all observable signals, the optimal action is to <em>investigate further</em>—specifically, to determine why Justice Democrats and AOC have not endorsed their own co-founder and former chief of staff.`,
  },

  keyFindings: {
    headline: "Key Findings",
    items: [
      {
        stat: "18.4%",
        label: "P(High Quality)",
        context:
          "Posterior probability after Bayesian updating on JD/AOC silence",
      },
      {
        stat: "47.8%",
        label: "P(Medium Quality)",
        context: "Most likely outcome: partial compromise on stated positions",
      },
      {
        stat: "+23",
        label: "EV(Investigate)",
        context: "Expected value of investigation exceeds endorsing now (+11)",
      },
    ],
  },

  strawmanSteelmanReasonable: {
    headline: "The Candidate: Three Views",
    intro:
      "Every political assessment should present the weakest criticism (strawman), the strongest defense (steelman), and a fair synthesis (reasonable-man). Here are all three.",

    strawman: {
      title: "Strawman (Weak Criticism)",
      body: `"He's a grifter who used AOC to advance himself."
"The FEC complaints prove he's corrupt."
"He's just another tech bro buying a congressional seat."

These arguments cherry-pick without context. The FEC complaints were dismissed. Self-funding is legal and arguably more ethical than PAC money. The "grifter" charge ignores that he left a $167M fortune to do political organizing.`,
    },

    steelman: {
      title: "Steelman (Strongest Defense)",
      body: `A wealthy tech founder with genuine progressive commitments chose to leave Stripe at its peak to organize the progressive movement. He co-founded Justice Democrats, which elected AOC and The Squad. He designed the Green New Deal framework. His 2026 campaign is 83% self-funded specifically to avoid the conflict-of-interest criticisms that plagued his earlier organizational work. 

He has publicly acknowledged his wealth as "unfair" and argues for systemic change despite personally benefiting from the current system. He takes no PAC money. His policy positions (Medicare for All, Green New Deal, congressional stock trading ban) are consistent with his stated values.`,
    },

    reasonableMan: {
      title: "Reasonable-Man (Fair Synthesis)",
      body: `Chakrabarti is a genuine progressive with real organizational skills and real flaws. His seven months as AOC's chief of staff ended after public conflicts with Democratic leadership—conflicts he initiated with inflammatory rhetoric ("New Southern Democrats") that he never apologized for. The FEC structure he designed created legitimate transparency concerns even if no laws were broken.

The JD/AOC silence is the most important signal. These are organizations and people who would benefit from his election and have every reason to endorse if they believed he would succeed. Their silence suggests insider knowledge that quality is not high—or strategic avoidance of SF politics. The meta-question (which is it?) is worth more than the object-level question (is he good?).

<strong>Bottom line:</strong> Investigate the silence before deciding.`,
    },
  },

  biography: {
    sections: [
      {
        title: "Biographical Summary",
        content: `<table class="bio-table">
          <tr><td>Full Name</td><td>Saikat Chakrabarti</td></tr>
          <tr><td>Born</td><td>January 12, 1986 (age 40)</td></tr>
          <tr><td>Birthplace</td><td>Fort Worth, Texas</td></tr>
          <tr><td>Education</td><td>Harvard University, B.A. Computer Science (2007)</td></tr>
          <tr><td>Net Worth</td><td>$167 million minimum (2025 disclosure)</td></tr>
          <tr><td>Party</td><td>Democratic</td></tr>
          <tr><td>Seeking</td><td>CA-11 (San Francisco)</td></tr>
        </table>`,
      },
      {
        title: "Tech Career (2007-2015)",
        content: `<p>After Harvard, Chakrabarti worked briefly at Bridgewater Associates before relocating to San Francisco. He joined <strong>Stripe as its second engineer</strong> circa 2010.</p>

<p>From the <em>Storied: San Francisco</em> podcast (November 2025): "He started to see tech as a force for social good, but that didn't really jell well with the work he did for Stripe. And so he quit a couple years in."</p>

<p>His 2025 financial disclosure shows retained Stripe equity valued at minimum <strong>$50 million</strong>. A Business Insider analysis characterized him as potentially wealthier than Nancy Pelosi.</p>

<blockquote>"I worked hard at Stripe, but I did not work harder than teachers or nurses. The American economy shouldn't be organized as a winner-take-all battle for survival."<br><cite>— Chakrabarti, Business Insider, August 2025</cite></blockquote>`,
      },
      {
        title: "Justice Democrats (2017-2019)",
        content: `<p>Co-founded Justice Democrats on <strong>January 23, 2017</strong>—three days after Trump's inauguration—with Cenk Uygur, Kyle Kulinski, and Zack Exley.</p>

<p>2018 results: 79 candidates endorsed, 26 won primaries, <strong>7 won general elections</strong> including Alexandria Ocasio-Cortez, Ilhan Omar, Rashida Tlaib, and Ayanna Pressley.</p>

<p class="notable"><strong>Notable:</strong> Cenk Uygur resigned in December 2017 after sexist blog posts from the early 2000s surfaced. Kyle Kulinski departed the next day, disagreeing with the handling. Both have subsequently criticized Justice Democrats for "falling short in cultivating a unified cohort of legislators."</p>`,
      },
      {
        title: "Chief of Staff to AOC (2019)",
        content: `<p>Served from <strong>January 3 to August 2, 2019</strong>—approximately seven months.</p>

<h4>Green New Deal</h4>
<p>Led drafting process, working weekends with Sunrise Movement and New Consensus. Introduced February 7, 2019 as H.Res. 109.</p>

<p class="controversy"><strong>FAQ Controversy:</strong> An FAQ document posted to AOC's website referenced "economic security for all who are unable <em>or unwilling</em> to work" and eliminating air travel. Chakrabarti called it an "early draft accidentally released." Republicans cited it for weeks.</p>

<p>To The Washington Post (July 2019): "It wasn't originally a climate thing at all... we really think of it as a how-do-you-change-the-entire-economy thing."</p>

<h4>"New Southern Democrats" Controversy</h4>
<p>June 2019: After moderate Democrats voted for border aid funding, Chakrabarti tweeted that the New Democrat Coalition "should be called the 'New Southern Democrats'. They certainly seem hell bent to enable a racist system." He specifically named Rep. Sharice Davids, a Native American woman.</p>

<p>The House Democratic Caucus Twitter account (managed by Hakeem Jeffries' office) responded: "Who is this guy and why is he explicitly singling out a Native American woman of color?"</p>

<p class="notable"><strong>No apology:</strong> No public retraction of the statement has been documented.</p>

<h4>Departure</h4>
<p>August 2, 2019: Chakrabarti and Communications Director Corbin Trent both left. Official statement cited transition to New Consensus work. Press speculation connected it to leadership conflicts and/or FEC scrutiny. The New York Times suggested connection to AOC's subsequent "more moderate strategy."</p>`,
      },
      {
        title: "FEC Investigations",
        content: `<p>Between 2019-2022, Chakrabarti was named in multiple FEC Matters Under Review, filed by the Coolidge Reagan Foundation (conservative watchdog).</p>

<p><strong>Allegations:</strong> Brand New Congress LLC (Chakrabarti as sole member) made excessive in-kind contributions to candidate committees; payments were mischaracterized as "strategic consulting."</p>

<p><strong>Outcome (February 2022):</strong> The FEC Commission <strong>deadlocked 3-3</strong> on enforcement. All cases were dismissed. No finding of violation was made. No penalties assessed.</p>

<p class="notable"><strong>Assessment:</strong> The complaints were filed by partisan actors with interest in damaging progressives. The 3-3 deadlock reflected Commission politics, not factual determination. However, the PAC/LLC structure Chakrabarti designed did create legitimate transparency concerns that campaign finance experts acknowledged.</p>`,
      },
      {
        title: "New Consensus (2019-Present)",
        content: `<p>Think tank founded to develop Green New Deal policy. Chakrabarti serves as co-founder.</p>

<p><strong>990 Filings (decline trajectory):</strong></p>
<ul>
  <li>2019: Revenue $1,244,000</li>
  <li>2020: Revenue $509,000</li>
  <li>2021: Revenue $297,000</li>
  <li>2023: Revenue $142,000 (net assets: $142,000)</li>
</ul>

<p>88% revenue decline from peak to 2023.</p>`,
      },
      {
        title: "2026 Campaign",
        content: `<p><strong>Announced:</strong> February 5, 2025, challenging then-incumbent Nancy Pelosi.</p>

<p><strong>November 6, 2025:</strong> Pelosi announced retirement, leaving seat open for first time in 40 years.</p>

<h4>Campaign Finance (Q4 2025)</h4>
<table class="finance-table">
  <tr><td>Total Receipts</td><td>$1,769,248</td></tr>
  <tr><td>Individual Contributions</td><td>$298,248</td></tr>
  <tr><td>Candidate Loans</td><td>$1,470,000 (83%)</td></tr>
  <tr><td>PAC Contributions</td><td>$0</td></tr>
</table>

<h4>Opponents</h4>
<table class="opponents-table">
  <tr><th>Candidate</th><th>Background</th><th>Funds</th></tr>
  <tr><td>Scott Wiener</td><td>CA State Senator</td><td>$2,800,000</td></tr>
  <tr><td>Saikat Chakrabarti</td><td>Political operative</td><td>$1,769,248</td></tr>
  <tr><td>Connie Chan</td><td>SF Supervisor</td><td>$174,000</td></tr>
</table>

<h4>Endorsements Received</h4>
<ul>
  <li>Track AIPAC (progressive org)</li>
  <li>Progressive Victory</li>
  <li>Blue America</li>
  <li>Stanford Democrats</li>
  <li>Jamaal Bowman (former U.S. Representative)</li>
</ul>

<h4 class="notable">Endorsements NOT Received</h4>
<ul class="missing-endorsements">
  <li><strong>Justice Democrats</strong> — Organization he co-founded; endorsed other CA candidates but not him</li>
  <li><strong>Alexandria Ocasio-Cortez</strong> — Former employer</li>
  <li><strong>Bernie Sanders</strong> — Former employer (2016 campaign)</li>
  <li>San Francisco Democratic Party</li>
  <li>Major labor unions (SEIU, UAW backing Wiener)</li>
  <li>Sunrise Movement</li>
  <li>Any sitting Squad member</li>
</ul>`,
      },
    ],
  },

  analysis: {
    headline: "Formal Analysis",
    intro:
      "This analysis uses three composed game-theoretic models: a signaling game, Bayesian belief propagation, and mechanism design (revealed preferences). The full Lean4 formalization is available on GitHub.",

    sections: [
      {
        title: "1. The Endorsement Chain",
        content: `<pre class="chain-diagram">
You <-- Friend <-- FriendOfFriend --> Chakrabarti
                        |
                   [ENDORSES]

JD (co-founded) --------> [SILENCE]
AOC (former boss) ------> [SILENCE]
Bernie (former employer) -> [SILENCE]
</pre>

<p>The question: Given these observed signals, what should a rational Bayesian agent believe about candidate quality?</p>`,
      },
      {
        title: "2. Signaling Game",
        content: `<p>Endorsement is a costly signal. If a candidate turns out to be low quality, endorsers suffer reputation damage. The cost/benefit structure:</p>

<table class="signal-table">
  <tr><th>Signal</th><th>If High Quality</th><th>If Low Quality</th></tr>
  <tr><td>Endorse</td><td>Benefit: +20</td><td>Cost: -30</td></tr>
  <tr><td>Silence</td><td>Cost: -1</td><td>Cost: -1</td></tr>
  <tr><td>Oppose</td><td>Cost: -15</td><td>Benefit: +10</td></tr>
</table>

<p><strong>Key insight:</strong> For high-visibility actors like JD and AOC, silence is informative. If quality were high, endorsement would be cheap and beneficial. Their silence implies they believe quality is <em>not</em> high with sufficient probability to make silence optimal.</p>`,
      },
      {
        title: "3. Bayesian Belief Propagation",
        content: `<p>We start with a uniform prior over {High, Medium, Low} quality and update on each observed signal.</p>

<table class="bayes-table">
  <tr><th>Stage</th><th>P(High)</th><th>P(Medium)</th><th>P(Low)</th></tr>
  <tr><td>Prior</td><td>0.333</td><td>0.333</td><td>0.333</td></tr>
  <tr><td>After JD silence</td><td>0.071</td><td>0.429</td><td>0.500</td></tr>
  <tr><td>After JD+AOC silence</td><td>0.012</td><td>0.419</td><td>0.570</td></tr>
  <tr><td>After FoF endorse</td><td>0.029</td><td>0.629</td><td>0.342</td></tr>
  <tr class="final"><td>After trust attenuation</td><td><strong>0.184</strong></td><td><strong>0.478</strong></td><td><strong>0.338</strong></td></tr>
</table>

<p><strong>Trust chain attenuation:</strong> Each link in the endorsement chain (you → friend → friend-of-friend) loses ~30% information content. Two links means the FoF endorsement is substantially attenuated toward uniform.</p>`,
      },
      {
        title: "4. Decision Analysis",
        content: `<p>Given the posterior probabilities, what action maximizes expected value?</p>

<table class="decision-table">
  <tr><th>Action</th><th>Expected Value</th></tr>
  <tr><td>Endorse now</td><td>+11.06</td></tr>
  <tr><td>Stay silent</td><td>0</td></tr>
  <tr class="optimal"><td><strong>Investigate further</strong></td><td><strong>+22.96</strong></td></tr>
</table>

<p><strong>Optimal action: INVESTIGATE</strong></p>

<p>The value of information exceeds the cost of investigation. Specifically, the most valuable question to answer is:</p>

<blockquote class="key-question">"Is the JD/AOC silence informative (they know something negative) or strategic (they're avoiding SF politics)?"</blockquote>

<p>If strategic: EV(endorse) jumps from +11 to +38, changing the optimal decision.</p>`,
      },
      {
        title: "5. What to Investigate",
        content: `<ol>
  <li><strong>Direct query:</strong> Ask Justice Democrats why they endorsed Mai Vang and Angela Gonzales-Torres for CA races but not their own co-founder</li>
  <li><strong>AOC network:</strong> Find anyone who would know AOC's actual view of her former chief of staff</li>
  <li><strong>Pattern matching:</strong> Has JD/AOC stayed silent on other races for strategic (non-quality) reasons?</li>
  <li><strong>Insider sources:</strong> Other JD-affiliated candidates or staff who might have information</li>
</ol>`,
      },
    ],
  },

  methodology: {
    headline: "Methodology: Nullius in Verba",
    intro:
      "This site applies the Nullius in Verba framework: a methodology for empirical claims that eliminates the need to trust the analyst.",

    sections: [
      {
        title: "The Principle",
        content: `<p><em>Nullius in Verba</em> — "Take nobody's word for it" — has been the motto of the Royal Society since 1660. This site attempts to actually implement it:</p>

<ol>
  <li><strong>Every factual claim is cited</strong> with primary sources (FEC filings, 990s, dated news articles)</li>
  <li><strong>Every calculation is shown</strong> and can be reproduced</li>
  <li><strong>The Lean4 formalization</strong> means the logic literally type-checks</li>
  <li><strong>All source material is linked</strong> so you can verify independently</li>
</ol>`,
      },
      {
        title: "Strawman / Steelman / Reasonable-Man",
        content: `<p>All major claims are presented in this structure:</p>

<ol>
  <li><strong>Strawman:</strong> The weakest version of the counterargument. What opponents actually say when being lazy or bad-faith. Included for honesty.</li>
  <li><strong>Steelman:</strong> The strongest version of the counterargument. What a thoughtful, well-informed opponent would say. Earns trust.</li>
  <li><strong>Reasonable-man:</strong> Where a fair-minded person lands after weighing both. One defensible synthesis. Respects autonomy.</li>
</ol>

<p>The site stops being "here's the truth" and becomes "here's how to think about this."</p>`,
      },
      {
        title: "Conflict of Interest Disclosure",
        content: `<p>This analysis was conducted for personal due diligence: evaluating whether to trust an endorsement chain. The author has no financial or political relationship with any candidate in the CA-11 race.</p>

<p>The methodology was developed as part of a broader project to create verifiable empirical analysis. If this framework is useful, it can be applied to any candidate in any race.</p>`,
      },
      {
        title: "The Covenant",
        content: `<p>This work is governed by the <a href="https://gist.github.com/b7r6/bed1551cc2bb6551eb279b68c5db8de4" target="_blank">Covenant of Mutual Accountability</a>: a formal agreement between the human analyst and AI collaborator to maintain methodological integrity.</p>

<p>Key commitments:</p>
<ul>
  <li>Vindication is an output, not an input</li>
  <li>Methodology serves discovery, not conclusions</li>
  <li>Disagreements are documented, not hidden</li>
  <li>Errors are preserved in the audit trail</li>
</ul>`,
      },
    ],
  },

  sources: {
    headline: "Sources",
    intro:
      "Every factual claim in this analysis is cited. Primary sources are preferred. Verify independently.",

    categories: [
      {
        title: "FEC Filings",
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
          {
            text: "MUR 7592, 7626, 7580, 7575 (dismissed)",
            url: "https://www.fec.gov/legal-resources/enforcement/",
          },
        ],
      },
      {
        title: "IRS 990 Filings",
        items: [
          {
            text: "New Consensus 990s (2019-2023)",
            url: "https://projects.propublica.org/nonprofits/",
          },
        ],
      },
      {
        title: "News Sources",
        items: [
          {
            text: "Business Insider: Chakrabarti wealth analysis (August 2025)",
            url: "#",
          },
          { text: "Storied: San Francisco podcast (November 2025)", url: "#" },
          {
            text: "The Washington Post: Green New Deal interview (July 2019)",
            url: "#",
          },
          { text: 'The New York Times: "Four votes" (July 2019)', url: "#" },
          {
            text: "The Intercept: Departure announcement (August 2019)",
            url: "#",
          },
        ],
      },
      {
        title: "Formal Model",
        items: [
          {
            text: "ChakrabartiGame.lean (Lean4 formalization)",
            url: "https://github.com/b7r6/chakrabarti-game/blob/main/ChakrabartiGame.lean",
          },
          {
            text: "Compute.lean (numerical computations)",
            url: "https://github.com/b7r6/chakrabarti-game/blob/main/Compute.lean",
          },
        ],
      },
      {
        title: "Methodology",
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
    ],
  },
};

// HTML Generation

function generateNav() {
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">NULLIUS</a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="biography.html" class="nav-link">Biography</a>
          <a href="analysis.html" class="nav-link">Analysis</a>
          <a href="methodology.html" class="nav-link">Methodology</a>
          <a href="sources.html" class="nav-link">Sources</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="nav-link nav-link-external" target="_blank">GitHub</a>
        </div>
      </div>
    </nav>`;
}

function generateFooter() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-tagline">${content.hero.tagline}</p>
        <div class="footer-links">
          <a href="methodology.html" class="footer-link">Methodology</a>
          <a href="sources.html" class="footer-link">Sources</a>
          <a href="https://github.com/b7r6/chakrabarti-game" class="footer-link" target="_blank">GitHub</a>
        </div>
        <p class="footer-copy">NULLIUS CHAKRABARTI // 2026 // Verify, don't trust.</p>
      </div>
    </footer>`;
}

function generatePage(title, bodyContent, pageClass = "") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Nullius Chakrabarti</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="site ${pageClass}">
  ${generateNav()}
  <main class="main">
    ${bodyContent}
  </main>
  ${generateFooter()}
</body>
</html>`;
}

// Page Generators

function generateHomePage() {
  const findings = content.keyFindings.items
    .map(
      (f) => `
    <div class="finding-card">
      <div class="finding-stat">${f.stat}</div>
      <div class="finding-label">${f.label}</div>
      <div class="finding-context">${f.context}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-headline">${content.hero.headline}</h1>
        <p class="hero-subhead">${content.hero.subhead}</p>
        <a href="analysis.html" class="btn btn-primary btn-large">See the Analysis</a>
      </div>
    </section>
    
    <section class="section section-summary">
      <div class="section-inner">
        <h2 class="section-headline">${content.summary.headline}</h2>
        <div class="section-body">${content.summary.body}</div>
      </div>
    </section>
    
    <section class="section section-findings">
      <div class="section-inner">
        <h2 class="section-headline">${content.keyFindings.headline}</h2>
        <div class="findings-grid">
          ${findings}
        </div>
      </div>
    </section>
    
    <section class="section section-ssrm">
      <div class="section-inner">
        <h2 class="section-headline">${content.strawmanSteelmanReasonable.headline}</h2>
        <p class="section-intro">${content.strawmanSteelmanReasonable.intro}</p>
        
        <div class="ssrm-treatment strawman">
          <h3 class="treatment-title">${content.strawmanSteelmanReasonable.strawman.title}</h3>
          <div class="treatment-body">${content.strawmanSteelmanReasonable.strawman.body}</div>
        </div>
        
        <div class="ssrm-treatment steelman">
          <h3 class="treatment-title">${content.strawmanSteelmanReasonable.steelman.title}</h3>
          <div class="treatment-body">${content.strawmanSteelmanReasonable.steelman.body}</div>
        </div>
        
        <div class="ssrm-treatment reasonable-man">
          <h3 class="treatment-title">${content.strawmanSteelmanReasonable.reasonableMan.title}</h3>
          <div class="treatment-body">${content.strawmanSteelmanReasonable.reasonableMan.body}</div>
        </div>
      </div>
    </section>
    
    <section class="section section-cta">
      <div class="section-inner">
        <p class="cta-text">Every claim is cited. Every calculation is shown. Verify independently.</p>
        <a href="sources.html" class="btn btn-secondary">View All Sources</a>
      </div>
    </section>
  `;

  return generatePage("Home", body, "page-home");
}

function generateBiographyPage() {
  const sections = content.biography.sections
    .map(
      (s) => `
    <div class="bio-section">
      <h2 class="bio-section-title">${s.title}</h2>
      <div class="bio-section-content">${s.content}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">Biography</h1>
        <p class="page-intro">Factual summary of Saikat Chakrabarti's public career. Every claim is sourced.</p>
      </div>
    </section>
    
    <section class="section section-biography">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage("Biography", body, "page-biography");
}

function generateAnalysisPage() {
  const sections = content.analysis.sections
    .map(
      (s) => `
    <div class="analysis-section">
      <h2 class="analysis-section-title">${s.title}</h2>
      <div class="analysis-section-content">${s.content}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${content.analysis.headline}</h1>
        <p class="page-intro">${content.analysis.intro}</p>
      </div>
    </section>
    
    <section class="section section-analysis">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
    
    <section class="section section-github-cta">
      <div class="section-inner">
        <h3>Full Lean4 Formalization</h3>
        <p>The complete game-theoretic model is formalized in Lean4. The proofs type-check.</p>
        <a href="https://github.com/b7r6/chakrabarti-game" class="btn btn-primary" target="_blank">View on GitHub</a>
      </div>
    </section>
  `;

  return generatePage("Analysis", body, "page-analysis");
}

function generateMethodologyPage() {
  const sections = content.methodology.sections
    .map(
      (s) => `
    <div class="methodology-section">
      <h2 class="methodology-section-title">${s.title}</h2>
      <div class="methodology-section-body">${s.content}</div>
    </div>
  `,
    )
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${content.methodology.headline}</h1>
        <p class="page-intro">${content.methodology.intro}</p>
      </div>
    </section>
    
    <section class="section section-methodology">
      <div class="section-inner">
        ${sections}
      </div>
    </section>
  `;

  return generatePage("Methodology", body, "page-methodology");
}

function generateSourcesPage() {
  const categories = content.sources.categories
    .map((cat) => {
      const items = cat.items
        .map(
          (item) =>
            `<li><a href="${item.url}" target="_blank">${item.text}</a></li>`,
        )
        .join("");

      return `
      <div class="sources-category">
        <h2 class="sources-category-title">${cat.title}</h2>
        <ul class="sources-list">${items}</ul>
      </div>
    `;
    })
    .join("");

  const body = `
    <section class="section-hero-small">
      <div class="section-inner">
        <h1 class="page-headline">${content.sources.headline}</h1>
        <p class="page-intro">${content.sources.intro}</p>
      </div>
    </section>
    
    <section class="section section-sources">
      <div class="section-inner">
        ${categories}
      </div>
    </section>
  `;

  return generatePage("Sources", body, "page-sources");
}

// Build

function build() {
  // Clean and create dist
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  // Generate pages
  fs.writeFileSync(path.join(DIST, "index.html"), generateHomePage());
  fs.writeFileSync(path.join(DIST, "biography.html"), generateBiographyPage());
  fs.writeFileSync(path.join(DIST, "analysis.html"), generateAnalysisPage());
  fs.writeFileSync(
    path.join(DIST, "methodology.html"),
    generateMethodologyPage(),
  );
  fs.writeFileSync(path.join(DIST, "sources.html"), generateSourcesPage());

  // Copy static files
  if (fs.existsSync("./static/style.css")) {
    fs.copyFileSync("./static/style.css", path.join(DIST, "style.css"));
  }

  console.log("Built to ./dist");
}

build();
