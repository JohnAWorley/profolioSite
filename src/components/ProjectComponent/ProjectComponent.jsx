import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxStore => { // making our redux store accessible 
    return {
        reduxStore
    }
}


class Project extends Component {
    // Renders the entire app on the DOM
    componentDidMount() {
        console.log(this.props.reduxStore.projects); // checking to see what our project are before we map them to dom 

    }

    render() {
        let singleProject = this.props.reduxStore.projects.map((project, i) => {
            return <div key={project.id}>
                <p>{project.name}</p>
                <p>{project.description}</p>
                <img src={project.thumbnail}></img>
                <br></br>
                <a target={project.website} href="_blank">website</a>
                <br></br>
                <a href={project.github} target="_blank">github</a>
                <p>{project.date_completed}</p>
                <p>{project.tag_id}</p>
            </div>
        })
        return (
            <div className="Project">
                <p>projects page</p>
                {singleProject}
               
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Project);