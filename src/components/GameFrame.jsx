// import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// const GameFrame = ({ gameUrl, width = 'w-full', height = 'h-screen', title = 'PlayCanvas Game', subject }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     // Ensure the iframe exists and subject is defined
//     if (iframeRef.current && subject) {
//       // Set the subject in sessionStorage
//       sessionStorage.setItem('subject', subject);

//       // Optionally, you can also send the subject to PlayCanvas via an iframe load event
//       const sendMessage = () => {
//         console.log('Subject set in sessionStorage:', subject);
//       };

//       // Trigger message immediately or on iframe load
//       if (iframeRef.current.contentWindow.document.readyState === 'complete') {
//         sendMessage();
//       } else {
//         iframeRef.current.addEventListener('load', sendMessage);
//       }

//       // Cleanup event listener
//       return () => {
//         if (iframeRef.current) {
//           iframeRef.current.removeEventListener('load', sendMessage);
//         }
//       };
//     }
//   }, [subject]);

//   if (!subject) {
//     return <div>Loading...</div>; // Show loading until the subject is available
//   }

//   return (
//     <div className={`${width} ${height}`}>
//       <iframe
//         ref={iframeRef}
//         src={gameUrl}
//         title={title}
//         className="w-full h-full"
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// GameFrame.propTypes = {
//   gameUrl: PropTypes.string.isRequired, // URL for the PlayCanvas game (required)
//   width: PropTypes.string,              // Tailwind width classes (optional, defaults to w-full)
//   height: PropTypes.string,             // Tailwind height classes (optional, defaults to h-screen)
//   title: PropTypes.string,              // Title for the iframe (optional, defaults to 'PlayCanvas Game')
//   subject: PropTypes.string.isRequired, // Subject to send to the iframe (required)
// };

// export default GameFrame;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const GameFrame = ({ gameUrl, width = 'w-full', height = 'h-screen', title = 'PlayCanvas Game', gameData }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Ensure the iframe exists and gameData is defined
    if (iframeRef.current && gameData) {
      // Set the gameData in sessionStorage as a JSON string
      sessionStorage.setItem('quizQuestions', JSON.stringify(gameData));

      const sendMessage = () => {
        console.log('Game data set in sessionStorage:', gameData);
      };

      // Trigger message immediately or on iframe load
      if (iframeRef.current.contentWindow.document.readyState === 'complete') {
        sendMessage();
      } else {
        iframeRef.current.addEventListener('load', sendMessage);
      }

      // Cleanup event listener
      return () => {
        if (iframeRef.current) {
          iframeRef.current.removeEventListener('load', sendMessage);
        }
      };
    }
  }, [gameData]);

  if (!gameData) {
    return <div>Loading...</div>; // Show loading until gameData is available
  }

  return (
    <div className={`${width} ${height}`}>
      <iframe
        ref={iframeRef}
        src={gameUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

GameFrame.propTypes = {
  gameUrl: PropTypes.string.isRequired, // URL for the PlayCanvas game (required)
  width: PropTypes.string,              // Tailwind width classes (optional, defaults to w-full)
  height: PropTypes.string,             // Tailwind height classes (optional, defaults to h-screen)
  title: PropTypes.string,              // Title for the iframe (optional, defaults to 'PlayCanvas Game')
  gameData: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
        correctOptionId: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired, // Game data object (required)
};

export default GameFrame;
