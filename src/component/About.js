// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../context/NoteContext';

import React from 'react';
import Login from './Login';
// import { useNavigate} from 'react-router-dom'

const About = () => {
  // const a = useContext(NoteContext)
  // useEffect(() => {
  //   a.update()

  // }, [])


  // navigate("/login");


  return (
    <>
         <Login />
         {/* {a.state.name}, my role is {a.state.role} */}
    
    </>
  )
}

export default About