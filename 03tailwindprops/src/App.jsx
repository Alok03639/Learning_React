import { Component, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username : "hitesh",
    age : 21
  }
  let arr = [1, 2, 3];

  return (
    <>
      <h3 className = 'bg-green-500 p-4-rounded-xl text-xl '>TailWind Class</h3>

      <Card channel = "chai" obj = {myobj} myarr = {arr} />
      
    </>
  )
}

export default App
