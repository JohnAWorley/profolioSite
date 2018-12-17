import React, { Component } from 'react';
import { connect } from 'react-redux';
import './headerStyle.css'


class Header extends Component {
    // Renders the entire app on the DOM
    let
    render() {
        return (

            <header>
                <p className="elegantshadow">John Worley</p>
                <p className="elegantshadow">Projects</p>
            </header>

        );
    }
}

export default connect()(Header);