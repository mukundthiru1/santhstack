import './index.css'

interface Tool {
  name: string
  description: string
  status: 'live' | 'dev' | 'planned'
  tags: string[]
  href?: string
}

const tools: Tool[] = [
  {
    name: 'Trace',
    description: 'Passive network security monitor. Captures traffic, discovers devices, builds trust scores through multi-layer analysis — protocol compliance, behavioral envelopes, and stress testing. Runs on your home network, watches everything, trusts nothing.',
    status: 'dev',
    tags: ['rust', 'network', 'ids', 'passive-recon'],
    href: 'https://github.com/mukundthiru1/trace',
  },
  {
    name: 'Fracture',
    description: 'App behavioral analysis and system monitor. Drop an APK or IPA for full static analysis, monitor live processes and orphaned telemetry in real time, or talk to the AI about your system\'s risk posture. Desktop app built with Tauri.',
    status: 'dev',
    tags: ['tauri', 'reverse-engineering', 'monitoring', 'llm'],
    href: 'https://github.com/mukundthiru1/fracture',
  },
]

function StatusBadge({ status }: { status: Tool['status'] }) {
  const labels = { live: 'Live', dev: 'In Development', planned: 'Planned' }
  return (
    <span className={`tool-card__status tool-card__status--${status}`}>
      {labels[status]}
    </span>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  const Tag = tool.href ? 'a' : 'div'
  const props = tool.href ? { href: tool.href, target: '_blank', rel: 'noopener' } : {}

  return (
    <Tag className="tool-card" {...props}>
      <StatusBadge status={tool.status} />
      <h3 className="tool-card__name">{tool.name}</h3>
      <p className="tool-card__desc">{tool.description}</p>
      <div className="tool-card__tags">
        {tool.tags.map(tag => (
          <span key={tag} className="tool-card__tag">{tag}</span>
        ))}
      </div>
    </Tag>
  )
}

export default function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav__brand">
          SANTH<span>STACK</span>
        </div>
        <ul className="nav__links">
          <li><a href="#tools" className="nav__link">Tools</a></li>
          <li><a href="https://santh.io" className="nav__link" target="_blank" rel="noopener">Research</a></li>
          <li><a href="https://github.com/mukundthiru1" className="nav__link" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </nav>

      <main className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero__label">Security Tooling</div>
          <h1 className="hero__title">
            Tools built from<br />
            vulnerability research.
          </h1>
          <p className="hero__subtitle">
            Every tool starts as a CVE breakdown. When the research reveals
            a detection gap, we build the scanner. When the patch analysis
            exposes a pattern, we build the detector.
          </p>
          <div className="hero__cta-row">
            <a href="#tools" className="hero__cta hero__cta--primary">
              View tools →
            </a>
            <a href="https://santh.io" className="hero__cta" target="_blank" rel="noopener">
              Read the research
            </a>
          </div>
          <div className="hero__divider" />
        </section>

        {/* Tools Grid */}
        <section className="tools" id="tools">
          <div className="section__label">Tooling</div>
          <h2 className="section__title">The Stack</h2>
          <p className="section__subtitle">
            Open security tools. Each one traces back to a specific
            piece of research.
          </p>

          <div className="tools__grid">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        {/* Research Cross-Link */}
        <section className="research-link">
          <div className="research-link__inner">
            <div className="research-link__text">
              <h2 className="research-link__title">The Research Behind the Tools</h2>
              <p className="research-link__desc">
                Every tool in the stack is grounded in independent
                vulnerability research. CVE breakdowns, exploit analysis,
                and patch dissection — all published on santh.io.
              </p>
            </div>
            <a href="https://santh.io/#blog" className="research-link__cta" target="_blank" rel="noopener">
              santh.io/research →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container">
        <div className="footer">
          <div className="footer__brand">SANTH STACK © {new Date().getFullYear()}</div>
          <ul className="footer__links">
            <li><a href="https://santh.io" className="footer__link" target="_blank" rel="noopener">santh.io</a></li>
            <li><a href="https://github.com/mukundthiru1" className="footer__link" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="mailto:contact@santh.io" className="footer__link">contact@santh.io</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
