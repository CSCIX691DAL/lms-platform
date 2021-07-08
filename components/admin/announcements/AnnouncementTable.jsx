import React from 'react'

export const AnnouncementTable = () => {
  return (
    <div className="mt-10 shadow overflow-hidden w-full border-b border-gray-200 sm:rounded-b-lg">
      <button className="w-full h-12 px-6 text-white font-medium transition-colors duration-150 bg-blue-400 rounded-t-lg focus:shadow-outline hover:bg-blue-500">Upload</button>
      <table className="table-fixed min-w-full divide-y divide-gray-200"></table>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Content
          </th>                   
          <th
            scope="col"
            className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date Added
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">
                Test Announcement                    
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              Hello everyone, this is a hard-coded test announcement
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              2021-07-07
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </div>
  )
}

