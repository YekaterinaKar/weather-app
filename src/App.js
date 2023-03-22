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

    function onActivitySubmit(data) {
        console.log("onAddActivity", data);
    }

    //const  isGoodWeather = true;

    const [weather, setWeather] = useState([]);
    useEffect(() => {
        async function startFetching() {
            const response = await fetch(
                "https://example-apis.vercel.app/api/weather"
            );
            const weatherData = await response.json();
            console.log(weatherData);
            setWeather(weatherData);
            console.log(weatherData.temperature);
            console.log(weatherData.condition);
        }
        startFetching();
    }, []);
    const goodActivities = activities.filter((activity) => {
        return activity.isforGoodWeather === true;
    });
    const badActivities = activities.filter((activity) => {
        return activity.isforGoodWeather === false;
    });
    return (
        <>
            <>
                <h2>{weather.temperature + "°C"} </h2>
                <h2>{weather.condition} </h2>
            </>
            <Form
                onAddActivity={onActivitySubmit}
                handleAddActivity={handleAddActivity}
            />
            <List
                activities={
                    weather.isGoodWeather ? goodActivities : badActivities
                }
                isforGoodWeather={weather.isGoodWeather}
            />
        </>
    );
}

export default App;
