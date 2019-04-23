/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import store, { history } from '../store';


const AutoCompleteStyles = createGlobalStyle`
  .autocomplete-items {
    margin-top: -60px;
    margin-left: 20px;
    position: absolute;
    background-color: crimson; 
    color: #ffffff; 
    border: 1px solid #300;
    border-radius: 10px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    width: 200px;
  }
  .autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: crimson; 
    color: #ffffff; 
    border: 1px solid #300;
    border-radius: 10px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);

  }
  .autocomplete-items div:hover {
    /*when hovering an item:*/
    background-color: #e9e9e9; 
    color: #000; 
  }
  .autocomplete-active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important; 
    color: #ffffff; 
  }
`;


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
  margin: 10px 10px;
`;

const SearchContainer = styled.div`
  margin: 10px;
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
  //font-family: 'Inconsolata', monospace;
  font-family: "Raleway";
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
  font-weight: 800;
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
`;

const FindButton = styled.button`
    background: crimson;
    color: white;
    border: 2px solid #bb0000;
    border-radius: 20px;
    height: 50px;
    min-width: 70px;
    margin-top: 75px;
    margin-left: 0px;
`;

class SearchCountry extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      departure: '',
      destination: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.props.updateForm(e.target.name, e.target.value);
  }

  getValue(name) {
    return document.getElementsByName(name)[0].value;
  }

  submit() {
    //console.log( this.getValue('destination'))
    this.props.updateForm('destination', this.getValue('destination'));
    this.props.updateForm('departure', this.getValue('departure'));

    console.log(store.getState())
    this.setState({
      status:'Search has done.'
    }, () => {
      history.push('/');
    });
  }


  componentDidMount() {
    let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    //
    this.autocomplete(document.getElementById('depSearch'), countries);
    this.autocomplete(document.getElementById('destSearch'), countries);
  }

  autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          addActive(x);
        } else if (e.keyCode === 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }


  render() {


    return (
        <SearchBar>
          <AutoCompleteStyles />
          <SearchBox>
            <SearchBarText>Departure :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput name="departure" id="depSearch" type="text" autoComplete="off" 
                  placeholder="Search..."
                  value={this.props.departure} onChange={this.onChange} />
                <div className="search"></div>
            </SearchContainer>
          </SearchBox>
          <SearchBox>
            <SearchBarText>Destination :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput name="destination" id="destSearch" type="text" autoComplete="off"
                  placeholder="Search..." 
                  value={this.props.destination} onChange={this.onChange} />
                <div className="search"></div>
            </SearchContainer>
          </SearchBox>
          <FindButton onClick={this.submit}>Find fare</FindButton>
        </SearchBar>
      );
    }
};

SearchCountry.propTypes = {
  destination: PropTypes.string,
  departure: PropTypes.string
};

const mapStateToProps = (state, ownProps = {}) => {
  return {
    departure: state.departure,
    destination: state.destination
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateForm: (key, value) => {
    dispatch({ type: "UPDATE_SEARCH", key, value });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountry);
  