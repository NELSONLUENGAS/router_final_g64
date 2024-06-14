import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PokeProvider } from './context/PokeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PokeProvider>
			<App />
		</PokeProvider>
	</React.StrictMode>
);
