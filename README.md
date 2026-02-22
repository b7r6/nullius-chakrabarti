# NULLIUS CHAKRABARTI

**Nullius in Verba** — Take nobody's word for it.

A formal game-theoretic analysis of Saikat Chakrabarti's 2026 congressional campaign (CA-11).

## The Question

A friend-of-a-friend endorses Chakrabarti. Should you trust the endorsement chain given that:

- Justice Democrats (his own organization) has NOT endorsed him
- AOC (his former boss) has NOT endorsed him
- Bernie Sanders (his former employer) has NOT endorsed him

## The Finding

After Bayesian updating on all observable signals:

| Metric            | Value |
| ----------------- | ----- |
| P(High Quality)   | 18.4% |
| P(Medium Quality) | 47.8% |
| P(Low Quality)    | 33.8% |
| EV(Endorse Now)   | +11   |
| EV(Investigate)   | +23   |

**Optimal action: INVESTIGATE** — specifically, determine why JD/AOC are silent.

## Methodology

This site applies the **Nullius in Verba** framework:

1. Every factual claim is cited with primary sources
2. Every calculation is shown and reproducible
3. The Lean4 formalization type-checks
4. Strawman/Steelman/Reasonable-Man structure for all assessments

## Build

```bash
node build.js
npx serve dist
```

## Deploy

Push to `main` → GitHub Actions → GitHub Pages

## Related

- [chakrabarti-game](https://github.com/b7r6/chakrabarti-game) — Full Lean4 formalization
- [Covenant of Mutual Accountability](https://gist.github.com/b7r6/bed1551cc2bb6551eb279b68c5db8de4)
- [Meta-Protocol for AI Collaboration](https://gist.github.com/b7r6/193a89d393dd5508c22ca4e6595cdb5a)

## License

MIT
