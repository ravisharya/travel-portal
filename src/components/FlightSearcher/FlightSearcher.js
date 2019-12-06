import React from 'react';
import './FlightSearcher.css';

const FlightSearcher = (props) => {
    return (
        <div className="FlightSearcher">
            <input
                type="text"
                name="origin"
                placeholder="Enter Origin City"
                value={props.origin}
                onChange={props.changed}
            />
            <input
                type="text"
                name="destination"
                placeholder="Enter Destination City"
                value={props.destination}
                onChange={props.changed}
            />
            <button
                onClick={props.clicked}
                className="searchbutton">
                Search
            </button>

        </div>
    );
};

export default FlightSearcher;