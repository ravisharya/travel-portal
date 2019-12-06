import React from 'react';
import { filter, capitalize } from 'lodash';

import FlightSearcher from './components/FlightSearcher/FlightSearcher';
import FlightListing from './components/FlightListing/FlightListing';
import { FlightData } from './Config';

import './App.css';


class App extends React.Component {

  state = {
    origin: '',
    destination: '',
    flightlist: []
  };

  handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const updatedInput = {};
    updatedInput[inputName] = inputValue;
    this.setState(updatedInput);
  }

  handleButtonClick = () => {
    const result = filter(FlightData, {
      'source': capitalize(this.state.origin),
      'destination': capitalize(this.state.destination)
    });
    this.setState({
      flightlist: result
    });

  }
  render() {
    return (
      <div className="app">
        <div className="header"><h1> Flight Search Engine</h1></div>
        <div className="body">
          <div className="searcher">
            <FlightSearcher
              origin={this.state.origin}
              destination={this.state.destination}
              changed={this.handleInputChange}
              clicked={this.handleButtonClick} />
          </div>
          <div className="listing">
            <FlightListing
              origin={this.state.origin}
              destination={this.state.destination}
              flightlist={this.state.flightlist} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
