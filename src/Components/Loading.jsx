const Loading = () => {
  return (
    <div className="loading-container">

      {/* Spinner */}
      <div className="spinner-wrap">
        <div className="spinner-track" />
        <div className="spinner-arc" />
        <div className="spinner-inner" />
        <div className="spinner-core">
          <div className="spinner-dot" />
        </div>
      </div>

      {/* Label + dots */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <p className="loading-text">Enhancing</p>
        <div className="loading-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

    </div>
  )
}

export default Loading
