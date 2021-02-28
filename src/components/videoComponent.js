import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

class VideoComponent extends Component{
    render(){
        return(
            <Container className="mt-5" id="videos">
                <h2 className="text-white">
                        Videos
                    </h2>
                <Row>
                    <Col md={6} className="mb-5">
                        <Card>
                            <Container>
                                <div className="embed-responsive embed-responsive-16by9 mt-3">
                                    <iframe title="video1" className="embed-responsive-item" src="https://www.youtube.com/embed/BbihARVLtJQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                </div>
                            </Container>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Baymax | Project Prototype | The Semicolons ;
                                </CardTitle>
                                <CardText>
                                    This video explains the working of first prototype of our project Baymax.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-5">
                        <Card>
                            <Container>
                                <div className="embed-responsive embed-responsive-16by9 mt-3">
                                    <iframe title="video2" className="embed-responsive-item" src="https://www.youtube.com/embed/eYu9JnOP3NM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>
                                </div>
                            </Container>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Winning @UPES #UPES​-CSI #Hackathon5​.0 | Baymax | The Semicolons ;
                                </CardTitle>
                                <CardText>
                                    Get a glimpse of our journey through 72 sleepless hours that took us towards victory.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VideoComponent;
