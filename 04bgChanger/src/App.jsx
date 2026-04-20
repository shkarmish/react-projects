import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
 <div className="fixed flex flex-wrap justify-center gap-3 bottom-12 inset-x-0 px-2">
  
  <button onClick={() => {setColor('Orange')}} className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
    Orange
  </button>

  <button onClick={() => {setColor('Green')}} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
    Green
  </button>

  <button onClick={() => {setColor('Yellow')}} className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500">
    Yellow
  </button>

  <button onClick={() => {setColor('Blue')}} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
    Blue
  </button>

    <button onClick={() => {setColor('Olive')}} className="px-4 py-2 bg-olive-500 text-white rounded-lg shadow hover:bg-olive-600">
    Default
  </button>

</div>
      
    </div>
  
  )
}

export default App
