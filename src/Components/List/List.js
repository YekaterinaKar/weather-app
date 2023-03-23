import ListItem from "../ListItem/ListItem";
export default function List({
    activities,
    isforGoodWeather,
    onDeleteActivity,
}) {
    return (
        <div className="lower">
            <h2>
                {isforGoodWeather
                    ? "The weather is awesome, go outside and:"
                    : "Bad weather outside. Here is what you can do"}
            </h2>
            <ul>
                {activities.map((activity) => (
                    <ListItem
                        onDeleteActivity={onDeleteActivity}
                        key={activity.id}
                        activity={activity}
                    />
                ))}
            </ul>
        </div>
    );
}
