import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoGlobeOutline, IoVideocamOutline } from 'react-icons/io5';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { RiStethoscopeFill } from 'react-icons/ri';
import { HiOutlineDesktopComputer, HiOutlinePresentationChartLine } from 'react-icons/hi';
import { BsFillStarFill } from 'react-icons/bs';

class FooterComponent extends Component{
    render(){
        return(
            <footer className="bg-dark mt-0 text-white">
                <Container>
                    <Row>
                        <Col xs={3}>
                            <a  href="https://the-semicolons.github.io/The-Semicolons/" target="blank">
                                <img alt="logo" className="img-fluid my-3" src= {process.env.PUBLIC_URL + "/assets/semicolonsLogo.png"}/>
                            </a>
                        </Col>
                        <Col className="ml-md-5" xs={4}>
                            <h5>
                                Contents
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <FaRegQuestionCircle />
                                    &nbsp;
                                    <a className="text-white-50" href="#problem">
                                        Problem
                                    </a>
                                </li>
                                <li>
                                    <RiStethoscopeFill />
                                    &nbsp;
                                    <a className="text-white-50" href="#solution">
                                        Solution
                                    </a>
                                </li>
                                <li>
                                    <HiOutlineDesktopComputer />
                                    &nbsp;
                                    <a className="text-white-50" href="#technology">
                                        Technology
                                    </a>
                                </li>
                                <li>
                                    <BsFillStarFill />
                                    &nbsp;
                                    <a className="text-white-50" href="#uniqueness">
                                        Uniqueness
                                    </a>
                                </li>
                                <li>
                                    <HiOutlinePresentationChartLine />
                                    <a className="text-white-50" href="#presentation">
                                        Presentation
                                    </a>
                                </li>
                                <li>
                                    <IoVideocamOutline />
                                    &nbsp;
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
                                    <a className="text-white-50" href="https://the-semicolons.github.io/The-Semicolons/" target="blank">
                                        <IoGlobeOutline /> Semicolons
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://www.youtube.com/channel/UCHbQM_FO-Y7t74U3tfqduFw" target="blank">
                                        <FaYoutube /> Youtube
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://www.linkedin.com/company/the-semicolons" target="blank">
                                        <FaLinkedin /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="https://github.com/The-Semicolons" target="blank">
                                        <FaGithub /> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white-50" href="mailto:thesemicolonsteam@gmail.com" target="blank">
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