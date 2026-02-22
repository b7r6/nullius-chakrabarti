/**
 * NULLIUS CHAKRABARTI - Content
 *
 * Four perspectives on the same facts:
 * - red/en: Republican framing, English
 * - red/es: Republican framing, Spanish
 * - blue/en: Democratic framing, English
 * - blue/es: Democratic framing, Spanish
 */

export const content = {
  siteName: "NULLIUS",

  // Navigation - same across all views
  nav: {
    en: {
      home: "Home",
      biography: "Biography",
      analysis: "Analysis",
      methodology: "Methodology",
      sources: "Sources",
      github: "GitHub",
    },
    es: {
      home: "Inicio",
      biography: "Biografía",
      analysis: "Análisis",
      methodology: "Metodología",
      sources: "Fuentes",
      github: "GitHub",
    },
  },

  // Hero section
  hero: {
    headline: {
      en: "NULLIUS IN VERBA",
      es: "NULLIUS IN VERBA",
    },
    tagline: {
      en: "Take nobody's word for it.",
      es: "No creas en la palabra de nadie.",
    },
    subhead: {
      red: {
        en: "A wealthy Silicon Valley operative who bankrolled AOC now wants Nancy Pelosi's seat.",
        es: "Un operador adinerado de Silicon Valley que financió a AOC ahora quiere el escaño de Nancy Pelosi.",
      },
      blue: {
        en: "The architect of the progressive movement's greatest upset seeks to continue the fight in Congress.",
        es: "El arquitecto del mayor triunfo del movimiento progresista busca continuar la lucha en el Congreso.",
      },
    },
  },

  // The Question - framed differently
  question: {
    headline: {
      en: "The Question",
      es: "La Pregunta",
    },
    body: {
      red: {
        en: `A friend-of-a-friend endorses Saikat Chakrabarti for Congress. Before you trust that endorsement, consider:

<strong>His own organizations won't endorse him.</strong> Justice Democrats—which he co-founded—endorsed other California candidates but not him. AOC—whose career he launched—has said nothing. Bernie Sanders—his former employer—silence.

Why would the people who know him best refuse to vouch for him?

This site presents the facts. Every claim is sourced. You decide what they mean.`,
        es: `Un amigo de un amigo respalda a Saikat Chakrabarti para el Congreso. Antes de confiar en ese respaldo, considera:

<strong>Sus propias organizaciones no lo respaldan.</strong> Justice Democrats—que él co-fundó—respaldó a otros candidatos de California pero no a él. AOC—cuya carrera él lanzó—no ha dicho nada. Bernie Sanders—su ex empleador—silencio.

¿Por qué las personas que mejor lo conocen se niegan a respaldarlo?

Este sitio presenta los hechos. Cada afirmación tiene fuente. Tú decides qué significan.`,
      },
      blue: {
        en: `A friend-of-a-friend endorses Saikat Chakrabarti for Congress. The endorsement chain matters—but so does understanding why institutional progressives are cautious.

<strong>He built the infrastructure that elected The Squad.</strong> Justice Democrats, Brand New Congress, the AOC campaign—all his work. Now he's self-funding to avoid the conflicts that plagued his organizational work.

The silence from JD and AOC deserves investigation, not assumption. This site presents the facts so you can evaluate the endorsement yourself.`,
        es: `Un amigo de un amigo respalda a Saikat Chakrabarti para el Congreso. La cadena de respaldo importa—pero también importa entender por qué los progresistas institucionales son cautelosos.

<strong>Él construyó la infraestructura que eligió a The Squad.</strong> Justice Democrats, Brand New Congress, la campaña de AOC—todo su trabajo. Ahora se autofinancia para evitar los conflictos que plagaron su trabajo organizacional.

El silencio de JD y AOC merece investigación, no suposición. Este sitio presenta los hechos para que puedas evaluar el respaldo tú mismo.`,
      },
    },
  },

  // Key findings - same data, different framing
  findings: {
    headline: {
      en: "Key Findings",
      es: "Hallazgos Clave",
    },
    items: [
      {
        stat: "18.4%",
        label: {
          en: "P(High Quality)",
          es: "P(Alta Calidad)",
        },
        context: {
          red: {
            en: "Probability he'll deliver on promises after updating on insider silence",
            es: "Probabilidad de que cumpla promesas después de actualizar por el silencio de los que lo conocen",
          },
          blue: {
            en: "Bayesian posterior—lower than we'd like, but not disqualifying",
            es: "Posterior bayesiano—más bajo de lo que quisiéramos, pero no descalificante",
          },
        },
      },
      {
        stat: "47.8%",
        label: {
          en: "P(Medium Quality)",
          es: "P(Calidad Media)",
        },
        context: {
          red: {
            en: "Most likely outcome: partial delivery, familiar progressive disappointment",
            es: "Resultado más probable: cumplimiento parcial, la decepción progresista de siempre",
          },
          blue: {
            en: "Most likely outcome: pragmatic compromise, which may be what the moment requires",
            es: "Resultado más probable: compromiso pragmático, que puede ser lo que el momento requiere",
          },
        },
      },
      {
        stat: "+23 vs +11",
        label: {
          en: "EV(Investigate) vs EV(Endorse)",
          es: "VE(Investigar) vs VE(Respaldar)",
        },
        context: {
          red: {
            en: "Don't trust—verify. The math says dig deeper before committing.",
            es: "No confíes—verifica. Las matemáticas dicen que investigues más antes de comprometerte.",
          },
          blue: {
            en: "Worth understanding the silence before deciding. Information has value.",
            es: "Vale la pena entender el silencio antes de decidir. La información tiene valor.",
          },
        },
      },
    ],
  },

  // Biographical facts - same facts, different emphasis
  bio: {
    summary: {
      headline: {
        en: "Biographical Summary",
        es: "Resumen Biográfico",
      },
      // Facts are facts - no framing needed
      facts: {
        en: [
          ["Full Name", "Saikat Chakrabarti"],
          ["Born", "January 12, 1986 (age 40)"],
          ["Birthplace", "Fort Worth, Texas"],
          ["Education", "Harvard University, B.A. Computer Science (2007)"],
          ["Net Worth", "$167 million minimum (2025 disclosure)"],
          ["Party", "Democratic"],
          ["Seeking", "CA-11 (San Francisco)"],
        ],
        es: [
          ["Nombre Completo", "Saikat Chakrabarti"],
          ["Nacimiento", "12 de enero de 1986 (40 años)"],
          ["Lugar de Nacimiento", "Fort Worth, Texas"],
          [
            "Educación",
            "Universidad de Harvard, B.A. Ciencias de la Computación (2007)",
          ],
          ["Patrimonio Neto", "$167 millones mínimo (declaración 2025)"],
          ["Partido", "Demócrata"],
          ["Busca", "CA-11 (San Francisco)"],
        ],
      },
    },

    sections: [
      {
        id: "tech",
        title: {
          en: "Tech Career (2007-2015)",
          es: "Carrera en Tech (2007-2015)",
        },
        facts: {
          en: `After Harvard, worked at Bridgewater Associates. Joined <strong>Stripe as second engineer</strong> circa 2010. Left "a couple years in" to pursue political organizing.

2025 financial disclosure shows retained Stripe equity valued at minimum <strong>$50 million</strong>.`,
          es: `Después de Harvard, trabajó en Bridgewater Associates. Se unió a <strong>Stripe como segundo ingeniero</strong> circa 2010. Se fue "un par de años después" para dedicarse a la organización política.

La declaración financiera de 2025 muestra acciones retenidas de Stripe valoradas en mínimo <strong>$50 millones</strong>.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">He got rich at Stripe, then left to spend that money on left-wing politics. Now he wants to use that fortune to buy a congressional seat.</p>`,
            es: `<p class="framing red">Se hizo rico en Stripe, luego se fue para gastar ese dinero en política de izquierda. Ahora quiere usar esa fortuna para comprar un escaño en el Congreso.</p>`,
          },
          blue: {
            en: `<p class="framing blue">He walked away from a fortune-in-the-making because he believed politics mattered more than money. His self-funding means no PAC strings attached.</p>`,
            es: `<p class="framing blue">Se alejó de una fortuna en construcción porque creía que la política importaba más que el dinero. Su autofinanciamiento significa que no hay ataduras de PACs.</p>`,
          },
        },
        quote: {
          text: {
            en: '"I worked hard at Stripe, but I did not work harder than teachers or nurses. The American economy shouldn\'t be organized as a winner-take-all battle for survival."',
            es: '"Trabajé duro en Stripe, pero no trabajé más duro que los maestros o enfermeras. La economía estadounidense no debería organizarse como una batalla de todo-o-nada por la supervivencia."',
          },
          cite: "Business Insider, August 2025",
        },
      },
      {
        id: "sanders",
        title: {
          en: "Sanders Campaign (2015-2016)",
          es: "Campaña de Sanders (2015-2016)",
        },
        facts: {
          en: `Director of Organizing Technology. Built <strong>Spoke</strong> (P2P texting tool, now open source). Team achieved:
<ul>
<li>60,000 volunteer-run events</li>
<li>36+ million phone calls</li>
<li>$33 million raised in 3 months</li>
</ul>`,
          es: `Director de Tecnología de Organización. Construyó <strong>Spoke</strong> (herramienta de mensajes P2P, ahora código abierto). El equipo logró:
<ul>
<li>60,000 eventos dirigidos por voluntarios</li>
<li>36+ millones de llamadas telefónicas</li>
<li>$33 millones recaudados en 3 meses</li>
</ul>`,
        },
        framing: {
          red: {
            en: `<p class="framing red">Helped Sanders lose to Hillary, then blamed Congress for why socialism couldn't work. Classic excuse-making.</p>`,
            es: `<p class="framing red">Ayudó a Sanders a perder contra Hillary, luego culpó al Congreso de por qué el socialismo no podía funcionar. Excusas clásicas.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Built the distributed organizing infrastructure that would later power AOC's upset. Learned that presidential change requires congressional change.</p>`,
            es: `<p class="framing blue">Construyó la infraestructura de organización distribuida que luego impulsaría el triunfo de AOC. Aprendió que el cambio presidencial requiere cambio en el Congreso.</p>`,
          },
        },
        quote: {
          text: {
            en: "\"At barnstorm after barnstorm, people would say, 'How's he going to get anything done? We just saw what Congress did to Obama for the last eight years.'\"",
            es: "\"En reunión tras reunión, la gente decía, '¿Cómo va a lograr algo? Acabamos de ver lo que el Congreso le hizo a Obama durante los últimos ocho años.'\"",
          },
          cite: "Rolling Stone, November 2018",
        },
      },
      {
        id: "jd",
        title: {
          en: "Justice Democrats (2017-2019)",
          es: "Justice Democrats (2017-2019)",
        },
        facts: {
          en: `Co-founded January 23, 2017—three days after Trump's inauguration. 2018 results: 79 candidates, 7 won general elections including <strong>AOC, Ilhan Omar, Rashida Tlaib, Ayanna Pressley</strong>.

Co-founder Cenk Uygur resigned December 2017 after sexist blog posts surfaced. Kyle Kulinski left the next day in protest of how it was handled.`,
          es: `Co-fundó el 23 de enero de 2017—tres días después de la inauguración de Trump. Resultados 2018: 79 candidatos, 7 ganaron elecciones generales incluyendo <strong>AOC, Ilhan Omar, Rashida Tlaib, Ayanna Pressley</strong>.

El co-fundador Cenk Uygur renunció en diciembre 2017 después de que surgieron publicaciones sexistas. Kyle Kulinski se fue al día siguiente en protesta por cómo se manejó.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">Created the organization that gave us The Squad—the most divisive Democratic faction in a generation. His co-founders quit over internal dysfunction.</p>`,
            es: `<p class="framing red">Creó la organización que nos dio The Squad—la facción demócrata más divisiva en una generación. Sus co-fundadores renunciaron por disfunción interna.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Built the machine that elected the first progressive wave in decades. When problems arose, the organization dealt with them—Uygur was out within 24 hours.</p>`,
            es: `<p class="framing blue">Construyó la máquina que eligió la primera ola progresista en décadas. Cuando surgieron problemas, la organización los manejó—Uygur estaba fuera en 24 horas.</p>`,
          },
        },
      },
      {
        id: "aoc",
        title: {
          en: "AOC Campaign Manager (2017-2018)",
          es: "Director de Campaña de AOC (2017-2018)",
        },
        facts: {
          en: `Managed AOC's primary challenge against Joe Crowley (10-term incumbent, #4 House Democrat). Spending ratio: <strong>18:1 Crowley advantage</strong>. Result: AOC 57%, Crowley 43%.

Campaign video "The Courage to Change" cost ~$10,000, got millions of views.`,
          es: `Dirigió el desafío primario de AOC contra Joe Crowley (titular de 10 términos, #4 demócrata de la Cámara). Ratio de gasto: <strong>ventaja de 18:1 para Crowley</strong>. Resultado: AOC 57%, Crowley 43%.

El video de campaña "El Coraje para Cambiar" costó ~$10,000, obtuvo millones de vistas.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">Engineered the takedown of a senior Democratic leader, replacing experience with inexperience, pragmatism with ideology.</p>`,
            es: `<p class="framing red">Orquestó la caída de un líder demócrata senior, reemplazando experiencia con inexperiencia, pragmatismo con ideología.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Proved that grassroots organizing can beat machine politics. Outspent 18:1 and won by 14 points. The blueprint for progressive insurgency.</p>`,
            es: `<p class="framing blue">Demostró que la organización de base puede vencer a la política de máquina. Superado en gasto 18:1 y ganó por 14 puntos. El modelo para la insurgencia progresista.</p>`,
          },
        },
      },
      {
        id: "cos",
        title: {
          en: "Chief of Staff to AOC (2019)",
          es: "Jefe de Gabinete de AOC (2019)",
        },
        facts: {
          en: `Served <strong>January 3 to August 2, 2019</strong>—seven months. Led Green New Deal drafting. 

<strong>Controversies:</strong>
<ul>
<li>FAQ document with "unwilling to work" language leaked, became GOP talking point</li>
<li>Called moderate Democrats "New Southern Democrats" who "enable a racist system"</li>
<li>Specifically named Rep. Sharice Davids, a Native American woman</li>
<li>No apology ever issued</li>
</ul>

Departed same day as Communications Director Corbin Trent.`,
          es: `Sirvió del <strong>3 de enero al 2 de agosto de 2019</strong>—siete meses. Lideró la redacción del Green New Deal.

<strong>Controversias:</strong>
<ul>
<li>Documento FAQ con lenguaje de "no dispuestos a trabajar" se filtró, se convirtió en punto de ataque republicano</li>
<li>Llamó a los demócratas moderados "Nuevos Demócratas del Sur" que "permiten un sistema racista"</li>
<li>Nombró específicamente a la Rep. Sharice Davids, una mujer nativa americana</li>
<li>Nunca se emitió disculpa</li>
</ul>

Se fue el mismo día que el Director de Comunicaciones Corbin Trent.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">Lasted seven months before his own boss had to let him go. Called fellow Democrats racist, attacked a Native American woman by name, never apologized. This is who he is.</p>`,
            es: `<p class="framing red">Duró siete meses antes de que su propia jefa tuviera que dejarlo ir. Llamó racistas a compañeros demócratas, atacó a una mujer nativa americana por nombre, nunca se disculpó. Esto es quien él es.</p>`,
          },
          blue: {
            en: `<p class="framing blue">The border vote was real—moderates funded cages. His rhetoric was inflammatory, but the underlying critique had merit. He left to continue GND work outside Congress.</p>`,
            es: `<p class="framing blue">El voto de la frontera fue real—los moderados financiaron jaulas. Su retórica fue inflamatoria, pero la crítica subyacente tenía mérito. Se fue para continuar el trabajo del GND fuera del Congreso.</p>`,
          },
        },
        quote: {
          text: {
            en: '"It wasn\'t originally a climate thing at all... we really think of it as a how-do-you-change-the-entire-economy thing."',
            es: '"No era originalmente algo de clima en absoluto... realmente lo pensamos como un cómo-cambias-toda-la-economía."',
          },
          cite: "Washington Post, July 2019",
        },
      },
      {
        id: "fec",
        title: {
          en: "FEC Investigations (2019-2022)",
          es: "Investigaciones de la FEC (2019-2022)",
        },
        facts: {
          en: `Multiple FEC Matters Under Review filed by Coolidge Reagan Foundation (conservative watchdog).

<strong>Allegations:</strong> Brand New Congress LLC (Chakrabarti sole owner) made excessive in-kind contributions; payments mischaracterized as "strategic consulting."

<strong>Outcome (February 2022):</strong> Commission deadlocked <strong>3-3</strong>. All cases dismissed. No finding of violation. No penalties.`,
          es: `Múltiples Asuntos Bajo Revisión de la FEC presentados por la Fundación Coolidge Reagan (vigilante conservador).

<strong>Alegaciones:</strong> Brand New Congress LLC (Chakrabarti único dueño) hizo contribuciones en especie excesivas; pagos mal caracterizados como "consultoría estratégica."

<strong>Resultado (febrero 2022):</strong> La Comisión quedó empatada <strong>3-3</strong>. Todos los casos desestimados. Sin hallazgo de violación. Sin penalidades.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">Designed a complex PAC/LLC structure that created "legitimate transparency concerns" according to campaign finance experts. Escaped on a partisan deadlock, not exoneration.</p>`,
            es: `<p class="framing red">Diseñó una estructura compleja de PAC/LLC que creó "preocupaciones legítimas de transparencia" según expertos en financiamiento de campañas. Escapó por un empate partidista, no por exoneración.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Conservative hit job. Filed by partisan actors, ended in deadlock that reflected Commission politics, not facts. No wrongdoing found.</p>`,
            es: `<p class="framing blue">Ataque partidista conservador. Presentado por actores partidistas, terminó en empate que reflejó la política de la Comisión, no los hechos. No se encontró irregularidad.</p>`,
          },
        },
      },
      {
        id: "newconsensus",
        title: {
          en: "New Consensus (2019-Present)",
          es: "New Consensus (2019-Presente)",
        },
        facts: {
          en: `Think tank for Green New Deal policy. Chakrabarti serves as President (unpaid per 990s).

<strong>Financial trajectory:</strong>
<ul>
<li>2019: Revenue $1.66M</li>
<li>2023: Revenue $201K (88% decline)</li>
<li>Net assets 2023: $142K</li>
</ul>

No New Consensus policy has been adopted by any government entity.`,
          es: `Think tank para política del Green New Deal. Chakrabarti sirve como Presidente (sin pago según 990s).

<strong>Trayectoria financiera:</strong>
<ul>
<li>2019: Ingresos $1.66M</li>
<li>2023: Ingresos $201K (caída del 88%)</li>
<li>Activos netos 2023: $142K</li>
</ul>

Ninguna política de New Consensus ha sido adoptada por ninguna entidad gubernamental.`,
        },
        framing: {
          red: {
            en: `<p class="framing red">His think tank is dying—88% revenue collapse. Zero policy wins. Now he wants to fail upward into Congress.</p>`,
            es: `<p class="framing red">Su think tank está muriendo—colapso de ingresos del 88%. Cero victorias políticas. Ahora quiere fracasar hacia arriba en el Congreso.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Think tanks struggle when their champion leaves Congress. The GND framework he built is still the reference point for climate policy ambition.</p>`,
            es: `<p class="framing blue">Los think tanks luchan cuando su campeón deja el Congreso. El marco del GND que construyó sigue siendo el punto de referencia para la ambición de política climática.</p>`,
          },
        },
      },
      {
        id: "campaign2026",
        title: {
          en: "2026 Campaign",
          es: "Campaña 2026",
        },
        facts: {
          en: `Announced February 5, 2025, challenging Nancy Pelosi. Pelosi announced retirement November 6, 2025.

<strong>Finances (Q4 2025):</strong>
<ul>
<li>Total Receipts: $1,769,248</li>
<li>Individual Contributions: $298,248</li>
<li>Candidate Loans: $1,470,000 (<strong>83%</strong>)</li>
<li>PAC Contributions: $0</li>
</ul>

<strong>Main opponent:</strong> Scott Wiener (CA State Senator) — $2,800,000 raised`,
          es: `Anunció el 5 de febrero de 2025, desafiando a Nancy Pelosi. Pelosi anunció su retiro el 6 de noviembre de 2025.

<strong>Finanzas (Q4 2025):</strong>
<ul>
<li>Ingresos Totales: $1,769,248</li>
<li>Contribuciones Individuales: $298,248</li>
<li>Préstamos del Candidato: $1,470,000 (<strong>83%</strong>)</li>
<li>Contribuciones de PAC: $0</li>
</ul>

<strong>Oponente principal:</strong> Scott Wiener (Senador Estatal de CA) — $2,800,000 recaudados`,
        },
        framing: {
          red: {
            en: `<p class="framing red">83% self-funded. Buying the seat outright. Only $298K from actual voters who believe in him.</p>`,
            es: `<p class="framing red">83% autofinanciado. Comprando el escaño directamente. Solo $298K de votantes reales que creen en él.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Zero PAC money—exactly what progressives demand. Self-funding eliminates donor conflicts that compromise other candidates.</p>`,
            es: `<p class="framing blue">Cero dinero de PAC—exactamente lo que los progresistas exigen. La autofinanciación elimina los conflictos de donantes que comprometen a otros candidatos.</p>`,
          },
        },
      },
      {
        id: "endorsements",
        title: {
          en: "Endorsement Gap",
          es: "Brecha de Respaldos",
        },
        facts: {
          en: `<strong>Endorsements received:</strong>
<ul>
<li>Track AIPAC, Progressive Victory, Blue America</li>
<li>Stanford Democrats</li>
<li>Jamaal Bowman (former U.S. Representative)</li>
</ul>

<strong>Endorsements NOT received:</strong>
<ul>
<li><strong>Justice Democrats</strong> — his organization; endorsed other CA candidates</li>
<li><strong>Alexandria Ocasio-Cortez</strong> — his former boss</li>
<li><strong>Bernie Sanders</strong> — his former employer</li>
<li>SF Democratic Party, major labor unions (backing Wiener)</li>
<li>Sunrise Movement, any sitting Squad member</li>
</ul>`,
          es: `<strong>Respaldos recibidos:</strong>
<ul>
<li>Track AIPAC, Progressive Victory, Blue America</li>
<li>Stanford Democrats</li>
<li>Jamaal Bowman (ex Representante de EE.UU.)</li>
</ul>

<strong>Respaldos NO recibidos:</strong>
<ul>
<li><strong>Justice Democrats</strong> — su organización; respaldó otros candidatos de CA</li>
<li><strong>Alexandria Ocasio-Cortez</strong> — su ex jefa</li>
<li><strong>Bernie Sanders</strong> — su ex empleador</li>
<li>Partido Demócrata de SF, sindicatos principales (respaldan a Wiener)</li>
<li>Sunrise Movement, ningún miembro actual de The Squad</li>
</ul>`,
        },
        framing: {
          red: {
            en: `<p class="framing red">The people who know him best won't vouch for him. JD endorsed other California races. AOC has said nothing. This silence speaks volumes.</p>`,
            es: `<p class="framing red">Las personas que mejor lo conocen no lo respaldan. JD respaldó otras carreras de California. AOC no ha dicho nada. Este silencio dice mucho.</p>`,
          },
          blue: {
            en: `<p class="framing blue">Institutional progressives often avoid local primaries to preserve relationships. The silence may be strategic, not a quality signal. Worth investigating.</p>`,
            es: `<p class="framing blue">Los progresistas institucionales a menudo evitan primarias locales para preservar relaciones. El silencio puede ser estratégico, no una señal de calidad. Vale la pena investigar.</p>`,
          },
        },
      },
    ],
  },

  // Game theory analysis - same math, different interpretation
  analysis: {
    headline: {
      en: "Formal Analysis",
      es: "Análisis Formal",
    },
    intro: {
      en: "Bayesian belief propagation on the endorsement chain. The math is the same regardless of partisan lens—only the interpretation differs.",
      es: "Propagación de creencias bayesianas en la cadena de respaldo. Las matemáticas son las mismas independientemente del lente partidista—solo la interpretación difiere.",
    },
    chain: {
      en: `You ← Friend ← FriendOfFriend → Chakrabarti
                    |
               [ENDORSES]

JD (co-founded) -------→ [SILENCE]
AOC (former boss) -----→ [SILENCE]
Bernie (ex-employer) --→ [SILENCE]`,
      es: `Tú ← Amigo ← AmigoDe Amigo → Chakrabarti
                    |
               [RESPALDA]

JD (co-fundó) ---------→ [SILENCIO]
AOC (ex jefa) ---------→ [SILENCIO]
Bernie (ex empleador) -→ [SILENCIO]`,
    },
    bayesTable: {
      header: {
        en: ["Stage", "P(High)", "P(Medium)", "P(Low)"],
        es: ["Etapa", "P(Alto)", "P(Medio)", "P(Bajo)"],
      },
      rows: {
        en: [
          ["Prior", "0.333", "0.333", "0.333"],
          ["After JD silence", "0.071", "0.429", "0.500"],
          ["After JD+AOC silence", "0.012", "0.419", "0.570"],
          ["After FoF endorse", "0.029", "0.629", "0.342"],
          ["After trust attenuation", "0.184", "0.478", "0.338"],
        ],
        es: [
          ["Prior", "0.333", "0.333", "0.333"],
          ["Después de silencio JD", "0.071", "0.429", "0.500"],
          ["Después de silencio JD+AOC", "0.012", "0.419", "0.570"],
          ["Después de respaldo ADA", "0.029", "0.629", "0.342"],
          ["Después de atenuación", "0.184", "0.478", "0.338"],
        ],
      },
    },
    decision: {
      header: {
        en: ["Action", "Expected Value"],
        es: ["Acción", "Valor Esperado"],
      },
      rows: {
        en: [
          ["Endorse now", "+11.06"],
          ["Stay silent", "0"],
          ["Investigate further", "+22.96"],
        ],
        es: [
          ["Respaldar ahora", "+11.06"],
          ["Quedarse en silencio", "0"],
          ["Investigar más", "+22.96"],
        ],
      },
    },
    conclusion: {
      red: {
        en: `<strong>Optimal action: INVESTIGATE.</strong> Don't trust the endorsement chain until you understand why the people who know him best won't vouch for him.`,
        es: `<strong>Acción óptima: INVESTIGAR.</strong> No confíes en la cadena de respaldo hasta que entiendas por qué las personas que mejor lo conocen no lo respaldan.`,
      },
      blue: {
        en: `<strong>Optimal action: INVESTIGATE.</strong> The math favors gathering more information. Specifically: is the JD/AOC silence informative or strategic?`,
        es: `<strong>Acción óptima: INVESTIGAR.</strong> Las matemáticas favorecen reunir más información. Específicamente: ¿el silencio de JD/AOC es informativo o estratégico?`,
      },
    },
    metaQuestion: {
      en: "Is the JD/AOC silence informative (they know something negative) or strategic (they're avoiding SF politics)?",
      es: "¿El silencio de JD/AOC es informativo (saben algo negativo) o estratégico (evitan la política de SF)?",
    },
  },

  // Methodology - same across all views
  methodology: {
    headline: {
      en: "Methodology: Nullius in Verba",
      es: "Metodología: Nullius in Verba",
    },
    intro: {
      en: '"Take nobody\'s word for it" — motto of the Royal Society since 1660. This site attempts to implement that principle.',
      es: '"No creas en la palabra de nadie" — lema de la Royal Society desde 1660. Este sitio intenta implementar ese principio.',
    },
    sections: [
      {
        title: { en: "The Principle", es: "El Principio" },
        body: {
          en: `Every factual claim is cited with primary sources. Every calculation is shown. The Lean4 formalization type-checks. You don't have to trust us—you can verify.`,
          es: `Cada afirmación factual está citada con fuentes primarias. Cada cálculo se muestra. La formalización en Lean4 verifica tipos. No tienes que confiar en nosotros—puedes verificar.`,
        },
      },
      {
        title: { en: "The Four Lenses", es: "Los Cuatro Lentes" },
        body: {
          en: `This site presents the same facts through four partisan/language combinations. The facts don't change—only the framing. This demonstrates that interpretation is separate from evidence.`,
          es: `Este sitio presenta los mismos hechos a través de cuatro combinaciones partidistas/de idioma. Los hechos no cambian—solo el encuadre. Esto demuestra que la interpretación es separada de la evidencia.`,
        },
      },
      {
        title: { en: "Strawman / Steelman", es: "Hombre de Paja / Acero" },
        body: {
          en: `Red framing is the steelman of conservative criticism. Blue framing is the steelman of progressive defense. A fair-minded reader should engage with both before deciding.`,
          es: `El encuadre rojo es el acero de la crítica conservadora. El encuadre azul es el acero de la defensa progresista. Un lector justo debería considerar ambos antes de decidir.`,
        },
      },
    ],
  },

  // Footer
  footer: {
    tagline: {
      en: "Take nobody's word for it.",
      es: "No creas en la palabra de nadie.",
    },
    copy: {
      en: "NULLIUS CHAKRABARTI // 2026 // Verify, don't trust.",
      es: "NULLIUS CHAKRABARTI // 2026 // Verifica, no confíes.",
    },
  },
};
