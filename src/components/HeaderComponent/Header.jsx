import React, { Component } from 'react';
import {connect} from 'react-redux';


class Header extends Component {
    // Renders the entire app on the DOM
    render() {
        return (

            <header>
                <p>Header</p>
            </header>

        );
    }
}

export default connect()(Header);