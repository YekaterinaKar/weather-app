import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
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
    const isGoodWeather = true;
    activities.filter((activity) => {
        return activity.isGoodWeather === isGoodWeather;
    });
    return (
        <>
            <Form
                onAddActivity={onActivitySubmit}
                handleAddActivity={handleAddActivity}
            />
            <List activities={activities} />
        </>
    );
}

export default App;
