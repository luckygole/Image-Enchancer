// import { useState } from "react"
// import ImagePreview from "./ImagePreview"
// import ImageUpload from "./ImageUpload"
// import { EnchancedImageAPI } from "../utils/EnchancedImageApi"

// const Home = () => {
//   const [uploadImage, setUploadImage] = useState(null)
//   const [enhancedImage, setEnhancedImage] = useState(null)
//   const [loader, setLoader] = useState(false)
//   const [error, setError] = useState(null)

//   const uploadHandler = async (file) => {
//     setUploadImage(URL.createObjectURL(file))
//     setLoader(true)
//     setError(null)
//     setEnhancedImage(null)

//     try {
//       const enchancedURL = await EnchancedImageAPI(file)
//       setEnhancedImage(enchancedURL)
//     } catch (err) {
//       console.error("Error enhancing image:", err)
//       setError("Enhancement failed. Please try a different image.")
//     } finally {
//       setLoader(false)
//     }
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>

//       {/* Upload */}
//       <ImageUpload uploadHandler={uploadHandler} />

//       {/* Error */}
//       {error && (
//         <div className="error-bar">
//           <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
//           </svg>
//           {error}
//         </div>
//       )}

//       {/* Processing badge */}
//       {loader && (
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <div className="processing-badge">
//             <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
//             AI is analyzing your image...
//           </div>
//         </div>
//       )}

//       {/* Divider with label — only when image is loaded */}
//       {uploadImage && (
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px',
//           margin: '4px 0',
//         }}>
//           <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
//           <span style={{
//             fontFamily: "'Syne', sans-serif",
//             fontSize: '10px',
//             fontWeight: 600,
//             letterSpacing: '0.12em',
//             textTransform: 'uppercase',
//             color: 'var(--text-dim)',
//           }}>
//             {loader ? 'Processing' : enhancedImage ? 'Result' : 'Preview'}
//           </span>
//           <div style={{ flex: 1, height: '1px', background: 'var(--border-dim)' }} />
//         </div>
//       )}

//       {/* Preview */}
//       <ImagePreview
//         upload={uploadImage}
//         enhanced={enhancedImage?.image}
//         loader={loader}
//       />

//     </div>
//   )
// }

// export default Home


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

  const downloadHandler = () => {
    const imageUrl = enhancedImage?.image
    if (!imageUrl) return

    // Case 1 — Base64 string (data:image/...)
    if (imageUrl.startsWith('data:')) {
      const link = document.createElement('a')
      link.href = imageUrl
      link.download = `enhanced-image-${Date.now()}.jpg`
      link.click()
      return
    }

    // Case 2 — Blob URL (blob:http://...)
    if (imageUrl.startsWith('blob:')) {
      const link = document.createElement('a')
      link.href = imageUrl
      link.download = `enhanced-image-${Date.now()}.jpg`
      link.click()
      return
    }

    // Case 3 — Regular https URL (open in new tab as fallback)
    window.open(imageUrl, '_blank')
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

      {/* Divider — only when image is loaded */}
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

      {/* Download Button — only show when enhanced image is ready */}
      {enhancedImage?.image && !loader && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <button
            onClick={downloadHandler}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, rgba(91,196,232,0.15) 0%, rgba(91,196,232,0.05) 100%)',
              border: '1px solid rgba(91,196,232,0.3)',
              color: 'var(--accent-ice)',
              fontFamily: "'Syne', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 24px rgba(91,196,232,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91,196,232,0.25) 0%, rgba(91,196,232,0.12) 100%)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(91,196,232,0.2)'
              e.currentTarget.style.borderColor = 'rgba(91,196,232,0.5)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91,196,232,0.15) 0%, rgba(91,196,232,0.05) 100%)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(91,196,232,0.08)'
              e.currentTarget.style.borderColor = 'rgba(91,196,232,0.3)'
              e.currentTarget.style.transform = 'translateY(0px)'
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Enhanced Image
          </button>
        </div>
      )}

    </div>
  )
}

export default Home