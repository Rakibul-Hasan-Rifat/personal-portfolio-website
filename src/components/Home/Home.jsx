import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <div id='home'>
                <h1>Rakibul Hasan</h1>
                <h6>Web Designer</h6>
                <div>
                    <a 
                        href='https://drive.google.com/file/d/17jLHbJyT_oRVrhA6AIBRKdrt_v0qZ-WL/view?usp=sharing' target='_blank' download='demo.pdf'>
                        <FontAwesomeIcon icon={faCloudDownloadAlt} />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;