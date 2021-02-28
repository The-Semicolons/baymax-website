import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

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
                <Navbar className="blackColor" dark expand="md">
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
                                    <NavLink href="#presentation">
                                        Presentation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#videos">
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
