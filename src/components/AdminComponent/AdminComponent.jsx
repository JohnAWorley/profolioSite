import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


class Admin extends Component {
    changePage = () => {
        this.props.history.push('/') // back to our main page
    }

    

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="Admin">
                <p>admin page</p>
                <button onClick={this.changePage}>Back to Project View</button> 
            </div>
        );
    }
}

export default withRouter(connect()(Admin));