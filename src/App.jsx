import Home from './Components/Home'
import './app.css';

function App() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4"> 

      <div className='text-center mb-8 '>

        <h1 className='text-5xl font-bold text-gray-800 mb-2'>Ai Image Enhancer { " " }</h1>
        <p className='text-lg text-gray-500'> Upload Your image and let Ai Enhance it</p>

      </div>

     <Home />

     <div className='text-gray-500 text-sm mt-6'>
        Powered by @LuckyGole
     </div>

    </div>
  )
}

export default App
