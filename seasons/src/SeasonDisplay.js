import React from 'react';

const getSeason = (lat, lon, month) => {
  
  if (month > 2 && month < 9){
    // summer months
   return lat > 0 ? 'summer' : 'winter'
  } else {
    // winter months
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({lat, lon, errorMsg}) => {
  const season = getSeason(lat, lon, new Date().getMonth());

  return <div>Season: {season}</div>;
};

export default SeasonDisplay;
