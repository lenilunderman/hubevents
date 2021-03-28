// import to get all events from the dummy data...
import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";

// import components
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search.js";

function AllEventsPage() {
  // accessing the function to get all the events
  const events = getAllEvents();
  console.log(events);

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
