import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <h1>Example Navbar Content</h1>
            <NavLink 
                to={"/"} 
                className={({isActive}) => { return isActive ? "active" : ""}}>
                Home </NavLink>
            <NavLink 
                to={"/about" } 
                className={({isActive}) => { return isActive ? "active" : ""}}>
                About </NavLink>
            <NavLink 
                to={"/contact"} 
                className={({isActive}) => { return isActive ? "active" : ""}}>
                Contact </NavLink>
        </nav>
    )
}