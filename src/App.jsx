//import { useState } from 'react'
import Header from './components/Header.jsx'
import Forms from './components/Forms.jsx'
import Content from './components/Content.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0) THIS IS HOW TO MODIFY STATE WITH RENDER
  const usr = 'test';

  return (
    <>
      <Header />
      <Forms />
      <Content />
    </>
  )
}

export default App
