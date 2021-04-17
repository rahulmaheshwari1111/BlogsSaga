import React from 'react'
import {useState} from 'react'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")


    const  handleChange = (e)=>{

if(e.target.id === "email"){
    setEmail(e.target.value)
}
else if (e.target.id === "password"){
    setPassword(e.target.value)
}
else if( e.target.id === "firstName"){
    setFirstName(e.target.value)
}
else if( e.target.id === "lastName"){
    setLastName(e.target.value)
}

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email, password, firstName)


    }
    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "yellow">

                <h4> Sign in</h4>
                <div className = "input-field">
                    <input placeholder= "enter first name" type = "text" id = "firstName" value = {firstName} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <input placeholder= "enter last name" type = "text" id = "lastName" value = {lastName} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <input placeholder= "enter email" type = "email" id = "email" value = {email} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <input placeholder= "enter the password" type = "password" id = "password" value = {password} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <button className = "btn-pink.lighten-1"> Signup</button>
                </div>
            </form>
            
        </div>
    )
}

export default Signup
