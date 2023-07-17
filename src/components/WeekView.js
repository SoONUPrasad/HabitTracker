import React from "react";
import { Link } from "react-router-dom";
import DayView from "./WeekDay";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // Use the useSelector hook to get the state from the reducer
  const habitsState = useSelector((state) => state.habits);

  // Get the habit from the habits state based on the ID stored in localStorage
  let habit = {};
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center black" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
      <Link to="/">
        <button className="btn btn-primary d-grid gap-2 col-6 mx-auto mt-5" type="button">
         Back to Detail View
        </button>
        </Link>
    </>
  );
};

export default WeekView;
