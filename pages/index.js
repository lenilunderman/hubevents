// get the dummy data to be used on the application
import { getFeaturedEvents } from "../dummy-data";

// components imports
import EventList from "../components/events/event-list";

function Homepage() {
  // get all events from the dummy data using a function imported from the file
  const featuredEvents = getFeaturedEvents();
  console.log("featuredEventdummy data: ", featuredEvents);

  return (
    <div>
      {/* make sure to pass featuredEvents as 'DATA' and items as 'PROPS', because on the event-list component, will be destructring props as items, and mapping that*/}
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Homepage;
