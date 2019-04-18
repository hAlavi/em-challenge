/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    align-content: space-between;
    flex-direction: row;
    position: relative;
    margin: 10px 20px;
    width: 50%;
    min-width: 800px;
    height: 200px;
    background: white;
    border: 2px solid #555;
    border-radius: 10px;
    font-family: "Raleway";
`;
const SearchBarText = styled.h2`
   text-align: center; 
`;

const SearchBox = styled.div`
  position: relative;
  margin: 10px 20px;
`;

const SearchContainer = styled.div`
    margin: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100px;
    .search {
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 80px;
      background: crimson;
      border-radius: 50%;
      transition: all 1s;
      z-index: 4;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      // box-shadow: 0 0 25px 0 crimson;
      &:hover {
        cursor: pointer;
      }
      &::before {
        content: "";
        position: absolute;
        margin: auto;
        top: 22px;
        right: 0;
        bottom: 0;
        left: 22px;
        width: 12px;
        height: 2px;
        background: white;
        transform: rotate(45deg);
        transition: all .5s;
      }
      &::after {
        content: "";
        position: absolute;
        margin: auto;
        top: -5px;
        right: 0;
        bottom: 0;
        left: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid white;
        transition: all .5s;
      }
    `;

    const AutoSearchInput = styled.input`
      font-family: 'Inconsolata', monospace;
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 300px;
      height: 50px;
      outline: none;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      background: crimson;
      color: white;
      text-shadow: 0 0 10px crimson;
      padding: 0 80px 0 20px;
      border-radius: 30px;
      //box-shadow: 0 0 25px 0 crimson,
      //            0 20px 25px 0 rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
      transition: all 1s;
      opacity: 0.5;
      z-index: 5;
      font-weight: bolder;
      letter-spacing: 0.1em;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        width: 300px;
        opacity: 1;
        cursor: text;
      }
      &:focus ~ .search {
        right: -250px;
        background: #151515;
        z-index: 6;
        &::before {
          top: 0;
          left: 0;
          width: 25px;
        }
        &::after {
          top: 0;
          left: 0;
          width: 25px;
          height: 2px;
          border: none;
          background: white;
          border-radius: 0%;
          transform: rotate(-45deg);
        }
      }
      &::placeholder {
        color: white;
        opacity: 0.5;
        font-weight: bolder;
      }
    }
  `;

const ShowCountry = styled.div`
    margin-top: 30px;
    margin-right: 20px;
    text-align: right;
    font-size: 10px;
`;

const FindButton = styled.button`
    background: crimson;
    color: white;
    border: 2px solid #bb0000;
    border-radius: 20px;
    height: 50px;
    min-width: 70px;
    margin-top: 75px;
    margin-left: -10px;
`;

const SearchCountry = props => {

    return (
        <SearchBar>
          <SearchBox>
            <SearchBarText>Departure :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput type="text" placeholder="Search..." />
                <div className="search"></div>
                <ShowCountry>United Kingdom</ShowCountry>
            </SearchContainer>
          </SearchBox>
          <SearchBox>
            <SearchBarText>Destination :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput type="text" placeholder="Search..." />
                <div className="search"></div>
                <ShowCountry>Germany</ShowCountry>
            </SearchContainer>
          </SearchBox>
          <FindButton>Find fare</FindButton>
        </SearchBar>
    );
  };

  export default SearchCountry;
  