import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notification'
import {connect} from 'react-redux'
 

function Dashboard(props) {
    console.log("dash" , props)
    const project  = props.projects
    return (
        <div className ="dashboard container">
            <div className = "row"> 
                
                <div className = "col s12 m6"> <ProjectList projects = {project} /></div>
                <div className = "col s12 m5 offset-m1"> <Notification/>  </div>
            </div>
           
        </div>
    )
}
const mapStateToProps = (state)=>{
   return { 
       projects: state.project.projects}

}

export default connect(mapStateToProps)(Dashboard)
