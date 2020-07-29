import React, { Component } from 'react';

class Alerts extends Component {
    
    render() { 
        return  <div id='alert' className ={this.props.alert.style} >{this.props.alert.msg}</div>;
    }
}
 
export default Alerts;