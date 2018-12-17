import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


class Admin extends Component {
    changePage = () => {
        this.props.history.push('/') // back to our main page
    }

    state = {

        name: '',
        description: '',
        thumbnail: '',
        website: '',
        github: '',
        date_completed: '',
        tag_id: 0

    }

    handleChange = (event) => {
        console.log('event happended')
        this.setState({
            
                [event.target.name]: event.target.value
            
        });
    } // inputing states to local

    dispatchState = () => {
        console.log('dispatching state');
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
        
    }  // dispatching our local state
    

    // Renders the entire admin to dom 
    render() {
        return (
            <div className="Admin">
                <p>admin page</p>
                <button onClick={this.changePage}>Back to Project View</button> 
                <input type='text' placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange} ></input>
                <input type='text' placeholder="Description" name= 'description' value={this.state.description} onChange={this.handleChange} ></input>
                <input type='text' placeholder="Image path" name= 'thumbnail' value={this.state.thumbnail} onChange={this.handleChange} ></input>
                <input type='text' placeholder="Website Link" name= 'website' value={this.state.website} onChange={this.handleChange} ></input>
                <input type='text' placeholder="Github Link" name= 'github' value={this.state.github} onChange={this.handleChange} ></input>
                <input type='date' name= 'date_completed' value={this.state.date_completed} onChange={this.handleChange} ></input>
                <select name='tag_id' onChange={this.handleChange}>
                    <option value={0}></option>
                    <option value={1}>React</option>
                    <option value={2}>jQuery</option>
                    <option value={3}>Node</option>
                    <option value={4}>SQL</option>
                    <option value={5}>Redux</option>
                    <option value={6}>HTML</option>
                </select>
                <button onClick={this.dispatchState}>Submit Project</button>
                
    
            </div>
        );
    }
}

export default withRouter(connect()(Admin));