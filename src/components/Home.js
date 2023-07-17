import React from 'react'
import Navbar from './Navbar'
import Habit from './Habit'
import { useSelector } from "react-redux";

const Home = () => {
  let habitsState=useSelector((state)=>state["habits"])

  return (
    <>
      <Navbar name="Detail View"/>
      <div className='habits'>
      {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
    </>
  )
}

export default Home
