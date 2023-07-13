import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Instructor from './Pages/Instructor/Instructor'
import AddInstructor from './Pages/Instructor/AddInstructor'
import Course from './Pages/Course/Course'
import Lectures from './Pages/Course/Lectures'


const AllRoutes = () => {
  return (
  <Routes>
    <Route exact path='/' element={<></>}></Route>
    <Route exact path='/Instructors' element={<Instructor/>}></Route>
    <Route exact path='/AddInstructor' element={<AddInstructor/>}></Route>
    <Route exact path='/Courses' element={<Course/>}></Route>
    <Route exact path='/Lectures/:id' element={<Lectures/>}></Route>
  </Routes>
  )
}

export default AllRoutes
