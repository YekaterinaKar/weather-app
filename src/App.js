import "./App.css";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./Components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
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
            const weather = await response.json();
            console.log(weather);
            setWeather(weather);
        }
        startFetching();
    }, []);
    const goodActivities = activities.filter((activity) => {
        return activity.isGoodWeather === { weather };
    });
    return (
        <>
<<<<<<< HEAD
            <h1>uhuhuhhu</h1>
            <Form onAddActivity={onActivitySubmit} />
=======
            <Form
                onAddActivity={onActivitySubmit}
                handleAddActivity={handleAddActivity}
            />
            <List activities={goodActivities} isGoodWeather={{ weather }} />
>>>>>>> 1031b794cd315756363131f62b015edba2e52ada
        </>
    );
}

export default App;
