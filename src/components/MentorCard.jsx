import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ title, image, to }) => {
  return (
    <Link to={to} className='flex items-center bg-light p-2 rounded-xl drop-shadow-xl w-96 hover:scale-105 transition-transform'>
      {/* Image Section */}
      <div className="w-1/4 mt-1 transition hover:scale-110">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto rounded-lg object-cover" 
        />
      </div>

      {/* Text Section */}
      <div className="ml-6">
        <h2 className="text-2xl font-semibold text-dark">{title}</h2>
      </div>
    </Link>
  );
}

export default MentorCard;
