import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's go to the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "It's chilly outside!",
    iconName: 'snowflake'
  }
}

//* gets the season based on location and month
const getSeason = (lat, lon, month) => {
  if (month > 2 && month < 9) {
    // summer months
    return lat > 0 ? "summer" : "winter";
  } else {
    // winter months
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat, lon, errorMsg }) => {
  const season = getSeason(lat, lon, new Date().getMonth());

  // season === 'summer' || 'winter' 
  // seasonConfig[season] // {text, iconName}
  const {text, iconName} = seasonConfig[season];
  

  return (
    <div>
      <i className={`${iconName} icon`}></i>
      <h1>Season: {text}</h1>
      <i className={`${iconName} icon`}></i>
    </div>
  )
};

export default SeasonDisplay;
