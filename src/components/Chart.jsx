import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ dataValues, labels }) => {
  const data = {
    labels: labels || ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'], // Default labels for six values
    datasets: [
      {
        label: 'Points Distribution',
        data: dataValues || [30, 20, 15, 10, 5, 20], // Default data for six values
        backgroundColor: [
          'rgba(52, 152, 219, 0.7)', // Vibrant Blue with 90% opacity
          'rgba(46, 204, 113, 0.7)', // Bright Green with 90% opaacity
          'rgba(241, 196, 15, 0.7)',  // Sunshine Yellow with 90% opacity
          'rgba(230, 126, 34, 0.7)',  // Bold Orange with 90% opacity
          'rgba(231, 76, 60, 0.7)',   // Bright Red with 90% opacity
          'rgba(155, 89, 182, 0.7)',  // Rich Purple with 90% opacity
        ],
        borderColor: [
          '#3498db', // Vibrant Blue border
          '#2ecc71', // Bright Green border
          '#f1c40f', // Sunshine Yellow border
          '#e67e22', // Bold Orange border
          '#e74c3c', // Bright Red border
          '#9b59b6', // Rich Purple border
        ],
        borderWidth: 2, // Increased border width for better visibility
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Makes it a donut chart
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="max-w-full mx-auto"> {/* Change max-w-md to max-w-full */}
      <Doughnut data={data} options={options} width={400} height={400} /> {/* Set specific width and height */}
    </div>
  );
};

export default Chart;
