import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav> 
            
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
            <br>
            </br>
            <NavLink
             to="/artists"
             className="navbar"
             >
             Artists
            </NavLink>   
        
        </nav>
    )
}

export default NavBar