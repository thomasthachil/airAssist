
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Sidebar from './Components/Sidebar';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <Sidebar />
      </MuiThemeProvider>
    );
}
}

export default Dashboard;
