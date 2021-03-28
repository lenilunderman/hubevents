// import the link component from nextjs
import Link from "next/link";

// import the css module to this especif component, the only required is to have .module.css at the end of the css, then you can access the classes on css by accessing the name of the class.
import classes from "./event-item.module.css";

function EventItem(props) {
  // object destructuring to pull out the data from props
  const { title, image, date, location, id } = props;
  // change the date to a human readable format
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // adjust the location to a more readable format
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address> {formattedAddress} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}> Explore Event </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
