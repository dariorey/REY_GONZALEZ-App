import Fotos from '../Fotos/Fotos';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { } from '../Fotos/Fotos.js';
import Posts from '../Posts/Posts.js';


var styles = {
  dialogRoot: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  dialogContent: {
    position: 'relative',
    width: '80%',
    maxWidth: "none"
  },
  dialogBody: {
    paddingBottom: 0
  }
};

 export default class Dialogo extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
    <FlatButton
    label="Cerrar"
    primary={true}
    onClick={this.handleClose}
    />,
    <FlatButton
    label="Ok"
    primary={true}
    keyboardFocused={true}
    onClick={this.handleClose}
    />,
    ];   


    return (
      <div>
      <RaisedButton label="Ver fotos" onClick={this.handleOpen} />
      <Dialog
      title="Fotos"
      actions={actions}
      bodyStyle={ styles.dialogBody }
      style={ styles.dialogRoot }
      repositionOnUpdate={ false }
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
      autoScrollBodyContent={true}
      contentStyle={styles.dialogContent}
      autoDetectWindowHeight={true}
      >
      <Fotos />     
      </Dialog>
      </div>
      );
  }
}