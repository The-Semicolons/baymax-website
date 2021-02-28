import React, { Component } from 'react';
import { Container } from 'reactstrap';

class UniquenessComponent extends Component{
    render(){
        return(
            <div id="uniqueness">
                <Container className="text-white">
                    <h2>
                        Uniqueness
                    </h2>
                    <ul>
                        <li>
                            <h5>
                                Multilingual
                            </h5>
                            <p>
                                Our application is able to interact with the patients in multiple languages including English, Hindi, Marathi, Bengali, Tamil, Telugu etc.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Cross Platform
                            </h5>
                            <p>
                                The application is can be installed on multiple platforms like Windows, Mac, Linux and even android without any significant changes.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Voice Recognition
                            </h5>
                            <p>
                                Baymax is able to understand what you are sying in any local language and can easily translate to any other language.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Sign LAnguage Recognition
                            </h5>
                            <p>
                                For the people who are hearing and speech impaired can easily interact with baymax through sign language.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Computer Vision
                            </h5>
                            <p>
                                Computer vision is used to make Baymax's interaction with human better by changing the voice of baymax to female voice for a female patient.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Friendly GUI
                            </h5>
                            <p>
                                Gui on which the application is made is very simple and easy to use. Even if someone is stuck in between they click the "Help" button and Baymax will dictate how to use.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                Encrypted Database
                            </h5>
                            <p>
                                Oracle's MySQL is used to store all the critical information of the user. Though MySQL is an encrypted database all the patient's data is safe.
                            </p>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default UniquenessComponent;