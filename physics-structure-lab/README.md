# Physics Structure Lab — v3.7.0

**An independent bilingual physics-learning environment (日本語 / English).**  
Core lessons, calculations, notes and visualizations run in the browser without requiring AI or login.

Live application: https://physics-structure-lab.pages.dev/  
Source repository: https://github.com/ohganed/physics-structure-lab

## Educational purpose

A detailed explanation is not the same as independent learning. The primary goal is for learners to connect concepts across topics, revisit earlier knowledge, build models, formulate hypotheses, notice the limits of analogies, and increasingly reason scientifically without external guidance. A concept may become clear later in another subject; passing a quiz is **not** a prerequisite for moving ahead.

The typical learning structure is **phenomenon → choose a useful representation → connect known laws → discover recurring quantities → define them when useful → model and test assumptions → revisit across domains → optional reflection**.

## Study areas

- **Mechanics, 12 chapters:** Newton's laws, friction, energy, momentum and collisions, circular motion, oscillations, gravity, rigid-body rotation, non-inertial frames, Lagrangian and Hamiltonian mechanics, and coupled systems. Each chapter now includes **authored Japanese and English deep-reading explanations**: intuition from a familiar phenomenon, vocabulary defined on first use, a causal reasoning sequence, every step of one worked numerical/symbolic example, a symbol-by-symbol formula reader with units, limiting-case checks and conditions of validity, a common misconception, and an idea to revisit later. Detailed sections can be expanded/collapsed to keep phone reading manageable; relevant experiments are linked directly. Advanced chapters now have **topic-specific parameter models**: accelerating frames and apparent forces; spring oscillation derived from the Euler–Lagrange equations; Hamiltonian energy in signed phase-space coordinates; and coupled-system opposite-phase normal-mode frequencies. These are explicit example models, not exhaustive simulation of all advanced dynamics. This is broader scaffolding, not a substitute for external user testing or a full graduate-level exposition.
- **Mechanics Practice & Synthesis:** 32 original bilingual optional exercises: one quantitative and one explanatory problem for each of the 12 chapters, plus eight cross-domain synthesis questions. Each gives explicit modeling assumptions, staged hints, symbol-based worked reasoning, dimensional answers where appropriate, pitfalls, and links to related chapters. Numerical checks only compare against reference values and never gate learning. Learner reasoning and later reinterpretations can be saved as separate dated entries; practice JSON can be exported/imported without overwriting earlier records.
- **Interactive research labs:** physical definitions, acceleration, free-body diagrams, conservation, rotation/oscillation/orbits, projectiles/pulleys, and analytical mechanics.
- **Knowledge Connections:** a bilingual curated concept network with explanations of both similarities and differences. Revisiting an older concept can bring up earlier learner observations.
- **Discovery Workshop (つながり発見ラボ):** explore routes between concepts; propose personally discovered relations as *unverified learner hypotheses*; optionally record how your understanding changed over time; export/import dated journal entries as JSON. The boundary of an analogy may be recorded later.
- **Scientific Inquiry Lab (科学的探究ラボ):** six optional investigations involving forces, ideal free fall, free fall with linear air resistance, circular motion, spring oscillation, and collisions. Learners choose their level of guidance, write questions and hypotheses (optionally), predict before revealing results or view results live, change one or several variables, and inspect model prediction curves. Dated snapshots remain read-only for side-by-side comparison with current reasoning, and separate draft workspaces are saved per topic. Learners may enter **self-reported measurements**, uncertainty and method notes. The model curve, current model prediction and learner-reported points (with error bars when supplied) are visibly distinct; the app never represents user-entered measurements as verified data.
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

Open http://localhost:4173/ . No npm installation step is required for the existing minimal runtime. GitHub Actions runs Node syntax and scientific-model tests, plus bilingual-data, knowledge-graph, data-import and offline dependency checks. Node unit and model validation tests run in GitHub Actions; a separate Chromium smoke-test workflow exercises navigation, language switching, prediction reveal, learner observations, history navigation, small-screen menus and offline reopening. Automated browser tests are not a substitute for independent accessibility audits, real iPhone/iPad testing, or scientific expert review.

