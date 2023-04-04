import React from 'react';
import './Activelink.css';
import { NavLink } from 'react-router-dom';
const Activelink = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>isActive ? "active" : ""}>
                 {children}  
        </NavLink>
    );
};

export default Activelink;