import { mechanicsChapters } from './mechanics-data.js';
/* Authored English prose. Equations remain shared across languages. */
const translations = [
  {
    "name": "Newton's Laws and Forces",
    "level": "High school → undergraduate",
    "phenomenon": "A cart accelerates when an unbalanced interaction acts on it.",
    "definition": "Force is a vector describing interaction; acceleration is the time derivative of velocity.",
    "why": "Separate motion from its cause: a moving object does not necessarily require a net force.",
    "law": "In an inertial frame, Newton's second law relates net external force to acceleration for constant mass.",
    "conditions": "Constant mass and inertial frame; static friction is not always at its maximum.",
    "setter": "Can the learner correctly distinguish the object experiencing a force from the object exerting it?",
    "solver": "Choose a system, draw all external forces, select axes, apply the law, and check signs.",
    "self": "Did I confuse the direction of velocity with the direction of force?",
    "university": "Variable-mass systems require momentum balance; constraints lead to generalized coordinates.",
    "steps": [
      [
        "Choose the cart as your system",
        null,
        "Include only forces acting on that cart."
      ],
      [
        "Project along the horizontal axis",
        null,
        "Take the positive direction to the right."
      ],
      [
        "Solve for acceleration",
        null,
        "Valid for a constant-mass system."
      ]
    ],
    "problem": "A 2 kg cart experiences 6 N right and 2 N left. Find its acceleration.",
    "answer": "2 m/s² to the right: the net force is 4 N."
  },
  {
    "name": "Contact Forces, Friction and Inclines",
    "level": "High school → undergraduate",
    "phenomenon": "As a ramp becomes steeper, a stationary block eventually begins to slide.",
    "definition": "Normal force is perpendicular to contact. Static friction adjusts up to a limiting magnitude.",
    "why": "A stationary object may have several nonzero forces whose vector sum is zero.",
    "law": "The Coulomb friction model approximates static and kinetic contact forces.",
    "conditions": "Approximate Coulomb friction; contact is maintained; distinguish μs from μk.",
    "setter": "Can students explain why mass does not affect the critical angle in this model?",
    "solver": "Draw a free-body diagram, resolve gravity, and check the inequality before using kinetic friction.",
    "self": "Did I assume static friction always equals μsN?",
    "university": "Unilateral contact constraints, dissipation, and nonsmooth mechanics.",
    "problem": "For μs=0.5, estimate the steepest incline allowing rest.",
    "answer": "arctan(0.5) ≈ 26.6°.",
    "steps": [
      [
        "Resolve gravity along and normal to the plane",
        null,
        "Use a coordinate system aligned with the surface."
      ],
      [
        "Apply normal-direction equilibrium",
        null,
        "The block does not accelerate perpendicular to the plane."
      ],
      [
        "Test the limiting static friction",
        null,
        "Compare the friction required to prevent slipping with the maximum."
      ],
      [
        "Find the critical angle",
        null,
        "The mass cancels in the ideal Coulomb model."
      ]
    ]
  },
  {
    "name": "Work, Energy and Conservation",
    "level": "High school → undergraduate",
    "phenomenon": "A falling mass gains speed while its gravitational potential energy decreases.",
    "definition": "Work accumulates the component of force along displacement; kinetic energy measures motion.",
    "why": "Compare initial and final states without solving every intermediate acceleration.",
    "law": "The work–kinetic-energy theorem follows from Newton's second law for a constant-mass particle.",
    "conditions": "Constant mass and inertial frame; define the system boundary and reference for potential.",
    "setter": "What changes when friction is added to a supposedly conservative system?",
    "solver": "Identify the system, classify forces, choose energy terms, and test the assumptions.",
    "self": "Did I equate conservation of total energy with conservation of mechanical energy?",
    "university": "Potential functions, symmetry, variational principles, and Hamiltonian mechanics.",
    "problem": "A body falls 5 m from rest without resistance. What is its final speed?",
    "answer": "√(2gh) ≈ 9.90 m/s for g=9.8 m/s².",
    "steps": [
      [
        "Take the dot product with velocity",
        null,
        "Connect force with the rate of kinetic energy change."
      ],
      [
        "Integrate along the path",
        null,
        "Work equals the change in kinetic energy."
      ],
      [
        "Introduce a conservative potential",
        null,
        "A conservative force is minus the gradient of its potential."
      ],
      [
        "Include nonconservative work",
        null,
        "Mechanical energy is conserved only if the relevant nonconservative work vanishes."
      ]
    ]
  },
  {
    "name": "Momentum, Impulse and Collisions",
    "level": "High school → undergraduate",
    "phenomenon": "During a brief collision, contact forces become large and velocities change quickly.",
    "definition": "Momentum is mass times velocity; impulse is the time integral of force.",
    "why": "Model short, intense interactions by comparing states before and after the event.",
    "law": "The change of total momentum equals the impulse of the net external force.",
    "conditions": "The system must be defined and external impulse assessed; kinetic energy need not be conserved.",
    "setter": "Can the problem distinguish sticking from elastic rebound?",
    "solver": "Define the two-object system; keep vector signs and impose the appropriate collision condition.",
    "self": "Did I conserve each object's momentum separately?",
    "university": "Center-of-mass frames, restitution, and scattering theory.",
    "steps": [
      [
        "Integrate the external force in time",
        null,
        "Internal interaction forces cancel in the total-system balance."
      ],
      [
        "Neglect external impulse when justified",
        null,
        "Total momentum is then conserved."
      ],
      [
        "Apply the sticking condition",
        null,
        "For a perfectly inelastic collision both objects share one final velocity."
      ]
    ],
    "problem": "A 2 kg object at 3 m/s sticks to a stationary 1 kg object. Final speed?",
    "answer": "2 m/s in the original direction."
  },
  {
    "name": "Circular Motion and Centripetal Acceleration",
    "level": "High school → undergraduate",
    "phenomenon": "An object can travel at constant speed while its velocity vector continually turns.",
    "definition": "Angular speed is the rate of change of angle; centripetal acceleration points inward.",
    "why": "Angular coordinates describe rotational motion efficiently.",
    "law": "The magnitude v²/r follows by differentiating the position vector twice.",
    "conditions": "Uniform speed and radius; variable speed adds a tangential acceleration.",
    "setter": "Does the student incorrectly add 'centripetal force' as a separate interaction?",
    "solver": "Identify real forces and set their inward resultant equal to mv²/r.",
    "self": "Did I confuse a constant speed with a constant velocity vector?",
    "university": "Curvilinear coordinates, curvature and moving reference frames.",
    "problem": "Speed 6 m/s around a circle of radius 3 m: magnitude of acceleration?",
    "answer": "12 m/s², toward the center.",
    "steps": [
      [
        "Express position using sine and cosine",
        null,
        "Parameterize the circle by angular position."
      ],
      [
        "Differentiate position to obtain velocity",
        null,
        "Velocity is tangent to the path."
      ],
      [
        "Differentiate again to obtain acceleration",
        null,
        "Acceleration points toward the circle's center."
      ],
      [
        "Use v=rω",
        null,
        "The centripetal magnitude becomes v²/r."
      ]
    ]
  },
  {
    "name": "Simple Harmonic Motion and Resonance",
    "level": "High school → undergraduate",
    "phenomenon": "A mass attached to a spring oscillates about its equilibrium position.",
    "definition": "Restoring force points toward equilibrium; simple harmonic motion has acceleration proportional to negative displacement.",
    "why": "One differential equation explains many seemingly unrelated oscillations.",
    "law": "Hooke's law is an empirical approximation within its linear regime.",
    "conditions": "Linear spring, no damping; the simple pendulum requires a small-angle approximation.",
    "setter": "Does the student know when the period ceases to be amplitude independent?",
    "solver": "Choose the equilibrium coordinate and test whether acceleration is proportional to -x.",
    "self": "Did I assume acceleration vanishes at a turning point?",
    "university": "Damping, forcing, resonance, stability and nonlinear oscillations.",
    "problem": "For m=2 kg and k=50 N/m, what is the period?",
    "answer": "2π√(m/k) ≈ 1.26 s.",
    "steps": [
      [
        "Apply Newton's second law",
        null,
        "The spring supplies a restoring force proportional to displacement."
      ],
      [
        "Define the natural angular frequency",
        null,
        "The ratio k/m sets the oscillation rate."
      ],
      [
        "Rewrite the equation of motion",
        null,
        "It has sinusoidal solutions with initial-condition-dependent phase."
      ],
      [
        "Read off the period",
        null,
        "The period is independent of amplitude only in the ideal linear model."
      ]
    ]
  },
  {
    "name": "Gravitation, Fields and Orbits",
    "level": "High school → undergraduate",
    "phenomenon": "A satellite can remain in orbit because gravity continuously bends its motion.",
    "definition": "Gravitational field strength is force per unit mass; potential is energy per unit mass.",
    "why": "Field quantities describe non-contact interactions at every point in space.",
    "law": "Newton's inverse-square attraction is an empirical law.",
    "conditions": "Newtonian circular two-body approximation; distinguish altitude from orbital radius.",
    "setter": "Will the student put altitude instead of distance from the center in the inverse-square law?",
    "solver": "Set the orbit geometry, write the force law, and derive speed before period.",
    "self": "Did I think orbiting means gravity is absent?",
    "university": "Effective potential, central-force mechanics and Kepler's problem.",
    "problem": "If circular orbital radius quadruples, what happens to orbital speed?",
    "answer": "It becomes half as large.",
    "steps": [
      [
        "Write the inverse-square gravitational force",
        null,
        "Use center-to-center distance for spherical bodies."
      ],
      [
        "Match gravity to centripetal acceleration",
        null,
        "A circular orbit requires the correct inward acceleration."
      ],
      [
        "Solve for circular orbital speed",
        null,
        "The satellite mass cancels."
      ],
      [
        "Calculate the orbital period",
        null,
        "Apply T=2πr/v for one complete circle."
      ]
    ]
  },
  {
    "name": "Rigid-Body Rotation and Torque",
    "level": "High school → undergraduate",
    "phenomenon": "A door opens more readily when pushed farther from its hinge.",
    "definition": "Torque is the cross product of lever arm and force; angular momentum is r×p.",
    "why": "Rotational response depends on the force's point of application and mass distribution.",
    "law": "For a fixed axis and constant moment of inertia, torque equals Iα.",
    "conditions": "Fixed axis and constant I; general 3D rotation requires an inertia tensor.",
    "setter": "Can the student identify the perpendicular lever arm?",
    "solver": "Select a rotation axis and identify each force's line of action.",
    "self": "Did I treat torque as having the same direction as force?",
    "university": "Euler equations, inertia tensors and gyroscopic motion.",
    "problem": "10 N acts perpendicular to a door 0.5 m from its hinge. Torque?",
    "answer": "5 N·m.",
    "steps": [
      [
        "Define angular momentum for a particle",
        null,
        "Specify the origin or rotation axis."
      ],
      [
        "Differentiate angular momentum",
        null,
        "The rate of change equals external torque."
      ],
      [
        "Sum contributions for a rigid body",
        null,
        "The moment of inertia describes mass distribution about the axis."
      ],
      [
        "Differentiate L=Iω",
        null,
        "Constant I yields the familiar fixed-axis equation."
      ]
    ]
  },
  {
    "name": "Non-Inertial Frames and Apparent Forces",
    "level": "High school → undergraduate",
    "phenomenon": "Passengers in an accelerating bus feel as though they are pushed backward.",
    "definition": "A non-inertial reference frame accelerates or rotates relative to an inertial frame.",
    "why": "Observed accelerations depend on the frame, so transformed equations need additional terms.",
    "law": "Apparent forces arise through coordinate transformations rather than new physical interactions.",
    "conditions": "Translation without rotation; rotating frames additionally involve Coriolis and centrifugal terms.",
    "setter": "Can the learner distinguish an apparent force from a Newton's-third-law reaction?",
    "solver": "Name the reference frame before selecting the force terms.",
    "self": "Did I treat the force felt in the bus as a separate physical interaction?",
    "university": "Rotating frames, Foucault pendulum and Earth-based dynamics.",
    "steps": [
      [
        "Transform coordinates to the moving origin",
        null,
        "Subtract the origin's time-dependent position."
      ],
      [
        "Differentiate twice",
        null,
        "The observer's frame acceleration enters."
      ],
      [
        "Rewrite Newton's second law",
        null,
        "An apparent force equal to minus mass times frame acceleration appears."
      ]
    ],
    "problem": "A car accelerates right at 2 m/s². Apparent force on 2 kg in the car?",
    "answer": "4 N to the left."
  },
  {
    "name": "Lagrangian Mechanics",
    "level": "Undergraduate → advanced",
    "phenomenon": "A pendulum constrained to fixed length can be described using one angle instead of two positions.",
    "definition": "Generalized coordinates represent independent degrees of freedom; L=K-U.",
    "why": "Constraints can be built into coordinates, eliminating unnecessary unknown reaction forces.",
    "law": "Stationary action leads to the Euler–Lagrange equation.",
    "conditions": "Appropriate regularity and ideal constraints; dissipative forces need extra treatment.",
    "setter": "Does changing coordinates leave the physical predictions unchanged?",
    "solver": "Count degrees of freedom; find K and U; form L; apply partial derivatives.",
    "self": "Did I treat this as an unrelated force law?",
    "university": "Noether's theorem, symmetry and field theory.",
    "problem": "Derive the equation of motion from L=mẋ²/2−kx²/2.",
    "answer": "mẍ+kx=0.",
    "steps": [
      [
        "Define action for a trial trajectory",
        null,
        "Action associates a number with each path."
      ],
      [
        "Vary the trajectory with fixed endpoints",
        null,
        "Compare neighboring paths that share endpoints."
      ],
      [
        "Integrate by parts",
        null,
        "Move derivatives from the variation to the Lagrangian derivative."
      ],
      [
        "Require stationarity for arbitrary variations",
        null,
        "Obtain the Euler–Lagrange equation."
      ]
    ]
  },
  {
    "name": "Hamiltonian Mechanics",
    "level": "Undergraduate → advanced",
    "phenomenon": "A system can be described in a phase space of position and canonical momentum.",
    "definition": "Canonical momentum is ∂L/∂q̇; the Hamiltonian comes from a Legendre transform.",
    "why": "Replace a second-order equation by coupled first-order evolution equations.",
    "law": "Hamilton's equations follow when the Legendre transformation is regular.",
    "conditions": "Regular Lagrangian and canonical variables; H is not always mechanical energy.",
    "setter": "Can the student transform between Newton, Lagrange and Hamilton descriptions?",
    "solver": "Find L, compute p, eliminate q̇ in favor of p, then obtain Hamilton's equations.",
    "self": "Did I assume Hamiltonian always equals total mechanical energy?",
    "university": "Phase space, Poisson brackets, canonical transformations and quantum theory.",
    "problem": "For H=p²/(2m)+kx²/2, what are Hamilton's equations?",
    "answer": "q̇=p/m and ṗ=−kq.",
    "steps": [
      [
        "Define canonical momentum",
        null,
        "It need not always equal mechanical momentum mv."
      ],
      [
        "Transform from velocity to momentum",
        null,
        "Construct H(q,p,t)=pq̇−L."
      ],
      [
        "Differentiate and compare coefficients",
        null,
        "The velocity terms cancel by the definition of p."
      ],
      [
        "Write Hamilton's canonical equations",
        null,
        "Position and momentum evolve as a coupled pair."
      ]
    ]
  },
  {
    "name": "Coupled Modes, Nonlinearity and Chaos",
    "level": "Undergraduate → advanced",
    "phenomenon": "Two connected oscillators exchange energy and display distinct collective motions.",
    "definition": "Normal modes are independently oscillating patterns of a linear coupled system.",
    "why": "Diagonalizing coupled equations reveals the fundamental patterns of motion.",
    "law": "Small oscillations can be approximated with mass and stiffness matrices.",
    "conditions": "Small-amplitude linearization; genuine nonlinear chaos needs a different analysis.",
    "setter": "Can the student recognize in-phase and out-of-phase modes?",
    "solver": "Count degrees of freedom; linearize; find eigenvectors and eigenvalues.",
    "self": "Did I expect every complex oscillation to have only one simple period?",
    "university": "Stability analysis, Lyapunov exponents, nonlinear dynamics and chaos.",
    "problem": "In the in-phase mode of two identical masses, does the coupling spring stretch?",
    "answer": "No, if their displacements are equal.",
    "steps": [
      [
        "Write the coupled matrix equation",
        null,
        "The mass and stiffness matrices encode interaction."
      ],
      [
        "Try sinusoidal normal-mode solutions",
        null,
        "All coordinates in a mode share one frequency."
      ],
      [
        "Obtain an eigenvalue problem",
        null,
        "Nonzero mode amplitudes require a singular matrix."
      ],
      [
        "Solve the determinant condition",
        null,
        "Eigenfrequencies and mode shapes follow."
      ]
    ]
  }
];
export const mechanicsEnglish = translations.map((entry,i)=>({...entry, key:mechanicsChapters[i].key,model:mechanicsChapters[i].model,steps:entry.steps.map((step,j)=>[step[0],mechanicsChapters[i].steps[j][1],step[2]])}));
