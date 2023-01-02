// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App(props) {
  const { name } = props
  return (
    <div className="App">
      <h1>Hello { name }</h1>
    </div>
  )
}

export default App
