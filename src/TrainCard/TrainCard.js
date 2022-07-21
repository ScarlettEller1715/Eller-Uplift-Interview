import React, { useState } from "react";

function TrainCard({ trainId, serviceType, carCount }) {

    return (
        <React.Fragment>
            <h2>Train {trainId}</h2>
            <h3>Service Type: {serviceType}</h3>
            <p>{carCount} cars</p>
        </React.Fragment>
    )
}

export default TrainCard;