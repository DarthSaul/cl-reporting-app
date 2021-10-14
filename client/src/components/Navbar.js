import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // let menuBtn = document.getElementById;
    const handleOpen = event => {
        let sideNav = document.getElementById('side-nav');
        sideNav.classList.add('open-nav');
    };
    const handleExit = event => {
        let sideNav = document.getElementById('side-nav');
        sideNav.classList.remove('open-nav');
    };

    return (
        <>
            <div className='side-nav' id='side-nav'>
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={handleExit}
                    id='exit-btn'
                />
                <ul>
                    <li>DO SOMETHING</li>
                    <li>DO SOMETHING</li>
                    <li>DO SOMETHING</li>
                    <li>DO SOMETHING</li>
                </ul>
            </div>
            <nav>
                <h1>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={handleOpen}
                        id='menu-btn'
                    />
                    <FontAwesomeIcon icon={faTint} className='nav-icon' />
                    H2know Center
                </h1>
                <ul>
                    <li>
                        <Link to='/'>REPORTING</Link>
                    </li>
                    <li>
                        <Link to='/deploy'>DEPLOYMENT</Link>
                    </li>
                    <li>
                        <Link to='/settings'>SETTINGS</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
