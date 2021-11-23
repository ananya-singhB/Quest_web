import React from "react";
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { NavLink, NavMenu } from './NavbarElements';

export function Out() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return <div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={
                click ? 'fa fa-times' : 'fa fa-bars'}
            />
        </div>
        <NavMenu>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to='login' className='nav-links' onClick={closeMobileMenu}>
                        <FaUserAlt id="icon" />Login
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='register' className='nav-links' onClick={closeMobileMenu}>
                        <FaSignInAlt id="icon" />Register
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to='Contact'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        <FaEnvelope id="icon" />Contact Us
                    </NavLink>
                </li>
            </ul>
        </NavMenu>
    </div>
}