import axios from "axios";

// const API_KEY = "wx78unvg1it8442wx" //used 
const API_KEY = "wxmsauhlhwo8e02vt"
const BASE_URL = "https://techhk.aoscdn.com/"

export const EnchancedImageAPI = async (file) => { 
    try {
        const taskId  = await uploadImage(file); // Assuming uploadImage is a function that uploads the image and returns a task ID
        console.log("Task ID:", taskId);

        // Simulate waiting for the task to complete
        const enchancedImageData = await PollForEnhancedImage(taskId); // Assuming fetchEnhancedImage is a function that fetches the enhanced image using the task ID
        console.log("Enhanced Image Data:", enchancedImageData);
        return enchancedImageData; // Return the enhanced image data

    } catch (error) {
        console.error("Error in EnchancedImageAPI:", error);
        throw error; // Re-throw the error for handling in the calling function
    }
}

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
    }
})

   if(!data?.data.task_id) {
        throw new Error("Task ID not found in response");
    }
    return data.data.task_id; // Return the task ID from the response
};

const fetchEnhancedImage = async (taskId) => {
     const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, 
        {
        headers: {
           
            "X-API-KEY": API_KEY,
                 } 
        });

        if(!data?.data) {
            throw new Error("Enhanced image data not found in response");
        }
        return data.data; // Return the enhanced image data from the response
};


const PollForEnhancedImage = async (taskId , retries = 0 ) => { 
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4) {
        console.log("processing...");
        
        if(retries >= 15) {
            throw new Error("Max retries reached. Enhanced image not ready.");
            
        }

        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
            return PollForEnhancedImage(taskId, retries + 1); // Retry fetching the enhanced image
    };

    console.log("Enhanced image ready:", result.image);
    return result; // Return the enhanced image URL
}


// data
// : 
// {task_id: 'dc452e38-7a3c-490e-8952-d3509735ddf0'}
// message
// : 
// "success"
// status
// : 
// 200


// {status: 200, data: {…}}
// data
// : 
// completed_at
// : 
// 1755002191
// created_at
// : 
// 1755002184
// download_time
// : 
// 59
// image
// : 
// "https://wxtechhk.oss-cn-hongkong.aliyuncs.com/tasks/output/scale/dc452e38-7a3c-490e-8952-d3509735ddf0.jpg?x-oss-credential=LTAI5tGjJnh66c1txANiRBQN/20250812/cn-hongkong/oss/aliyun_v4_request&x-oss-date=20250812T125153Z&x-oss-expires=3600&x-oss-signature=4c70cb07dea204559e5d09e5a320fde8a393966f61718a8568b4062dc1b07ba9&x-oss-signature-version=OSS4-HMAC-SHA256"
// image_height
// : 
// 4032
// image_width
// : 
// 3024
// processed_at
// : 
// 1755002184
// progress
// : 
// 100
// return_type
// : 
// 1
// state
// : 
// 1
// state_detail
// : 
// "Complete"
// task_id
// : 
// "dc452e38-7a3c-490e-8952-d3509735ddf0"
// time_elapsed
// : 
// 6938.47998046875
// type
// : 
// "clean"
// [[Prototype]]
// : 
// Object
// status
// : 
// 200