import React, { Component } from 'react';
import Card from './components/Card';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import store, { history } from './store';
import countries from './data/countries.json';

const API_PREFIX = 'https://www.emirates.com/api/en-';
const WATCHLIST_API_PREFIX = 'http://localhost:3030/api/v1/watchlist';
// You can point out this address to use mock-server
//const API_PREFIX = 'http://localhost:2020/api/en-';

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
    background-image : url('/assets/loading.gif');
    background-color:white;
    opacity : 0.8;
    background-repeat : no-repeat;
    background-position : center;
    left : 0;
    bottom : 0;
    right : 0;
    top : 0;
`;

const WatchlistAnim = styled.div`
    display : block;
    position : fixed;
    z-index: 100;
    background-image : url('/assets/watchlist.gif');
    background-color:white;
    opacity : 0.8;
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
          isAdding: false,
          error: null,
        };
    }
    
    findCountryCode(countryName) {
        for (let i=0; i<countries.length; i++) {
            if (countries[i].Name === countryName)
                return countries[i].Code;
        }
        return "NOF";
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
    
        try {
            //console.log(store.getState())

            const depCountry = this.findCountryCode(store.getState().searchReducer.departure);
            const destCountry = this.findCountryCode(store.getState().searchReducer.destination);
            
            if (depCountry === "NOF" || destCountry === "NOF") {
                history.push('/search');
            }
            const result = await axios.get(API_PREFIX + depCountry + '/fares', {timeout: 30000});
            
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
    
    addToWatchlist = (fare) => {
        this.setState({ isAdding: true });
        setTimeout(()=>{
            axios.post(WATCHLIST_API_PREFIX, fare, {timeout: 30000}).then((r) => {
                this.setState({ isAdding: false });
            }).catch((error) => {
                this.setState({
                    error,
                    isAdding: false
                });
            });
        }, 3000);
    }

    render() {
        const { cards, isLoading, error, isAdding } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <LoadingAnim />;
        }
        return (
        <AppWrapper>
            {isAdding?<WatchlistAnim />:<div/>};
            <GlobalStyle />
            {cards.map(card =>
                <Card cardHeader={card.cardHeader} fare={card.fare} onClickWatch={this.addToWatchlist} />
            )}
        </AppWrapper>
        );
    }
}

export default ShowSearch;
