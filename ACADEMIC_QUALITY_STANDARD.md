# Physics Structure Lab — Academic Quality Standard

## Position and attribution
Physics Structure Lab is an independent educational project. It is **not affiliated with, endorsed by, or recommended by MIT**. An academic institution's recognition must never be claimed without explicit documented permission or evidence.

## Pedagogical target
Create an internationally useful, Japanese-English physics textbook, not merely an examination drill:
1. Begin with an observable phenomenon and the system/reference frame.
2. Explain why each physical quantity is defined and distinguish a definition from an empirical law.
3. Show mathematical derivations with every nontrivial step, initial/boundary conditions, and dimensions.
4. State approximations, domains of validity, counterexamples, and model limitations.
5. Connect equations to parameter-driven deterministic experiments.
6. Contrast the problem designer's conceptual target with a solver's decisions.
7. Support metacognitive reflection and transfer to unfamiliar problems.
8. Connect high-school concepts to university mechanics without treating the former as disposable.
9. Present historical development as optional context, never a mandatory gate.

## Knowledge Connections: understanding can mature over time
- Concepts should be interconnected rather than isolated units that must be mastered on first encounter.
- Never gate progression with a mandatory mastery threshold. Diagnostic exercises, reflection and quizzes are optional learning aids, not entry requirements.
- Give each conceptual connection two independently authored explanations: how the ideas illuminate one another, and where the analogy or inference breaks down.
- Reintroduce earlier concepts naturally in later units; explain what the new context reveals that was invisible at the first encounter.
- Support learner-created links and dated observations without deleting or overwriting earlier interpretations.
- Do not infer metacognitive skill from a quiz score or a count of visited concepts. Prefer evidence of changed explanations and voluntary use of ideas in unfamiliar contexts.
- Curated concept links, learner observations and navigation should remain available offline, and share concept IDs across Japanese and English editions.
- The educational objective is increasing capacity for independent scientific reasoning rather than accumulating completed chapter badges.

## Bilingual policy
- Japanese and English are both authored learning editions. Avoid relying on machine translation at runtime.
- Every published new chapter should have parallel Japanese and English explanations.
- Formula TeX, equation IDs, simulator model definitions, and learning record IDs are shared, never duplicated.
- English terminology should be academically standard (e.g. *displacement*, *velocity*, *acceleration*, *free-body diagram*, *normal force*, *angular momentum*, *canonical momentum*).
- Include a side-by-side comparison for learning both subject matter and terminology.
- If a specialized laboratory has not yet been fully translated, label it clearly as incomplete in the English edition.
- The default language can be changed without losing learning progress.

## Scientific assurance
- Every numerical model must document assumptions, units, and invalid input handling.
- Test limiting cases, signs, energy and momentum balances, dimensional consistency and relevant equivalences.
- Distinguish analytic solutions from approximations, visualizations, and numerical solvers.
- Do not label a derived relation as a universally valid law.
- Before claiming textbook completeness, obtain subject-expert review and a chapter-by-chapter content audit.
- Clearly mark unfinished proofs, exercises, simulations or translations.

## Accessibility and offline use
- Keyboard access, text alternatives, readable math, responsive layouts, and respect for reduced motion.
- Avoid flashing effects that could cause photosensitive discomfort.
- Keep core textbooks, LaTeX rendering and scientific simulations usable offline after installation.
- Preserve past learning records when adding a language or upgrading the service worker.

## Release discipline
- GitHub Actions must pass syntax and physics model tests.
- Require bilingual curriculum completeness and identical mathematical expressions in both versions.
- Review visible interaction, mobile layout, screen-reader semantics and offline behavior manually before claiming those tests passed.
- Independent evidence and external academic feedback are required before any quality or institutional endorsement claim.

## Learner-generated hypotheses and cross-domain transfer

- A learner should be able to propose a concept connection without already knowing all limitations; unknown boundaries can be recorded honestly and revisited later.
- Distinguish learner-authored conjectures from authored, scientifically reviewed textbook relations. Never present personal notes as established physics facts.
- Curated knowledge paths show **a possible explanatory route**, not mathematical proof, prerequisite ordering, or validated knowledge transfer.
- When mathematical structure appears in different fields, show both the shared mathematical relation and the different physical units, systems, boundary conditions, and failure modes.
- Export/import must be user-initiated, local-only, versioned and validated; never silently overwrite prior dated observations.
- Measure educational success through authentic independent reasoning and longitudinal evidence rather than quiz pass thresholds, streaks or time-on-app.

## Scientific inquiry without compulsory checking

