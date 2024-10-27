import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageWrapper from '../hoc/PageWrapper';
import FilterButtons from '../components/main/FilterButtons';
import Table from '../components/main/Table';
import { fetchCoinsThunk } from '../redux/reducers/coins'; // Ensure you have the correct import path

import './Main.scss';

export default function Main() {
  const dispatch = useDispatch();
  const [coins, setCoins] = useState([]);

  useLayoutEffect(() => {
    document.title = 'Crypto Prices, News & Features';
  }, []);

  useEffect(() => {
    // When loading the component
    const savedCoins = JSON.parse(localStorage.getItem('coinsData'));
    
    if (savedCoins) {
      setCoins(savedCoins);
    } else {
      // When fetching coins
      const fetchAndSaveCoins = async () => {
        const fetchedCoins = await dispatch(fetchCoinsThunk());
        localStorage.setItem('coinsData', JSON.stringify(fetchedCoins));
        setCoins(fetchedCoins);
      };
      
      fetchAndSaveCoins();
    }
  }, [dispatch]);

  return (
    <PageWrapper>
      <div id="main">
        <div className="text-center pt-5 pb-3 title">
          Crypto Price Feed
        </div>
        <div className="w-100 px-5">
          <FilterButtons />
          <Table coins={coins} /> {/* Pass the coins to the Table component */}
        </div>
      </div>
    </PageWrapper>
  );
}
