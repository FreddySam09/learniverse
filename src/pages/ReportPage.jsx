import React from 'react';
import Chart from '/src/components/Chart';
import ChartFilters from '../components/ChartFilters';

const ReportPage = () => {
  const chartData = [46, 85, 67, 80, 95, 25]; // Example values
  const chartLabels = ['Physics', 'Biology', 'Chemistry', 'Maths', 'English', 'Social'];

  return (
    <>
      <div className='absolute top-8 left-2 ml-48 flex justify-end items-end fade-in'>
        <div className='bg-transparent w-48 h-48 flex justify-center items-center rounded-lg'>
          <img 
            src="../src/assets/img/3d-cloud.png" 
            alt="Cloud" 
            className='transition w-48 h-48 drop-shadow-xl hover:scale-110 animate-floating' 
          />
        </div>
      </div>

      <div className='absolute bottom-8 right-10 -mt-12 mr-16 flex justify-end items-end fade-in'>
        <div className='bg-transparent w-64 h-64 flex justify-center items-center rounded-lg'>
          <img 
            src="../src/assets/img/3d-cloud.png" 
            alt="Cloud" 
            className='transition w-64 h-64 drop-shadow-xl hover:scale-110 animate-floating' 
          />
        </div>
      </div>

      <h1 className='absolute top-32 left-1/2 transform -translate-x-1/2 flex-col justify-center items-center text-light font-bold text-3xl transition hover:text-blue-200 fade-in'>
        Explore your Performance
      </h1>

      <div className="absolute right-60 top-52 w-auto h-80 bg-light rounded-xl drop-shadow-xl p-4 flex justify-center items-center transition hover:scale-105 fade-in">
        <Chart dataValues={chartData} labels={chartLabels} />
      </div>

      <div className='absolute left-80 top-52 mt-2 w-auto h-auto bg-transparent rounded-xl drop-shadow-xl p-2 flex justify-center items-center fade-in'>
        <ChartFilters />
      </div>

      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center fade-in'>
        <div className='bg-dark text-light text-center w-44 h-32 rounded-lg m-2 drop-shadow-lg transition hover:scale-105 hover:bg-light hover:text-dark hover:border-dark hover:border-2'>
          <h2 className='font-medium text-lg mt-4'>Streak</h2>
          <h2 className='font-bold text-5xl mt-4'>6</h2>
        </div>
        <div className='bg-dark text-light text-center w-44 h-32 rounded-lg m-2 drop-shadow-lg transition hover:scale-105 hover:bg-light hover:text-dark hover:border-dark hover:border-2'>
          <h2 className='font-medium text-lg mt-4'>Favourite</h2>
          <h2 className='font-bold text-3xl mt-4'>Physics</h2>
        </div>
        <div className='bg-dark text-light text-center w-44 h-32 rounded-lg m-2 drop-shadow-lg transition hover:scale-105 hover:bg-light hover:text-dark hover:border-dark hover:border-2'>
          <h2 className='font-medium text-lg mt-4'>Needs Work</h2>
          <h2 className='font-bold text-3xl mt-4'>Biology</h2>
        </div>
      </div>
    </>
  );
};

export default ReportPage;
