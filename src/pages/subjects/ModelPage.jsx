import React from 'react';
import { useLocation } from 'react-router-dom';
import GameFrame from '../../components/GameFrame';

const ModelPage = () => {
  const location = useLocation();
  const { subject } = location.state || {}; // Safely access subject

  console.log("Received subject:", subject); // Debugging to confirm subject is received

  if (!subject) {
    return <div>Loading...</div>; // If subject is not found, show loading or fallback message
  }

  return (
    <div className="flex items-center justify-center ml-24">
      <GameFrame 
        gameUrl="/Games/Heart-model/index.html" 
        subject={subject} // Correctly pass subject to GameFrame
      />
    </div>
  );
};

export default ModelPage;
