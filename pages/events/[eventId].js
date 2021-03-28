import { useRouter } from "next/router";
import { Fragment } from "react";
// import the function from the dummy data that fetch by the id
import { getEventById } from "../../dummy-data";

// components
import EventSummary from "../../components/event-detail/event-summary";
import EventSogistic from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

function EventDetail() {
  // call the router to be accesable
  const router = useRouter();
  // access the query via router
  const eventId = router.query.eventId;
  // acess the function that is inside the dummy data and bring only events with that id.
  event = getEventById(eventId);
  // check if the event exists or not, handle the case **
  if (!event) {
    return <p> No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetail;
