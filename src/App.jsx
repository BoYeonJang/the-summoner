import { useState } from 'react'
// import './App.css'
import Screen from './components/Screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-300 w-screen h-screen'>
      <Screen />
    </div>
  )
}

export default App
