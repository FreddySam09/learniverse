import React from 'react';
import MentorCard from '../components/MentorCard';
import TeachersImage from '/src/assets/img/teachersimg.svg';
import PerformanceImage from '/src/assets/img/performanceimg.svg';
import HelpImage from '/src/assets/img/helpimg.svg';
import CloudImage from '/src/assets/img/3d-cloud.png';
import MentorHero from '/src/assets/img/mentoringheroimg.svg';

const StudentsPage = () => {
  return (
    <>
      <div className='bg-transparent w-96 h-96 flex absolute bottom-48 left-32 rounded-lg fade-in'>
        <img src={CloudImage} alt="Cloud" className='transition w-96 h-96 drop-shadow-xl hover:scale-110 animate-floating' />
      </div>

      <div className='bg-transparent w-96 h-96 flex absolute bottom-24 left-64 rounded-lg fade-in'>
        <img src={MentorHero} alt="Cloud" className='transition w-96 h-96 drop-shadow-xl hover:scale-105' />
      </div>

      <div className='bg-transparent w-72 h-72 flex absolute -bottom-4 left-96 ml-8 rounded-lg fade-in'>
        <img src={CloudImage} alt="Cloud" className='transition w-72 h-72 drop-shadow-xl hover:scale-110 animate-floating' />
      </div>

      <div className='flex flex-col items-center justify-center mt-24 -mb-4 fade-in'>
        <h1 className='text-5xl font-bold drop-shadow-lg transition hover:text-blue-200'>We Guide You</h1>
        
        <p className='font-medium drop-shadow-lg transition mt-4 hover:text-blue-200 text-center max-w-xl'>
          Level up your skills with expert advice! Get career tips, set goals, and stay on track. Personalized support, just for you. Book your session now—your future starts here!
        </p>

        <button className='bg-light text-dark font-semibold text-lg w-40 h-auto px-2 py-1 rounded-lg mt-4 drop-shadow-xl transition hover:scale-105 hover:bg-darkpurple hover:text-light'>
          Get Started
        </button>
      </div>
      
      {/* Mentor Cards */}
      <div className='absolute bottom-80 right-40 mb-8 flex items-center justify-start fade-in'>
        <MentorCard image={TeachersImage} title='Career Guidance'/>
      </div>

      <div className='absolute bottom-56 right-64 -mb-2 flex items-center justify-start fade-in'>
        <MentorCard image={PerformanceImage} title='Financial Guidance' to='/finance'/>
      </div>
    </>
  );
};

export default StudentsPage;
