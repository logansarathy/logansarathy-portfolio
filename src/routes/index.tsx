import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const styles = `
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
`;

type CaseStudy = {
  tag: string;
  name: string;
  tagline: string;
  domain: string;
  friction: string;
  pattern: string;
  cols: { label: string; content: string }[];
  insight: string;
  started: string;
  prototypeUrl: string;
  evolutionUrl: string;
  questions: string[];
  pmNotes: { label: string; content: string }[];
};

const cases: CaseStudy[] = [
  {
    tag: "Exploration 01 — Food & Behaviour",
    name: "GOF",
    tagline:
      "Something I started building after noticing how often people feel quietly unsure about what to do after eating something they didn't plan to.",
    domain: "Food Behaviour / Wellness",
    friction: "Post-meal uncertainty",
    pattern: "People usually know what they ate.\nThey just don't know what comes next.",
    cols: [
      {
        label: "How this started",
        content:
          "GOF started from a very ordinary frustration.\n\nI kept noticing how people around me wanted to eat better, but daily life kept getting in the way. Students ate whatever was around. Working people skipped meals or made do. Families cooked the same things out of habit, not nutrition.\n\nAt first I thought healthier eating was mostly a planning problem.",
      },
      {
        label: "What changed my thinking",
        content:
          "But something about meal plans always felt incomplete. I kept noticing how quickly real life breaks routines.\n\nLater I realized people usually don't ask:\n\"What should my ideal diet be?\"\n\nThey ask:\n\"I already ate this… now what?\"\n\nThat realization completely changed how I viewed the problem.",
      },
      {
        label: "Current exploration",
        content:
          "GOF slowly stopped becoming a planning system and started becoming a balancing system.\n\nFood started feeling more emotional than nutritional, so I wanted the product to feel supportive instead of judgmental.\n\nInstead of: \"You exceeded your calories.\"\n\nIt responds more like: \"Try keeping the rest of the day lighter and drink a little more water.\"",
      },
      {
        label: "What I still think about",
        content:
          "The hardest part is not the nutrition logic. It's the tone.\n\nIf the product sounds even slightly preachy, people quietly disconnect.\n\nI keep thinking about how something can guide behavior without making the person feel judged.",
      },
    ],
    insight:
      "People don't really need perfect food control.\nThey just need a little help navigating the imperfect days.",
    started:
      "I once ordered biryani and immediately started wondering what I should eat later to \"balance\" it.\n\nI asked a few friends the same thing and nobody really had an answer. Most people either ignored the feeling or felt a little guilty and moved on.\n\nThat small gap — between eating something and not knowing what to do next — became the start of GOF.",
    prototypeUrl: "https://gof-prototype.lovable.app/",
    evolutionUrl:
      "https://docs.google.com/document/d/e/2PACX-1vSwGxiwDdqqQBQ8ySCXK5jW2k8bgGw_Y-Zb999NdKSt4Cr_XvNkTNbX2F7Zo8PCCPqUq5Utj7kGLn2X/pub",
    questions: [
      "Would people still come back if it stayed intentionally simple?",
      "Does tone shape food behavior more than tracking does?",
      "Can reassurance be more useful than optimization?",
      "At what point does guidance start feeling like judgment?",
    ],
    pmNotes: [
      {
        label: "What I heard from people",
        content:
          "I asked a few friends and gym-going students what they usually do after eating something unhealthy.\n\nMost people didn't have a clear answer. Some ignored it completely. Some felt guilty for a while and skipped meals later.\n\nWhat surprised me was that nobody wanted stricter tracking. They wanted reassurance about what to do next.",
      },
      {
        label: "What I chose not to build",
        content:
          "I considered adding strict calorie tracking early on, but something about it always felt stressful and judgmental.\n\nThe more I thought about it, the more I wanted the interaction to feel calm instead of corrective.",
      },
      {
        label: "How I'd know it's working",
        content:
          "One thing I'd watch closely is whether users return after imperfect eating moments instead of abandoning the experience after guilt-driven interactions.",
      },
      {
        label: "What I'd change now",
        content:
          "If I revisit GOF again, I'd spend more time testing emotional tone with real users before adding additional features.",
      },
    ],
  },
  {
    tag: "Exploration 02 — Operational Trust",
    name: "CleanO",
    tagline:
      "Something that grew out of actual cleaning work — and the small, quiet uncertainty I kept noticing on customers' faces.",
    domain: "Home Services / Operations",
    friction: "Uncertainty during service wait and execution",
    pattern: "People judge reassurance almost as much as the result",
    cols: [
      {
        label: "How this started",
        content:
          "CleanO didn't start as a startup idea.\n\nIt started from actual cleaning work in Coimbatore. My brother, a friend, and I worked with a local cleaning operator — bathrooms, kitchens, mattresses, deep cleans.\n\nAt first it looked like simple labor work.",
      },
      {
        label: "What changed my thinking",
        content:
          "But after entering customers' homes repeatedly, I started noticing patterns.\n\nCustomers inspected cleaned corners before relaxing. They asked the same small questions, almost without realizing.\n\nThat made me realize people were not only paying for cleaning. They were paying for reassurance.",
      },
      {
        label: "Current exploration",
        content:
          "That changed how I viewed home services completely.\n\nLater I became more interested in operational visibility than cleaning itself — small things like clear SOPs, live progress, and a calmer way of showing customers what was happening in their own home.",
      },
      {
        label: "What I still think about",
        content:
          "I keep thinking about how much visibility people actually want.\n\nToo little quietly creates anxiety. Too much becomes noise.\n\nThe hard part is offering reassurance without making it feel like surveillance of the work.",
      },
    ],
    insight:
      "People don't only judge a service by the result.\nThey judge it by how calm they felt while it was happening.",
    started:
      "The thing I kept noticing during cleaning work was how customers inspected corners, bathrooms, and kitchens before they relaxed.\n\nEven after the job was clearly done, they still wanted some kind of reassurance.\n\nThat slowly made me realize cleaning wasn't only an operational problem. It was a trust problem.",
    prototypeUrl: "https://cleano-prototype.lovable.app/",
    evolutionUrl:
      "https://docs.google.com/document/d/e/2PACX-1vSxY8u81jg8jTYn-Ie2e3Hi36bViyuUW4h1rA4amZPiFpNfUD5KRH0jcaohJ_H7LExuXVxhezn4WH5Q/pub",
    questions: [
      "How much reassurance is enough before it starts feeling like noise?",
      "Can visibility build trust even before quality actually improves?",
      "Which small moments quietly create the most anxiety?",
      "Would people trust local operators more if the process felt clearer?",
    ],
    pmNotes: [
      {
        label: "What I heard from people",
        content:
          "During cleaning work, customers repeatedly checked cleaned areas before feeling relaxed.\n\nThat behavior kept repeating across different homes. It made me realize visibility and reassurance mattered as much as the final result itself.",
      },
      {
        label: "What I chose not to build",
        content:
          "I initially thought about adding constant live worker tracking, but it quickly started feeling invasive and operationally noisy for a small service workflow.",
      },
      {
        label: "How I'd know it's working",
        content:
          "I'd want to understand whether operational visibility reduces customer anxiety during service execution.",
      },
      {
        label: "What I'd change now",
        content:
          "I'd spend more time understanding what level of visibility feels reassuring versus overwhelming during home services.",
      },
    ],
  },
  {
    tag: "Exploration 03 — Learning & Cognition",
    name: "I2C",
    tagline:
      "Something I started thinking about after watching how often students — including me — froze the moment the editor was actually empty.",
    domain: "EdTech / Learning Systems",
    friction: "Cognitive overload before execution",
    pattern: "People recognize logic far faster than they can generate it",
    cols: [
      {
        label: "How this started",
        content:
          "I2C started from frustration while learning programming.\n\nI noticed students understood tutorials while watching them, but froze the moment they had to do anything independently.\n\nAt first I thought syntax was the main issue.",
      },
      {
        label: "What changed my thinking",
        content:
          "But later I realized students often recognized logic faster than they could generate it themselves.\n\nThat changed how I viewed programming education.\n\nProgramming started feeling less like memorizing syntax and more like mentally simulating logic before typing anything.",
      },
      {
        label: "Current exploration",
        content:
          "I slowly became more interested in guided thinking than tutorials themselves.\n\nThe shape of it became something like:\nThink → Simulate → Translate → Code → Validate\n\nThe point is to help someone walk through the logic in their head before they touch the editor.",
      },
      {
        label: "What I still think about",
        content:
          "Visualization on its own isn't enough. People still need a little reasoning, prediction, and structure to lean on.\n\nI keep thinking about how learning systems can reduce overwhelm without quietly making the learning itself too easy.",
      },
    ],
    insight:
      "It isn't really that coding is too hard.\nIt's that most of us were never taught how to think through the logic before writing it.",
    started:
      "I watched classmates — and myself — finish full tutorials and still freeze in front of a blank editor.\n\nThe tutorials taught syntax. Nothing really taught us how to think before typing.\n\nI started writing the logic out in plain language before coding, and it quietly reduced the overwhelm. That small habit slowly became I2C.",
    prototypeUrl: "https://melogan-i2c.lovable.app/",
    evolutionUrl:
      "https://docs.google.com/document/d/e/2PACX-1vQlTliT7CHuxwopgYEJZgEj2XKR2YqhsuLz_LEBjOvDWAazN3cf6nRPVqYPEKLYbVJ_l8GhZqGVfVw2/pub",
    questions: [
      "Would a little guided thinking feel less intimidating than a blank prompt?",
      "At what point does guidance start replacing independent thinking?",
      "Can a learning system reduce overwhelm without reducing difficulty?",
      "Why do we so often mistake recognition for understanding?",
    ],
    pmNotes: [
      {
        label: "What I heard from people",
        content:
          "I spoke with classmates learning programming and noticed many people could follow tutorials while watching them but froze independently.\n\nThe common pattern wasn't lack of intelligence. It was uncertainty about the first step.",
      },
      {
        label: "What I chose not to build",
        content:
          "At one point I considered adding heavier animations and gamification.\n\nBut later I realized guided reasoning mattered more than visual complexity.",
      },
      {
        label: "How I'd know it's working",
        content:
          "I'd want to understand whether students feel more confident starting problems independently after guided thinking exercises.",
      },
      {
        label: "What I'd change now",
        content:
          "I'd explore partially guided problem-solving instead of fully guided flows so students still experience the feeling of figuring things out themselves.",
      },
    ],
  },
];

