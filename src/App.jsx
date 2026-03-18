import Home from './Components/Home'
import './App.css';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-void)' }}>

      {/* ── Animated Background ── */}
      <div className="aurora-bg">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>
      <div className="grid-overlay" />
      <div className="scanline" />

      {/* ── Page Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '64px 16px 48px',
      }}>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '52px' }}>

          <div className="status-badge fade-up fade-up-1" style={{ marginBottom: '24px' }}>
            <span className="pulse-dot" />
            AI-Powered Enhancement
          </div>

          <h1 className="hero-title fade-up fade-up-2" style={{ marginBottom: '18px' }}>
            Transform Your<br />
            <span className="gradient-word">Images Instantly</span>
          </h1>

          <p className="fade-up fade-up-3" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--text-mid)',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}>
            Upload any photo and watch our AI breathe new life into every pixel — sharper, richer, extraordinary.
          </p>
        </header>

        {/* Main Card */}
        <main className="glass-card fade-up fade-up-4" style={{
          width: '100%',
          maxWidth: '780px',
          padding: '32px',
        }}>
          <Home />
        </main>

        {/* Footer */}
        <footer style={{ marginTop: '36px' }}>
          <p className="footer-text fade-up fade-up-4">
            <span className="sep" />
            Crafted with precision
            <span className="sep" />
            <span className="author">@LuckyGole</span>
            <span className="sep" />
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App
