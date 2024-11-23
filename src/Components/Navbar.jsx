import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <h1>Example Navbar Content</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About </Link>
            <Link to={"/contact"}>Contact</Link>
        </nav>
    )
}