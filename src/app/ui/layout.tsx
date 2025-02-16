import { Outlet } from 'react-router'

export function Layout() {
	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<Outlet />
		</div>
	)
}
