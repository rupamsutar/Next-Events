import EventsList from "../../components/events/events-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div className="">
      <EventSearch />
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
