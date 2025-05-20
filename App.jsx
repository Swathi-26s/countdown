import { useState } from "react"
import Sample from "./components/Sample"


function App() {
  const myName = "Swathi"
  const myAge = 19
  const myHobby = "Hearing songs"
  console.log("This is app component", myHobby)

  const [count, setCount] = useState(0)
  return(
    <>
   <h1 className="text-3xl underline text-violet-600">My React App</h1>
      <button>Click here</button><br></br>
      <button className="bg-amber-400 p-2" onClick={() => setCount(count + 1)}>Count {count} </button>

      
      {/* <Sample myName={myName} myAge={myAge} myHobby={myHobby}/> */}
      </>
    
  )
}


export default App

