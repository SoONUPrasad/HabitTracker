import React from "react";
import { useDispatch } from "react-redux";
import {
  habitDone,
  habitNone,
  habitUnDone,
} from "../redux/reducer/habitSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DayView = ({ day }) => {
  // Get today's date
  const today = new Date();
  // Get the day from today's date
  const todayDay = today.getDay();

  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Get date details from the provided date
  const date = new Date(day.yyyy, day.mm, day.dd);

  // Function called when the done icon is clicked
  const markToDone = () => {
    if (day.id > todayDay) {
      toast.error("You cannot change the status for future days", {
        autoClose: 2000,
      });
      return;
    } else {
      toast.success("Your Habit has been successfully marked as Done.", {
        autoClose: 2000,
      });
      // Dispatch the habitDone action from the reducer
      dispatch(habitDone(day.id));
    }
  };

  // Function called when the undone icon is clicked
  const markToUnDone = () => {
    if (day.id > todayDay) {
      toast.error("You cannot change the status for future days", {
        autoClose: 2000,
      });
      return;
    } else {
      toast.error("Habit set as Not Done!", {
        autoClose: 2000,
      });
      // Dispatch the habitUnDone action from the reducer
      return dispatch(habitUnDone(day.id));
    }
  };

  // Function called when the none icon is clicked
  const markToNone = () => {
    if (day.id > todayDay) {
      toast.error("You cannot change the status for future days", {
        autoClose: 2000,
      });
      return;
    } else {
      toast.warn("Warn! Habit set as None", {
        autoClose: 2000,
      });
      // Dispatch the habitNone action from the reducer
      return dispatch(habitNone(day.id));
    }
  };

  return (
    <>
      <div className="day-container">
        <h5 className="text-center">{day.day}</h5>
        <p className="text-center white">
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </p>
        <div className="icon">
          <i
            className={
              day.isDone === true
                ? "fa-solid fa-circle-check circle-icon success"
                : "fa-solid fa-circle-check circle-icon"
            }
            onClick={markToDone}
          ></i>
          <i
            className={
              day.isDone === false
                ? "fa-solid fa-circle-xmark circle-icon notSuccess"
                : "fa-solid fa-circle-xmark circle-icon"
            }
            onClick={markToUnDone}
          ></i>
          <i
            className={
              day.isDone === ""
                ? "fa-solid fa-circle-minus circle-icon active"
                : "fa-solid fa-circle-minus circle-icon"
            }
            onClick={markToNone}
          ></i>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DayView;
