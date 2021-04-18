import React from 'react'
import ProjectSummary from './ProjectSummary'

function ProjectList(props) {
    console.log("asda", props)
    return (
        <div className = "project-list section">
        { props.projects && props.projects.map(project=>{
            return (
                <ProjectSummary project = {project} key = {project.id}/>
            )
        })}
        
            </div>



          
        
    )
}

export default ProjectList
