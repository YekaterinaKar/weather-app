import "./App.css";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./Components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(data) {
    setActivities([...activities, { ...data, id: uid() }]);
    console.log(data);
  }
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function onActivitySubmit(data) {
    console.log("onAddActivity", data);
  }

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
    }
    startFetching();

    const interval = setInterval(() => {
      startFetching();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goodActivities = activities.filter((activity) => {
    return activity.isforGoodWeather === true;
  });
  const badActivities = activities.filter((activity) => {
    return activity.isforGoodWeather === false;
  });

  return (
    <div className="all">
      <header className="header">
        <h2>{weather.temperature} °C</h2>
        <h2>{weather.condition} </h2>
      </header>
      <Form
        onAddActivity={onActivitySubmit}
        handleAddActivity={handleAddActivity}
      />
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={weather.isGoodWeather ? goodActivities : badActivities}
        isforGoodWeather={weather.isGoodWeather}
      />
    </div>
  );
}

export default App;
