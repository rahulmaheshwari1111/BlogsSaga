import React from 'react'
import {useState} from 'react'

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const  handleChange = (e)=>{

if(e.target.id === "email"){
    setEmail(e.target.value)
}
else if (e.target.id === "password"){
    setPassword(e.target.value)
}


    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email, password)


    }
    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "yellow">

                <h4> Sign in</h4>
                <div className = "input-field">
                    <input type = "email" id = "email" value = {email} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <input type = "password" id = "password" value = {password} onChange = {handleChange}/>
                </div>
                <div className = "input-field">
                    <button className = "btn-pink.lighten-1"> Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default Signin
