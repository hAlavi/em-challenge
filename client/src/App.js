import React, { Component } from 'react';
import Card from './components/card';
import SearchCountry from './components/searchCountry';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300,500,700);
* { box-sizing: border-box; }

body {
  background: #333;
  font-family: "Raleway";
  }
`;

const AppWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  left: 25%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <SearchCountry />
        
      </AppWrapper>
    );
  }
}

export default App;
