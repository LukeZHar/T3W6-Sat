import { Outlet } from "react-router-dom";

export default function ProjectLayout(props){
    return(
        <div>
            <h1>Author</h1>
            <h3>Luke</h3>

            <Outlet />
            
            <h6>Copyright {new Date().getFullYear()}</h6>
        </div>
    )
}