// import component for a single event to be displayed on the list
import EventItem from "./event-item";

// import the css to be used for this component
import classes from "./event-list.module.css";

function EventList(props) {
  // object destructing from props
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          // passing the props that will be used on the component 'event-item' fn-name is EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
