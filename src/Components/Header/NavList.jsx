import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavItem = ({to, end = false, children}) => {
    return(
        <NavLink 
            to={to} 
            end={end}
            className={({isActive}) => 
                `text-black p-2 rounded-md ${isActive ? "md:bg-[#ece8e6] font-semibold" : "hover:bg-[#F1F1F3]"}`
            }
        >
            {children}
        </NavLink>
    );
}

export default NavItem;
