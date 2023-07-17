import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/reducer/habitSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Habit = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;

  // Loop through the weekLog array to count the number of times the habit is done
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // Use the useNavigate hook from react-router-dom to handle navigation
  const navigate = useNavigate();

  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Function called when the delete button is clicked
  const handleDelete = () => {
    // Show a success toast notification
    toast.success("Your habit has been deleted successfully", {
      autoClose: 2000,
    });

    // Dispatch the deleteHabit action with the habit's ID
    dispatch(deleteHabit(habit.id));
  };

  // Function called when the week view button is clicked
  // This function sets the current habit ID to localStorage and navigates to the week-view page
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">
            {countDone}/{todayDay + 1} days
          </p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week"></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Habit;
