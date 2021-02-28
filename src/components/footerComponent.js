import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoGlobeOutline } from 'react-icons/io5';

class FooterComponent extends Component{
    render(){
        return(
            <footer className="bg-dark mt-0 text-white">
                <Container>
                    <Row>
                        <Col xs={3}>
                        <img alt="logo" className="img-fluid my-3" src= {process.env.PUBLIC_URL + "/assets/semicolonsLogo.png"}/>
                        </Col>
                        <Col className="ml-md-5" xs={4}>
                            <h5>
                                Contents
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="text-white-50" href="#presentation">
                                        Presentation
                                    </a>
                                </li>
                                <li>
                                <a className="text-white-50" href="#videos">
                                        Videos
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={4}>
                            <h5>
                                Contact Us
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="text-white-50" href="https://the-semicolons.github.io/The-Semicolons/">
                                        <IoGlobeOutline /> Semicolons
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://www.youtube.com/channel/UCHbQM_FO-Y7t74U3tfqduFw">
                                        <FaYoutube /> Youtube
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://www.linkedin.com/company/the-semicolons">
                                        <FaLinkedin /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://github.com/The-Semicolons">
                                        <FaGithub /> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="#videos">
                                        <MdEmail /> Email
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default FooterComponent;