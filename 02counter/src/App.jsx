import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const [counter, setCounter] = useState(15)
const addValue = () => {
  if(counter < 20){
 setCounter(counter + 1)
  }
 
}
const decreaseValue = () => {
  if(counter > 0){
  setCounter(counter - 1)
  }

}
console.log(`Counter Value : ${counter}`);
  return (
    <>
<h1>My new Project</h1>
<h2>Counter Value : {counter}</h2>
<button onClick={addValue}>Add Value {counter}</button>
<br></br>
<button onClick={decreaseValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
