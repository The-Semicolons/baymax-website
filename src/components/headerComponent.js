import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class HeaderComponent extends Component{
    render(){
        return(
            <Jumbotron className="mildRedColour">
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
                </Container>
            </Jumbotron>
           
        );
    }
}

export default HeaderComponent;
