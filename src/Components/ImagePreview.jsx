import Loading from "./Loading"

const ImagePreview = (props) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '16px',
      width: '100%',
    }}>

      {/* ── Original ── */}
      <div className="preview-card">
        <div className="preview-header">
          <span className="preview-dot" style={{ background: 'var(--text-dim)' }} />
          <span className="preview-label">Original</span>
        </div>

        <div style={{ flex: 1 }}>
          {props.upload ? (
            <img
              src={props.upload}
              alt="Original"
              className="img-reveal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '280px' }}
            />
          ) : (
            <div className="placeholder-area">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p>No image selected</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Enhanced ── */}
      <div className="preview-card" style={{
        borderColor: props.enhanced && !props.loader ? 'rgba(91,196,232,0.15)' : undefined,
      }}>
        <div className="preview-header">
          <span className="preview-dot" style={{
            background: props.loader ? 'var(--accent-aurora)' : props.enhanced ? 'var(--accent-aurora)' : 'var(--text-dim)',
            boxShadow: (props.loader || props.enhanced) ? '0 0 8px var(--accent-aurora)' : 'none',
          }} />
          <span className="preview-label">Enhanced</span>
          {props.enhanced && !props.loader && (
            <span className="ai-tag">✦ AI Enhanced</span>
          )}
        </div>

        <div style={{ flex: 1 }}>
          {props.loader ? (
            <Loading />
          ) : props.enhanced ? (
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="img-reveal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '280px' }}
            />
          ) : (
            <div className="placeholder-area">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <p>Awaiting enhancement</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default ImagePreview