## Offline use and data

A service worker caches core textbook files and KaTeX assets after installation. Bundled app files are fetched from the network first when reachable, then served from cache when offline; pinned KaTeX assets favor cache-first for predictable formulas. Internet may be required at first load; first-time offline and device-specific behavior still require manual checking. Learning observations are kept locally in browser storage. The Discovery Workshop offers **user-initiated version-3 JSON export/import** containing learner notes, knowledge links, reinterpretations, Scientific Inquiry Lab records and mechanics practice reasoning snapshots; older version-1 exports remain importable; there is no automatic cloud sync. Avoid entering student identifiers or sensitive information, and review personal notes before sharing exported files.

Original observations are not overwritten by later insights. New links are explicitly labeled as **learner hypotheses**, not verified textbook facts. Import is additive with conflict protection.

## Academic integrity

Physics Structure Lab is an independent project and is not affiliated with, endorsed by, or recommended by MIT or any other institution. See [Academic Quality Standard](../ACADEMIC_QUALITY_STANDARD.md) for the quality criteria and limitations.

## Mechanics v3.1 educational completion boundary

**In scope now:** twelve progressively linked mechanics chapters, detailed Japanese-English exposition, definitions, reasoning sequences, worked examples and equation interpretation, interactive parameter models, one numerical and one open-reasoning task per chapter (24), eight integrative synthesis problems, optional hints/solutions, and non-destructive dated learner reflections. Learners are free to navigate and revisit material regardless of numerical answers. The glossary and conceptual network support alternative paths, not mastery gates.

**Still open / not claimed complete:** independent trials with novice learners, all historical experimental exceptions and measurements, fluid and continuum mechanics, complete analytical and nonlinear numerical treatments, exhaustive undergraduate or graduate-level problem banks, full third-party accessibility audit, and direct iPhone/iPad device tests. A successful automated browser suite is not evidence of universal comprehension.

## Why does momentum deserve a definition? (v3.2)

The momentum chapter now starts with a cart that changes its velocity when force acts for different durations. Learners inspect the **signed area under the net-force versus time graph**, first for constant force (rectangle), then for a linearly increasing force (triangle), before meeting the name "momentum". The earlier Newtonian relationship is rearranged to obtain **FΔt = mv − mv₀**; the recurring state combination **mv** is then *defined* as momentum p. Only after this does the chapter introduce combined systems and impulse cancellation in collisions. The real history of physics is a different research question: this sequence describes a pedagogical path from phenomena to mathematical representation, not historical discovery.

The model is in Japanese and English, includes signed forces and velocities, uses constant mass in an inertial frame, shows ideal calculated outputs rather than measurement data, and compares force–time area to changes between the initial and final momentum. This is the first chapter reorganized under the updated explanation-design principle; the remaining mechanics chapters still require the same qualitative audit and user testing.

## v3.3: Deriving representations from the phenomenon in all 12 chapters

The chapter introduction now presents **a motivating physical contrast before formal definitions**. Eleven original, bilingual pathways have been added alongside the previously revised momentum chapter. Each explains the phenomenon, what to measure or draw, which earlier physical law or new empirical assumption is needed, the mathematical steps with commentary, what the resulting expression means, its validity conditions and later conceptual connections. Full derivations are displayed by default and can be collapsed on small screens.

Examples: work–energy comes from force accumulated through **displacement**, complementing momentum as force accumulated through **time**; centripetal acceleration comes from **velocity-vector geometry** before forces are considered; torque emerges from **work per angular displacement**; inertial forces emerge from the **coordinate transformation** x′=x−X; coupled normal modes emerge from **sum and difference coordinates**. Lagrange and Hamilton acknowledge the additional mathematics of variations, integration by parts and Legendre transforms rather than treating these as obvious high-school algebra. The history of physics is not asserted to follow this teaching order. Independent novice learning and real-iPhone testing remain separate validation tasks.

## v3.4: Direct, restrained explanatory prose