- Encourage the learner to articulate questions, model assumptions, predictions, counterexamples and revised interpretations, but never require written answers before continuing.
- Offer user-controlled guidance levels instead of a mandatory fixed sequence.
- In comparisons, identify whether one variable or multiple parameters changed. A confounded contrast must not be presented as proof of causality.
- Explicitly distinguish **simulated model predictions** from measurements, observations, or empirical scientific evidence.
- Use contrasting models (for example ideal free fall versus linear resistance) to teach the limits of a result, not merely to generate different numbers.
- Treat a graph as a visualization of model behavior under stated assumptions; it does not establish a universal law.
- Preserve multiple versions of the learner's thinking, allow unfinished hypotheses and optional notes, and maintain separate drafts by topic.
- Learning records should be portable, validated, backward compatible and stored locally unless the learner explicitly chooses to export them.

## Evidence, independent investigation and gradual withdrawal of guidance

- The learner may choose either an optional predict-before-reveal mode or immediate live predictions. Neither mode should require writing answers to advance.
- Scaffolding prompts ask the learner to identify the system, measurement, controlled variables and model limitations. Prompts should be removable at the learner's discretion.
- Learner-entered observations must remain marked as **learner reported**, distinct from deterministic calculations. Record the measured quantity's unit, method and uncertainty if known; do not invent uncertainty values.
- Comparisons and plotted uncertainty bars facilitate questioning and model revision; they must not automatically label a physical theory as validated or refuted by one user-entered datum.
- Only overlay measurements from trials where the other modeled inputs match the controlled-variable graph, so confounded conditions are not visually blended.
- Reopening historical records must not silently overwrite the current unfinished inquiry. Show earlier and current reasoning side by side.
- Browser Back/Forward navigation should preserve the natural exploration history across scientific topics and concept connections.
- Keep a real-browser smoke suite alongside mathematical unit tests, including Japanese and English modes, mobile widths, local data persistence and offline reopening. Mark any untested device or platform explicitly.

## Independent-study explanation quality
- Start with an observable phenomenon in everyday language and state the question before introducing specialized terms.
- Explain the meaning, units, direction, and reference point or frame for each physical quantity.
- Distinguish empirical law, definition, derived result, approximation, and assumption.
- Provide stepwise mathematical derivation and at least one worked example with interpretation and dimensional or sign checks.
- Make the reasons behind each calculation step accessible; avoid treating final equations as self-explanatory.
- Explicitly correct common conceptual confusions without treating a wrong initial hypothesis as failure.
- Link reading to a relevant interactive experiment, state the model's validity conditions, and introduce a reason to reconsider the concept in another field later.
- Author Japanese and English explanations at comparable intellectual depth; do not rely solely on direct word-for-word translation.
- Keep detailed reading optional, accessible, and collapsible on small screens. No quiz or reading step is a gate.
- Automated completeness checks cannot establish human comprehensibility: validate with real beginners and accessibility reviews.

## Why this physical quantity and this mathematical representation?

- A formula is not understood simply because every symbol can be defined or the algebra reproduced. Explain **what in the phenomenon makes this form of mathematics worth constructing**.
- Before introducing a named quantity, where pedagogically appropriate, begin with an observable contrast, a measurable operation, a graph, a geometric relation, or a known law that gives the learner a reason to seek a new quantity.
- Let a useful combination emerge from comparing phenomena and equations; only then name it as a definition. Distinguish the **physical law used** from the **new definition created** and the result derived from both.
- For momentum: varying a force's duration motivates the signed force–time area (impulse); combining F=ma with acceleration gives FΔt=mv−mv₀; the repeated state combination motivates p=mv; internal impulse cancellation then motivates conservation for a combined system with negligible external impulse.
- State the model limitations: a rectangle applies to constant net force; a varying force requires an integral; mass is constant in this simple Newtonian lesson; forces and velocities have signs and directions; total momentum conservation requires negligible external impulse.
- The instructional sequence **does not claim to reproduce the historical discovery sequence**. Historical investigation is separate and should be evidence-based, not a fictional story about what a scientist must have thought.
- Do not enforce one mandatory route for every topic. Sometimes the physical quantity is defined operationally before a law is established; sometimes experiment suggests a relation before a useful name is assigned. Keep these distinctions explicit.
- Revisit each subject with the question: "How does this mathematical description arise from the phenomenon, and what does it let us notice or predict?"

## Mathematical exposition audit across the full mechanics pathway (v3.3)

- For each chapter, require an observable question, a reason to choose coordinates or a graphical representation, and explicit separation of empirical law, definition and mathematical consequence.
- Every major displayed equation must be accompanied by a learner-readable explanation of the step and a physical interpretation. Show intermediate operations rather than skipping directly to an authoritative formula.
- When a derivation needs more mathematics than the prerequisite background, define and explain the additional operation; do not pretend that variation or Legendre transforms are elementary identities.
- Surface what the result newly predicts, an assumption that may invalidate it, and a connection to another chapter. Let explanations remain optional to read, not mandatory mastery gates.
- Do not manufacture historical stories to justify the learning order; these narratives are epistemic and pedagogical, not a documentary reconstruction of discoveries.
- On phone-width layouts, keep long formulas in internally scrollable containers instead of allowing the entire page to overflow horizontally.
