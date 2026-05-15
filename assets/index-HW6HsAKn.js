import{j as e}from"./index-BBFRpps8.js";const a=`
  .pf *, .pf *::before, .pf *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .pf {
    --ink: #0d0d0d;
    --ink2: #3a3a3a;
    --ink3: #777;
    --bg: #f5f2ee;
    --surface: #ffffff;
    --accent: #c84b2f;
    --accent2: #e8824a;
    --rule: rgba(0,0,0,0.12);
    --serif: 'DM Serif Display', serif;
    --sans: 'Instrument Sans', sans-serif;
    --mono: 'DM Mono', monospace;
    font-family: var(--sans);
    background: var(--bg);
    color: var(--ink);
    line-height: 1.6;
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  .pf nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.1rem 3rem;
    background: rgba(245,242,238,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
  }
  .pf .nav-logo { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink2); text-decoration: none; }
  .pf .nav-links { display: flex; gap: 2rem; list-style: none; }
  .pf .nav-links a { font-size: 13px; color: var(--ink3); text-decoration: none; letter-spacing: 0.04em; transition: color 0.2s; }
  .pf .nav-links a:hover { color: var(--ink); }

  .pf #hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 8rem 3rem 4rem; position: relative; overflow: hidden; }
  .pf .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; }
  .pf .hero-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
  .pf .hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 1px; background: var(--accent); }
  .pf .hero-headline { font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 4.2rem); line-height: 1.1; color: var(--ink); margin-bottom: 2rem; font-style: italic; }
  .pf .hero-headline em { font-style: normal; color: var(--accent); }
  .pf .hero-sub { font-size: 14px; color: var(--ink3); max-width: 360px; line-height: 1.7; }
  .pf .hero-small { margin-top: 1rem; font-size: 12px; color: var(--ink3); font-family: var(--mono); letter-spacing: 0.04em; max-width: 460px; line-height: 1.7; }
  .pf .hero-right { display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 0.5rem; }
  .pf .hero-stat { display: flex; flex-direction: column; border-left: 2px solid var(--accent); padding-left: 1.25rem; }
  .pf .hero-stat-num { font-family: var(--serif); font-size: 2.8rem; line-height: 1; color: var(--ink); }
  .pf .hero-stat-label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink3); margin-top: 0.3rem; }
  .pf .hero-badge { margin-top: 1rem; display: inline-flex; align-items: center; gap: 0.5rem; background: var(--ink); color: #f5f2ee; font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; padding: 0.5rem 1rem; border-radius: 2px; width: fit-content; }
  .pf .dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; }

  .pf section { padding: 6rem 3rem; }
  .pf .section-label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 3rem; display: flex; align-items: center; gap: 0.75rem; }
  .pf .section-label::after { content: ''; flex: 1; max-width: 80px; height: 1px; background: var(--accent); opacity: 0.4; }
  .pf .section-title { font-family: var(--serif); font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.15; color: var(--ink); margin-bottom: 1rem; }

  .pf #philosophy { background: var(--ink); }
  .pf #philosophy .section-label { color: var(--accent2); }
  .pf #philosophy .section-label::after { background: var(--accent2); }
  .pf #philosophy .section-title { color: #f5f2ee; }
  .pf .principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 4rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.08); }
  .pf .principle { padding: 2.5rem 2rem; background: var(--ink); transition: background 0.25s; }
  .pf .principle:hover { background: #1a1a1a; }
  .pf .principle-num { font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; color: var(--accent2); opacity: 0.7; margin-bottom: 1.5rem; }
  .pf .principle-title { font-family: var(--serif); font-size: 1.6rem; color: #f5f2ee; margin-bottom: 1rem; }
  .pf .principle-body { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.55); white-space: pre-line; }

  .pf #casestudies { background: var(--bg); }
  .pf .case-study { margin-bottom: 5rem; background: var(--surface); border: 1px solid var(--rule); border-radius: 2px; overflow: hidden; }
  .pf .case-header { display: grid; grid-template-columns: 2fr 1fr; gap: 0; border-bottom: 1px solid var(--rule); }
  .pf .case-header-left { padding: 2.5rem 2.5rem 2rem; border-right: 1px solid var(--rule); }
  .pf .case-tag { font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
  .pf .case-name { font-family: var(--serif); font-size: 2.2rem; line-height: 1.1; color: var(--ink); margin-bottom: 0.75rem; }
  .pf .case-tagline { font-size: 14px; color: var(--ink3); line-height: 1.6; }
  .pf .case-header-right { padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
  .pf .case-meta-item { display: flex; flex-direction: column; gap: 0.25rem; }
  .pf .case-meta-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink3); }
  .pf .case-meta-value { font-size: 13px; color: var(--ink2); white-space: pre-line; }
  .pf .case-body { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
  .pf .case-col { padding: 2rem 1.75rem; border-right: 1px solid var(--rule); }
  .pf .case-col:last-child { border-right: none; }
  .pf .case-col-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink3); margin-bottom: 0.75rem; }
  .pf .case-col-content { font-size: 13.5px; line-height: 1.75; color: var(--ink2); white-space: pre-line; }
  .pf .case-insight { background: #fdf8f5; border-top: 1px solid var(--rule); padding: 1.5rem 2.5rem; display: flex; align-items: flex-start; gap: 1rem; }
  .pf .insight-pill { flex-shrink: 0; font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent); color: white; padding: 0.3rem 0.75rem; border-radius: 2px; margin-top: 2px; }
  .pf .insight-text { font-size: 14px; line-height: 1.7; color: var(--ink2); font-style: italic; white-space: pre-line; }
  .pf .case-started { border-top: 1px solid var(--rule); padding: 1.5rem 2.5rem; background: #fdfaf7; display: flex; gap: 1.25rem; align-items: flex-start; }
  .pf .started-pill { flex-shrink: 0; font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); background: #fdf0eb; padding: 0.3rem 0.75rem; border-radius: 2px; margin-top: 2px; }
  .pf .started-text { font-size: 13.5px; line-height: 1.75; color: var(--ink2); font-style: italic; white-space: pre-line; }
  .pf .case-actions { border-top: 1px solid var(--rule); padding: 1.5rem 2.5rem; background: #0d0d0d; display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .pf .case-btn { font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.75rem 1.4rem; border-radius: 2px; text-decoration: none; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.25); color: #f5f2ee; background: transparent; }
  .pf .case-btn:hover { background: rgba(255,255,255,0.08); }
  .pf .case-btn.primary { background: var(--accent); border-color: var(--accent); color: white; }
  .pf .case-btn.primary:hover { background: #d45530; }
  .pf .case-footer { border-top: 1px solid var(--rule); padding: 1.5rem 2.5rem; }
  .pf .questions-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink3); margin-bottom: 1rem; }
  .pf .questions-list { display: flex; flex-direction: column; gap: 0.5rem; }
  .pf .question-item { font-size: 13.5px; color: var(--ink2); line-height: 1.6; padding-left: 1rem; position: relative; }
  .pf .question-item::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

  .pf .case-pm { border-top: 1px solid var(--rule); padding: 0; background: var(--surface); }
  .pf .pm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; }
  .pf .pm-item { padding: 1.75rem 2.5rem; border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }
  .pf .pm-item:nth-child(2n) { border-right: none; }
  .pf .pm-item:nth-last-child(-n+2) { border-bottom: none; }
  .pf .pm-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink3); margin-bottom: 0.75rem; }
  .pf .pm-text { font-size: 13.5px; line-height: 1.75; color: var(--ink2); white-space: pre-line; }

  .pf #thinking { background: var(--ink); }
  .pf #thinking .section-label { color: var(--accent2); }
  .pf #thinking .section-label::after { background: var(--accent2); }
  .pf #thinking .section-title { color: #f5f2ee; }
  .pf .essays-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 3rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.08); }
  .pf .essay { padding: 2.5rem 2rem; background: var(--ink); transition: background 0.2s; }
  .pf .essay:hover { background: #181818; }
  .pf .essay-num { font-family: var(--mono); font-size: 10px; color: var(--accent2); opacity: 0.6; margin-bottom: 1.25rem; letter-spacing: 0.12em; }
  .pf .essay-title { font-family: var(--serif); font-size: 1.3rem; color: #f5f2ee; margin-bottom: 0.75rem; line-height: 1.3; }
  .pf .essay-excerpt { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.5); white-space: pre-line; }

  .pf #contact { background: var(--accent); text-align: center; padding: 6rem 3rem; }
  .pf #contact .section-label { color: rgba(255,255,255,0.6); justify-content: center; }
  .pf #contact .section-label::after { display: none; }
  .pf .contact-headline { font-family: var(--serif); font-size: clamp(2.2rem, 4vw, 3.5rem); color: white; line-height: 1.15; margin: 0.75rem auto 1.5rem; max-width: 700px; }
  .pf .contact-sub { font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 2.5rem; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.7; }
  .pf .contact-links { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
  .pf .contact-btn { font-family: var(--mono); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.9rem 2rem; border-radius: 2px; text-decoration: none; transition: all 0.2s; border: none; }
  .pf .btn-primary { background: white; color: var(--accent); }
  .pf .btn-primary:hover { background: #fdf0eb; }
  .pf .btn-outline { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.5); }
  .pf .btn-outline:hover { background: rgba(255,255,255,0.1); }

  .pf footer { padding: 2rem 3rem; border-top: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; background: var(--bg); gap: 1rem; flex-wrap: wrap; }
  .pf .footer-note { font-family: var(--mono); font-size: 11px; color: var(--ink3); letter-spacing: 0.06em; }

  @media (max-width: 900px) {
    .pf .hero-grid { grid-template-columns: 1fr; }
    .pf .principles-grid { grid-template-columns: 1fr; }
    .pf .case-header { grid-template-columns: 1fr; }
    .pf .case-body { grid-template-columns: 1fr 1fr; }
    .pf .essays-grid { grid-template-columns: 1fr; }
    .pf nav { padding: 1rem 1.5rem; }
    .pf section { padding: 4rem 1.5rem; }
    .pf .case-header-left, .pf .case-insight, .pf .case-started, .pf .case-actions, .pf .case-footer { padding-left: 1.5rem; padding-right: 1.5rem; }
    .pf .pm-grid { grid-template-columns: 1fr; }
    .pf .pm-item { padding-left: 1.5rem; padding-right: 1.5rem; border-right: none; border-bottom: 1px solid var(--rule); }
    .pf .pm-item:last-child { border-bottom: none; }
  }
`,i=[{tag:"Exploration 01 — Food & Behaviour",name:"GOF",tagline:"Something I started building after noticing how often people feel quietly unsure about what to do after eating something they didn't plan to.",domain:"Food Behaviour / Wellness",friction:"Post-meal uncertainty",pattern:`People usually know what they ate.
They just don't know what comes next.`,cols:[{label:"How this started",content:`GOF started from a very ordinary frustration.

I kept noticing how people around me wanted to eat better, but daily life kept getting in the way. Students ate whatever was around. Working people skipped meals or made do. Families cooked the same things out of habit, not nutrition.

At first I thought healthier eating was mostly a planning problem.`},{label:"What changed my thinking",content:`But something about meal plans always felt incomplete. I kept noticing how quickly real life breaks routines.

Later I realized people usually don't ask:
"What should my ideal diet be?"

They ask:
"I already ate this… now what?"

That realization completely changed how I viewed the problem.`},{label:"Current exploration",content:`GOF slowly stopped becoming a planning system and started becoming a balancing system.

Food started feeling more emotional than nutritional, so I wanted the product to feel supportive instead of judgmental.

Instead of: "You exceeded your calories."

It responds more like: "Try keeping the rest of the day lighter and drink a little more water."`},{label:"What I still think about",content:`The hardest part is not the nutrition logic. It's the tone.

If the product sounds even slightly preachy, people quietly disconnect.

I keep thinking about how something can guide behavior without making the person feel judged.`}],insight:`People don't really need perfect food control.
They just need a little help navigating the imperfect days.`,started:`I once ordered biryani and immediately started wondering what I should eat later to "balance" it.

I asked a few friends the same thing and nobody really had an answer. Most people either ignored the feeling or felt a little guilty and moved on.

That small gap — between eating something and not knowing what to do next — became the start of GOF.`,prototypeUrl:"https://gof-prototype.lovable.app/",evolutionUrl:"https://docs.google.com/document/d/e/2PACX-1vSwGxiwDdqqQBQ8ySCXK5jW2k8bgGw_Y-Zb999NdKSt4Cr_XvNkTNbX2F7Zo8PCCPqUq5Utj7kGLn2X/pub",questions:["Would people still come back if it stayed intentionally simple?","Does tone shape food behavior more than tracking does?","Can reassurance be more useful than optimization?","At what point does guidance start feeling like judgment?"],pmNotes:[{label:"What I heard from people",content:`I asked a few friends and gym-going students what they usually do after eating something unhealthy.

Most people didn't have a clear answer. Some ignored it completely. Some felt guilty for a while and skipped meals later.

What surprised me was that nobody wanted stricter tracking. They wanted reassurance about what to do next.`},{label:"What I chose not to build",content:`I considered adding strict calorie tracking early on, but something about it always felt stressful and judgmental.

The more I thought about it, the more I wanted the interaction to feel calm instead of corrective.`},{label:"How I'd know it's working",content:"One thing I'd watch closely is whether users return after imperfect eating moments instead of abandoning the experience after guilt-driven interactions."},{label:"What I'd change now",content:"If I revisit GOF again, I'd spend more time testing emotional tone with real users before adding additional features."}]},{tag:"Exploration 02 — Operational Trust",name:"CleanO",tagline:"Something that grew out of actual cleaning work — and the small, quiet uncertainty I kept noticing on customers' faces.",domain:"Home Services / Operations",friction:"Uncertainty during service wait and execution",pattern:"People judge reassurance almost as much as the result",cols:[{label:"How this started",content:`CleanO didn't start as a startup idea.

It started from actual cleaning work in Coimbatore. My brother, a friend, and I worked with a local cleaning operator — bathrooms, kitchens, mattresses, deep cleans.

At first it looked like simple labor work.`},{label:"What changed my thinking",content:`But after entering customers' homes repeatedly, I started noticing patterns.

Customers inspected cleaned corners before relaxing. They asked the same small questions, almost without realizing.

That made me realize people were not only paying for cleaning. They were paying for reassurance.`},{label:"Current exploration",content:`That changed how I viewed home services completely.

Later I became more interested in operational visibility than cleaning itself — small things like clear SOPs, live progress, and a calmer way of showing customers what was happening in their own home.`},{label:"What I still think about",content:`I keep thinking about how much visibility people actually want.

Too little quietly creates anxiety. Too much becomes noise.

The hard part is offering reassurance without making it feel like surveillance of the work.`}],insight:`People don't only judge a service by the result.
They judge it by how calm they felt while it was happening.`,started:`The thing I kept noticing during cleaning work was how customers inspected corners, bathrooms, and kitchens before they relaxed.

Even after the job was clearly done, they still wanted some kind of reassurance.

That slowly made me realize cleaning wasn't only an operational problem. It was a trust problem.`,prototypeUrl:"https://cleano-prototype.lovable.app/",evolutionUrl:"https://docs.google.com/document/d/e/2PACX-1vSxY8u81jg8jTYn-Ie2e3Hi36bViyuUW4h1rA4amZPiFpNfUD5KRH0jcaohJ_H7LExuXVxhezn4WH5Q/pub",questions:["How much reassurance is enough before it starts feeling like noise?","Can visibility build trust even before quality actually improves?","Which small moments quietly create the most anxiety?","Would people trust local operators more if the process felt clearer?"],pmNotes:[{label:"What I heard from people",content:`During cleaning work, customers repeatedly checked cleaned areas before feeling relaxed.

That behavior kept repeating across different homes. It made me realize visibility and reassurance mattered as much as the final result itself.`},{label:"What I chose not to build",content:"I initially thought about adding constant live worker tracking, but it quickly started feeling invasive and operationally noisy for a small service workflow."},{label:"How I'd know it's working",content:"I'd want to understand whether operational visibility reduces customer anxiety during service execution."},{label:"What I'd change now",content:"I'd spend more time understanding what level of visibility feels reassuring versus overwhelming during home services."}]},{tag:"Exploration 03 — Learning & Cognition",name:"I2C",tagline:"Something I started thinking about after watching how often students — including me — froze the moment the editor was actually empty.",domain:"EdTech / Learning Systems",friction:"Cognitive overload before execution",pattern:"People recognize logic far faster than they can generate it",cols:[{label:"How this started",content:`I2C started from frustration while learning programming.

I noticed students understood tutorials while watching them, but froze the moment they had to do anything independently.

At first I thought syntax was the main issue.`},{label:"What changed my thinking",content:`But later I realized students often recognized logic faster than they could generate it themselves.

That changed how I viewed programming education.

Programming started feeling less like memorizing syntax and more like mentally simulating logic before typing anything.`},{label:"Current exploration",content:`I slowly became more interested in guided thinking than tutorials themselves.

The shape of it became something like:
Think → Simulate → Translate → Code → Validate

The point is to help someone walk through the logic in their head before they touch the editor.`},{label:"What I still think about",content:`Visualization on its own isn't enough. People still need a little reasoning, prediction, and structure to lean on.

I keep thinking about how learning systems can reduce overwhelm without quietly making the learning itself too easy.`}],insight:`It isn't really that coding is too hard.
It's that most of us were never taught how to think through the logic before writing it.`,started:`I watched classmates — and myself — finish full tutorials and still freeze in front of a blank editor.

The tutorials taught syntax. Nothing really taught us how to think before typing.

I started writing the logic out in plain language before coding, and it quietly reduced the overwhelm. That small habit slowly became I2C.`,prototypeUrl:"https://melogan-i2c.lovable.app/",evolutionUrl:"https://docs.google.com/document/d/e/2PACX-1vQlTliT7CHuxwopgYEJZgEj2XKR2YqhsuLz_LEBjOvDWAazN3cf6nRPVqYPEKLYbVJ_l8GhZqGVfVw2/pub",questions:["Would a little guided thinking feel less intimidating than a blank prompt?","At what point does guidance start replacing independent thinking?","Can a learning system reduce overwhelm without reducing difficulty?","Why do we so often mistake recognition for understanding?"],pmNotes:[{label:"What I heard from people",content:`I spoke with classmates learning programming and noticed many people could follow tutorials while watching them but froze independently.

The common pattern wasn't lack of intelligence. It was uncertainty about the first step.`},{label:"What I chose not to build",content:`At one point I considered adding heavier animations and gamification.

But later I realized guided reasoning mattered more than visual complexity.`},{label:"How I'd know it's working",content:"I'd want to understand whether students feel more confident starting problems independently after guided thinking exercises."},{label:"What I'd change now",content:"I'd explore partially guided problem-solving instead of fully guided flows so students still experience the feeling of figuring things out themselves."}]}],r=[{num:"01 —",title:"I keep getting interested in the same kind of moments",body:`Usually it's when someone hesitates, overthinks, feels unsure, or quietly loses confidence.

Those moments seem small, but they change behavior a lot.

Most of my projects actually started from repeatedly noticing those moments around me.`},{num:"02 —",title:"I didn't really plan a theme",body:`I didn't intentionally plan these projects around uncertainty or emotional friction.

I only realized later that all three explorations were quietly connected by similar patterns.

The theme found me more than I found it.`},{num:"03 —",title:"The emotional layer usually mattered more than I expected",body:`Two products can have the same functionality and still feel completely different.

One can feel stressful. Another can feel supportive.

I slowly started realizing tone shapes behavior more than I originally thought.`}],o=[{num:"Note 01",title:"People rarely explain their real frustration clearly",body:`Usually they just pause longer, refresh again, hesitate, or quietly stop trying.

They almost never say what's actually bothering them.

I started paying attention to those moments more carefully.`},{num:"Note 02",title:"Sometimes people aren't looking for optimization",body:`They are usually just looking for reassurance that they're not doing something wrong.

That pattern keeps appearing in food behavior, learning systems, and service experiences.

It's a quieter need than the ones products usually try to solve.`},{num:"Note 03",title:"Recognition isn't the same as understanding",body:`Watching a tutorial can quietly feel like learning.

But real understanding usually only shows up when someone can generate the logic themselves, without anything to lean on.

That gap between recognizing and generating keeps appearing in almost everything I look at.`}];function l(){return e.jsxs("div",{className:"pf",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:a}}),e.jsxs("nav",{children:[e.jsx("a",{className:"nav-logo",href:"#hero",children:"Logansarathy"}),e.jsxs("ul",{className:"nav-links",children:[e.jsx("li",{children:e.jsx("a",{href:"#philosophy",children:"Philosophy"})}),e.jsx("li",{children:e.jsx("a",{href:"#casestudies",children:"Work"})}),e.jsx("li",{children:e.jsx("a",{href:"#thinking",children:"Thinking"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",children:"Contact"})})]})]}),e.jsx("section",{id:"hero",children:e.jsxs("div",{className:"hero-grid",children:[e.jsxs("div",{className:"hero-left",children:[e.jsx("div",{className:"hero-eyebrow",children:"Product Thinking · Behavioural Systems · User Experience"}),e.jsxs("h1",{className:"hero-headline",children:["I build products around ",e.jsx("em",{children:"small frustrations"})," I can't stop thinking about."]}),e.jsx("p",{className:"hero-sub",children:"Most of my product explorations started from small frustrations I couldn't stop thinking about. Food decisions. Learning overwhelm. Trust during uncertainty."}),e.jsx("p",{className:"hero-small",children:`I didn't intentionally plan a "theme" around these ideas. I only realized later that all three projects were quietly exploring different forms of uncertainty.`})]}),e.jsxs("div",{className:"hero-right",children:[e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-num",children:"3"}),e.jsx("span",{className:"hero-stat-label",children:"Explorations that started from everyday friction"})]}),e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-num",children:"1"}),e.jsx("span",{className:"hero-stat-label",children:"Quiet pattern — the uncertainty people carry without saying it"})]}),e.jsxs("div",{className:"hero-badge",children:[e.jsx("span",{className:"dot"}),"Studying AI at KGiSL · Thinking in product"]})]})]})}),e.jsxs("section",{id:"philosophy",children:[e.jsx("div",{className:"section-label",children:"How I usually end up thinking about products"}),e.jsx("h2",{className:"section-title",children:"A few moments I keep getting interested in."}),e.jsx("div",{className:"principles-grid",children:r.map(t=>e.jsxs("div",{className:"principle",children:[e.jsx("div",{className:"principle-num",children:t.num}),e.jsx("div",{className:"principle-title",children:t.title}),e.jsx("p",{className:"principle-body",children:t.body})]},t.title))})]}),e.jsxs("section",{id:"casestudies",children:[e.jsx("div",{className:"section-label",children:"Product Explorations"}),e.jsx("h2",{className:"section-title",children:"Three small observations that slowly turned into product ideas."}),i.map(t=>e.jsxs("div",{className:"case-study",style:{marginTop:"3rem"},children:[e.jsxs("div",{className:"case-header",children:[e.jsxs("div",{className:"case-header-left",children:[e.jsx("div",{className:"case-tag",children:t.tag}),e.jsx("div",{className:"case-name",children:t.name}),e.jsx("div",{className:"case-tagline",children:t.tagline})]}),e.jsxs("div",{className:"case-header-right",children:[e.jsxs("div",{className:"case-meta-item",children:[e.jsx("span",{className:"case-meta-label",children:"Domain"}),e.jsx("span",{className:"case-meta-value",children:t.domain})]}),e.jsxs("div",{className:"case-meta-item",children:[e.jsx("span",{className:"case-meta-label",children:"Observed friction"}),e.jsx("span",{className:"case-meta-value",children:t.friction})]}),e.jsxs("div",{className:"case-meta-item",children:[e.jsx("span",{className:"case-meta-label",children:"Pattern"}),e.jsx("span",{className:"case-meta-value",children:t.pattern})]})]})]}),e.jsx("div",{className:"case-body",children:t.cols.map(n=>e.jsxs("div",{className:"case-col",children:[e.jsx("div",{className:"case-col-label",children:n.label}),e.jsx("div",{className:"case-col-content",children:n.content})]},n.label))}),e.jsxs("div",{className:"case-insight",children:[e.jsx("span",{className:"insight-pill",children:"Core Insight"}),e.jsx("p",{className:"insight-text",children:t.insight})]}),e.jsxs("div",{className:"case-started",children:[e.jsx("div",{className:"started-pill",children:"How this started"}),e.jsx("p",{className:"started-text",children:t.started})]}),e.jsxs("div",{className:"case-actions",children:[e.jsx("a",{className:"case-btn primary",href:t.prototypeUrl,target:"_blank",rel:"noreferrer",children:t.name==="I2C"?"Interactive Prototype ↗":"Live Prototype ↗"}),e.jsx("a",{className:"case-btn",href:t.evolutionUrl,target:"_blank",rel:"noreferrer",children:"Read Full Evolution ↗"})]}),e.jsxs("div",{className:"case-footer",children:[e.jsx("div",{className:"questions-label",children:"Questions I still think about"}),e.jsx("div",{className:"questions-list",children:t.questions.map(n=>e.jsx("div",{className:"question-item",children:n},n))})]}),e.jsx("div",{className:"case-pm",children:e.jsx("div",{className:"pm-grid",children:t.pmNotes.map(n=>e.jsxs("div",{className:"pm-item",children:[e.jsx("div",{className:"pm-label",children:n.label}),e.jsx("p",{className:"pm-text",children:n.content})]},n.label))})})]},t.name))]}),e.jsxs("section",{id:"thinking",children:[e.jsx("div",{className:"section-label",children:"Patterns I keep noticing"}),e.jsx("h2",{className:"section-title",children:"Small things people rarely say out loud."}),e.jsx("div",{className:"essays-grid",children:o.map(t=>e.jsxs("div",{className:"essay",children:[e.jsx("div",{className:"essay-num",children:t.num}),e.jsx("div",{className:"essay-title",children:t.title}),e.jsx("p",{className:"essay-excerpt",children:t.body})]},t.title))})]}),e.jsxs("section",{id:"contact",children:[e.jsx("div",{className:"section-label",children:"Get in touch"}),e.jsx("h2",{className:"contact-headline",children:"If anything here quietly resonated, I'd genuinely love to talk."}),e.jsx("p",{className:"contact-sub",children:"I'm currently looking for PM internship opportunities where I can learn through real product work, real user thinking, and fast iteration."}),e.jsxs("div",{className:"contact-links",children:[e.jsx("a",{className:"contact-btn btn-primary",href:"mailto:logansarathy04@gmail.com",children:"Email ↗"}),e.jsx("a",{className:"contact-btn btn-outline",href:"https://www.linkedin.com/in/logansarathy",target:"_blank",rel:"noreferrer",children:"LinkedIn ↗"}),e.jsx("a",{className:"contact-btn btn-outline",href:"https://docs.google.com/document/d/e/2PACX-1vRxlno2cMbz9cS-gHjkTSJxDuNsX6_SX-xE1VgZ1kOzoLhe3H3Q6evLMconly9xrd-Ur8N8CwiXlxIL/pub",target:"_blank",rel:"noreferrer",children:"Resume ↗"})]})]}),e.jsxs("footer",{children:[e.jsx("span",{className:"footer-note",children:"Logansarathy · Product explorations around uncertainty, trust, and learning."}),e.jsx("span",{className:"footer-note",children:"Coimbatore, India · 2026"})]})]})}export{l as component};
