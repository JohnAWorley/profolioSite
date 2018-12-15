import React, { Component } from 'react';
import {connect} from 'react-redux';


class Project extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="Project">
                <p>projects page</p>
            </div>
        );
    }
}

export default connect()(Project);