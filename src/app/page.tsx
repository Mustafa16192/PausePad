import Link from "next/link";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { SectionHeading } from "@/components/SectionHeading";

const metrics = [
  { value: "22", label: "survey responses" },
  { value: "7", label: "diary study days" },
  { value: "5", label: "user enactments" },
  { value: "1", label: "final system concept" },
];

const heroPoints = [
  {
    label: "Audience",
    text: "Students navigating the low-energy moment between wanting to rest and defaulting to scrolling.",
  },
  {
    label: "Format",
    text: "A physical dock, ambient cues, and mobile controls designed to behave as one connected system.",
  },
  {
    label: "Outcome",
    text: "Make the bedtime action visible, simple, and easier to follow through on without relying on willpower.",
  },
];

const insights = [
  {
    number: "01",
    title: "Awareness alone is too weak",
    text: "Participants could notice ambient cues, but that did not guarantee a behavior change.",
  },
  {
    number: "02",
    title: "Low effort matters at night",
    text: "When energy is low, students are unlikely to adopt anything that adds friction.",
  },
  {
    number: "03",
    title: "Physical placement beats abstraction",
    text: "A dock works better than a separate object because it matches an existing routine.",
  },
  {
    number: "04",
    title: "Escalation should stay gentle",
    text: "Sound can help, but only as an optional secondary cue that grows slowly.",
  },
];

const studies = [
  {
    title: "Survey",
    detail: "12 questions, 22 college students",
    bullets: [
      "86% cited low energy or lack of motivation as the main barrier.",
      "55% wanted to exercise but could not sustain the habit.",
      "73% reported using no tools to support self-care routines.",
    ],
  },
  {
    title: "Diary Study",
    detail: "7 days, morning and night reflections",
    bullets: [
      "Low energy repeatedly blocked initiation of self-care.",
      "Phone scrolling became the default passive loop.",
      "Students preferred tiny actions over full routines.",
    ],
  },
  {
    title: "User Enactments",
    detail: "5 participants, scenario-based prototypes",
    bullets: [
      "Subtle cues were noticed, but stronger cues were more effective.",
      "Separate tactile objects felt too effortful when users were drained.",
      "Shared spaces required discreet, socially acceptable support.",
    ],
  },
];

const features = [
  {
    title: "Phone placement detection",
    text: "A sensor detects when the phone is placed down or picked back up.",
  },
  {
    title: "Ambient light escalation",
    text: "The dock starts softly and becomes more noticeable if scrolling continues.",
  },
  {
    title: "Optional audio cue",
    text: "A speaker can play white noise or calming music as a secondary reminder.",
  },
  {
    title: "Mobile setup and control",
    text: "The app handles bedtime schedules, session control, and audio preferences.",
  },
  {
    title: "Usage tracking and insight",
    text: "The system stores placement time and pickup frequency for reflection.",
  },
];

const storySignals = [
  "Late-night scrolling is rarely an information problem. Students already know they should stop.",
  "The real breakdown happens when energy is low and the phone becomes the path of least resistance.",
  "That means the intervention has to feel ambient, immediate, and physically easier than continuing to scroll.",
];

const appendixLinks = [
  {
    label: "M1 concept proposal",
    href: "/reports/m1-concept-proposal.pdf",
    note: "Foundational ideation and scope selection",
  },
  {
    label: "M2 analysis report",
    href: "/reports/m2-analysis-report.pdf",
    note: "Survey, diary study, persona, and journey map",
  },
  {
    label: "M3 report",
    href: "/reports/m3-report.pdf",
    note: "Speed dating, enactments, and system direction",
  },
  {
    label: "M4 prototype plan",
    href: "/reports/m4-prototype-plan.md",
    note: "Prototype logic and build plan",
  },
  {
    label: "High-level architecture diagram",
    href: "/reports/high-level-architecture-diagram.md",
    note: "System flow and component relationships",
  },
  {
    label: "M4 control logic excerpt",
    href: "/reports/m4-code-excerpt.md",
    note: "State machine and sensor logic used in the prototype",
  },
  {
    label: "Final slides",
    href: "/reports/final-presentation-slides.pdf",
    note: "Final presentation deck and architecture diagram",
  },
];

