# Physics Structure Lab — v2.1

**An independent bilingual physics-learning environment (日本語 / English).**  
Core lessons, calculations, notes and visualizations run in the browser without requiring AI or login.

Live application: https://physics-structure-lab.pages.dev/  
Source repository: https://github.com/ohganed/physics-structure-lab

## Educational purpose

A detailed explanation is not the same as independent learning. The primary goal is for learners to connect concepts across topics, revisit earlier knowledge, build models, formulate hypotheses, notice the limits of analogies, and increasingly reason scientifically without external guidance. A concept may become clear later in another subject; passing a quiz is **not** a prerequisite for moving ahead.

The typical learning structure is **phenomenon → choice of quantities → definitions → laws/assumptions → mathematical modeling → parameter experiments → transfer across domains → optional reflection**.

## Study areas

- **Mechanics, 12 chapters:** Newton's laws, friction, energy, momentum and collisions, circular motion, oscillations, gravity, rigid-body rotation, non-inertial frames, Lagrangian and Hamiltonian mechanics, and coupled systems.
- **Interactive research labs:** physical definitions, acceleration, free-body diagrams, conservation, rotation/oscillation/orbits, projectiles/pulleys, and analytical mechanics.
- **Knowledge Connections:** a bilingual curated concept network with explanations of both similarities and differences. Revisiting an older concept can bring up earlier learner observations.
- **Discovery Workshop (つながり発見ラボ):** explore routes between concepts; propose personally discovered relations as *unverified learner hypotheses*; optionally record how your understanding changed over time; export/import dated journal entries as JSON. The boundary of an analogy may be recorded later.
- **Scientific Inquiry Lab (科学的探究ラボ):** six optional investigations involving forces, ideal free fall, free fall with linear air resistance, circular motion, spring oscillation, and collisions. Learners can write their own questions and predictions, select guiding prompts, record model trials, check whether one variable or several were changed, inspect a single-variable prediction curve, and revisit dated interpretations. Calculations are idealized model predictions, not physical measurements. Each investigation topic preserves its own draft.
- **Transfer Lab (分野横断ラボ):** six introductory cross-domain studies: mechanics vs. LC circuits, gravitation vs. electrostatics, diffusion vs. heat conduction, oscillation vs. traveling waves, momentum vs. symmetry, and acceleration vs. chemical reaction rates.
- **Japanese / English:** language switch, academic-English mechanics chapter prose, parallel reading, bilingual knowledge network, Discovery Workshop, and Transfer Lab. Some older specialized labs still contain Japanese text and are marked accordingly.

The course is an evolving textbook, **not yet a complete university physics curriculum**. Some examples are conceptual bridges rather than complete treatments of their destination field.

## Development and tests

Only the contents of the nested `physics-structure-lab/` directory are published to Cloudflare Pages. Framework preset: None; build command blank; output directory: `physics-structure-lab` (relative to repository root).

From the repository root:

```sh
cd physics-structure-lab
npm test
npm run serve
```

Open http://localhost:4173/ . No npm installation step is required for the existing minimal runtime. GitHub Actions runs Node syntax and scientific-model tests, plus bilingual-data, knowledge-graph, data-import and offline dependency checks. Automated tests do not replace browser, accessibility and scientific expert review. The navigation offers bilingual keyword search. First-time offline and phone/tablet interaction still need real-device verification.

## Offline use and data

A service worker caches core textbook files and KaTeX assets after installation. Internet may be required at first load; first-time offline and device-specific behavior still require manual checking. Learning observations are kept locally in browser storage. The Discovery Workshop offers **user-initiated version-2 JSON export/import** containing learner notes, knowledge links, reinterpretations and Scientific Inquiry Lab records; older version-1 exports remain importable; there is no automatic cloud sync. Avoid entering student identifiers or sensitive information, and review personal notes before sharing exported files.

Original observations are not overwritten by later insights. New links are explicitly labeled as **learner hypotheses**, not verified textbook facts. Import is additive with conflict protection.

## Academic integrity

Physics Structure Lab is an independent project and is not affiliated with, endorsed by, or recommended by MIT or any other institution. See [Academic Quality Standard](../ACADEMIC_QUALITY_STANDARD.md) for the quality criteria and limitations.
