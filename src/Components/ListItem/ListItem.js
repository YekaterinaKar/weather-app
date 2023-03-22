export default function ListItem({ activity }) {
    return <li key={activity.id}>{activity.name} </li>;
}
