export default function ListItem({ activity, onDeleteActivity }) {
    return (
        <>
            <li key={activity.id}>{activity.name} </li>
            <button onClick={() => onDeleteActivity(activity.id)}>✗</button>
        </>
    );
}
