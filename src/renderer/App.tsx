/* eslint-disable jsx-a11y/media-has-caption */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

// const { ipcRenderer } = window.require('electron');

const Hello = () => {
  // const [url, setUrl] = useState<string>('');

  // ipcRenderer.on('video', (_, srcs) => {
  // setUrl(srcs);
  // });

  return (
    <div>
      <h1>PathML Electron Application</h1>
      {/* // eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video width="760" height="500" controls>
        <source src="" type="video" />
      </video>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
