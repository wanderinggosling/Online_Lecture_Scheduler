import React, { useState } from 'react'

import './AddInstructor.css'
import { addInstructor } from '../../actions/instructor';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddInstructor = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if(!name  && !password){
            alert("Enter all the details.")
        }
        dispatch(addInstructor({name,password},navigate));
    } catch (error) {
        console.log(error);
    }
    };
  return (
    <div className="form-container">
      <h3 className="form-title">Add Instructor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-button">
          <input type="submit" name="submit" value="Add Instructor" />
        </div>
      </form>
    </div>
  )
}

export default AddInstructor
