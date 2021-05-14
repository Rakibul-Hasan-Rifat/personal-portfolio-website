import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHome, faPhoneAlt, faThLarge  } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div id='side-bar'>
            <Link to='/'>
                <div>
                    <img src="./images/rifat.jpg" alt="rifat" />
                </div>
                <h1>Rakibul Hasan</h1>
                <h5>Web Developer</h5>
            </Link>
            <div className='page-links'>
                <div>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                </div>
                <div>
                    <Link to='/contact'>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span>Contact</span>
                    </Link>
                </div>
                <div>
                    <Link to='about'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>About</span>
                    </Link>
                </div>
                <div>
                    <Link to='resume'>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>Resume</span>
                    </Link>
                </div>
                <div>
                    <Link to='/blog'>
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Blog</span>
                    </Link>
                </div>
                <div>
                    <Link to='/project'>
                        <FontAwesomeIcon icon={faThLarge} />
                        <span>Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;