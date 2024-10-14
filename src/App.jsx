import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import AuthProvider from './contexts/AuthContext'
import ProtectedRoute from './components/general/navigation/ProtectedRoute'
import Navigation from './components/general/navigation/Navigation'
import Home from './components/views/Home/Home'
import ToDos from './components/views/ToDos/ToDos'
import Categories from './components/views/Categories/Categories'
import Account from './components/views/Account/Account'
import NotFound from './components/views/NotFound/NotFound'


export default function App() {

	return (
		<>
			<AuthProvider>
				<Router>
					<Navigation />
					<Routes>
						<Route path="/" element={<Navigate to="/home" replace />} />
						<Route path="/home" element={<Home/>} />
						<Route path="/todos" element={<ProtectedRoute><ToDos/></ProtectedRoute>} />
						<Route path="/categories" element={<ProtectedRoute><Categories/></ProtectedRoute>} />
						<Route path="/account" element={<Account />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</Router>
			</AuthProvider>
		</>
	)
}