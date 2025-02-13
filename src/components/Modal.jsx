import React from 'react';
import PropTypes from 'prop-types'; // For prop type validation
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, options = [], subject }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleOptionClick = (route) => {
    // Debugging subject value
    console.log("Navigating to:", route, "with subject:", subject);
    // Navigate to the respective page and pass the subject as state
    navigate(route, { state: { subject } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-xl shadow-xl">
        <h2 className="text-2xl text-dark font-bold text-center mb-6">Choose an Option</h2>

        {options.length > 0 ? (
          <div className="grid grid-cols-3 gap-12 justify-items-center">
            {options.map((option, index) => (
              <button
                key={index}
                className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition"
                onClick={() => handleOptionClick(option.route)}
                aria-label={`Choose ${option.label}`}
              >
                {/* Image Background */}
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No options available.</p>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-8 bg-dark text-light font-semibold py-2 px-4 rounded-lg w-full transition hover:bg-light hover:border-dark hover:border-2 hover:text-dark"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Whether the modal is open
  onClose: PropTypes.func.isRequired, // Close function
  options: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired, // Array of options with route, image, and label
  subject: PropTypes.string, // Subject to pass with navigation
};

Modal.defaultProps = {
  subject: '', // Default subject if none is provided
};

export default Modal;
