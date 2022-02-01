/* eslint-disable jsx-a11y/media-has-caption */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div>
      <nav>
        <h1>PathML Electron Application</h1>
      </nav>
      <div>
        <video width="660" height="300" controls>
          <source src="" type="video" />
        </video>
      </div>
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
