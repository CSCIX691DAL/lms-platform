import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { CourseTable } from './CourseTable'

export const Courses = () => {
  return (
    <>
    <div className="w-full px-4 pt-16">
      <div className="w-full p-2 bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>CSCI 2691</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <button className="w-full h-12 px-6 text-white font-medium transition-colors duration-150 bg-blue-400 rounded-t-lg focus:shadow-outline hover:bg-blue-500">Upload</button>
                <CourseTable />                          
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>CSCI 3691</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <button className="w-full h-12 px-6 text-white font-medium transition-colors duration-150 bg-blue-400 rounded-t-lg focus:shadow-outline hover:bg-blue-500">Upload</button>
                <CourseTable />                          
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>CSCI 4691</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <button className="w-full h-12 px-6 text-white font-medium transition-colors duration-150 bg-blue-400 rounded-t-lg focus:shadow-outline hover:bg-blue-500">Upload</button>
                <CourseTable />                          
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    </>
  )
}
