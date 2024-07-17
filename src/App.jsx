//import { useState } from 'react'
import Header from './components/Header.jsx'
import Personal from './components/Personal.jsx'
import Professional from './components/Professional.jsx'
import Education from './components/Education.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0) THIS IS HOW TO MODIFY STATE WITH RENDER

  return (
    <>
      <Header />
      <Personal />
      <Professional />
      <Education />
    </>
  )
}

export default App
