import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [freedback, setFreedback] = useState({
    good: 0,
    neutral: 0, 
    bad:0
  })

  return (
    <div>
      <h1><span>Sip</span> Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
   </div>

  );
}

export default App
 