import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className="">
      <h1>The Home Page</h1>
    </div>
  );
}

export default HomePage;
