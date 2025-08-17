import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"
import { EnchancedImageAPI } from "../utils/EnchancedImageApi"


const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loader, setloader] = useState(false)

  const uploadHandler = async (file) => { 
    console.log(URL.createObjectURL(file));
    setUploadImage(URL.createObjectURL(file)); // Set the uploaded image URL
    setloader(true); // Set loader to true when an image is being uploaded
   
    // call an API or perform any other actions here

    try {
      const EnchancedURL = await EnchancedImageAPI(file);
      setEnhancedImage(EnchancedURL); // Set the enhanced image URL
      setloader(false); // Set loader to false after the image is enhanced
    } catch (error) {
      console.log("Error enhancing image:", error);
    }
  };

  console.log(enhancedImage)
  console.log('final result ',enhancedImage)

  return (
    <>
    
    <ImageUpload  uploadHandler={uploadHandler}/>
    <ImagePreview 
      upload={uploadImage} 
      enhanced={enhancedImage?.image} 
      loader={loader} 
      
    />
   
    </>
  )
}

export default Home