import React from 'react';
import { useSelector } from 'react-redux';
import { formatDollar } from '../helpers/currency';

import {
  selectCoins,
  selectExchanges,
  selectMarketCap,
  selectMarketCapPercentage,
  selectVol24h,
 
} from '../redux/reducers/globals';

import './Header.scss';

export default function Header() {
  const coins = useSelector(selectCoins);
  const exchanges = useSelector(selectExchanges);
  const marketCap = useSelector(selectMarketCap);
  const marketCapPercentage = useSelector(selectMarketCapPercentage);
  const vol24h = useSelector(selectVol24h);


  let marketCapPercentageColorClass = '';
  let marketCapPercentageClasses = '';
  if (marketCapPercentage > 0) {
    marketCapPercentageColorClass = 'text-success ';
    marketCapPercentageClasses = 'fas fa-level-up-alt';
  }
  if (marketCapPercentage < 0) {
    marketCapPercentageColorClass = 'text-danger ';
    marketCapPercentageClasses = 'fas fa-level-down-alt';
  }

  return (
    <div id="header" className="border-bottom py-3 px-5">
      <span className="d-inline-block mr-3">
        <b>Coins: </b>
        <span className="text-info">{coins}</span>
      </span>
      <span className="d-inline-block mr-3">
        <b>Exchanges: </b>
        <span className="text-info">{exchanges}</span>
      </span>
      <span className="d-inline-block mr-3">
        <b>Market Cap: </b>
        <span className="text-info">
          {isNaN(marketCap) ? marketCap : formatDollar(marketCap, false)}
        </span>
        <span className={marketCapPercentageColorClass + 'ml-1'}>
          {marketCapPercentage}%<i className={marketCapPercentageClasses}></i>
        </span>
      </span>
      <span className="d-inline-block mr-3">
        <b>24h Vol: </b>
        <span className="text-info">
          {isNaN(vol24h) ? vol24h : formatDollar(vol24h, false)}
        </span>
        </span>
        </div>
        );
}
