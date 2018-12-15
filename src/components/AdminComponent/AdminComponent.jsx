import React, { Component } from 'react';
import {connect} from 'react-redux';


class Admin extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="Admin">
                <p>admin page</p>
            </div>
        );
    }
}

export default connect()(Admin);