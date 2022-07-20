import React from "react";

function TrainCard({ trainId }) {

    console.log(trainId)
    
    return (
        <React.Fragment>
            <h2>{trainId}</h2>
        </React.Fragment>
    )
}

export default TrainCard;