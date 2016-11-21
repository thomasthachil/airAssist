import React from 'react';
import ReactDom from "react-dom";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginField extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
        <div >
          <h2>Welcome</h2>
          <TextField
            floatingLabelText="Last Name"
          />
          <TextField
            floatingLabelText="Seat Number"
          />
            <br></br>
          <RaisedButton

            label="Sign In"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      );
    }
}
