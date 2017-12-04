import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Inicio from '../Inicio/Inicio.js';
import Album from '../Album/Album.js';
import Posts from '../Posts/Posts.js';
import '../App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import axios from 'axios';

export default class Encabezado extends Component{      
  render(){            
    return(
     <header>
     <Router>
     <div>

     <nav>
     <Link to ='/'>| HOME |</Link>      
     <Link to ='/Album/'> ALBUM |</Link>
     <Link to ='/Comentarios'> FEEDBACK |</Link>
     </nav>
     <Route exact path='/' component={Inicio}/>
     <Route  path='/Album' component={Album}/>      
     <Route  path='/Comentarios' component={Posts}/>
     </div>
     </Router>  
     </header>
     )
    
  }
  
}