import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import NewListItem from "./List";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  //  const isGoodWeather = true

  function GetWeatherData() {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
      async function startFetching() {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const weather = await response.json();
        setWeather(weather);
      }
      startFetching();
    }, []);
  }
  GetWeatherData(console.log(GetWeatherData, "weather Data:"));

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
