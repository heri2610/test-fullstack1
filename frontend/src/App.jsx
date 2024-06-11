import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Content from './components/Content'

function App() {

  return (
    <div className="bg-[#01377F] min-h-screen">
      <Navbar/>
      <Banner/>
      <Content/>
    </div>
  )
}

export default App
