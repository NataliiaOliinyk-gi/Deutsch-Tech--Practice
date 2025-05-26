import { useState } from 'react'
import RegistrationForm from './RegistrationForm/RegistrationForm'

import './App.css'

function App() {

  const [data, setData] = useState(1);
  console.log("App.jsx gerender");
  
  return (
    <>
      <RegistrationForm />
      <button onClick={() => setData(data + 1)}>
        Click
      </button>
    </>
  )
}

export default App
