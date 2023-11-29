import EventsList from "../components/events/events-list";
import EventSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className="">
      <EventsList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
