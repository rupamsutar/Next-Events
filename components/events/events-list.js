import EventItem from "./event-item";

function EventsList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventsList;
