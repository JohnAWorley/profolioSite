import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxStore => { // making our redux store accessible 
    return {
        reduxStore
    }
}


class Project extends Component {

    handleClick = () =>  {
        this.props.dispatch({ type: 'FETCH_PROJECTS' })
    }
    // Renders the entire app on the DOM
    componentDidMount() {
        
        console.log(this.props.reduxStore.projects); // checking to see what our project are before we map them to dom 
        

    }

    render() {
        let singleProject = this.props.reduxStore.projects.map((project) => {
            let name;
                if (project.name){
                    name =  <div>Project Name: {project.name}</div>
                } else {
                    name = <div></div>
            }
            let description;
                if (project.description) {
                    description = <div>Project Description: {project.description}</div>
                } else {
                    description = <div></div>
                }
            let thumbnail;
                if (project.thumbnail) {
                    thumbnail = <img src={project.thumbnail} alt=""></img>
                } else {
                    thumbnail = <div></div>
                }
            let website;
                if (project.website) {
                    website = <div><a href={project.website} target="_blank">Website</a></div>
                } else {
                    website = <div></div>
                }
            let github;
                if (project.github) {
                    github = <div><a href={project.github} target="_blank">Github</a></div>
                } else {
                    github = <div></div>
                }
            let date;
                if (project.date_completed) {
                    date = <div>Date:{project.date_completed}</div>
                } else {
                    date = <div></div>
                }
            let tag;
                if (project.tag_id) {
                    tag = <div>Technology: {project.tag_id}</div>
                } else {
                    tag = <div></div>
                }
                return <div key={project.id}>
                    {name}
                    {description}
                    {thumbnail}
                    {website}
                    {github}
                    {date}
                    {tag}
                </div>
        })
        return (
            <div className="Project">
                <p>projects page</p>
                {singleProject}
                <button onClick={this.handleClick}></button>
               
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Project);