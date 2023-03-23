export default function ListItem({ activity, onDeleteActivity }) {
    return (
        <ul
            style={{
                listStyleType: "none",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <li style={{ marginRight: "1rem" }} key={activity.id}>
                {activity.name}
            </li>
            <button onClick={() => onDeleteActivity(activity.id)}>✗</button>
        </ul>
    );
}
