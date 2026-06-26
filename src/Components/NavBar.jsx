import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

const NavBar=()=>{
    let meetid=Math.random()*45;

    return(
<nav>

<ul>
   <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/about"><li>About Us</li></NavLink>
    <NavLink to="/contact"><li>Contact Us</li></NavLink> 
      <NavLink to="/help"><li>Help</li></NavLink>
      <NavLink to="/login"><li>Login</li></NavLink>
      <NavLink to={`/meeting/${meetid}`}><li>Meeting</li></NavLink>
      <NavLink to={"/statelifting"}><li>StateLifting</li></NavLink>
</ul>

</nav>
    )
}
export default NavBar;