import React from 'react';
import '../components/login/authStyles.css';
import { useState, useContext } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarElements';
import { Out } from './Out';

function Home() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={
                    click ? 'fa fa-times' : 'fa fa-bars'}
                />
            </div>
            
            <NavMenu>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='qna' className='nav-links' onClick={closeMobileMenu}>
                            <FaQuestion id="icon" />Q/A
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='category' className='nav-links' onClick={closeMobileMenu}>
                            <FaList id="icon" />Category
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='notification' className='nav-links' onClick={closeMobileMenu}>
                            <FaBell id="icon" />Notifications
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='profile' className='nav-links' onClick={closeMobileMenu}>
                            <FaUser id="icon" />Profile
                        </NavLink>
                    </li>
                </ul>
            </NavMenu>
        </div>
    );
}

export default Home;