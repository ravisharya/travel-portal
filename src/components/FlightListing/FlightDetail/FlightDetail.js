import React from 'react';

import './FlightDetail.css';

const FlightDetail = (props) => {
    return (
        <div className="flight-container">
            <div className="fare">{props.flight.fare}</div>
            <div className="flight-id">{props.flight.flight_id}</div>
            <div className="flight-code">{props.flight.source_code} > {props.flight.destination_code}</div>
            <div className="text">{props.flight.departs_at}</div>
            <div className="text">{props.flight.arrives_at}</div>
        </div>
    )
};

export default FlightDetail;