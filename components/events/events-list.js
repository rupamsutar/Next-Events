import EventItem from "./event-item";

function EventsList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventsList;
