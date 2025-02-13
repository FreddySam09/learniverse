import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import learnIcon from '../assets/icons/learn-icon.png';
import mentorIcon from '../assets/icons/mentor-icon.png';
import reportIcon from '../assets/icons/report-icon.png';
import studentIcon from '../assets/icons/student-icon.png';

const Sidebar = () => {
  const location = useLocation(); // Get current route

  return (
    <div className='fixed top-0 left-0 h-screen w-32 sm:w-24 md:w-32 m-0 flex flex-col bg-dark text-light'>
      <ul className='flex flex-col justify-center flex-grow font-poppins font-medium'>
        <SidebarIcon icon={learnIcon} tooltip='Class' to="/learn" active={location.pathname === '/learn'} />
        <SidebarIcon icon={mentorIcon} tooltip='Mentor' to="/mentor" active={location.pathname === '/mentor'} />
        <SidebarIcon icon={reportIcon} tooltip='Report' to="/report" active={location.pathname === '/report'} />
        <SidebarIcon icon={studentIcon} tooltip='Guidance' to="/students" active={location.pathname === '/students'} />
      </ul>
    </div>
  );
};

const SidebarIcon = ({ icon, tooltip, to, active }) => {
  const pageName = tooltip;

  return (
    <Link to={to} className={`relative flex items-center justify-center left-3 h-24 w-24 my-4 rounded-lg group block ${active ? 'bg-highlight' : 'bg-light'}`}>
      <img 
        src={icon} 
        alt="Sidebar Icon" 
        className={`transition-transform duration-200 ease-in-out h-17 w-17 group-hover:scale-110`}
      />
      <div className='absolute left-full ml-6 hidden group-hover:block bg-dark text-light py-1 px-2 rounded-md font-normal'>
        {tooltip}
      </div>
      {active && (
        <span className="absolute text-light font-bold text-lg drop-shadow-2xl" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          {pageName}
        </span>
      )}
      <div className={`transition-all duration-200 ${active ? 'ml-4' : ''}`} />
    </Link>
  );
};

export default Sidebar;