const idealFlow = [
  {
    title: "Phone docked",
    detail: "The student puts the phone into the slot when the bedtime routine starts.",
  },
  {
    title: "Sensor detects placement",
    detail: "The photoresistor or light sensor detects the change in the slot.",
  },
  {
    title: "Photon changes state",
    detail: "The controller switches from IDLE to SLEEPING and starts the bedtime routine.",
  },
  {
    title: "Ambient cues respond",
    detail: "Lights dim, audio can start, and the room becomes easier to settle into.",
  },
  {
    title: "App stores the session",
    detail: "The phone app records settings and bedtime timing for later reflection.",
  },
];

const m4ControlLogic = `const IDLE = 0;
const SLEEPING = 1;

let state = IDLE;

loop:
  update clock with Time.hour() and Time.minute()
  read photoresistor from A0

  if phone is docked:
    state = SLEEPING
    Particle.publish("sleep_mode", "on")
    dim NeoPixels gradually
  else:
    state = IDLE
    keep the dock warm and visible`;

export default function Page() {
  return (
    <main className="page-shell">
      <header className="site-nav">
        <Link className="brand" href="#top" aria-label="PausePad home">
          PausePad
        </Link>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#story">Story</a>
          <a href="#studies">Studies</a>
          <a href="#concept">Concept</a>
          <a href="#ideal">Ideal proposal</a>
          <a href="#video">Video</a>
          <a href="#appendix">Appendix</a>
        </nav>
      </header>

      <section className="hero section section--dark section--hero" id="top">
        <div className="hero-copy">
          <p className="mono eyebrow">M5 / Final Proposal + Video</p>
          <h1>
            PausePad
            <span>Interrupt the loop.</span>
          </h1>
          <p className="hero-lead">
            A gentle physical + mobile system that helps students place the phone down,
            shift out of passive scrolling, and move toward rest.
          </p>

          <div className="hero-support-grid" aria-label="Project framing">
            {heroPoints.map((point) => (
              <article key={point.label} className="support-card">
                <p className="mono eyebrow">{point.label}</p>
                <p>{point.text}</p>
              </article>
            ))}
          </div>

          <div className="hero-actions">
            <a className="pill-button pill-button--solid" href="#video">
              Watch video
            </a>
            <a className="pill-button" href="#appendix">
              See appendix
            </a>
          </div>

          <div className="metric-strip" aria-label="Project snapshot">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <PlaceholderFrame
          eyebrow="Product shot"
          title="PausePad dock + app"
          description="The final product image should present PausePad as one connected dock-and-app system."
          caption="16:9 / hero visual"
          variant="product"
        />
      </section>

      <section className="section section--light section--story section--split" id="story">
        <SectionHeading
          eyebrow="Motivation"
          title="The problem is not awareness. It is follow-through."
          description="Our research showed that students already know they should stop scrolling. The failure point is the low-energy moment when the phone is easiest to pick up and hardest to put down."
        />

        <div className="split-layout">
          <div className="story-stack">
            <p className="story-paragraph">
              In late-night moments, students use the phone as a low-friction escape. That
              makes scrolling the default behavior, even when it delays sleep and
              undermines the next day.
            </p>
            <div className="quote-block">
              <p>
                “We need support that helps users transition to rest without relying on
                willpower.”
              </p>
            </div>
            <div className="story-notes">
              {storySignals.map((signal) => (
                <div key={signal} className="story-note">
                  <span className="story-note__dot" aria-hidden="true" />
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <PlaceholderFrame
            eyebrow="Research framing"
            title="The nightly scroll loop"
            description="Visualize the late-night behavior the team is designing against."
            caption="Research framing / context"
            variant="research"
          />
        </div>
      </section>

      <section className="section section--light section--studies" id="studies">
        <SectionHeading
          eyebrow="Key insights"
          title="Three studies converged on the same direction."
          description="Survey data, diary reflections, and user enactments all pointed toward the same design constraints: low effort, clear physical action, and gentle escalation."
        />

        <div className="insight-grid">
          {insights.map((insight) => (
            <article key={insight.number} className="insight-card">
              <div className="mono insight-number">{insight.number}</div>
              <h3>{insight.title}</h3>
              <p>{insight.text}</p>
            </article>
          ))}
        </div>

        <div className="study-grid">
          {studies.map((study) => (
            <article key={study.title} className="study-block">
              <p className="mono eyebrow">{study.title}</p>
              <h3>{study.detail}</h3>
              <ul>
                {study.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--light section--evolution">
        <SectionHeading
          eyebrow="Prototype evolution"
          title="The idea sharpened as the fidelity increased."
          description="M3 tested the interaction shape, M4 grounded the experience in hardware, and the final proposal turns that learning into a cohesive system story."
        />

        <div className="prototype-grid">
        <PlaceholderFrame
          eyebrow="M3"
          title="Speed dating + user enactments"
          description="Low-fidelity props tested whether ambient, tactile, and spatial interventions could interrupt scrolling."
          caption="Prototype wave 1"
            variant="prototype"
          />
          <PlaceholderFrame
            eyebrow="M4"
            title="Functional dock prototype"
            description="Photon-based sensing, light behavior, and a speaker path for white noise and calming audio."
            caption="Prototype wave 2"
            variant="prototype"
          />
          <PlaceholderFrame
            eyebrow="Final"
            title="PausePad system concept"
            description="A polished case study of the final dock, app, and usage-tracking experience."
            caption="Prototype wave 3"
            variant="diagram"
          />
        </div>
      </section>

      <section className="section section--dark section--concept" id="concept">
        <SectionHeading
          eyebrow="Final system"
          title="PausePad makes one action legible: put the phone down."
          description="The system combines a dock, a sensor, a speaker, light, and a mobile app so the bedtime action is simple, physical, and easy to understand."
        />

        <div className="concept-layout">
          <div className="feature-list">
            {features.map((feature) => (
              <article key={feature.title} className="feature-item">
                <p className="mono">{feature.title}</p>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <PlaceholderFrame
            eyebrow="Architecture"
            title="High-level architecture diagram"
            description="The system view shows how the phone, sensor, controller, light, audio, and app work together."
            caption="High-level system view"
            variant="diagram"
          />
        </div>
      </section>

      <section className="section section--light section--ideal" id="ideal">
        <SectionHeading
          eyebrow="Ideal system proposal"
          title="The finished version should feel like a complete bedtime transition system."
          description="This section makes the next-step vision explicit: how the hardware, mobile app, and ambient cues would work together in a more complete final build."
        />

        <div className="ideal-layout">
          <div className="ideal-stack">
            <article className="note-card">
              <p className="mono eyebrow">Ideal experience</p>
              <h3>The phone leaves the hand and the room changes with it.</h3>
              <p>
                The user should be able to place the phone down once and immediately
                understand that the system has shifted into a rest-focused mode.
              </p>
            </article>

            <article className="note-card">
              <p className="mono eyebrow">Design priorities</p>
              <h3>Physical action, gentle cues, and very little friction.</h3>
              <p>
                The system should stay simple enough to use when energy is low, while
                still giving the user room to customize light, audio, and timing.
              </p>
            </article>

            <article className="note-card">
              <p className="mono eyebrow">Why this matters</p>
              <h3>The ideal system should make follow-through easier than avoidance.</h3>
              <p>
                The final concept should not depend on perfect motivation. It should make
                the healthy next step more obvious, more physical, and more immediate.
              </p>
            </article>
          </div>

          <article className="note-card architecture-diagram">
            <p className="mono eyebrow">High-level architecture diagram</p>
            <h3>Phone, sensor, Photon, output cues, and app</h3>
            <div className="architecture-flow" aria-label="System flow">
              {idealFlow.map((step, index) => (
                <div key={step.title} className="architecture-step">
                  <div className="architecture-node">
                    <p className="mono">{step.title}</p>
                    <p>{step.detail}</p>
                  </div>
                  {index < idealFlow.length - 1 ? (
                    <div className="architecture-arrow" aria-hidden="true">
                      ↓
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="code-grid">
          <article className="note-card code-card">
            <p className="mono eyebrow">M4 control logic excerpt</p>
            <h3>State machine and sensor logic</h3>
            <p>
              This condensed excerpt is based on the M4 prototype plan and shows the
              interaction logic used to drive the functional prototype.
            </p>
            <pre className="code-block">
              <code>{m4ControlLogic}</code>
            </pre>
          </article>

          <article className="note-card">
            <p className="mono eyebrow">Ideal system proposal</p>
            <h3>What the finished system would add</h3>
            <ul>
              <li>More robust personalization for light, audio, and bedtime timing.</li>
              <li>A stronger hardware/software split with clearer app feedback.</li>
              <li>Better support for shared rooms, different sleep habits, and accessibility needs.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--light section--video" id="video">
        <SectionHeading
          eyebrow="Video script"
          title="The video should show the experience, not just the device."
          description="Use a 3 to 5 minute sequence that follows a student through a real evening routine: arriving home, scrolling, getting nudged by the dock, and settling into rest."
        />

        <div className="video-layout">
          <PlaceholderFrame
            eyebrow="Video thumbnail"
            title="3 to 5 minute contextual demo"
            description="Use the final video poster or thumbnail for the portfolio page."
            caption="Voiceover recommended"
            variant="video"
          />

          <div className="video-notes">
            <article className="note-card">
              <p className="mono eyebrow">Scene 01</p>
              <h3>Arrive tired, default to scrolling</h3>
              <p>Show the moment where the phone is the easiest escape.</p>
            </article>
            <article className="note-card">
              <p className="mono eyebrow">Scene 02</p>
              <h3>Dock activates, cue escalates</h3>
              <p>Show light, audio, and pickup detection without overwhelming the scene.</p>
            </article>
            <article className="note-card">
              <p className="mono eyebrow">Scene 03</p>
              <h3>Phone is placed down, wind-down begins</h3>
              <p>Show the user completing the action and the system shifting into rest mode.</p>
            </article>
            <article className="note-card">
              <p className="mono eyebrow">Closing beat</p>
              <h3>The room settles and the routine feels finished.</h3>
              <p>End on a calm, readable state that makes the benefit of the system obvious.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light section--reflection section--split">
        <SectionHeading
          eyebrow="Reflection + accessibility"
          title="The next version should be gentler, clearer, and more inclusive."
          description="This section should show that the team is thinking ahead: what barriers exist, who is excluded, and what changes would make PausePad usable for more people."
        />

        <div className="reflection-grid">
          <article className="reflection-card">
            <p className="mono eyebrow">Accessibility</p>
            <h3>Who might hit barriers?</h3>
            <p>
              Users with hearing, vision, motor, or sensory-processing differences may
              experience barriers if the system relies too heavily on one modality. Loud
              sound cues could also be disruptive for roommates or people with sound
              sensitivity.
            </p>
          </article>

          <article className="reflection-card">
            <p className="mono eyebrow">Modifications</p>
            <h3>What should change next?</h3>
            <p>
              The system should support redundant cues, adjustable volume, high-contrast
              visuals, screen-reader friendly app labels, larger touch targets, and a
              quiet mode for shared spaces.
            </p>
          </article>

          <article className="reflection-card reflection-card--wide">
            <p className="mono eyebrow">Limitations</p>
            <h3>What we would improve if we kept going</h3>
            <p>
              The current concept is strong at the transition moment, but it still needs
              stronger long-term adaptation, better personalization, and a more polished
              demonstration of the hardware/software split.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--light section--appendix" id="appendix">
        <SectionHeading
          eyebrow="Appendix"
          title="Source materials and supporting assets"
          description="These links let graders and future viewers trace the project back through the milestones and final artifacts."
        />

        <div className="appendix-grid">
          {appendixLinks.map((item) => (
            <a key={item.label} className="appendix-card" href={item.href}>
              <p className="mono eyebrow">{item.label}</p>
              <h3>{item.note}</h3>
              <span className="appendix-link">Open file</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="mono eyebrow">Team</p>
          <p>Mustafa Mirza · Julia Norton · Marsalis Jolley · Andy Xu</p>
        </div>
        <div>
          <p className="mono eyebrow">PausePad</p>
          <p>Final Proposal and Video</p>
        </div>
      </footer>
    </main>
  );
}
