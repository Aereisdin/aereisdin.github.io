import crestLogo from '../assets/FoxLanternLemon35.png'
import './FoxLanternLemon.css'

const symbols = [
  {
    title: 'The Fox',
    description:
      'Discovery, subtle detail, and the kind of small surprise guests notice after they settle in.',
  },
  {
    title: 'The Lantern',
    description:
      'Warmth, guidance, and a hospitality style built around atmosphere, comfort, and calm lighting.',
  },
  {
    title: 'The Lemon',
    description:
      'Freshness, California character, and a brighter sensory layer that keeps the experience grounded and local.',
  },
]

const highlights = [
  'Boutique short-term and mid-term hospitality concept in Chico, California.',
  'Modern old-world inn feeling without turning the space into a theme set.',
  'Designed for rest, recovery, and straightforward living near Meriam Park and Enloe.',
]

function FoxLanternLemon() {
  return (
    <section
      id="fox-lantern-lemon"
      className="section fox-section reveal-on-scroll"
    >
      <div className="section__header fox-section__header">
        <p className="section__eyebrow">Featured Venture</p>
        <h2>The Fox, Lantern, and Lemon</h2>
        <p>
          This is a boutique hospitality concept I have been shaping around an
          old-world inn sensibility, quieter guest experience, and a brand system
          that feels story-driven without becoming overly theatrical.
        </p>
      </div>

      <div className="fox-section__grid">
        <div className="fox-section__content">
          <div className="fox-section__intro-card">
            <p className="fox-section__label">What it is</p>
            <p>
              A calm, design-forward stay built for intentional travelers,
              traveling professionals, and anyone who wants a warmer alternative
              to a generic hotel room.
            </p>
          </div>

          <ul className="fox-section__highlights" aria-label="Project highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="fox-section__symbols">
            {symbols.map((symbol) => (
              <article key={symbol.title} className="fox-section__symbol-card">
                <h3>{symbol.title}</h3>
                <p>{symbol.description}</p>
              </article>
            ))}
          </div>

          <div className="fox-section__actions">
            <a
              className="button-link"
              href="https://airbnb.com/h/foxlanternlemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Airbnb listing
            </a>
            <span className="fox-section__note">
              A dedicated site for the brand is planned later.
            </span>
          </div>
        </div>

        <aside className="fox-section__brand-panel" aria-label="Brand marks">
          <div className="fox-section__crest-wrap">
            <img
              src={crestLogo}
              alt="The Fox, Lantern, and Lemon crest mark"
              className="fox-section__crest"
            />
          </div>

          <div className="fox-section__motif-row" aria-label="Core brand symbols">
            <span>The Fox</span>
            <span>The Lantern</span>
            <span>The Lemon</span>
          </div>

          <div className="fox-section__panel-copy">
            <p className="fox-section__label">Brand direction</p>
            <p>
              Heraldic shapes, wood-burn textures, and quiet storytelling through
              recurring motifs, lighting, and guest-facing detail.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default FoxLanternLemon