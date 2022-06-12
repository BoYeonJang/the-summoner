import { useState } from 'react'
import Topbar from './Topbar'
import Content from './Content'

function Screen() {
  const [count, setCount] = useState(0)

  return (
    // 화면 중앙 정렬
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-slate-800 rounded-2xl drop-shadow-4xl text-white box-border w-1/2 h-2/3 pt-2 pb-8'>
        <Topbar />
        <Content />
      </div>
    </div>
  )
}

export default Screen
