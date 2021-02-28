import React, { Component } from 'react';
import { Container, Card, CardBody, CardText, CardTitle } from 'reactstrap';

class PptComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Container id="presentation">
                    <h2 className="text-white">
                        Project Presentation
                    </h2>
                    <Card>
                        <Container>
                            <div className="embed-responsive embed-responsive-16by9 mt-3">
                                <iframe title="presentation1"  className="embed-responsive-item" src="https://onedrive.live.com/embed?cid=49116CBBEE84762D&amp;resid=49116CBBEE84762D%212020&amp;authkey=AJbxT-ZILqdszzk&amp;em=2&amp;wdAr=1.7777777777777777">
                                </iframe>
                            </div>
                        </Container>
                        <CardBody>
                            <CardTitle tag="h5">
                                Project presentation
                            </CardTitle>
                            <CardText>
                                The presentation will give you a basic idea about the problem that we highlighted and the solution we came up with as baymax.
                            </CardText>
                        </CardBody>
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default PptComponent;