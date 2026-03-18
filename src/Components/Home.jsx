import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"
import { EnchancedImageAPI } from "../utils/EnchancedImageApi"

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)

  const uploadHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoader(true)
    setError(null)
    setEnhancedImage(null)

    try {
      const enchancedURL = await EnchancedImageAPI(file)
      setEnhancedImage(enchancedURL)
    } catch (err) {
      console.error("Error enhancing image:", err)
      setError("Enhancement failed. Please try a different image.")
    } finally {
      setLoader(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>

      {/* Upload */}
      <ImageUpload uploadHandler={uploadHandler} />

      {/* Error */}
      {error && (
        <div className="error-bar">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          {error}
        </div>
      )}

      {/* Processing badge */}
      {loader && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="processing-badge">
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            AI is analyzing your image...
          </div>
        </div>
      )}

      {/* Divider with label — only when image is loaded */}
      {uploadImage && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: '4px 0',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
          }}>
            {loader ? 'Processing' : enhancedImage ? 'Result' : 'Preview'}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
        </div>
      )}

      {/* Preview */}
      <ImagePreview
        upload={uploadImage}
        enhanced={enhancedImage?.image}
        loader={loader}
      />

    </div>
  )
}

export default Home
