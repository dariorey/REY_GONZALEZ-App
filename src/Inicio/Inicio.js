import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Album from '../Album/Album.js';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Posts from '../Posts/Posts.js';
import axios from 'axios';


export default class Inicio extends Component{    
  constructor(){
   super();
   this.state = {items:[]}
   drawerOpened: false     
 };
 _toggleDrawer(){
  this.setState({
    drawerOpened: !this.state.drawerOpened
  });
};

componentWillMount(){  
  var _this = this;
  axios
  .get("https://swapi.co/api/people/?fformat=json")
  .then(function(result){
    _this.setState({
      items: result.data.results
    });
  });    
};   
render(){            
  return(
    <MuiThemeProvider>
    <div>

    <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>            
    <List>
    <ListItem><Link to ='/Album'>Albums</Link> </ListItem>
    <Route  path='/Comentarios' component={Posts}/>

    </List>

    </Drawer>
    <h4>Posteo de Albumes publicos</h4>
    

    </div>
    </MuiThemeProvider>
    )     
}   
}