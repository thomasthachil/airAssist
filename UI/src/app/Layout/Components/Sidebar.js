import React from 'react';
import ReactDOM from "react-dom";
import RaisedButton from 'material-ui/RaisedButton';


// const links = {
//     logo: path.join(__dirname, 'public/images/logo/png')
// }
//

const styles = {
  sidebar: {
    textAlign: 'right',
    'margin-right': '15',
    display: 'block',
    width: '30%',
    float: 'right'
  }
};

var faNames = {

}
export default class Sidebar extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
        <div style={styles.sidebar}>
            <h2>Flight Attendants Onboard</h2>
            <h3>John Smith</h3>

        </div>
      );
    }
}
