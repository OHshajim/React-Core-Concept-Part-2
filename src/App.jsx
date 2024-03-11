// import { useState } from 'react'
import './App.css'
import Members from './Members'
// import Counter from './Counter'
// import Team from './Team'

function App() {

  // const HandleClick = () => {
  //   alert('hello ')
  // }
  // const HandleClick2 = (num) => {
  //   alert('hello ' + num)
  // }
  
  return (
    <>
      <h2>React Core Concept Part-2</h2>
      <Members></Members>

      {/* <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>click me</button> */}
      {/* pass the value in  onclick  */}
      {/* <button onClick={() => HandleClick2("masud")}>click me</button> */}
    </>
  )
}

export default App
