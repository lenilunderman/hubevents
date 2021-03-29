// import the component of UI button
import Button from "../ui/button";
import classes from "./events-search.module.css";

// use ref from react to get the value when the form is submited
import { useRef } from "react";

function EventsSearch(props) {
  // refs coming from react to storage the value - then connect to the inputs
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHander(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // create a prop for the index component on events
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHander}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"> Year </label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"> Month </label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button> Find events </Button>
    </form>
  );
}

export default EventsSearch;
