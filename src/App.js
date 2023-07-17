import React from 'react'
import Navbar from './components/Navbar'
import Habit from './components/Habit'
import { useSelector } from "react-redux";

const App = () => {
  // Use the useSelector hook to get the state from the "habits" reducer
  let habitsState = useSelector((state) => state["habits"]);

  return (
    <>
      {/* Render the Navbar component with the name "Detail View" */}
      <Navbar name="Detail View" />

      <div className='habits'>
        {/* Map through the habitsState array and render a Habit component for each habit */}
        {habitsState.map((habit) => (
          <Habit habit={habit} key={habit.id} />
        ))}
      </div>
    </>
  )
}

export default App
