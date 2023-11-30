import { useRouter } from "next/router";

function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <h1 className="center">Loading...</h1>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <h1 className="center">Invalid Filter, Please try again !</h1>;
  }
  return (
    <div className="">
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEvents;
