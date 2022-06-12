import { useState } from 'react'

function Screen() {
  const [count, setCount] = useState(0)

  return (
    // 화면 중앙 정렬
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-800 rounded-2xl drop-shadow-4xl text-white box-border w-1/2 h-2/3 p-4'>
            <h1>the</h1>
        </div>
    </div>
  )
}

export default Screen
