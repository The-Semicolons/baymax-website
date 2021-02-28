import React, { Component } from 'react';
import { Container } from 'reactstrap';

class SolutionComponent extends Component{
    render(){
        return(
            <div id="solution">
                <Container className="text-white">
                    <h2>
                        Solution
                    </h2>
                    <p>
                        The Health Assistant is capable of diagnosing diseases by taking voice/text/sign-language as an input of primary details of patients. The symptoms are processed using decision trees with Ada boost algorithm and thereby treatment is prescribed for the same. It detects their gender using Computer Vision and thus assigns the voice accordingly.
                    </p>
                    <ul>
                        <li>
                            <h5>
                                Rural area
                            </h5>
                            <p>
                                In the above problem case, the farmer could have been diagnosed under few hours by installing our application in the health centre. He wouldn't have lost his time and money to travel to a city. The farmer just needed to tell baymax what are his symptoms, and baymex would have suggested him medicines and test as per the need.
                            </p>
                        </li>
                        <li>
                            <h5>
                                Remote area
                            </h5>
                            <p>
                                The person who got sick in the remote are could have been treetes at the nearest health centre by just telling baymax what his symptoms are. The cost and time for calling an ambulance/air ambulance could have been saved.
                            </p>
                        </li>
                        <li>
                            <h5>
                                Urban area
                            </h5>
                            <p>
                                It took enormous amount of time for the person to get diagnosed in the doctor's clinic. If doctor takes 10 minutes to diagnose a patient, it will take 100 minutes to diagnose 10. If Baymax is installed in doctor's clinic, it will take 10 minutes for doctor to see a patient and same 10 minutes for baymax. Then just another minute for doctor to verify baymax's diagnosis. So just 11 minutes to diagnose 2 patients hence total time to diagnose 10 patients is brought down to 55, saving 45 minutes of a doctor.
                            </p>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default SolutionComponent;