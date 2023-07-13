
import './App.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Auth from './Pages/Auth/Auth.jsx'

import { BrowserRouter as Router } from 'react-router-dom';
import Instructor from './Pages/Instructor/Instructor';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCourses } from './actions/course';
import { getAllInstructor } from './actions/instructor';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllInstructor());
  }, [dispatch])

  return (
    <Router>
      
    <Navbar/>
    <AllRoutes/>
    {/* <Auth/> */}
 
    </Router>
  );
}

export default App;
