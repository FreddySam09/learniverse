import React from 'react'
import GameFrame from '/src/components/GameFrame';

const LabPage = () => {
  return (
    <>
    <div className='flex items-center justify-center ml-24'>
      <GameFrame gameUrl='/Games/Virtual-Lab/index.html' />
    </div>
    </>
  )
}

export default LabPage