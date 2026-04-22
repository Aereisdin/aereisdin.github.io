import './Personal.css'

function Personal() {
  return (
    <section id="personal" className="section personal reveal-on-scroll">
      <div className="section__header personal__header">
        <p className="section__eyebrow">Personal</p>
        <h2>Personal</h2>
        <p>
          Outside of work, I am drawn to building things that feel intentional,
          whether that means shaping systems, refining spaces, or creating
          experiences that are both functional and well-crafted.
        </p>
      </div>

      <div className="personal__grid">
        <article className="personal__card">
          <h3>What I keep returning to</h3>
          <p>
            I am especially interested in work that blends structure with
            creativity, where something can be dependable, but also thoughtful,
            cohesive, and quietly distinctive.
          </p>
        </article>

        <article className="personal__card personal__card--accent">
          <h3>How that shows up</h3>
          <p>
            That same instinct is part of what draws me to intentional design,
            atmosphere, and the kind of details that make a system or space feel
            calm, deliberate, and complete.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Personal