import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => setClick(!click);

    const handleSignup = () => {
        navigate('/auth'); // Redirect to the signup/login page
    };

    return (
        <div className='header'>
            <div className='container'>
                <h1>Crypto<span className='primary'>Insights</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn' onClick={handleSignup}>Login/Signup</button> {/* Update button text */}
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
