import { Link } from "react-router-dom";

export const Navbar = () =>{
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>    
            </li>
            <li>
                <Link to="/list">People List</Link>    
            </li> 
            <li>
                <Link to="/controlled-form">Form</Link>    
            </li>    
        </ul>
    )
}