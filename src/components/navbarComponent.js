import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { RiStethoscopeFill } from 'react-icons/ri';
import { HiOutlineDesktopComputer, HiOutlinePresentationChartLine } from 'react-icons/hi';
import { BsFillStarFill } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';

class NavbarComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavbarOpen: false
        };
        this.navbarToggler = this.navbarToggler.bind(this);
    }

    navbarToggler(){
        this.setState({
            isNavbarOpen: !this.state.isNavbarOpen
        });
    }

	render() {
		return(
            <React.Fragment>
                <Navbar className="blackColor fixed-top" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">
                            <img alt="logo" className="brandLogo my-0" src= {process.env.PUBLIC_URL + "/assets/baymaxLogo.png"}/>
                            &nbsp;
                            Baymax
                        </NavbarBrand>
                        <NavbarToggler onClick={this.navbarToggler} />
                        <Collapse isOpen={this.state.isNavbarOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="#problem">
                                        <FaRegQuestionCircle className="d-md-none" />
                                        &nbsp;
                                        Problem
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#solution">
                                        <RiStethoscopeFill className="d-md-none" />
                                        &nbsp;
                                        Solution
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#technology">
                                        <HiOutlineDesktopComputer className="d-md-none" />
                                        &nbsp;
                                        Technology
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#uniqueness">
                                        <BsFillStarFill className="d-md-none" />
                                        &nbsp;
                                        Uniqueness
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#presentation">
                                        <HiOutlinePresentationChartLine className="d-md-none" />
                                        &nbsp;
                                        Presentation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#videos">
                                        <IoVideocamOutline className="d-md-none" />
                                        &nbsp;
                                        Videos
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavbarComponent;
