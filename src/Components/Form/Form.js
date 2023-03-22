export default function Form({ onAddActivity, handleAddActivity }) {
    function addActivity(event) {
        event.preventDefault();
        const elements = event.target.elements;

        const activity = elements.name.value;

        const isforGoodWeather = elements.isforGoodWeather.checked;

        const data = {
            name: activity,
            isforGoodWeather: isforGoodWeather,
        };

        onAddActivity(data);
        handleAddActivity(data);
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
            <input id="check" type="checkbox" name="isforGoodWeather" />
            <label htmlFor="check">Good Weather Activity</label>
            <br />
            <button type="submit">Submit</button>
            <br />
        </form>
    );
}
