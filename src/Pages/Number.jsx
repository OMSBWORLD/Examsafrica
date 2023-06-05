import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Number() {
  const [countryState, setCountryState] = useState({
    countries: [],
    loading: true,
    selectedCountry: 'Nigeria' 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({ ...countryState, loading: false });
      }
    };

    fetchData();
  }, []);

  const { countries, selectedCountry, loading } = countryState;

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const searchSelectedCountry = countries.find(
    (obj) => obj.name.common === selectedCountry
  );

  return (
    <section>
      <div className='number-grand'>
        <div className="number">
          <div className="number-one">
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className=''
            >
              {countries.map((item) => (
                <option key={uuidv4()} value={item.name.common}>
                  {item.name.common}
                </option>
              ))}
            </select>
          </div>
          <div className="number-two-grand">
            {loading ? (
              <p>Loading...</p>
            ) : searchSelectedCountry ? (
              <div className='number-two'>
                <div className="number-two-one">
                  <img
                    src={searchSelectedCountry.flags.png}
                    alt=""
                  />
                </div>
                <div>
                  <p className="number-two-two">
                    {searchSelectedCountry.idd.root}
                    {searchSelectedCountry.idd.suffixes}
                  </p>
                </div>
                <div className="number-two-three">
                  <input type="number" className="number-input" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Number;
