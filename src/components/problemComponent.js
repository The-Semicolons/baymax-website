import React, { Component } from 'react';
import { Container } from 'reactstrap';

class ProblemComponent extends Component{
    render(){
        return(
            <div id="problem">
                <Container className="text-white">
                    <h2>
                        Problem
                    </h2>
                    <p>
                        The problem we are focussing on is Medical aid scarcity in rural, remote and even urban areas. Let us onsider the following cases:-
                        <ul>
                            <li>
                                <h5>
                                    Rural area
                                </h5>
                                <p>
                                    A farmer from rural area got sick he needs diagnosis. He reaches out the nearest health centre constructed by govt. But he is unable to get diagnosed. Then the farmer heads to nearest city to get diagnosis. A farmer's whole day is wasted to get diagnosed along with travelling cost.
                                </p>
                            </li>
                            <li>
                                <h5>
                                    Remote area
                                </h5>
                                <p>
                                    A person from remote area got sick he needs diagnosis. He reaches out the nearest health centre constructed by govt. But he is unable to get diagnosed. Next he calls out city to get some transportation like ambulance/air ambulance, then get's transfered to a city hospital. Calling an ambulance/air ambulance cost enormous amount of money and time.
                                </p>
                            </li>
                            <li>
                                <h5>
                                    Urban area
                                </h5>
                                <p>
                                    A person in a city got sick he needs diagnosis. He reaches out the nearest health centre, But it takes enormous amount of time to get diagnosed by a doctor because of overcrowding in the doctor's clinic.
                                </p>
                            </li>
                        </ul>
                    </p>
                </Container>
            </div>
        );
    }
}

export default ProblemComponent;