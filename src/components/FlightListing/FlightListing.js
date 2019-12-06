import React from 'react';

import FlightDetail from './FlightDetail/FlightDetail';

import './FlightListing.css';


const FlightListing = (props) => {

    const isEmptyList = props.flightlist.length === 0;
    console.log(isEmptyList);
    console.log(props.flightlist);
    const header = (
        <h1>
            {props.origin} > {props.destination}
        </h1>
    )
    const listing = (isEmptyList) ? (
        <div className="flight-error">No flight to show. please search again.</div>
    ) : props.flightlist.map(flight => (
        <div>
            <FlightDetail flight={flight} />
        </div>
    ));

    const flightsList = (
        <div className="flight-list">
            {header}
            {listing}
        </div>
    )

    return flightsList;
}

export default FlightListing;