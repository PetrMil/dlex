import React, { Component } from 'react';


import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import SelectDevice from './components/SelectDevice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer className="select-device"> 
			<SelectDevice />		
        </MainContainer>
      </div>
    );
  }
}

export default App;
