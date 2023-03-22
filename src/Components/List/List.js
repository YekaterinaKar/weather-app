import ListItem from "../ListItem/ListItem";
export default function List({ activities }) {
    return (
        <ul>
            {activities.map((activity) => (
                <ListItem key={activity.id} activity={activity} />
            ))}
        </ul>
    );
}
