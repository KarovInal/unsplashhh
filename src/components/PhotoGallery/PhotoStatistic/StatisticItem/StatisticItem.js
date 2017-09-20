import React from 'react';

import loader from './img/loader.gif';
import './css/style.css';

function StatisticItem(props) {
  let {
    type,
    value,
    isFetch
  } = props;

  return (
    <div className='statistic-item'>
      <p className='statistic-head'>{ type }</p>
      { isFetch 
          ? <img className='statistic-loader' src={loader} /> 
          : <p className='statistic-data'>{ value }</p> }
    </div>
  )
}

export default StatisticItem;