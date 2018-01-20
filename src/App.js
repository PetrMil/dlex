import React, { Component } from 'react';


import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import SelectDevice from './components/SelectDevice';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Watches from './components/Watches';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

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
