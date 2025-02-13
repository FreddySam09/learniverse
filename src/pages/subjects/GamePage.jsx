// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import GameFrame from '../../components/GameFrame';

// const GamePage = () => {
//   const location = useLocation();
//   const { subject } = location.state || {}; // Safely access subject

//   console.log("Received subject:", subject); // Debugging to confirm subject is received

//   if (!subject) {
//     return <div>Loading...</div>; // If subject is not found, show loading or fallback message
//   }

//   return (
//     <div className="flex items-center justify-center ml-24">
//       <GameFrame 
//         gameUrl="/Games/dyntest1/index.html" 
//         subject={subject} // Correctly pass subject to GameFrame
//       />
//     </div>
//   );
// };

// export default GamePage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import GameFrame from '../../components/GameFrame';

const GamePage = () => {
  const location = useLocation();
  const { subject } = location.state || {}; // Safely access subject

  // Example JSON object containing game data
  const gameData = {
    subject: subject || 'Unknown Subject',
    questions: [
      {
        text: 'What is the unit of force?',
        options: [
          { id: 1, text: 'Metre' },
          { id: 2, text: 'Newton' },
          { id: 3, text: 'Gram' },
          { id: 4, text: 'None' },
        ],
        correctOptionId: 2,
      },
      {
        text: 'What is Needed?',
        options: [
          { id: 1, text: 'Car' },
          { id: 2, text: 'Life' },
          { id: 3, text: 'Bike' },
          { id: 4, text: 'None' },
        ],
        correctOptionId: 2,
      },
    ],
    metadata: {
      level: 'Beginner',
      topic: 'General Knowledge',
      timestamp: new Date().toISOString(),
    },
  };

  console.log('Game data:', gameData); // Debugging to confirm gameData is structured correctly

  return (
    <div className="flex items-center justify-center ml-24">
      <GameFrame 
        gameUrl="/Games/digibridge-dynamic-game-new/index.html" 
        gameData={gameData} // Pass the JSON object to GameFrame
      />
    </div>
  );
};

export default GamePage;
