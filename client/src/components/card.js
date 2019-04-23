/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
    width: 65%;
    text-align: center;
    float: left;
    
    img { 
      max-height: 288px; 
    }

`;

const CardDescription = styled.div`
    padding: 30px;
    float: left;
    width: 35%;
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
    return (
        <CardWrapper>
            <CardPhoto>
                <img src={props.cardHeader.image}
                    alt="IMAGE" />
            </CardPhoto>
            <CardDescription>
                <h2>{`${props.cardHeader.depcityshortname} (${props.cardHeader.depairportcode}) to ${props.cardHeader.destcityshortname} (${props.cardHeader.destairportcode})`}</h2>
                <h4>{props.fare.travelclasstext}</h4>
                <h1>{`${props.fare.price} ${props.fare.currencycode}`}</h1>
                <p>{`${props.fare.travelfrom} - ${props.fare.traveluntil}`}</p>
                <button onClick={() => props.onClickWatch(props.fare)}>Add to Watchlist</button>
            </CardDescription>
        </CardWrapper>
    );
  };
  Card.propTypes = {
    cardHeader: PropTypes.object.isRequired,
    fare: PropTypes.object.isRequired,
    isWatched: PropTypes.bool,
    onClickWatch: PropTypes.func
  };
  export default Card;
  