The force–time impulse relationship `FΔt=mv−mv₀` is our model for explanatory **style**, not a requirement that every physics topic has the same discovery order. An ordinary phenomenon is described, useful quantities are measured or drawn, and familiar mathematical relations are combined step by step. The resulting expression is interpreted before its customary name or use is discussed. Headings are quiet topics such as “Work and kinetic energy” rather than pedagogical proclamations or scripted eureka moments.

In the work–energy chapter, the algebra now explicitly uses velocity–time trapezoid area for displacement and the identity `(v+v₀)(v−v₀)=v²−v₀²` before obtaining `FΔx=½mv²−½mv₀²`. Terms are introduced as needed in a flowing explanation. Phenomenon, representation and existing-law prose are kept readable without stage-number headings. The derivation and all model assumptions remain available in Japanese and English, and learner progress is not gated.

## v3.5: Chapter 02 reading material

The existing mechanics chapter-selection screen is unchanged. Inside **02 Contact, Friction and Inclines**, the textbook body now contains eight original bilingual explanatory sections: how normal contact forces arise, coordinate decomposition of gravity, why static friction must adjust to equilibrium, its empirical maximum, kinetic friction after sliding begins, numerical comparisons at 20° and 30°, frictional energy transfer, and how to estimate μs from a real tipping-board experiment. Each includes explanatory algebra, assumptions and common model limitations. A responsive force-vector incline diagram lets learners change angle, mass and friction coefficients, displaying the calculated net force, available maximum friction, predicted static/sliding regime and downhill acceleration. These are **model calculations**, not reported experimental measurements. UI and equation modules are included in the offline PWA cache.

## v3.6: Substantive chapters 01–12, unchanged entrance

The chapter-selecting screen is unchanged on desktop and iPhone. Inside the chapter body there is now actual expanded textbook material: the detailed eight-section treatment and physical-model diagram for Chapter 02, plus eleven original in-depth numerical or conceptual worked studies elsewhere. Topics include apparent weight in an elevator; force–distance and car braking; momentum and energy in a sticking collision; banking of circular roads; small-angle versus large-angle pendulums; circular orbital and escape speeds; rolling disk versus hoop; apparent forces in an accelerating train; Atwood's machine through a Lagrangian coordinate; a harmonic oscillator phase-space ellipse; and beating of two coupled normal modes. Each starts from a physical scene, lists model assumptions, shows every major intermediate mathematical step with explanatory bilingual prose, interprets the answer and states limitations. No test gates or progress forcing are attached. The study material is cached for offline navigation and covered by unit and Chromium browser tests.

### iPhone chapter selection

The chapter overview and its twelve original selection buttons have **not been redesigned**. On a narrow screen, tapping a chapter now scrolls to its lesson below the long list, so the new body is visible immediately rather than appearing hidden beneath all chapters. Initial navigation still shows the chapter overview as before.


## v3.7: Newton's laws — single bodies and combined systems

Chapter 01 now contains nine substantial, originally authored Japanese-English reading sections about: selecting the system and drawing force diagrams; inertial frames and Newton's first law; mass and the empirical second law; third-law contact pairs versus balanced forces; separate equations for two touching carts; elimination of internal forces; contact forces and the pushed mass; reversing which cart receives the external push; motion over time; measurements and limitations.

A new two-cart contact-force investigation offers three sliders (mass A, mass B, externally applied force) and a switch between pushing A to the right and pushing B to the left. It displays separate contact-force arrows, signed acceleration, net forces on each cart, and the system-level force balance. The example mA=2 kg, mB=3 kg, F=10 N produces acceleration magnitude 2 m/s², but contact force 6 N when pushing A versus 4 N when pushing B. The model assumes horizontally contacting rigid bodies, no friction and maintained contact. Results are calculated model predictions, not verified measurements.

The prior chapter-chooser interface, other mechanics chapters, practice records, and language switch remain unchanged. New modules are precached for offline study and an automated numerical/bilingual test file has been added. Live-device validation and independent novice-learning review remain necessary.

## Chapter 03 enrichment — energy transfer (2026-11-08)

