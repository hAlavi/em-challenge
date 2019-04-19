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
  &:focus ~ .searchResult {
    text-align: right;
    font-size: 10px;
    z-index: 7;
    &::before {
      margin-top: 130px;
      margin-right: 20px;
    }
    &::after {
      top:50px;
      left: 50px;
      height:30px;
      position: relative;

    }
  }
  &::placeholder {
    color: white;
    opacity: 0.5;
    font-weight: bolder;
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
    margin-left: 0px;
`;


// class Search extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       depSearchTerm: this.props.depValue || '',
//       destSearchTerm: this.props.depValue || ''
//     }
//     this.updateSearch = this.updateSearch.bind(this)
//     this.filter = this.filter.bind(this)
//   }

//   componentWillReceiveProps (nextProps) {
//     if (
//       typeof nextProps.value !== 'undefined' &&
//       nextProps.value !== this.props.value
//     ) {
//       const e = {
//         target: {
//           value: nextProps.value
//         }
//       }
//       this.updateSearch(e)
//     }
//   }

//   render () {
//     const {
//       className,
//       onChangeDep,
//       onChangeDest,
//       caseSensitive,
//       sortResults,
//       throttle,
//       filterKeys,
//       depValue,
//       destValue,
//       fuzzy,
//       depInputClassName,
//       destInputClassName,
//       ...inputProps
//     } = this.props // eslint-disable-line no-unused-vars
//     inputProps.type = inputProps.type || 'search'
//     inputProps.value = this.state.searchTerm
//     inputProps.onChange = this.updateSearch
//     inputProps.className = inputClassName
//     inputProps.placeholder = inputProps.placeholder || 'Search'
//     return (
//       <div className={className}>
//         <input {...inputProps} />
//       </div>
//     )
//   }

//   updateSearch (e) {
//     const searchTerm = e.target.value
//     this.setState(
//       {
//         searchTerm: searchTerm
//       },
//       () => {
//         if (this._throttleTimeout) {
//           clearTimeout(this._throttleTimeout)
//         }

//         this._throttleTimeout = setTimeout(
//           () => this.props.onChange(searchTerm),
//           this.props.throttle
//         )
//       }
//     )
//   }

//   filter (keys) {
//     const {filterKeys, caseSensitive, fuzzy, sortResults} = this.props
//     return createFilter(this.state.searchTerm, keys || filterKeys, {
//       caseSensitive,
//       fuzzy,
//       sortResults
//     })
//   }
// }

// Search.defaultProps = {
//   className: '',
//   onChange () {},
//   caseSensitive: false,
//   fuzzy: false,
//   throttle: 200
// }

// Search.propTypes = {
//   className: PropTypes.string,
//   inputClassName: PropTypes.string,
//   onChange: PropTypes.func,
//   caseSensitive: PropTypes.bool,
//   sortResults: PropTypes.bool,
//   fuzzy: PropTypes.bool,
//   throttle: PropTypes.number,
//   filterKeys: PropTypes.oneOf([
//     PropTypes.string,
//     PropTypes.arrayOf(PropTypes.string)
//   ]),
//   value: PropTypes.string
// }

// export default Search
// export {createFilter}

class SearchCountry extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      searchTerm: this.props.value || ''
    }
    //this.updateSearch = this.updateSearch.bind(this)
    //this.filter = this.filter.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (
      typeof nextProps.value !== 'undefined' &&
      nextProps.value !== this.props.value
    ) {
      const e = {
        target: {
          value: nextProps.value
        }
      }
      //this.updateSearch(e)
    }
  }

  // updateSearch (e) {
  //   const searchTerm = e.target.value
  //   this.setState(
  //     {
  //       searchTerm: searchTerm
  //     },
  //     () => {
  //       if (this._throttleTimeout) {
  //         clearTimeout(this._throttleTimeout)
  //       }

  //       this._throttleTimeout = setTimeout(
  //         () => this.props.onChange(searchTerm),
  //         this.props.throttle
  //       )
  //     }
  //   )
  // }

  // filter (keys) {
  //   const {filterKeys, caseSensitive, fuzzy, sortResults} = this.props
  //   return createFilter(this.state.searchTerm, keys || filterKeys, {
  //     caseSensitive,
  //     fuzzy,
  //     sortResults
  //   })
  // }

  render() {
    // const {
    //   className,
    //   onChangeDep,
    //   onChangeDest,
    //   caseSensitive,
    //   sortResults,
    //   throttle,
    //   filterKeys,
    //   depValue,
    //   destValue,
    //   fuzzy,
    //   depInputClassName,
    //   destInputClassName,
    //   ...inputProps
    // } = this.props; // eslint-disable-line no-unused-vars
    // inputProps.type = inputProps.type || 'search';
    // inputProps.value = this.state.searchTerm;
    // inputProps.onChange = this.updateSearch;
    // inputProps.className = inputClassName;
    // inputProps.placeholder = inputProps.placeholder || 'Search';

    return (
        <SearchBar>
          <SearchBox>
            <SearchBarText>Departure :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput id="depSearch" type="text" placeholder="Search..." />
                <div className="search"></div>
                <ShowCountry className="searchResult">United Kingdom</ShowCountry>
            </SearchContainer>
          </SearchBox>
          <SearchBox>
            <SearchBarText>Destination :</SearchBarText>
            <SearchContainer>
                <AutoSearchInput id="depSearch" type="search" placeholder="Search..." />
                <div className="search"></div>
                <ShowCountry className="searchResult">Germany</ShowCountry>
            </SearchContainer>
          </SearchBox>
          <FindButton onClick={this.onClick}>Find fare</FindButton>
        </SearchBar>
      );
    }
};

export default SearchCountry;
  