import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, image, onClick }) => {
  return (
    <div onClick={onClick} className="w-full max-w-xs h-auto bg-transparent hover:bg-transparent rounded-xl m-2 relative cursor-pointer">
      {/* Card Content */}
      <div className="course-card rounded-3xl drop-shadow-2xl relative w-full h-34 bg-light flex flex-col items-center justify-end p-4 transition hover:scale-95">
        {/* Image Section */}
        <div className="course-image absolute -top-8 w-48 h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain transition hover:scale-110 -mt-12 drop-shadow-xl" 
          />
        </div>
        {/* Title Section */}
        <div className="w-full text-center text-dark mt-20">
          <h3 className="text-xl font-bold mt-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
