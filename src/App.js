import React, { useEffect, useState } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getData = await fetchData();
    setData(getData); 
  }, []);

  
  const handleCountryChange = async (country) => {
    setCountry(country);
    const getCountry = await fetchData(country);
    setData(getCountry);
  }

  return(
          <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} /> 
          </div>
        );
}

export default App;