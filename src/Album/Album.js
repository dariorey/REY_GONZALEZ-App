
import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialogo from '../Material-ui/dialog';
import Fotos from '../Fotos/Fotos.js';


export default class Album extends Component{
	
	constructor(){
		super();
		this.state = { albums:[] };			
	}

	componentWillMount(){	
		var _this = this;
		axios
		.get("https://jsonplaceholder.typicode.com/albums")
		.then(function(result){		
			_this.setState({
				albums: result.data
			});

		});			
	}
	obtenerFotos(id){
		Fotos.prototype.filtrarFotos(id)
		console.log("Album seleccionado: " + id);									
	}
	render(){
		let albums = this.state.albums;		
  
return(					
	<div>					 											
	{albums.map(album => 
		<div key={album.id}>
		<h4>{album.title}</h4>	
		<MuiThemeProvider>
		<span onClick={() => this.obtenerFotos(album.id)}> <Dialogo/></span>
		</MuiThemeProvider>							
		<hr style={{width : 600}}/>
		</div>	

		)}             
		</div>
		)
}

}
