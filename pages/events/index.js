import EventsList from "../../components/events/events-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div className="">
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
