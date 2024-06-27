import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border">
             <nav>
                    <span>My Website</span>
                   <NavLink className="underline" to="/">Home</NavLink>
                   <NavLink className="underline" to="/users">Users</NavLink>
                   <NavLink className="underline" to="/about">About</NavLink>
                   <NavLink className="underline" to="/contact">Contact</NavLink>
                </nav>
        </div>
    );
};

export default Header;