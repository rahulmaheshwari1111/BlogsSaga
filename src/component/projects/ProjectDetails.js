import React from 'react'

function ProjectDetails(props) {  //props from router
    const id = props.match.params.id
    return (
        <div className = "container section project details">
            <div className = "card z-depth-0">
                <div className = "card-content">

                    <span className = "card-title"> Project title - {id}</span>
               
               <p> asdasdasdasdasdasdadasdsdaada</p>
                </div>
                <div className = "card=action grey lighten-4 grey -text"> poste by
                    <div> date..</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