const principles = [
  {
    num: "01 —",
    title: "I keep getting interested in the same kind of moments",
    body: "Usually it's when someone hesitates, overthinks, feels unsure, or quietly loses confidence.\n\nThose moments seem small, but they change behavior a lot.\n\nMost of my projects actually started from repeatedly noticing those moments around me.",
  },
  {
    num: "02 —",
    title: "I didn't really plan a theme",
    body: "I didn't intentionally plan these projects around uncertainty or emotional friction.\n\nI only realized later that all three explorations were quietly connected by similar patterns.\n\nThe theme found me more than I found it.",
  },
  {
    num: "03 —",
    title: "The emotional layer usually mattered more than I expected",
    body: "Two products can have the same functionality and still feel completely different.\n\nOne can feel stressful. Another can feel supportive.\n\nI slowly started realizing tone shapes behavior more than I originally thought.",
  },
];

const notes = [
  {
    num: "Note 01",
    title: "People rarely explain their real frustration clearly",
    body: "Usually they just pause longer, refresh again, hesitate, or quietly stop trying.\n\nThey almost never say what's actually bothering them.\n\nI started paying attention to those moments more carefully.",
  },
  {
    num: "Note 02",
    title: "Sometimes people aren't looking for optimization",
    body: "They are usually just looking for reassurance that they're not doing something wrong.\n\nThat pattern keeps appearing in food behavior, learning systems, and service experiences.\n\nIt's a quieter need than the ones products usually try to solve.",
  },
  {
    num: "Note 03",
    title: "Recognition isn't the same as understanding",
    body: "Watching a tutorial can quietly feel like learning.\n\nBut real understanding usually only shows up when someone can generate the logic themselves, without anything to lean on.\n\nThat gap between recognizing and generating keeps appearing in almost everything I look at.",
  },
];

