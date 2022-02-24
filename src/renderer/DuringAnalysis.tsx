import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DuringAnalysis = () => {
  const [videoName, setVideoName] = useState('Default name');
  return (
    <div className="flex flex-col">
      <h4 className="text-2xl content-center">Video Processing: {videoName}</h4>
      <div className="border-2 m-2 p-5 bg-gray-200">
        <div className="flex justify-between items-center">
          <div className="p-3">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video width="300" height="300" controls>
              <source src="" type="video" />
            </video>
          </div>
          <div className="border-2 border-dashed border-gray-300 py-10 px-20">
            <div className="flex flex-col gap-6 ">
              <div>
                <h6>Progress Percentage</h6>
                <progress id="file" max="100" value="70">
                  70%
                </progress>
              </div>
              <div className="flex gap-2">
                <h6>Current Taxonomy: </h6>
                <p> Laying down</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-around gap-5">
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button" className="bg-blue-300">
          <Link to="/projectsetup">Back</Link>
        </button>
        <button type="button">Pause</button>
        <button type="button">Cancel</button>
        <button className="bg-red-300" type="button">
          Stop
        </button>
        <button type="button">Analysis</button>
      </div>
    </div>
  );
};

export default DuringAnalysis;
