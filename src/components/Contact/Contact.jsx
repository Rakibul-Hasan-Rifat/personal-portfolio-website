import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5t00pvt', 'template_libtufk', e.target, 'user_fv815PawXLyzAOoEcHEG3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <div id='contact'>
                <h2>Contact</h2>

                <div>
                    <div>
                        <div>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /><b>Phone</b></p>
                            <p><small>+8801989692306</small></p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faEnvelope} /><b>E-mail</b></p>
                            <p><small>rakibulhasan745101@gmail.com</small></p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /><b>Address</b></p>
                            <p><small>Jamal Para, Shikalbaha, Karnaphuli, Chattogram, BD</small></p>
                        </div>
                    </div>
                    <div>
                        <form id='contact-form' action="" onSubmit={sendEmail}>
                            <div>
                                    <input type="text" placeholder="Your Name" />
                                    <input type="email" placeholder="Email Address" />
                            </div>
                            <div>
                                <input type="text" placeholder='Subject'/>
                            </div>
                            <div>
                                <textarea name="Message" id="" cols="30" rows="9" placeholder='Message...'></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;