function Portfolio() {
  return (
    <div className="pf">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <nav>
        <a className="nav-logo" href="#hero">Logansarathy</a>
        <ul className="nav-links">
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#casestudies">Work</a></li>
          <li><a href="#thinking">Thinking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">Product Thinking · Behavioural Systems · User Experience</div>
            <h1 className="hero-headline">
              I build products around <em>small frustrations</em> I can't stop thinking about.
            </h1>
            <p className="hero-sub">
              Most of my product explorations started from small frustrations I couldn't stop thinking about.
              Food decisions. Learning overwhelm. Trust during uncertainty.
            </p>
            <p className="hero-small">
              I didn't intentionally plan a "theme" around these ideas. I only realized later that all three projects were quietly exploring different forms of uncertainty.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-stat">
              <span className="hero-stat-num">3</span>
              <span className="hero-stat-label">Explorations that started from everyday friction</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">1</span>
              <span className="hero-stat-label">Quiet pattern — the uncertainty people carry without saying it</span>
            </div>
            <div className="hero-badge">
              <span className="dot"></span>
              Studying AI at KGiSL · Thinking in product
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy">
        <div className="section-label">How I usually end up thinking about products</div>
        <h2 className="section-title">A few moments I keep getting interested in.</h2>
        <div className="principles-grid">
          {principles.map((p) => (
            <div className="principle" key={p.title}>
              <div className="principle-num">{p.num}</div>
              <div className="principle-title">{p.title}</div>
              <p className="principle-body">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="casestudies">
        <div className="section-label">Product Explorations</div>
        <h2 className="section-title">Three small observations that slowly turned into product ideas.</h2>

        {cases.map((c) => (
          <div className="case-study" key={c.name} style={{ marginTop: "3rem" }}>
            <div className="case-header">
              <div className="case-header-left">
                <div className="case-tag">{c.tag}</div>
                <div className="case-name">{c.name}</div>
                <div className="case-tagline">{c.tagline}</div>
              </div>
              <div className="case-header-right">
                <div className="case-meta-item">
                  <span className="case-meta-label">Domain</span>
                  <span className="case-meta-value">{c.domain}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">Observed friction</span>
                  <span className="case-meta-value">{c.friction}</span>
                </div>
                <div className="case-meta-item">
                  <span className="case-meta-label">Pattern</span>
                  <span className="case-meta-value">{c.pattern}</span>
                </div>
              </div>
            </div>
            <div className="case-body">
              {c.cols.map((col) => (
                <div className="case-col" key={col.label}>
                  <div className="case-col-label">{col.label}</div>
                  <div className="case-col-content">{col.content}</div>
                </div>
              ))}
            </div>
            <div className="case-insight">
              <span className="insight-pill">Core Insight</span>
              <p className="insight-text">{c.insight}</p>
            </div>
            <div className="case-started">
              <div className="started-pill">How this started</div>
              <p className="started-text">{c.started}</p>
            </div>
            <div className="case-actions">
              <a className="case-btn primary" href={c.prototypeUrl} target="_blank" rel="noreferrer">
                {c.name === "I2C" ? "Interactive Prototype ↗" : "Live Prototype ↗"}
              </a>
              <a className="case-btn" href={c.evolutionUrl} target="_blank" rel="noreferrer">
                Read Full Evolution ↗
              </a>
            </div>
            <div className="case-footer">
              <div className="questions-label">Questions I still think about</div>
              <div className="questions-list">
                {c.questions.map((q) => (
                  <div className="question-item" key={q}>{q}</div>
                ))}
              </div>
            </div>
            <div className="case-pm">
              <div className="pm-grid">
                {c.pmNotes.map((n) => (
                  <div className="pm-item" key={n.label}>
                    <div className="pm-label">{n.label}</div>
                    <p className="pm-text">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="thinking">
        <div className="section-label">Patterns I keep noticing</div>
        <h2 className="section-title">Small things people rarely say out loud.</h2>
        <div className="essays-grid">
          {notes.map((n) => (
            <div className="essay" key={n.title}>
              <div className="essay-num">{n.num}</div>
              <div className="essay-title">{n.title}</div>
              <p className="essay-excerpt">{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="section-label">Get in touch</div>
        <h2 className="contact-headline">If anything here quietly resonated, I'd genuinely love to talk.</h2>
        <p className="contact-sub">
          I'm currently looking for PM internship opportunities where I can learn through real product work, real user thinking, and fast iteration.
        </p>
        <div className="contact-links">
          <a className="contact-btn btn-primary" href="mailto:logansarathy04@gmail.com">Email ↗</a>
          <a className="contact-btn btn-outline" href="https://www.linkedin.com/in/logansarathy" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="contact-btn btn-outline" href="https://docs.google.com/document/d/e/2PACX-1vRxlno2cMbz9cS-gHjkTSJxDuNsX6_SX-xE1VgZ1kOzoLhe3H3Q6evLMconly9xrd-Ur8N8CwiXlxIL/pub" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </section>

      <footer>
        <span className="footer-note">Logansarathy · Product explorations around uncertainty, trust, and learning.</span>
        <span className="footer-note">Coimbatore, India · 2026</span>
      </footer>
    </div>
  );
}
