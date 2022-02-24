/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import DuringAnalysis from './DuringAnalysis';
import ProjectManagement from './ProjectManagement';
import ProjectSetup from './ProjectSetup';

declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        onDidChange: (key: string, callback: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

const Tailwind = () => {
  return (
    <div className="text-center border-solid border-4 border-red-500 bg-black text-white shadow">
      ERB + TAILWIND = ❤
    </div>
  );
};

const CreateProjectModal = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col">
            <h4>Name: </h4>
            <input type="text" />
            <h4>Project Description: </h4>
            <textarea />
          </div>
          <div className="flex flex-col">
            <h4>Add/change video</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>

        <div>Existing Taxanomies: </div>
      </div>
    </div>
  );
};

const Hello = () => {
  // const [openModal, setOpenModal] = React.useState(false);

  // const getModalStatus = () => {
  //   window.electron.store.onDidChange('open-modal', () => { setOpenModal(true)}
  // };

  return (
    <>
      <div id="home">
        <nav>
          <h1>PathML Electron Application</h1>
        </nav>
        <Tailwind />
        <div>
          <video width="660" height="300" controls>
            <source src="" type="video" />
          </video>
        </div>
      </div>

      <div id="modal" style={{ display: 'none' }}>
        <CreateProjectModal />
      </div>
    </>
  );
};

const StartUpPage = () => {
  return (
    <>
      <div className="flex flex-col place-items-center pt-10 gap-10">
        <h3 className="text-6xl font-bold">PathML</h3>
        <div className="flex flex-col gap-5">
          {/* <input type="file" /> */}
          <button className="bg-green-300" type="submit">
            <Link to="/projectsetup">Create Project</Link>
          </button>
          <button className="bg-blue-300" type="submit">
            Open Project
          </button>
          <button className="bg-red-300" type="button">
            Exit
          </button>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartUpPage />} />
        <Route path="/projectsetup" element={<ProjectSetup />} />
        <Route path="/projectmanagement" element={<ProjectManagement />} />
        <Route path="/duringanalysis" element={<DuringAnalysis />} />
      </Routes>
    </Router>
  );
}
