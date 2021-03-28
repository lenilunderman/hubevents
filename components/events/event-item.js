// import the link component from nextjs
import Link from "next/link";

// import the css module to this especif component, the only required is to have .module.css at the end of the css, then you can access the classes on css by accessing the name of the class.
import classes from "./event-item.module.css";

// imports UI components
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import Arrowright from "../icons/arrow-right-icon";

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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address> {formattedAddress} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <Arrowright />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
