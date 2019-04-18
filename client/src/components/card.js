/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300,500,700);
* { box-sizing: border-box; }

body {
  background: #333;
  font-family: "Raleway";
  }
`;

const CardWrapper = styled.div`
    width: 50%;
    min-width: 800px;
    background: white;
    margin: 10px 20px;
    border: 2px solid #555;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    transition: all 0.3s;
    &:hover {
      
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    
    }
`;

const CardPhoto = styled.div`
    padding: 30px;
    width: 45%;
    text-align: center;
    float: left;
    
    img { 
      max-height: 288px; 
    }

`;

const CardDescription = styled.div`
    padding: 30px;
    float: left;
    width: 55%;
    border-left: 2px solid #efefef;
    
    h1 {
      color: #515151;
      font-weight: 300;
      padding-top: 15px;
      margin: 0;
      font-size: 30px;
      font-weight: 300;
    }
  
    h2 {
     color: #515151;
     margin: 0;
     text-transform: uppercase;
     font-weight: 500;
    }
   
    h4 { 
      margin: 0;
      color: #727272;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px
    }
   
    p { 
      font-size: 12px; 
      line-height: 20px;
      color: #727272;
      padding: 20px 0;
      margin: 0;
   }
   
    button {

      outline: 0;
      border: 0;
      background: none;
      border: 1px solid #d9d9d9;
      padding: 8px 0px;
      margin-bottom: 30px;
      color: #515151;
      text-transform: uppercase;
      width: 125px;
      font-family: inherit;
      margin-right: 5px;
      transition: all 0.3s ease;
      font-weight: 500;
      
      &:hover {
        
        // background: darken(white, 2%);
        border: 1px solid #aedaa6;
        color: #aedaa6;
        cursor: pointer;
        
      }
`;


const Card = props => {
    // const { isOpen, onButtonClicked, index, theme, header, label } = props;
    // const Icons = theme.icons;
    // const Header = header;
    return (
        <CardWrapper>
            <GlobalStyle />
            <CardPhoto>
                <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
                    alt="IMAGE" />
            </CardPhoto>
            <CardDescription>
                <h2>Classic Peace Lily</h2>
                <h4>Popular House Plant</h4>
                <h1>$18</h1>
                <p>Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
                <button>Add to Watchlist</button>
            </CardDescription>
        </CardWrapper>
    );
  };
  Card.propTypes = {
    fare: PropTypes.object,
    isWatched: PropTypes.bool,
    onClickWatch: PropTypes.func
  };
  export default Card;
  