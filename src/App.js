import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import NewListItem from "./List";
import useLocalStorageState from "use-local-storage-state";

const Weather_API_URL = "https://example-apis.vercel.app/api/weather";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  //  const isGoodWeather = true

  function GetWeatherData() {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
      async function startFetching() {
        const response = await fetch(`${Weather_API_URL}`);
        const weather = await response.json();
        setWeather({ ...weather });
        console.log("weather Data:", weather);
      }
      startFetching();
    }, []);
    //return something like setWeather[...weatherData, newWeatherData] which can be mapped and used
    // Url can recive different Locations `${europe}`, `${arctic}`,`${sahara}`,`${rainforest}`
  }
  GetWeatherData();
  // GetWeatherData(){
  //   console.log(GetWeatherData, "weather Data:")
  // }

  function onAddActivity(newActivity) {
    console.log(newActivity);
    setActivities([...activities, newActivity]);
  }
  console.log("all activities", activities);

  return (
    <>
      <Form onAddActivity={onAddActivity} />
      <NewListItem activities={activities} />
    </>
  );
}
