import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialogo from '../Material-ui/dialog';
import Photos from '../Fotos/Fotos.js';
import {List, ListItem} from 'material-ui/List';



export default class Posts extends Component{
	
	constructor(){
		super();
		this.state = { comentarios:[] };			
	}
	

	componentWillMount(){	
		var _this = this;
		axios
		.get("https://jsonplaceholder.typicode.com/posts")
		.then(function(result){		
			_this.setState({
				comentarios: result.data
			});			  
		});			
	}	  
	render(){
		let comentarios = this.state.comentarios;		
		return(					
			<div>																
			{comentarios.map(comentario => 			
				<div key={comentario.id}>
				<h4>{comentario.title}</h4>	
				<h5>{comentario.body}</h5>														
				<hr style={{width : 600}}/>
				</div>		
				
				)} 				     	 	       
				</div>
				)
		}
		
	}