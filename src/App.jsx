import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './Views/Home';
import { PowerZone } from './Views/PowerZone';
import { PokeDetail } from './Views/PokeDetail';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/power"
						element={<PowerZone />}
					/>
					<Route
						path="/poke/:poke_id"
						element={<PokeDetail />}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
