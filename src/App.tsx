import './index.css'

interface Tool {
  name: string
  description: string
  status: 'live' | 'dev' | 'planned'
  tags: string[]
  github?: string
  launchHref?: string
}

const statusStyles = {
  live: { label: 'Live', className: 'tool-status tool-status--live' },
  dev: { label: 'Dev', className: 'tool-status tool-status--dev' },
  planned: { label: 'Planned', className: 'tool-status tool-status--planned' },
}

const tools: Tool[] = [
  {
    name: 'INVARIANT',
    description: 'Web application security detection engine. Edge sensor + RASP + CLI scanner. 168 classes.',
    status: 'live',
    tags: ['security', 'web', 'web-app', 'rasp', 'cli'],
    launchHref: 'https://santh.io/collective',
  },
  {
    name: 'Trace',
    description: 'Passive network security monitor for local traffic visibility and IDS-style detection.',
    status: 'dev',
    tags: ['rust', 'network', 'ids', 'passive'],
    github: 'https://github.com/mukundthiru1/trace',
  },
  {
    name: 'Fracture',
    description: 'App behavioral analysis and system monitoring for real-time process, APK, and IPA risk assessment.',
    status: 'dev',
    tags: ['tauri', 'analysis', 'monitoring', 'behavior'],
    github: 'https://github.com/mukundthiru1/fracture',
  },
  {
    name: 'Vault',
    description: 'Local secrets manager with zero network communication and AES-256 secure storage.',
    status: 'planned',
    tags: ['desktop', 'secrets', 'privacy', 'aes-256'],
  },
  {
    name: 'Lens',
    description: 'Browser extension security scanner using the INVARIANT engine, running client-side.',
    status: 'planned',
    tags: ['browser', 'extension', 'scanner', 'client-side'],
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  const status = statusStyles[tool.status]
  return (
    <article className="tool-card">
      <div className="tool-card__header">
        <h2 className="tool-card__name">{tool.name}</h2>
        <span className={status.className}>{status.label}</span>
      </div>
      <p className="tool-card__description">{tool.description}</p>
      <div className="tool-card__tags" aria-label="tool tags">
        {tool.tags.map((tag) => (
          <span key={tag} className="tool-card__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="tool-card__actions">
        {tool.github ? (
          <a
            className="tool-card__link"
            href={tool.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        ) : (
          <span className="tool-card__link tool-card__link--muted">No repo yet</span>
        )}
        {tool.status === 'live' && tool.launchHref ? (
          <a
            className="tool-card__launch"
            href={tool.launchHref}
            target="_blank"
            rel="noopener"
          >
            Launch
          </a>
        ) : null}
      </div>
    </article>
  )
}

function ToolStatusBar({ tools }: { tools: Tool[] }) {
  const liveCount = tools.filter((tool) => tool.status === 'live').length
  const devCount = tools.filter((tool) => tool.status === 'dev').length
  const plannedCount = tools.filter((tool) => tool.status === 'planned').length

  return (
    <section className="status-bar" aria-label="tool status dashboard">
      <div className="status-pill">
        <span className="status-pill__value">{liveCount}</span>
        <span className="status-pill__label">Live</span>
      </div>
      <div className="status-pill">
        <span className="status-pill__value">{devCount}</span>
        <span className="status-pill__label">In Dev</span>
      </div>
      <div className="status-pill">
        <span className="status-pill__value">{plannedCount}</span>
        <span className="status-pill__label">Planned</span>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <main className="stack-shell">
        <header className="stack-header">
          <p className="stack-header__kicker">Santh Stack</p>
          <h1 className="stack-header__title">
            Santh Stack — Security tools built for builders
          </h1>
          <p className="stack-header__tagline">Everything runs locally. Nothing phones home.</p>
        </header>

        <ToolStatusBar tools={tools} />

        <section className="tool-grid" aria-label="tool launcher">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </section>
      </main>

      <footer className="stack-footer">
        <p className="stack-footer__brand">santhstack.santh.io</p>
        <nav className="stack-footer__links">
          <a href="https://santh.io" target="_blank" rel="noopener">
            santh.io
          </a>
          <a href="https://santh.io/collective" target="_blank" rel="noopener">
            collective.santh.io
          </a>
          <a href="https://santh.io/terminal" target="_blank" rel="noopener">
            terminal.santh.io
          </a>
          <a href="https://santh.io/blog" target="_blank" rel="noopener">
            blog.santh.io
          </a>
          <a href="https://github.com/mukundthiru1" target="_blank" rel="noopener">
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  )
}
