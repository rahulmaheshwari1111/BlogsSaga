import React from 'react'

function ProjectSummary(props) {
    console.log("hello",props)
    return (
        <div>
            <div className = "card z-depth-0 project-summary">
                <div className = "card-content grey-text text-darken -3">
                    
                    <span className = "card-title"> {props.project.title} </span>
                    <p>Posted by Rahul</p>
                    <p className = "grey-text"> posted on : 3sept,2020</p>
                     </div>
            </div>
            
        </div>
    )
}

export default ProjectSummary
