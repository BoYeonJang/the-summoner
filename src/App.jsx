import { useState } from 'react'
// import './App.css'
import Screen from './components/Screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-300 w-screen h-screen'>
      <Screen className='top-40' />
    </div>
  )
}

export default App
