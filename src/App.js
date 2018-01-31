import React, { Component } from 'react';


import MainContainer from './components/mainContainer';
import NavBar from './components/navBar';
import SelectDevice from './components/selectDevice';
import Header from './components/header';
import Benefits from './components/benefits';
import Watches from './components/watches';
import Destinations from './components/destinations';
import Footer from './components/footer';

class App extends Component {
  render() {
	return (
	  <div className="App">
		<NavBar />
		<MainContainer className="select-device">
		 <SelectDevice />
		</MainContainer>
		<MainContainer className="header">
		 <Header />
		</MainContainer>
		<MainContainer className="benefits">
		 <Benefits />
		</MainContainer>
		<MainContainer className="watches">
		 <Watches />
		</MainContainer>
		<MainContainer className="destinations">
		 <Destinations />
		</MainContainer>
		<MainContainer className="footer">
		 <Footer />
		</MainContainer>
	  </div>
	);
  }
}

export default App;
