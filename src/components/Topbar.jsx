import { useState } from 'react'

function Topbar() {
	const [count, setCount] = useState(0)

	return (
    <div className='flex pl-2 pr-2'>
      <button className='rounded-full bg-exit mr-2 w-3 h-3'>
      </button>
      <button className='rounded-full bg-close mr-2 w-3 h-3'>
      </button>
      <button className='rounded-full bg-minimize mr-2 w-3 h-3'>
      </button>
		</div>
	)
}

export default Topbar
