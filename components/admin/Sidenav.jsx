import React from 'react';
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export const Sidenav = () => {
  return (
    <div>
      <div>
        <a className="font-medium hover:text-black" href="/admin/courses">
          Courses
        </a>
      </div>
      <div>
        <Menu as="div" className="relative inline-block text-left w-full">
          <div>
            <Menu.Button className="inline-flex justify-start w-full py-2 text-sm font-medium text-black">
              Grading
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Menu.Items className="absolute left-0 w-full mt-2 origin-top-right bg-gray-100">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-blue-400 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  CSCI 2691
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-blue-400 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  CSCI 3691
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-blue-400 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  CSCI 4691
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};
