import { useEffect, useState } from "react";
import TrainCard from "../TrainCard/TrainCard";


function App() {

const [trains, setTrains] = useState([])

useEffect(() => {
  fetch("https://api.wmata.com/TrainPositions/TrainPositions?contentType=json", {
    method: 'GET',
    headers: {
      Host: 'api.wmata.com',
      api_key: 'e13626d03d8e4c03ac07f95541b3091b'
    }
  })
    .then((res) => res.json())
    .then((data) => setTrains(data.TrainPositions))
}, [])



  const renderedTrains = trains.map((train) => {
    return ( 
      <TrainCard trainId={train.TrainId} />
      )
  })


  return (
    <div className="App">
      <h1>WMATA Trains</h1>
      <div className="trainCollection">
        {renderedTrains}
      </div>
    </div>
  );
}

export default App;
