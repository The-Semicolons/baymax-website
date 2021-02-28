import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { AiOutlineGithub } from 'react-icons/ai';

class HeaderComponent extends Component{
    render(){
        return(
            <Jumbotron className="mildRedColour mt-5 mt-md-4">
                <Container>
                    <h1>
                        Baymax
                    </h1>
                    <hr className="bg-danger mb-0"></hr>
                    <hr className="bg-danger my-1"></hr>
                    <hr className="bg-danger mt-0"></hr>
                    <h6>
                        Low budget solution for medical scarcity in rural/remote areas. The application is able to communicate with patients and diagnosing them properly.
                    </h6>
                    <Button color="success" className="mt-3" href="https://github.com/The-Semicolons/Baymax" target="blank">
                        <AiOutlineGithub />
                        &nbsp;
                        Check out project on github!
                    </Button>
                </Container>
            </Jumbotron>
           
        );
    }
}

export default HeaderComponent;
