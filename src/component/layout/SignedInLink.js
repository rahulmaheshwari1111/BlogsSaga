import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLink() {
    return (
        <div>
            <ul className= "right">
                <li> <NavLink to = '/create'> new project </NavLink></li>
                <li> <NavLink to = '/'> log out </NavLink></li>
                <li> <NavLink to = '/' className = "btn btn-floating pink lighten-1"> avatar</NavLink></li>
            </ul>
            
        </div>
    )
}

export default SignedInLink
