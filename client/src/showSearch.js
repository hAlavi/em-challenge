import React, { Component } from 'react';
import Card from './components/Card';
// import SearchCountry from './components/SearchCountry';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';


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

const LoadingAnim = styled.div`
    display : block;
    position : fixed;
    z-index: 100;
    background-image : url('http://localhost:3000/assets/loading.gif');
    background-color:white;
    opacity : 0.4;
    background-repeat : no-repeat;
    background-position : center;
    left : 0;
    bottom : 0;
    right : 0;
    top : 0;
`;

class ShowSearch extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cards: [],
          isLoading: false,
          error: null,
        };
    }
    
    async componentDidMount() {
        this.setState({ isLoading: true });
    
        try {
            const depCountry = 'DE';
            const destCountry = 'AE'; 
            const API = 'https://www.emirates.com/api/en-';
            // You can point out this address to use mock-server
            //const API = 'http://localhost:2020/api/en-';
            const result = await axios.get(API + depCountry + '/fares', {timeout: 20000});
            
            const data = result.data.farecards;
            let cards = [];
            if (data.cards.length>0) {
                data.cards.forEach(card => {
                    for(let i=0; i<card.fares.length; i++) {
                        if (card.fares[i].travelclass) {
                            if (card.depcountrycode === depCountry && card.destcountrycode === destCountry) {
                                const cardData = card;
                                //delete cardData.fares;
                                cards.push({ cardHeader: cardData, fare: card.fares[i] });
                            }
                        }
                    }
                });
            }
            this.setState({
                cards,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }
    

    render() {
        const { cards, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <LoadingAnim />;
        }
        return (
        <AppWrapper>
            <GlobalStyle />
            {cards.map(card =>
                <Card cardHeader={card.cardHeader} fare={card.fare} />
            )}
        </AppWrapper>
        );
    }
}

export default ShowSearch;
