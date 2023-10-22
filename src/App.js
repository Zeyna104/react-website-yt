import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/services" Component={Services} />
					<Route exact path="/products" Component={Products} />
					<Route exact path="/sign-up" Component={SignUp} />
				</Routes>
			</Router>
		</>
	)
}

export default App
