import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div id='resume'>
            <h2>Resume</h2>
            <div>
                <h3>Basic Information</h3>
                <div>
                    <div>
                        <div>
                            <p>Name: <span>Rakibul Hasan</span></p>
                            <p>Address: <span>Karanaphuli, CTG</span></p>
                            <p>Language: <span>Bangla, Urdu, English</span></p>
                        </div>
                        <div>
                            <p>Gender: <span>Male</span></p>
                            <p>Birth Place: <span>CTG, BD</span></p>
                            <p>Birth Date: <span>20, December, 2020</span></p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Skills</h3>
                    <div>
                        <div className='html-bar'>
                            <p>HTML</p>
                            <div className="progress-div">
                                <div className="progress-bar">75%</div>
                            </div>
                        </div>
                        <div className='css-bar'>
                            <p>CSS</p>
                            <div className="progress-div">
                                <div className="progress-bar">65%</div>
                            </div>
                        </div>
                        <div className='js-bar'>
                            <p>JavaScript</p>
                            <div className="progress-div">
                                <div className="progress-bar">80%</div>
                            </div>
                        </div>
                        <div className='react-bar'>
                            <p>ReactJS</p>
                            <div className="progress-div">
                                <div className="progress-bar">60%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <hr />
            </div>
        </div>
    );
};

export default Resume;