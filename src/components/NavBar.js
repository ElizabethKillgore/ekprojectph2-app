import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav> 
            <NavLink
             to="/home"
             className="navbar"
             >
             Home
            </NavLink>
            <br>
            </br>
            <NavLink
             to="/impressionist"
             className="navbar"
             >
             Impressionist
            </NavLink>
            <br>
            </br>
            <NavLink
             to="/abstract"
             className="navbar"
             >
             Abstract
             </NavLink>
        
        
        </nav>
    )
}

export default NavBar