import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { StartPage } from './pages/start-page'
import { Layout } from './app'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes location={location}>
				<Route element={<Layout />}>
					<Route path='/' element={<StartPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
