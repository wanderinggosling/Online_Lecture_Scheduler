import React from 'react';
import CourseItem from './CourseItem';
import { useNavigate } from 'react-router-dom';

const CourseList = ({ courses }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Handle click action
    // navigate('/ViewProfile/642e7c6f0e7919f86a526219');
  };

  return (
    <div>
      <div className="row" style={{ overflowY: "scroll", maxHeight: "78vh", marginTop: "1vh" }}>
        {courses?.map((course) => (
          <div className="col-md-4 col-sm-6" key={course._id} style={{ display: "grid" }}>
            <CourseItem
              id={course._id}
              name={course.name}
              level={course.level}
              description={course.description}
              image={course.image}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

