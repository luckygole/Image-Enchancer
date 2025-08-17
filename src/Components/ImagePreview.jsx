import Loading from "./Loading";

const ImagePreview = (props) => {
  console.log(props.enhanced)
  return (
    <div className='mt-8 grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-4xl w-full h-120 mx-auto contain-content'>
      {/* Original Image */}
        <div className='bg-white shadow-md rounded-xl overflow-hidden text-center'>
            <h2 className='text-xl font-semibold bg-gray-800 text-white p-2 '>
              Original Image
              </h2> 
              { props.upload ? <img src={props.upload} alt="image"  className='w-full h-full object-cover'/> : 
            
            <div className='flex justify-center items-center bg-gray-200 h-100 font-semibold'>No Image Selected</div>
    }
    </div>


    {/* Enchanced image */}
     <div className='bg-white shadow-md rounded-xl overflow-hidden text-center'>
            <h2 className='text-xl font-semibold bg-blue-800 text-white p-2'>
              Enhanced Image 
              </h2> 

             { props.enhanced  && !props.lorder && (
               <img src={props.enhanced} alt="image"  className='w-full h-full object-cover'/> 
               ) }
           

             { props.loader ? ( 
              <Loading /> 
            ) : (  
            <div className='flex justify-center items-center bg-gray-200 h-100 font-semibold'>No Enhenced Image</div>
            ) }
    </div>

   
      </div>
  )
}

export default ImagePreview