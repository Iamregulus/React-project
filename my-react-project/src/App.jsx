import { useState } from 'react'
import Header from './assets/Header'
import Sidebar from './assets/Sidebar'
import Home from './assets/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className = 'grid-container' >
    <Header/>
    <Sidebar/>
    <Home/>
   </div>
  )
}

export default App
