import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border">
             <nav>
                    <span>My Website</span>
                   <NavLink className="underline" to="/">Home</NavLink>
                   <NavLink to="/users">Users</NavLink>
                   <NavLink className="underline" to="/about">About</NavLink>
                   <NavLink  to="/contact">Contact</NavLink>
                </nav>
        </div>
    );
};

export default Header;