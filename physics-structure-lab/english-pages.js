/* English entry lesson and conceptual orientation; fully offline, no AI calls. */
export function englishOverview(){
 return '<div class="page"><div class="hero"><div><div class="eyebrow">LEARN TO THINK LIKE A PHYSICIST</div><h1>From phenomena to physical reasoning.</h1><p>Why do we define velocity and force? How do assumptions become equations? How do problem designers turn fundamental laws into challenging questions?</p><button class="primary-btn" data-goto="mechanics">Explore 12 Mechanics Chapters →</button></div></div>'
 +'<div class="section-head"><h2>Study in English</h2><p>Equations and simulations shared with the Japanese edition</p></div>'
 +'<div class="grid"><div class="card"><h3>Physical phenomena</h3><p>Observe an event, isolate a system, select measurable quantities, and decide what information matters.</p><button class="card-action" data-goto="phenomenon">Explore definitions →</button></div>'
 +'<div class="card"><h3>From laws to equations</h3><p>Distinguish a definition from an empirical law. State assumptions before using the model.</p><button class="card-action" data-goto="mechanics">Study mechanics →</button></div>'
 +'<div class="card"><h3>Problem-design reasoning</h3><p>Compare the intended conceptual challenge with the solver’s reasoning and reflect on your own choices.</p><button class="card-action" data-goto="mechanics">Compare perspectives →</button></div></div>'
 +'<div class="callout warm"><strong>Publication status</strong><p>The twelve mechanics chapters have English instructional content. Some specialized interactive laboratories are still in Japanese while their English editions are being developed. This is an independent educational project, not an MIT-affiliated or MIT-endorsed product.</p></div></div>';
}
export function englishPhenomenon(){
 return '<div class="page"><div class="eyebrow">CHAPTER 01 / CONCEPT FORMATION</div><h1>What makes a physical phenomenon measurable?</h1>'
 +'<p class="lead">Physics does not begin with a formula. It begins when we describe an observable change precisely enough to compare, predict, and test.</p>'
 +'<section class="card"><h2>1. Select the system and reference frame</h2><p>“The vehicle moves” is incomplete until we say relative to what. A reference frame tells us how to assign position and time. Coordinate choices are conventions; predictions must correspond to observations.</p>'
 +'<h2>2. Why define displacement?</h2><p>Distance measures the length of a travelled path. Displacement measures the difference between the final and initial position. An object that returns home travels a positive distance but has zero net displacement.</p>'
 +'<div class="formula tex-display" data-tex="\\Delta x=x_f-x_i">Δx=xf−xi</div>'
 +'<h2>3. Why define average velocity?</h2><p>Two trips may cover the same displacement in different times. Dividing by elapsed time makes the comparison quantitative. The sign indicates direction along a chosen axis.</p>'
 +'<div class="formula tex-display" data-tex="\\bar v=\\frac{\\Delta x}{\\Delta t}">Average velocity = displacement / elapsed time</div>'
 +'<h2>4. Why define acceleration?</h2><p>Average acceleration measures the rate of change of velocity, not simply the rate of change of speed. Even at constant speed, a changing direction produces acceleration.</p>'
 +'<div class="formula tex-display" data-tex="\\bar{\\boldsymbol a}=\\frac{\\Delta\\boldsymbol v}{\\Delta t}">Average acceleration</div>'
 +'<h2>5. How do definitions become equations?</h2><p>A definition fixes what a quantity means. A physical law adds information about what nature does. For example, assuming constant acceleration lets us derive v=v₀+at from the acceleration definition; the constant-acceleration assumption is not a universal law.</p>'
 +'<div class="formula tex-display" data-tex="v(t)=v_0+at">v=v0+at</div></section>'
 +'<section class="card"><h2>Think like a problem designer</h2><p>A journey consists of moving 10 m east and then 10 m west in 20 s. Average speed is 1 m/s, but average velocity is 0 m/s. Which quantity would best answer “How far did it travel?” and which would answer “Where did it end up?”</p><div class="callout"><strong>Metacognitive check</strong><p>Which feature of the physical situation caused you to choose distance instead of displacement? Name the definition before you perform a calculation.</p></div><button class="primary-btn" data-goto="mechanics">Continue to the Mechanics Curriculum →</button></section></div>';
}
