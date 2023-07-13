import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Lectures = () => {
    const {id} = useParams();
    const [courses, setCourses]=useState([]);
    const [currentCourse,setCurrentCourse]=useState([])

    
    useEffect(() => {
        const fetchCourses = async () => {
          try {
            const response = await fetch('http://localhost:8000/course/getCourse'); 
            const data = await response.json();
            const filteredCourses = data.courses.filter((c) => c._id === id);
            setCourses(data.courses);
            setCurrentCourse(filteredCourses);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchCourses();
      }, [id]);
      
      console.log(currentCourse); // Access the filtered course
      


  return (
    <div>
      <div>
      <h2>Lecture Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Lecture</th>
            <th>Lecturer</th>
          </tr>
        </thead>
        <tbody>
          {currentCourse[0]?.lectures?.map((lecture, index) => (
            <tr key={index}>
              <td>{lecture.date}</td>
              <td>{lecture.lecture}</td>
              <td>{lecture.lecturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Lectures
