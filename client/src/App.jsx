import { useState } from 'react'

import './App.css'

import HeroSection from './components/HeroSection.jsx'
import ContactUs from './components/Contactus.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <HeroSection />
  {/* <ContactUs /> */}
  </>
  )
}

export default App
