/**
 * NULLIUS CHAKRABARTI - Content
 *
 * 2×3 Matrix Framework:
 * - Rows: Conservative, Progressive
 * - Columns: Strawman, Steelman, Reasonable Man
 *
 * Each key claim gets all 6 cells.
 * The intersection of the two "Reasonable Man" columns reveals convergence or true cruxes.
 */

export const content = {
  siteName: "NULLIUS",

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

  // Matrix column/row labels
  matrix: {
    columns: {
      en: ["Strawman", "Steelman", "Reasonable Man"],
      es: ["Hombre de Paja", "Hombre de Acero", "Hombre Razonable"],
    },
    rows: {
      en: ["Conservative", "Progressive"],
      es: ["Conservador", "Progresista"],
    },
  },

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
      en: "Every claim examined from six angles. Bad faith exposed. Good faith honored. Truth emerges.",
      es: "Cada afirmación examinada desde seis ángulos. Mala fe expuesta. Buena fe honrada. La verdad emerge.",
    },
  },

  intro: {
    headline: {
      en: "The Question",
      es: "La Pregunta",
    },
    body: {
      en: `A friend-of-a-friend endorses Saikat Chakrabarti for Congress. Before you trust that endorsement, examine the evidence through every lens:

<strong>The 2×3 Matrix:</strong> For each key claim, we show how it looks through six perspectives—strawman and steelman arguments from both conservative and progressive viewpoints, plus what a reasonable person on each side would actually conclude.

Where the "Reasonable Man" columns converge, we have consensus. Where they diverge, we have the true crux of disagreement.`,
      es: `Un amigo de un amigo respalda a Saikat Chakrabarti para el Congreso. Antes de confiar en ese respaldo, examina la evidencia desde todos los ángulos:

<strong>La Matriz 2×3:</strong> Para cada afirmación clave, mostramos cómo se ve a través de seis perspectivas—argumentos de hombre de paja y de acero desde puntos de vista conservadores y progresistas, más lo que una persona razonable de cada lado realmente concluiría.

Donde las columnas del "Hombre Razonable" convergen, tenemos consenso. Donde divergen, tenemos el verdadero punto de desacuerdo.`,
    },
  },

  // Key claims with full 2×3 matrix
  claims: [
    {
      id: "wealth",
      fact: {
        en: "Net worth: $167M+ (Stripe founding engineer #2)",
        es: "Patrimonio neto: $167M+ (ingeniero fundador #2 de Stripe)",
      },
      source: "2025 Financial Disclosure, Forbes estimates",
      matrix: {
        conservative: {
          strawman: {
            en: "Tech oligarch trying to buy democracy. Another billionaire who thinks money equals virtue.",
            es: "Oligarca tecnológico tratando de comprar la democracia. Otro multimillonario que cree que el dinero equivale a la virtud.",
          },
          steelman: {
            en: "His wealth came from a company that democratized payments. But wealth at this scale creates blind spots and class interests that may not align with working voters.",
            es: "Su riqueza vino de una empresa que democratizó los pagos. Pero la riqueza a esta escala crea puntos ciegos e intereses de clase que pueden no alinearse con los votantes trabajadores.",
          },
          reasonable: {
            en: "Wealth itself isn't disqualifying, but $167M puts him in a different universe than his constituents. His policies should be evaluated for whether they'd benefit people like him or people unlike him.",
            es: "La riqueza en sí no es descalificante, pero $167M lo pone en un universo diferente al de sus constituyentes. Sus políticas deberían evaluarse por si beneficiarían a personas como él o diferentes a él.",
          },
        },
        progressive: {
          strawman: {
            en: "He earned it fairly and is spending it on good causes. What's the problem?",
            es: "Lo ganó justamente y lo gasta en buenas causas. ¿Cuál es el problema?",
          },
          steelman: {
            en: "He left Stripe early to pursue organizing—walked away from potentially billions. The wealth he kept now funds campaigns without PAC money, removing donor conflicts.",
            es: "Dejó Stripe temprano para dedicarse a organizar—se alejó de potencialmente miles de millones. La riqueza que conservó ahora financia campañas sin dinero de PAC, eliminando conflictos de donantes.",
          },
          reasonable: {
            en: "Self-funding removes one corruption vector but creates another: only the wealthy can run this way. His policy record matters more than his bank account.",
            es: "La autofinanciación elimina un vector de corrupción pero crea otro: solo los ricos pueden postularse así. Su historial de políticas importa más que su cuenta bancaria.",
          },
        },
        convergence: {
          en: "Both reasonable perspectives agree: wealth isn't automatically disqualifying, but creates legitimate questions about whose interests he'd serve. Evaluate the policies.",
          es: "Ambas perspectivas razonables coinciden: la riqueza no es automáticamente descalificante, pero crea preguntas legítimas sobre los intereses de quién serviría. Evalúa las políticas.",
        },
      },
    },
    {
      id: "funding",
      fact: {
        en: "Campaign 83% self-funded ($1.47M personal loans), $0 PAC money",
        es: "Campaña 83% autofinanciada ($1.47M préstamos personales), $0 dinero de PAC",
      },
      source: "FEC Q4 2025 Filing",
      matrix: {
        conservative: {
          strawman: {
            en: "Buying the seat. Only $298K from real voters who believe in him.",
            es: "Comprando el escaño. Solo $298K de votantes reales que creen en él.",
          },
          steelman: {
            en: "Self-funding at this level means he doesn't need to build a coalition of small donors who believe in his message. That's a warning sign about grassroots support.",
            es: "La autofinanciación a este nivel significa que no necesita construir una coalición de pequeños donantes que crean en su mensaje. Eso es una señal de advertencia sobre el apoyo de base.",
          },
          reasonable: {
            en: "The low individual donor count ($298K) is notable. A candidate with genuine grassroots enthusiasm typically shows it in small-dollar fundraising. Worth watching.",
            es: "El bajo conteo de donantes individuales ($298K) es notable. Un candidato con genuino entusiasmo de base típicamente lo muestra en recaudación de pequeñas donaciones. Vale la pena observar.",
          },
        },
        progressive: {
          strawman: {
            en: "Zero PAC money! This is exactly what we've been asking for!",
            es: "¡Cero dinero de PAC! ¡Esto es exactamente lo que hemos estado pidiendo!",
          },
          steelman: {
            en: "Refusing PAC money is a meaningful commitment. He can't be bought by corporate interests because he's not taking their money. Self-funding is the cleanest path.",
            es: "Rechazar dinero de PAC es un compromiso significativo. No puede ser comprado por intereses corporativos porque no está tomando su dinero. La autofinanciación es el camino más limpio.",
          },
          reasonable: {
            en: "Zero PAC money is good. But self-funding means only rich people can run 'clean' campaigns. The $298K individual number deserves scrutiny—where's the grassroots energy?",
            es: "Cero dinero de PAC es bueno. Pero la autofinanciación significa que solo los ricos pueden hacer campañas 'limpias'. El número de $298K en individuales merece escrutinio—¿dónde está la energía de base?",
          },
        },
        convergence: {
          en: "Both sides note the $298K individual donor figure as a potential concern. Zero PAC is good, but grassroots enthusiasm would show in small-dollar fundraising.",
          es: "Ambos lados notan la cifra de $298K en donantes individuales como una preocupación potencial. Cero PAC es bueno, pero el entusiasmo de base se mostraría en recaudación de pequeñas donaciones.",
        },
      },
    },
    {
      id: "endorsements",
      fact: {
        en: "Not endorsed by Justice Democrats (his org), AOC (his former boss), or Bernie Sanders (his former employer)",
        es: "No respaldado por Justice Democrats (su org), AOC (su ex jefa), o Bernie Sanders (su ex empleador)",
      },
      source: "Public endorsement records as of Feb 2026",
      matrix: {
        conservative: {
          strawman: {
            en: "Even the socialists won't vouch for him. That tells you everything.",
            es: "Ni siquiera los socialistas responden por él. Eso te dice todo.",
          },
          steelman: {
            en: "The people with the most direct knowledge of his work—JD, AOC, Sanders—have all declined to endorse. Insider silence is meaningful signal that shouldn't be dismissed.",
            es: "Las personas con más conocimiento directo de su trabajo—JD, AOC, Sanders—han declinado respaldar. El silencio de los que lo conocen es una señal significativa que no debe descartarse.",
          },
          reasonable: {
            en: "This silence is unusual and warrants investigation. It could be strategic (avoiding SF politics) or informative (they know something). We should find out which before deciding.",
            es: "Este silencio es inusual y justifica investigación. Podría ser estratégico (evitando política de SF) o informativo (saben algo). Deberíamos averiguar cuál antes de decidir.",
          },
        },
        progressive: {
          strawman: {
            en: "They're just staying out of local primaries. It doesn't mean anything.",
            es: "Solo se están manteniendo fuera de las primarias locales. No significa nada.",
          },
          steelman: {
            en: "Institutional progressives often avoid endorsing in competitive primaries to preserve relationships. JD endorsed other CA races, but SF politics is uniquely complicated.",
            es: "Los progresistas institucionales a menudo evitan respaldar en primarias competitivas para preservar relaciones. JD respaldó otras carreras de CA, pero la política de SF es únicamente complicada.",
          },
          reasonable: {
            en: "The silence is notable but not conclusive. JD did endorse other CA candidates though. The right move is to investigate why—is it strategic or a quality signal?",
            es: "El silencio es notable pero no concluyente. JD sí respaldó a otros candidatos de CA. Lo correcto es investigar por qué—¿es estratégico o una señal de calidad?",
          },
        },
        convergence: {
          en: "Both reasonable perspectives agree: the silence is unusual, worth investigating, and we shouldn't assume we know the reason. Find out before deciding.",
          es: "Ambas perspectivas razonables coinciden: el silencio es inusual, vale la pena investigar, y no debemos asumir que sabemos la razón. Averigua antes de decidir.",
        },
      },
    },
    {
      id: "fec",
      fact: {
        en: "FEC complaints filed by conservative group, all dismissed 3-3 deadlock, no finding of violation",
        es: "Quejas de la FEC presentadas por grupo conservador, todas desestimadas en empate 3-3, sin hallazgo de violación",
      },
      source: "FEC MURs, February 2022 resolution",
      matrix: {
        conservative: {
          strawman: {
            en: "Got away with it on a technicality. Partisan deadlock isn't exoneration.",
            es: "Se escapó por un tecnicismo. El empate partidista no es exoneración.",
          },
          steelman: {
            en: "The FEC noted 'legitimate transparency concerns' with his PAC/LLC structure. A 3-3 deadlock means Republicans saw enough evidence to vote for investigation. Not a clean bill of health.",
            es: "La FEC notó 'preocupaciones legítimas de transparencia' con su estructura PAC/LLC. Un empate 3-3 significa que los republicanos vieron suficiente evidencia para votar por investigación. No es un certificado de buena conducta.",
          },
          reasonable: {
            en: "No violation was found, but the structure was unusual enough to draw scrutiny. The complaints came from a partisan source, which matters. Probably legal but aggressive.",
            es: "No se encontró violación, pero la estructura era lo suficientemente inusual para atraer escrutinio. Las quejas vinieron de una fuente partidista, lo cual importa. Probablemente legal pero agresivo.",
          },
        },
        progressive: {
          strawman: {
            en: "Conservative hit job. Case closed. He was exonerated.",
            es: "Ataque partidista conservador. Caso cerrado. Fue exonerado.",
          },
          steelman: {
            en: "Filed by Coolidge Reagan Foundation (partisan), ended in deadlock reflecting Commission politics not facts. No wrongdoing found after full investigation.",
            es: "Presentado por la Fundación Coolidge Reagan (partidista), terminó en empate reflejando política de la Comisión no hechos. No se encontró irregularidad después de investigación completa.",
          },
          reasonable: {
            en: "The source was partisan, no violation was found, but the structure did raise questions. It's not disqualifying, but 'no violation found' isn't the same as 'clearly above board.'",
            es: "La fuente era partidista, no se encontró violación, pero la estructura sí levantó preguntas. No es descalificante, pero 'no se encontró violación' no es lo mismo que 'claramente correcto.'",
          },
        },
        convergence: {
          en: "Both sides agree: no violation found, but the structure raised legitimate questions. Source was partisan, outcome was inconclusive, not exonerating or damning.",
          es: "Ambos lados coinciden: no se encontró violación, pero la estructura levantó preguntas legítimas. La fuente era partidista, el resultado fue inconcluso, ni exonerante ni condenatorio.",
        },
      },
    },
    {
      id: "cos",
      fact: {
        en: "Chief of Staff to AOC for 7 months. Called moderate Dems 'New Southern Democrats' who 'enable a racist system.' Named Rep. Sharice Davids. No apology.",
        es: "Jefe de Gabinete de AOC por 7 meses. Llamó a demócratas moderados 'Nuevos Demócratas del Sur' que 'permiten un sistema racista.' Nombró a la Rep. Sharice Davids. Sin disculpa.",
      },
      source: "Twitter July 2019, subsequent reporting",
      matrix: {
        conservative: {
          strawman: {
            en: "Called a Native American woman racist. This man is toxic and divisive. His own boss fired him.",
            es: "Llamó racista a una mujer nativa americana. Este hombre es tóxico y divisivo. Su propia jefa lo despidió.",
          },
          steelman: {
            en: "He attacked fellow Democrats by name, using racially charged language against a Native American colleague. He never apologized. This shows poor judgment and inability to build coalitions.",
            es: "Atacó a compañeros demócratas por nombre, usando lenguaje racialmente cargado contra una colega nativa americana. Nunca se disculpó. Esto muestra mal juicio e incapacidad para construir coaliciones.",
          },
          reasonable: {
            en: "The rhetoric was inflammatory and the personal attacks counterproductive. Not apologizing suggests either conviction or stubbornness. A congressman needs to work with colleagues he criticized.",
            es: "La retórica fue inflamatoria y los ataques personales contraproducentes. No disculparse sugiere convicción o terquedad. Un congresista necesita trabajar con colegas que criticó.",
          },
        },
        progressive: {
          strawman: {
            en: "He was right! Those moderates did fund the cages. Someone had to say it.",
            es: "¡Tenía razón! Esos moderados sí financiaron las jaulas. Alguien tenía que decirlo.",
          },
          steelman: {
            en: "The border supplemental vote was real—moderates did fund detention. His critique had merit even if the language was inflammatory. He left voluntarily to continue GND work.",
            es: "El voto del suplemento fronterizo fue real—los moderados sí financiaron detención. Su crítica tenía mérito aunque el lenguaje fue inflamatorio. Se fue voluntariamente para continuar el trabajo del GND.",
          },
          reasonable: {
            en: "The underlying policy critique had validity, but naming Sharice Davids specifically was a tactical error that undermined the message. Better to criticize the vote than the voter.",
            es: "La crítica de política subyacente tenía validez, pero nombrar a Sharice Davids específicamente fue un error táctico que socavó el mensaje. Mejor criticar el voto que al votante.",
          },
        },
        convergence: {
          en: "Both reasonable perspectives agree: the underlying policy critique may have had merit, but the personal attacks and lack of apology show poor political judgment.",
          es: "Ambas perspectivas razonables coinciden: la crítica de política subyacente puede haber tenido mérito, pero los ataques personales y falta de disculpa muestran mal juicio político.",
        },
      },
    },
    {
      id: "newconsensus",
      fact: {
        en: "New Consensus (his think tank): Revenue collapsed 88% from $1.66M (2019) to $201K (2023). Zero policies adopted.",
        es: "New Consensus (su think tank): Ingresos colapsaron 88% de $1.66M (2019) a $201K (2023). Cero políticas adoptadas.",
      },
      source: "IRS 990 filings via ProPublica",
      matrix: {
        conservative: {
          strawman: {
            en: "Failed at running a think tank, now wants to fail at Congress. Classic failing upward.",
            es: "Fracasó dirigiendo un think tank, ahora quiere fracasar en el Congreso. Clásico fracasar hacia arriba.",
          },
          steelman: {
            en: "An 88% revenue collapse suggests donors lost confidence. Zero policy adoptions after 4+ years indicates the ideas weren't viable or the execution was poor.",
            es: "Un colapso de ingresos del 88% sugiere que los donantes perdieron confianza. Cero adopciones de política después de 4+ años indica que las ideas no eran viables o la ejecución fue pobre.",
          },
          reasonable: {
            en: "Think tanks often struggle when their champion leaves office, and GND was always ambitious. But zero policy wins is a real track record. Ideas without execution are just ideas.",
            es: "Los think tanks a menudo luchan cuando su campeón deja el cargo, y el GND siempre fue ambicioso. Pero cero victorias de política es un historial real. Ideas sin ejecución son solo ideas.",
          },
        },
        progressive: {
          strawman: {
            en: "Think tanks are hard! The GND framework changed the conversation even if nothing passed.",
            es: "¡Los think tanks son difíciles! El marco del GND cambió la conversación aunque nada se aprobó.",
          },
          steelman: {
            en: "The GND framework he built became the reference point for climate ambition. Revenue decline reflects broader funding shifts, not organizational failure. He serves unpaid.",
            es: "El marco del GND que construyó se convirtió en el punto de referencia para la ambición climática. La caída de ingresos refleja cambios más amplios en financiamiento, no fracaso organizacional. Sirve sin pago.",
          },
          reasonable: {
            en: "The GND did shift the Overton window on climate. But 88% revenue decline and zero adoptions is a weak track record. Framework-setting matters, but so does execution.",
            es: "El GND sí movió la ventana de Overton sobre clima. Pero 88% de caída de ingresos y cero adopciones es un historial débil. Establecer marcos importa, pero también la ejecución.",
          },
        },
        convergence: {
          en: "Both sides acknowledge GND shifted climate discourse but agree the organizational track record is weak. Ideas matter, but so does the ability to implement them.",
          es: "Ambos lados reconocen que el GND cambió el discurso climático pero coinciden en que el historial organizacional es débil. Las ideas importan, pero también la capacidad de implementarlas.",
        },
      },
    },
    {
      id: "aoc-campaign",
      fact: {
        en: "Managed AOC's 2018 upset: outspent 18:1, won by 14 points against 10-term incumbent Joe Crowley (#4 House Dem)",
        es: "Dirigió el triunfo de AOC en 2018: superado en gasto 18:1, ganó por 14 puntos contra Joe Crowley (#4 Dem de la Cámara) de 10 términos",
      },
      source: "FEC filings, election results",
      matrix: {
        conservative: {
          strawman: {
            en: "Took down an experienced leader for an inexperienced radical. Great job destabilizing the Democratic Party.",
            es: "Derribó a un líder experimentado por una radical sin experiencia. Gran trabajo desestabilizando al Partido Demócrata.",
          },
          steelman: {
            en: "The campaign was tactically brilliant—$10K video, grassroots organizing, 14-point upset against massive spending disadvantage. He knows how to win against the odds.",
            es: "La campaña fue tácticamente brillante—video de $10K, organización de base, triunfo de 14 puntos contra masiva desventaja de gasto. Sabe cómo ganar contra las probabilidades.",
          },
          reasonable: {
            en: "Undeniably impressive campaign management. Winning 18:1 outspent requires real skill. Whether AOC has been good for Congress is separate from whether he ran a good campaign.",
            es: "Innegablemente impresionante gestión de campaña. Ganar superado 18:1 en gasto requiere habilidad real. Si AOC ha sido buena para el Congreso es separado de si él dirigió una buena campaña.",
          },
        },
        progressive: {
          strawman: {
            en: "He's a genius! He changed American politics forever with that one campaign!",
            es: "¡Es un genio! ¡Cambió la política estadounidense para siempre con esa campaña!",
          },
          steelman: {
            en: "Proved grassroots organizing can beat machine politics and money. Created a replicable model that elected the Squad. Transformed what seemed possible in Democratic primaries.",
            es: "Demostró que la organización de base puede vencer a la política de máquina y el dinero. Creó un modelo replicable que eligió al Squad. Transformó lo que parecía posible en primarias demócratas.",
          },
          reasonable: {
            en: "The campaign was genuinely innovative and the upset was historic. But one campaign success doesn't guarantee legislative effectiveness. Different skills.",
            es: "La campaña fue genuinamente innovadora y el triunfo fue histórico. Pero un éxito de campaña no garantiza efectividad legislativa. Habilidades diferentes.",
          },
        },
        convergence: {
          en: "Both sides acknowledge the campaign was tactically impressive. Disagreement is about whether that translates to governing ability.",
          es: "Ambos lados reconocen que la campaña fue tácticamente impresionante. El desacuerdo es sobre si eso se traduce en capacidad de gobernar.",
        },
      },
    },
  ],

  // Bayesian analysis section
  analysis: {
    headline: {
      en: "Formal Analysis",
      es: "Análisis Formal",
    },
    intro: {
      en: "Bayesian belief propagation on the endorsement chain. The math doesn't care about your politics.",
      es: "Propagación de creencias bayesianas en la cadena de respaldo. Las matemáticas no se preocupan por tu política.",
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
      en: "<strong>Optimal action: INVESTIGATE.</strong> Expected value of gathering more information (+23) exceeds immediate endorsement (+11). Specifically: find out why JD/AOC are silent.",
      es: "<strong>Acción óptima: INVESTIGAR.</strong> El valor esperado de reunir más información (+23) excede el respaldo inmediato (+11). Específicamente: averigua por qué JD/AOC guardan silencio.",
    },
    metaQuestion: {
      en: "Is the JD/AOC silence informative (they know something negative) or strategic (they're avoiding SF politics)?",
      es: "¿El silencio de JD/AOC es informativo (saben algo negativo) o estratégico (evitan la política de SF)?",
    },
  },

  methodology: {
    headline: {
      en: "Methodology: Nullius in Verba",
      es: "Metodología: Nullius in Verba",
    },
    intro: {
      en: '"Take nobody\'s word for it" — motto of the Royal Society since 1660.',
      es: '"No creas en la palabra de nadie" — lema de la Royal Society desde 1660.',
    },
    sections: [
      {
        title: { en: "The 2×3 Matrix", es: "La Matriz 2×3" },
        body: {
          en: `For each key claim, we show six perspectives:

<strong>Strawman:</strong> The weakest, worst-faith version of each side's argument. Lazy thinking exposed.

<strong>Steelman:</strong> The strongest, best-faith version of each side's argument. Charitable interpretation honored.

<strong>Reasonable Man:</strong> What a fair-minded person on each side would actually conclude. This is where truth lives.

When the two "Reasonable Man" columns converge, we've found consensus. When they diverge, we've found the true crux of disagreement—the actual thing worth debating.`,
          es: `Para cada afirmación clave, mostramos seis perspectivas:

<strong>Hombre de Paja:</strong> La versión más débil y de peor fe del argumento de cada lado. Pensamiento perezoso expuesto.

<strong>Hombre de Acero:</strong> La versión más fuerte y de mejor fe del argumento de cada lado. Interpretación caritativa honrada.

<strong>Hombre Razonable:</strong> Lo que una persona justa de cada lado realmente concluiría. Aquí es donde vive la verdad.

Cuando las dos columnas del "Hombre Razonable" convergen, hemos encontrado consenso. Cuando divergen, hemos encontrado el verdadero punto de desacuerdo—lo que realmente vale la pena debatir.`,
        },
      },
      {
        title: { en: "Why This Works", es: "Por Qué Funciona" },
        body: {
          en: `Showing strawmen next to steelmen exposes bad faith. You can't hide lazy thinking when the strongest version of the same argument is right there.

Showing both sides forces intellectual honesty. You have to engage with the best version of arguments you disagree with.

Finding convergence reveals truth. When reasonable conservatives and reasonable progressives agree, that's probably correct.`,
          es: `Mostrar hombres de paja junto a hombres de acero expone la mala fe. No puedes ocultar el pensamiento perezoso cuando la versión más fuerte del mismo argumento está justo ahí.

Mostrar ambos lados fuerza la honestidad intelectual. Tienes que comprometerte con la mejor versión de los argumentos con los que no estás de acuerdo.

Encontrar convergencia revela la verdad. Cuando conservadores razonables y progresistas razonables están de acuerdo, eso probablemente es correcto.`,
        },
      },
      {
        title: { en: "The Covenant", es: "El Pacto" },
        body: {
          en: `This site operates under the Covenant of Mutual Accountability: every factual claim is cited, every calculation is shown, the Lean4 formalization type-checks. You don't have to trust us—you can verify.`,
          es: `Este sitio opera bajo el Pacto de Responsabilidad Mutua: cada afirmación factual está citada, cada cálculo se muestra, la formalización en Lean4 verifica tipos. No tienes que confiar en nosotros—puedes verificar.`,
        },
      },
    ],
  },

  bio: {
    summary: {
      headline: {
        en: "Biographical Summary",
        es: "Resumen Biográfico",
      },
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
  },

  footer: {
    tagline: {
      en: "Take nobody's word for it.",
      es: "No creas en la palabra de nadie.",
    },
    copy: {
      en: "NULLIUS // 2026 // Verify, don't trust.",
      es: "NULLIUS // 2026 // Verifica, no confíes.",
    },
  },
};
