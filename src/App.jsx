import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Assuming Sidebar is imported here
import ClassPage from './pages/ClassPage';  // Add your other page components similarly
import MentorPage from './pages/MentorPage';
import ReportPage from './pages/ReportPage';
import StudentsPage from './pages/StudentsPage';
import Topbar from './components/Topbar';
import ModelPage from './pages/subjects/ModelPage';
import LabPage from './pages/subjects/LabPage';
import GamePage from './pages/subjects/GamePage';
import CloudImage from './assets/img/3d-cloud.png';
import LogoElement from './assets/img/logoelement.svg';
import FinancePage from './pages/FinancePage';

function App() {
  return (
    <Router>
      <div className="app flex">
        
        <div className='flex-grow text-light'>
          <Routes>
            {/* Home Page with the centered text */}
            <Route path="/" element={
              <>
              <div className='absolute bottom-6 left-16 mb-2 ml-36 flex justify-end items-end fade-in'>
                <div className='bg-transparent w-72 h-72 flex justify-center items-center rounded-lg'>
                  <img src={CloudImage} alt="Cloud" className='transition w-72 h-72 drop-shadow-xl hover:scale-110 animate-floating' />
                </div>
              </div>
              <div className='absolute top-40 left-16 mt-12 ml-32 flex justify-end items-end fade-in'>
                <div className='bg-transparent w-48 h-48 flex justify-center items-center rounded-lg'>
                  <img src={CloudImage} alt="Cloud" className='transition w-48 h-48 drop-shadow-xl hover:scale-110 animate-floating' />
                </div>
              </div>
              <div className='absolute bottom-28 right-10 mb-2 mr-16 flex justify-end items-end fade-in'>
                <div className='bg-transparent w-96 h-96 flex justify-center items-center rounded-lg'>
                  <img src={CloudImage} alt="Cloud" className='transition w-96 h-96 drop-shadow-xl hover:scale-110 animate-floating' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center h-screen w-screen font-poppins fade-in'>
                <h1 className='text-7xl font-bold -mb-8 drop-shadow-xl hover:text-blue-200'>The Sky is The Limit</h1>
                <img className='w-[50%] h-[50%] drop-shadow-xl transition hover:scale-105' src={LogoElement} alt="Learniverse Logo" />
                <a href="/learn">
                  <button className='text-xl font-bold transition mt-4 bg-light drop-shadow-xl text-darkpurple px-6 py-3 rounded-xl hover:scale-110 hover:bg-darkpurple hover:text-light'>
                    Start Learning Now
                  </button>
                </a>
              </div>
              </>
            } />
            <Route path="/learn" element={<ClassPage />} />
            <Route path="/mentor" element={<MentorPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/learn/model" element={<ModelPage />} />
            <Route path="/learn/game" element={<GamePage />} />
            <Route path="/learn/lab" element={<LabPage />} />
            <Route path="/finance" element={<FinancePage />} />
          </Routes>
        </div>
        <Sidebar />
        <Topbar />
      </div>
    </Router>
  );
}

export default App;

