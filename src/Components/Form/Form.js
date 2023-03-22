import React, { useState } from "react";

export default function Form({ onAddActivity }) {
    // const [activity, setActivity] = useState([]);
    // const [isGoodWeather, set] = useState(false);

    function addActivity(event) {
        event.preventDefault();
        const elements = event.target.elements;
        // setActivity(data.name);

        const activity = elements.name.value;

        const isGoodWeather = elements.isGoodWeather.checked;

        const data = {
            name: activity,
            isGoodWeather: isGoodWeather,
        };

        onAddActivity(data);
        event.target.reset();
        event.target.elements.name.focus();
    }

    return (
        <form onSubmit={(event) => addActivity(event)}>
            <h1>Add new Activity</h1>

            <label htmlFor="name">Name</label>
            <br />
            <input id="name" text="name" name="name" />
            <br />
            <input id="check" type="checkbox" name="isGoodWeather" />
            <label htmlFor="check">Good Weather Activity</label>
            <br />
            <button type="submit">Submit</button>
            <br />
        </form>
    );
}
