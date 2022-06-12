import { useState } from 'react'

function Topbar() {
	const [count, setCount] = useState(0)

	return (
		<div className='flex'>
			<div className='rounded-full bg-exit mr-2 w-4 h-4'></div>
			<div className='rounded-full bg-close mr-2 w-4 h-4'></div>
			<div className='rounded-full bg-minimize w-4 h-4'></div>
		</div>
	)
}

export default Topbar
