import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
function Navbar() {
    return (
       
             <nav className = "nav-wrapper grey darken-2"> 
                 <div  clasName = "container" >
                     <Link to = '/' className = "brand-logo"> BlogsSaga</Link>
                <SignedInLink/>
                <SignedOutLink/>
                 </div>
             </nav>
        
    )
}

export default Navbar
