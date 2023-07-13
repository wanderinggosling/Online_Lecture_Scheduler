import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from './CourseList';
import { getAllCourses } from '../../actions/course';

const Course = () => {
  const [search, setSearch] = useState('');
 const [courses,setCourses]=useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/course/getCourse'); 
        const data = await response.json();
        setCourses(data.courses);
        console.log(courses)
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className='container my-3'>
        <h1 className='text-center' style={{ color: 'aliceblue' }}>
          Courses
        </h1>

        <div className='col-md-3'>
          <div className='input-group' style={{ marginTop: '20px' }}>
            <div className='form-outline' style={{ marginLeft: 'auto' }}>
              <input
                type='search'
                id='form1'
                className='form-control'
                placeholder='Search'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <CourseList courses={courses.filter((course) => course.name.toLowerCase().includes(search))} />
      </div>
    </>
  );
};

export default Course;
