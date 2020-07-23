import React, { Component } from 'react';

class Alerts extends Component {
    
    render() { 
        return  <p id='alert' className ={this.props.alert.style} >{this.props.alert.msg}</p>;
    }
}
 
export default Alerts;