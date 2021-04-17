import { NavLink } from 'react-router-dom'

function SignedOutLink() {
    return (
        <div>
            <ul className = "right">
                <li> <NavLink to = '/signup'> Signup </NavLink></li>
                <li> <NavLink to = '/signin'> login</NavLink></li>
             
            </ul>
            
        </div>
    )
}

export default SignedOutLink