import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/outline';

const VideoEntry = () => {
  return (
    <div className="border-2 p-2">
      <PlusCircleIcon className="h-5 w-5" />
    </div>
  );
};

const TaxanomyEntry = () => {
  return (
    <div className="border-2 p-2">
      <PlusCircleIcon className="h-5 w-5" />
    </div>
  );
};

const ProjectManagement = () => {
  return (
    <div className="flex flex-col gap-5 p-7">
      <div className="flex justify-between gap-5 ">
        <div className="w-1/2">
          <h4 className="text-2xl">Add/Change Videos</h4>
          <div className=" container overscroll-contain h-72 p-5 m-2 border-2 border-solid overflow-y-auto">
            <VideoEntry />
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="text-2xl">Add/Change Taxonomies</h4>
          <div className=" container overscroll-contain h-72 p-5 m-2 border-2 border-solid overflow-y-auto">
            <TaxanomyEntry />
          </div>
        </div>
      </div>

      <div className="flex space-around justify-center gap-5">
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button" className="bg-blue-300">
          <Link to="/duringanalysis">Go</Link>
        </button>
        <button type="button" className="bg-blue-300">
          <Link to="/projectsetup">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectManagement;
