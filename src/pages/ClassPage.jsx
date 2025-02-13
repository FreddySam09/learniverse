import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import Modal from '../components/Modal';
import ChemistryIcon from '/src/assets/img/chemimg.svg';
import PhysicsIcon from '/src/assets/img/phyimg.svg';
import BiologyIcon from '/src/assets/img/bioimg.svg';
import EnglishIcon from '/src/assets/img/engimg.svg';
import MathsIcon from '/src/assets/img/matimg.svg';
import SocialIcon from '/src/assets/img/socimg.svg';
import GameIcon from '/src/assets/img/gameicon.jpg';
import LabIcon from '/src/assets/img/labicon.jpg';
import ModelIcon from '/src/assets/img/modelicon.jpg';

const ClassPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (subject, options) => {
    console.log("Selected Subject:", subject);
    setSelectedSubject(subject);
    setModalOptions(options);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleGameClick = () => {
    if (selectedSubject) {
      navigate('/learn/game', { state: { subject: selectedSubject } }); // Pass the subject via state
      closeModal();
    }
  };

  const Options = [
    { label: '3D Anatomy', route: '/learn/model', image: ModelIcon },
    { label: 'Open-World Game', route: '/learn/game', image: GameIcon },
    { label: 'Virtual Lab', route: '/learn/lab', image: LabIcon },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24 -mb-4 fade-in">
        <h1 className="text-4xl font-bold drop-shadow-lg transition hover:text-blue-200">Welcome to Class!</h1>
        <p className="font-medium drop-shadow-lg transition hover:text-blue-200">
          Not just simple though, But unique and Immersive. Dive in!
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex items-center justify-center mt-40 ml-12 mb-6 fade-in">
        <CourseCard title="Chemistry" image={ChemistryIcon} onClick={() => handleCardClick('Chemistry', Options)} />
        <CourseCard title="Physics" image={PhysicsIcon} onClick={() => handleCardClick('Physics', Options)} />
        <CourseCard title="Biology" image={BiologyIcon} onClick={() => handleCardClick('Biology', Options)} />
      </div>

      <div className="flex items-center justify-center mt-20 ml-12 fade-in">
        <CourseCard title="English" image={EnglishIcon} onClick={() => handleCardClick('English', Options)} />
        <CourseCard title="Maths" image={MathsIcon} onClick={() => handleCardClick('Maths', Options)} />
        <CourseCard title="Social" image={SocialIcon} onClick={() => handleCardClick('Social', Options)} />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} options={modalOptions} subject={selectedSubject} />
    </>
  );
};

export default ClassPage;
