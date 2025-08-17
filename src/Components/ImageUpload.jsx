
const ImageUpload = (props) => {

  const showHandler = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      props.uploadHandler(file); // Call the uploadHandler prop with the selected file
    }
    // Here you can handle the image file, e.g., set it to state or upload

  }

  return (
    <div className='bg-white shadow-md rounded-lg p-6 max-w-2xl'>
      <label 
      htmlFor="fileinput" 
      className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
        
        <input type="file" id='fileinput' className='hidden' onChange={showHandler} />
        <span className='text-lg font-medium text-gray-800'>CLick and Drag to upload your Image</span>
        
      </label> 


      
    </div>
  )
}

export default ImageUpload