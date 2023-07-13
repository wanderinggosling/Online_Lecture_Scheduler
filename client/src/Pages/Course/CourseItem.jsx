import React from 'react'
import { Link } from 'react-router-dom'

const CourseItem = ({ id, name, level, description, image, handleClick }) => {
    return (
      <div className='my-3'>
        <div className="card" style={{ border: "none", height: "400px" }}>
          <img src={require('../../assets/courseimage.jpg')} className="card-img-top" alt="..." style={{ height: "50%" }} />
          <div className="card-body" style={{ height: "50%", overflow: "hidden" }}>
            <h5 className="card-title" style={{ textAlign: "center", minHeight: "50px" }}>{name}</h5>
            <p className="card-text" style={{ textAlign: "center" }}>{description}</p>
            <Link to={`/Lectures/${id}`}>
              <button className="btn btn-md btn-primary" onClick={handleClick} style={{ width: "100%", textAlign: "center" }}>View</button>
            </Link>
          </div>
        </div>
      </div>
    )
  };
export default CourseItem
