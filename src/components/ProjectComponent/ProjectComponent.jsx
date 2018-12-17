import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../HeaderComponent/Header';
import './projectStyle.css'

const mapStoreToProps = reduxStore => { // making our redux store accessible 
    return {
        reduxStore
    }
}



class Project extends Component {

    // handleClick = () =>  {
         
    // } for data check
    // Renders the projects on the DOM
    componentDidMount() {
        
        console.log(this.props.reduxStore.projects); // checking to see what our project are before we map them to dom 
        this.props.dispatch({ type: 'FETCH_PROJECTS' })

    }

    render() {
        let singleProject = this.props.reduxStore.projects.map((project) => {
            console.log('project help',  project.tag  );
            
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
                    date = <div>Date Completed:{project.date_completed}</div>
                } else {
                    date = <div></div>
                }
            let tech;
                if (project.tag) {
                    tech = <div>Technology: {project.tag}</div>
                } else {
                    tech = <div></div>
                }
                return <div className="master" key={project.id}>
                    {name}
                    {description}
                    {thumbnail}
                    {date}
                    {tech}
                    {website}
                    {github}
                    <br></br>
                </div>
        })
        return (
            <div className="project">
                <Header />
                {singleProject}
                {/* <button onClick={this.handleClick}></button> for data check */}
               
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Project);