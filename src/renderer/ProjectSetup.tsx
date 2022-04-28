/* eslint-disable no-console */
import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

// const electron = window.require('electron');

// const { ipcRenderer } = electron;

// const { ipcRenderer } = window.require('electron');
// const { ipcRenderer } = window.require('electron');

interface TaxanomyEntryProps {
  name: string;
}

const VideoEntry = () => {
  return (
    <div className="border-2 p-2">
      <PlusCircleIcon className="h-5 w-5" />
    </div>
  );
};

const TaxanomyEntry = ({ name }: TaxanomyEntryProps) => {
  return (
    <div className="border-2 border-solid p-2">
      <div className="flex">
        <div className="bg-gray-300 p-2">
          <p className="text-center">{name}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectSetup = () => {
  const [projectInfo, setProjectInfo] = React.useState({
    name: '',
    description: ' ',
  });

  const handleChange = (e: any): void => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    console.log(projectInfo);
    // window.ipcRenderer.send('create-project', JSON.stringify(projectInfo));
    // ipcRenderer.send('create-project', JSON.stringify(projectInfo));
    // window.electron.ipcRenderer.createProject(JSON.stringify(projectInfo));
    window.electron.ipcRenderer.createProject(JSON.stringify(projectInfo));
    console.log(projectInfo);
    setProjectInfo({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 p-7">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between flex-row gap-5">
            <div className="flex w-1/2 flex-col gap-10">
              <div>
                <h4 className="text-2xl">Name: </h4>
                <input
                  type="text"
                  name="name"
                  value={projectInfo.name}
                  onChange={handleChange}
                  className="bg-gray-300 w-5/6"
                />
              </div>
              <div>
                <h4 className="text-2xl">Project Description: </h4>
                <textarea
                  name="description"
                  value={projectInfo.description}
                  onChange={handleChange}
                  className="bg-gray-300 w-5/6"
                />
              </div>
            </div>
            {/* <div className="flex w-1/2 flex-col">
            <h4 className="text-2xl">Add/change video</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div> */}
            <div className="w-1/2">
              <h4 className="text-2xl">Add/Change Videos</h4>
              <div className=" container overscroll-contain h-72 p-5 m-2 border-2 border-solid overflow-y-auto">
                <VideoEntry />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="text-2xl">Selected Taxanomies:</h4>
              <button type="button">Add Taxonomy</button>
            </div>
            <div className=" flex flex-col gap-2 overscroll-contain h-72 p-5 m-2 border-2 border-solid overflow-y-auto">
              <TaxanomyEntry name="running" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="walking" />
              <TaxanomyEntry name="flying" />
              <TaxanomyEntry name="light jog" />
              <TaxanomyEntry name="brisk walk" />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex space-around justify-center gap-5">
          <button type="button">
            <Link to="/">Back</Link>
          </button>
          <button type="button" className="bg-gray-300">
            Clear Project
          </button>
          <button type="button" className="bg-red-300">
            Cancel
          </button>
          <button type="submit" className="bg-blue-300">
            <Link to="/projectmanagement">Create Project</Link>
            {/* <input type="submit"/> */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProjectSetup;
