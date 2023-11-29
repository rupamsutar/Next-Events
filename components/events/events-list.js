import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventsList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventsList;
