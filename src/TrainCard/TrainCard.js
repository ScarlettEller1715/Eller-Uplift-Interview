import React from "react";

function TrainCard({ trainId, serviceType, carCount }) {
    
    return (
        <React.Fragment>
            <h2>Train {trainId}</h2>
            <h3>Service Type: {serviceType}</h3>
            {carCount === 1 ? <p>1 car</p> : <p>{carCount} cars</p>}
        </React.Fragment>
    )
}

export default TrainCard;