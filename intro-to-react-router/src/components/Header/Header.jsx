import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Activelink from '../Activelink/Activelink';

const Header = () => {
    return (
        <nav>
            <Activelink to="/">Home</Activelink>
            <Activelink to="/friends">Friends</Activelink>
            <Activelink to="/posts">Posts</Activelink>
            <Activelink to="/About">About</Activelink>
            <Activelink to="/Contact">Contact</Activelink>
        </nav>
    );
};

export default Header;