const ImageUpload = (props) => {

  const showHandler = (e) => {
    const file = e.target.files[0]
    if (file) props.uploadHandler(file)
  }

  const dragOverHandler = (e) => e.preventDefault()

  const dropHandler = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) props.uploadHandler(file)
  }

  return (
    <label
      htmlFor="fileinput"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      className="upload-zone"
      style={{ display: 'block' }}
    >
      <input
        type="file"
        id="fileinput"
        accept="image/*"
        className="hidden"
        style={{ display: 'none' }}
        onChange={showHandler}
      />

      {/* Icon ring */}
      <div className="upload-icon-ring">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="var(--accent-ice)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>

      {/* Text */}
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '17px',
        fontWeight: 700,
        color: 'var(--text-bright)',
        marginBottom: '6px',
        position: 'relative',
        zIndex: 1,
      }}>
        Drop your image here
      </p>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '13px',
        fontWeight: 300,
        color: 'var(--text-dim)',
        marginBottom: '24px',
        position: 'relative',
        zIndex: 1,
      }}>
        or click anywhere to browse
      </p>

      {/* Browse button */}
      <span className="upload-btn" style={{ position: 'relative', zIndex: 1 }}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
        Choose File
      </span>

      {/* Format hint */}
      <p style={{
        marginTop: '20px',
        fontSize: '11px',
        color: 'var(--text-dim)',
        letterSpacing: '0.06em',
        position: 'relative',
        zIndex: 1,
      }}>
        JPG · PNG · WEBP · Max 10 MB
      </p>
    </label>
  )
}

export default ImageUpload
