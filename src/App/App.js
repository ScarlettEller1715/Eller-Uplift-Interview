import { useEffect, useState } from "react";
import TrainCard from "../TrainCard/TrainCard";
import './App.css'


function App() {

const [trains, setTrains] = useState([])

const [colorFilter, setColorFilter] = useState("")
const [serviceTypeFilter, setServiceTypeFilter] = useState("")
const [carCountFilter, setCarCountFilter] = useState("")

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

  const filteredTrains = trains.filter((train) => 
    train.LineCode === colorFilter || colorFilter === ""
  ).filter((train) => 
    train.ServiceType === serviceTypeFilter || serviceTypeFilter === ""
  ).filter((train) => 
    train.CarCount == carCountFilter || carCountFilter === "")

  const renderedTrains = filteredTrains.map((train) => {
    return ( 
      <div className={train.LineCode ? train.LineCode : "none"}>
        <TrainCard trainId={train.TrainId}
                  serviceType={train.ServiceType}
                  carCount={train.CarCount}
                />
      </div>
      ) 
  })

  console.log(carCountFilter)


  return (
    <div className="App">
      <h1>WMATA Trains</h1>
      <select onChange={(e) => setColorFilter(e.target.value)}>
        <option value="">Any Line</option>
        <option value="RD">Red Line</option>
        <option value="BL">Blue Line</option>
        <option value="GR">Green Line</option>
        <option value="OR">Orange Line</option>
        <option value="SV">Silver Line</option>
        <option value="YL">Yellow Line</option>
      </select>
      <select onChange={(e) => setServiceTypeFilter(e.target.value)}>
        <option value="">Any Service Type</option>
        <option value="Normal">Normal</option>
        <option value="NoPassengers">No Passengers</option>
        <option value="Unknown">Unknown</option>
      </select>
      <select onChange={(e) => setCarCountFilter(e.target.value)}>
        <option value="">Any Number of Cars</option>
        <option value="0">No Cars</option>
        <option value="6">Six Cars</option>
        <option value="8">Eight Cars</option>
      </select>
      <div className="trainCollection">
        {renderedTrains}
      </div>
    </div>
  );
}

export default App;