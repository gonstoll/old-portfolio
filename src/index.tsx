import React from 'react';
import ReactDOM from 'react-dom';

// Componentes
import App from './App';

// Styles
import './index.css';

const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
