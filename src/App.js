import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Encabezado from './Shared/Encabezado.js';
import Pie from './Shared/Pie.js';



class App extends Component {
	render() {
		return (      
			<div className="App">
			<Encabezado />
			<Pie />  
			</div>
			);
		}
	}

	export default App;
