import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './Instructor.css'
const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('http://localhost:8000/instructor/getInstructor'); 
        const data = await response.json();
        setInstructors(data.instructors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <>
   <Link to='/AddInstructor'><button style={{display:"flex",background:"green", borderRadius:"2rem", float:"right", marginRight:"4vh", marginTop:"2vh"}}>Add Instructor</button></Link> 
    <div className="instructors-container">
      <h2>List of Instructors</h2>
      {instructors.length === 0 ? (
        <p>No instructors found.</p>
      ) : (
        <table className="instructors-table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor._id}>
                <td>{instructor.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default Instructor;

