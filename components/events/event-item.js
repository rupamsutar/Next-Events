import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div className="">
        <div className="">
          <h2>{title}</h2>
          <div className="">
            <time>{humanReadableDate}</time>
          </div>
          <div className="">
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="">
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
