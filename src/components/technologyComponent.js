import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class TechnologyComponent extends Component{
    render(){
        return(
            <div id="technology">
                <Container className="text-white">
                    <h2>
                        Technology used
                    </h2>
                    <ul>
                        <li>
                            <h5>
                                Programming Language
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/pythonLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Python is selected to be the main programming language for our application because it has multiplatform support and is easy to work with in case of Machine learning applications.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                Tensorflow
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/tensorflowLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Tensorflow is used to construct the Decision tree with ada boost algorithm, also known as boosted tree classifier. The Decision tree is trained on a dataset that relates diseases to it's symptoms.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                Keras
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/kerasLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Keras is used to to create a DNN and was trained over 5000 images to detect the gender of a person sitting in front of Baymax.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                OpenCV
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/opencvLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    OpenCV is used to capture the image, detect the face, process the image to make it suitable to be fed into DNN. Further DNN detects whether the person is male of female.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                Kivy
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/kivyLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Kivy is used to construct the GUI through kivy language. Kivy is preffered because of it's multi platform support and dynamic nature.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                NLTK
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/nltkLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    NLTK is used for text processing and extract the usefull information from the user giving the user a human like interaction while talking to baymax.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                Google Voice
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/voiceRecognitionLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Google voice API is used to recognise and translate what a user said to english which is then fed to language processor for further operations.
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h5>
                                Oracle's MySQL
                            </h5>
                            <Row className="align-items-center">
                                <Col xs={2}>
                                    <img className="img-fluid" alt="Python Logo" src={process.env.PUBLIC_URL + "/assets/mysqlLogo.png"} />
                                </Col>
                                <Col xs={10}>
                                    Oracle's MySQL is used to store and keep track of user's medical record including prescriptions, diagnosis and medical test reports.
                                </Col>
                            </Row>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default TechnologyComponent;