The existing chapter chooser is unchanged. Chapter 03 now includes eight bilingual derivation-based readings, an adjustable spring-potential curve with turning points kept in view, and four optional interactive energy examples (frictionless incline, spring release, pendulum, and kinetic-friction stopping distance). Each case reveals its derived formula, explicit assumptions, and the different questions a problem designer and solver might ask. All values are mathematical predictions, not measurements. No prerequisite tests or learner data submissions are required. The new JavaScript module is included in the offline cache list, and model/unit test source is provided. Passing CI, manual iPhone rendering, and live deployment propagation must be verified separately.

## Chapter 04 enrichment — restitution, center-of-mass and collision inquiry (2026-11-08)

Eight bilingual reading sections now follow the existing force–time impulse introduction. Topics are isolated-system momentum accounting, the need for an additional equation after conservation, coefficient of restitution, perfectly inelastic versus elastic collisions, center-of-mass frames, reduced mass and kinetic-energy conversion, mean versus peak impact force, vector momentum in oblique collisions, and a fully worked numerical example. The original introductory derivation FΔt=mv−mv₀ remains intact.

An optional two-cart parameter experiment changes both masses, initial velocity and restitution e in the range 0 to 1. It shows both final signed velocities, center-of-mass speed, before/after total momentum, before/after translational kinetic energy, converted kinetic energy, and individual contact impulses. This is a deterministic one-dimensional **model prediction**, not measured evidence. The example excludes external impulse, rotation and other interactions, and sets the second cart initially at rest.

Four additional bilingual problems provide optional hints, complete intermediate steps and conceptual interpretation without a mastery gate. Dedicated tests cover momentum and impulse balances, energy loss, limiting e values, Galilean boosts, invalid inputs and bilingual HTML. All three added source modules are included in offline precaching. Browser/device checks and CI outcome require independent verification.

## Chapter 06 diagrams — spring displacement, velocity, acceleration and force (2026-11-08)

The original step-by-step derivation and bilingual prose remain intact. Immediately before the equation steps, three linked SVG illustrations show (1) a spring, block, signed displacement and force/velocity arrows, (2) phase-matched normalized x, v and a curves over one period, and (3) force versus displacement F=−kx with a moving state marker. Sliders change phase, amplitude, mass and spring stiffness. The interface shows signed x, v, a and F, period, elapsed time, and kinetic/potential/total energy. The model is ideal, one-dimensional, frictionless and undamped; it starts at x=A at t=0. The figures are operated manually rather than autoplaying. All display text is bilingual and new assets are precached. Scientific calculations and control wiring have been exercised with local deterministic checks; CI, real-device and accessibility audits remain independent validation items.

## Pendulum worked-example illustration (2026-11-08)

The chapter 06 worked example **Pendulum period and amplitude** now contains two bilingual SVG illustrations directly before its existing calculation list: a fixed-pivot pendulum with gravity and signed tangential/radial components, and a graph of ideal-pendulum period divided by the small-angle period versus release amplitude. A release-angle, string-length, and mass slider updates the model. The exact ideal-pendulum period uses a complete elliptic integral evaluated through the arithmetic–geometric mean; the small-angle period remains separately identified. At precisely zero release angle, displayed periods are limiting expressions because the pendulum does not oscillate. The explanatory text and steps were preserved. The new module is in the offline PWA cache, iPhone-responsive styling was added, and dedicated model/placement tests were authored. Source and calculation checks are complete; CI and real-device browser layout remain to be independently confirmed.

## Electricity & electromagnetism course (2026-11-08)

A standalone, bilingual Japanese/English course is now reachable from the main navigation (`#electricity`). Its 11 chapters and 33 physical-situation sections cover charge, Coulomb forces, electric fields, Gauss's law, potential, capacitors, current and resistance, Kirchhoff circuits, RC transients, magnetic forces, induction, AC resonance and Maxwell waves. Every section contains a unique inline, captioned SVG situation diagram immediately after the initial physical explanation, followed by multiple equations, specific notes explaining each equation's derivation, a physical interpretation and explicit validity conditions. The route includes validated optional calculators for point-charge forces, resistor networks, RC charging/discharging and magnetic orbits; controls update instantly. Electricity data, diagrams, models and notes are precached by the PWA. Source-level render and mathematical sanity checks have been performed; full CI, device-browser rendering and detailed pedagogy/figure QA remain separate work.
