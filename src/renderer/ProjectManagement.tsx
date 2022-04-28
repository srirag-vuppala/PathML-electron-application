/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, PlusIcon, PlayIcon } from '@heroicons/react/solid';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const MyDropdown = () => {
  const [option, setOption] = React.useState('Taxonomies Selected');

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {option}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => setOption('By Taxonomy')}
                >
                  By Taxonomy
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => setOption('By Taxonomy & Time')}
                >
                  By Taxonomy & Time
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => setOption('Manual')}
                >
                  Manual
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

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

const TaskItem = () => {
  return (
    <div className="border-2 bg-gray-200 p-2">
      <p>Video Processing: Name</p>
      <div className="flex">
        <video src="" width="100" height="100" />
        <div>
          <div className="flex gap-2">
            <p>Start: </p>
            <input type="text" />
          </div>
          <div className="flex gap-2">
            <p>Stop: </p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <p>Taxonomy: </p>
          <p>Posture</p>
        </div>
        <PlayIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

const VideoItem = () => {
  return (
    <div className="flex">
      <img src="https://via.placeholder.com/120" alt="" />
      <div className="border-2">
        <p>Video Processing: Name</p>
        <p>Mini descriptions of what is happening</p>
      </div>
    </div>
  );
};

const ProjectManagement = () => {
  const [videoSelected, setVideoSelected] = React.useState('hihi');
  return (
    <div className="flex p-5 gap-10">
      <div className="flex flex-col">
        <h4>Preview</h4>
        <video src="" />
        <div className="flex flex-col align-items-center border-2 p-2 gap-2">
          <h5>Video Selected: {videoSelected} </h5>
          <MyDropdown />
          <div className="flex gap-2">
            <p>Start: </p>
            <input type="text" />
          </div>
          <div className="flex gap-2">
            <p>Stop: </p>
            <input type="text" />
          </div>
          <div className="flex items-baseline gap-2">
            <input type="checkbox" name="" id="" />
            <p>Tagged/Untagged</p>
          </div>
          <div className="flex items-baseline gap-2">
            <button type="submit">Annotate Now</button>
            <button type="submit">
              <div className="flex items-center gap-2">
                <p>Add task</p>
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <p>Tasks..</p>
            <TaskItem />
          </div>
          <div className="flex flex-col">
            <p>Video Selection..</p>
            <VideoItem />
          </div>
        </div>
        <div className="flex space-around gap-5">
          <button type="button">
            <Link to="/postanalysis">Run all </Link>
          </button>
          <button type="button">Settings</button>
          <button type="button">
            <Link to="/">Home</Link>
          </button>
          <button type="button" className="bg-blue-300">
            <Link to="/projectsetup">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
