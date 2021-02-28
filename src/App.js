import React, { Component } from 'react';
import NavbarComponent from './components/navbarComponent';
import HeaderComponent from './components/headerComponent';
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
					<PptComponent />
					<VideoComponent />
				</div>
				<FooterComponent />
			</React.Fragment>
			
		);
	}
}

export default App;