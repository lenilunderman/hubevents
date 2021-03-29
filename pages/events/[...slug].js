// extract the data from the url
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  // get all the data as an array
  const filterDate = router.query.slug;

  // check if the filted data is falsy
  if (!filterDate) {
    return <p className="center"> Loading ...</p>;
  }
  // the data comes as text, but need to be transforming to numbers
  const filteredYear = filterDate[0];
  const filteredMonth = filterDate[1];
  // transforming data to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // Filters for the search
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> Invalid Filter, please adjust your search. </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all events </Button>
        </div>
      </Fragment>
    );
  }

  //if everything passes I can get the events to be displayed
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // check if it comes with zero events or not.
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No events found for the chosen filter. </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all events </Button>
        </div>
      </Fragment>
    );
  }

  // resulttitle expect a data objct that props will receive
  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
