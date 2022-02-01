/* eslint-disable jsx-a11y/media-has-caption */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';

const Tailwind = () => {
  return (
    <div className="text-center border-solid border-4 border-red-500 bg-black text-white shadow">
      ERB + TAILWIND = ❤
    </div>
  );
};

const Hello = () => {
  return (
    <div>
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
