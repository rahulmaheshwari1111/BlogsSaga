import React from 'react'
import {useState} from 'react'

function CreateProject() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");


    const handleChange = (e)=>{

if(e.target.id === "title"){
    setTitle(e.target.value)
}
else if (e.target.id === "content"){
    setContent(e.target.value)
}


    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(title, content)


    }
    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "wheat">

                <h2> Create your Project</h2>
                <div className = "input-field">
                    <h4> project title</h4>
                    <input type = "text" id = "title" value = {title} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <h4> Project Content</h4>
                    <textarea className = "materialize-textarea" id = "content" value = {content} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <button className = " btn btn-pink z-depth-0"> create project</button>
                </div>
            </form>
            
        </div>
    )
}

export default CreateProject
