import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='about'>
            <h2>About me</h2>
            <div>
                <div>
                    <img src="./images/rifat.jpg" alt="rakib" />
                </div>
                <div>
                    <h3>Hello,</h3>
                    <p>I am Rakibul Hasan, web developer from Karnaphuli, Chattogram. I have rich experience in web site design and building and customization, also I've enough knowledge at Backend.</p>
                    <div>
                        <div>
                            <p>Name: <span>Rakibul Hasan</span></p>
                            <p>Birthday: <span>29/12/2002</span></p>
                        </div>
                        <div>
                            <p>Location: <span>Karnaphuli, CTG</span></p>
                            <p>Email: <span>rakibulhasan745101@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;