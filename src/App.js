import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FlightResult from './FlightResult';

function App() {

  const [flightData, setFlightData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
        params: {
          sourceAirportCode: 'BOM',
          destinationAirportCode: 'DEL',
          date: '2023-07-03',
          itineraryType: 'ONE_WAY',
          sortOrder: 'PRICE',
          numAdults: '1',
          numSeniors: '0',
          classOfService: 'PREMIUM_ECONOMY',
          pageNumber: '1',
          currencyCode: 'USD'
        },
        headers: {
          'X-RapidAPI-Key': '38ded56f7bmsh4b15b59b480a4a8p134711jsn0cbd35fd5dcd',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data.flights);
        setFlightData(response.data.data.flights);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
  <>   
 

<FlightResult flights={flightData} />
</>
  );
}

export default App;
