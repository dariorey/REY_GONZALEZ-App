import React, { Component } from 'react';
import axios from 'axios'; 
import Album from '../Album/Album.js';
import $ from 'jquery';


export default class Fotos extends Component{
	
	constructor(){
		super();
		var fotosObtenidas = { fotos:[] };	
		
	} 	  
	filtrarFotos(albumId){	 		
		var _this = this;
		axios
		.get("https://jsonplaceholder.typicode.com/photos")
		.then(function(result){							 
			var fotos = result.data;
			var filtro = fotos.filter(function(foto){
				return foto.albumId == albumId;
			})		
			_this.fotosObtenidas = filtro;
			console.log(filtro);
			$(".prueba").append(
				filtro.map(item => "<div><h3>"+ item.title +"</h3>\
					<img src="+ item.url+" width=30% height=30%/> </div><hr/>")
				);
		});			   
	}	   	 

	render(){
		
		
		
		return <div className="prueba"></div>;
	}
	
}
