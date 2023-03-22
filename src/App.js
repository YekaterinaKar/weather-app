import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./Components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
    function onActivitySubmit(data) {
        console.log("onAddActivity", data);
    }
    const isGoodWeather = true;
    activities.filter((activity) => {
        return activity.isGoodWeather === isGoodWeather;
    });
    return (
        <>
            <h1>uhuhuhhu</h1>
            <Form onAddActivity={onActivitySubmit} />
        </>
    );
}

export default App;
