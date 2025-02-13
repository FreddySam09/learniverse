import React from 'react';

const ChartFilters = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex-col justify-center items-center'>
          <button className='w-44 h-32 bg-light rounded-lg text-dark text-center drop-shadow-lg m-4 flex items-center justify-center transition hover:scale-105'>
            <h2 className='font-semibold text-xl'>Time Spent</h2>
          </button>
          <button className='w-44 h-32 bg-light rounded-lg text-dark text-center drop-shadow-lg m-4 flex items-center justify-center transition hover:scale-105'>
            <h2 className='font-semibold text-xl'>Points Scored</h2>
          </button>
        </div>
        {/* Change this div to flex-col for vertical alignment */}
        <div className='flex flex-col justify-center items-center'>
          <button className='bg-light text-dark w-36 h-20 drop-shadow-lg transition hover:scale-105 m-2 rounded-lg'>
            <h2 className='font-semibold text-lg px-2 py-1'>Past Day</h2>
          </button>
          <button className='bg-light text-dark w-36 h-20 drop-shadow-lg transition hover:scale-105 m-2 rounded-lg'>
            <h2 className='font-semibold text-lg px-2 py-1'>Past Week</h2>
          </button>
          <button className='bg-light text-dark w-36 h-20 drop-shadow-lg transition hover:scale-105 m-2 rounded-lg'>
            <h2 className='font-semibold text-lg px-2 py-1'>Past Month</h2>
          </button>
        </div>

      </div>
    </>
  );
};

export default ChartFilters;

