import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/reducer/habitSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ name }) => {
  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Use state to track the hour
  const [hour, setHour] = useState(0);

  // Update the hour state on component mount
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // Function called when saving a new habit
  const handleSave = () => {
    toast.success("Your habit has been added successfully", {
      autoClose: 2000,
    });

    // Get the habit name from the input field
    const habitName = document.getElementById("habitName").value;

    // Dispatch the addHabit action with the habit name
    dispatch(addHabit(habitName));

    // Clear the input field
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      <div className="navbar">
        <h3>
          {/* Display different greeting based on the time of day */}
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="tittle">Habit Tracker</div>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* Modal for adding a new habit */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="habitName" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
