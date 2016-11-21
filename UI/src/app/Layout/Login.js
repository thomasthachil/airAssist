/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import LoginField from './Components/LoginField'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '300',
    display: 'block'
  },
  paperStyle: {
    height: "auto",
    width: "90%",
    "max-width": "400px",
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',

  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    // this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  // handleRequestClose() {
  //   this.setState({
  //     open: false,
  //   });
  // }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    // const standardActions = (
    //   <FlatButton
    //     label="Ok"
    //     primary={true}
    //     onTouchTap={this.handleRequestClose}
    //   />
    //
    // );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.container}>
            <img></img>
            <Paper
              style={styles.paperStyle}
              zDepth={2}
              children={(
                <LoginField />
                )}
            />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
