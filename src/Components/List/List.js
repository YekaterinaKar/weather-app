import ListItem from "../ListItem/ListItem";
export default function List({ activities, isforGoodWeather }) {
    return (
        <>
            <h2>
                {isforGoodWeather
                    ? "The weather is awesome, go outside and:"
                    : "Bad weather outside. Here is what you can do"}
            </h2>
            <ul>
                {activities.map((activity) => (
                    <ListItem key={activity.id} activity={activity} />
                ))}
            </ul>
        </>
    );
}
