const CurrentWeather = (searchData) => {
  return (
    <div>
    <div className="location">`${location}`</div>
      <div className="temperature">`${temperature}`18°C</div>
      <div className="condition">`${conditionEmoji}`</div>
    </div>
  );
};


weather Data: {
    location: 'Europe',
    temperature: 14, 
    condition: '☁️', 
    isGoodWeather: true}