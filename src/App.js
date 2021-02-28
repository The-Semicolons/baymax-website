import React, { Component } from 'react';
import NavbarComponent from './components/navbarComponent';
import HeaderComponent from './components/headerComponent';
import ProblemComponent from './components/problemComponent';
import SolutionComponent from './components/solutionComponent';
import TechnologyComponent from './components/technologyComponent';
import UniquenessComponent from './components/uniquenessComponent';
import PptComponent from './components/pptComponent';
import VideoComponent from './components/videoComponent';
import FooterComponent from './components/footerComponent';
import './App.css';

class App extends Component{
	render() {
		return(
			<React.Fragment>
				<div className="redColor">
					<NavbarComponent />
					<HeaderComponent />
					<ProblemComponent />
					<SolutionComponent />
					<TechnologyComponent />
					<UniquenessComponent />
					<PptComponent />
					<VideoComponent />
				</div>
				<FooterComponent />
			</React.Fragment>
			
		);
	}
}

export default App;