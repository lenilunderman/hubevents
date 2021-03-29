// import to get all events from the dummy data...
import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";

// import components
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search.js";

// import to deal with problematic navigation
import { useRouter } from "next/router";

function AllEventsPage() {
  // accessing the function to get all the events
  const events = getAllEvents();
  const router = useRouter();

  //console.log(events);

  function findeEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    // to go to a different page
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findeEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
