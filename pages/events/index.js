import { useRouter } from "next/router";
import EventsList from "../../components/events/events-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div className="">
      <EventSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
