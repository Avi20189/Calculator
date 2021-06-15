import React, { Component } from 'react';
import './ClearButton.css';

class Clearbutton extends Component {

    render() {
        return (

            <div 
            className="clear-btn"
            onClick={() => this.props.handleClear()}
            >
                {this.props.children}
            </div>

        )
    }
}

export default Clearbutton;