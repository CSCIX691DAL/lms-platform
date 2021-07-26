import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const AnnouncementTable = () => {
  const [ann, setAnn] = useState([]);

  useEffect(() => {
    async function fetchAnn() {
      const response = firebase.firestore().collection('Announcements');
      const data = await response.get();
      const AnnArray = [...ann];
      data.docs.forEach((item) => {
        AnnArray.push(item.data());
      });
      setAnn(AnnArray);
    }
    fetchAnn();
  }, []);

  return (
    <div className="mt-10 shadow overflow-hidden w-full border-b border-gray-200 sm:rounded-b-lg">
      <button className="w-full h-12 px-6 text-white font-medium transition-colors duration-150 bg-blue-400 rounded-t-lg focus:shadow-outline hover:bg-blue-500">
        Upload
      </button>
      <table className="table-fixed min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="w-1/8 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Course
            </th>
            <th
              scope="col"
              className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
              className="w-1/8 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date Added
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {console.log(...ann)}
          {ann &&
            ann.map((announcement) => (
              <tr key={announcement.title}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {announcement.course}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal">
                  <div className="text-sm font-medium text-gray-900">
                    {announcement.title}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal">
                  <div className="text-sm font-medium text-gray-900">
                    {announcement.content}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal">
                  <div className="text-sm font-medium text-gray-900">
                    {announcement.date.toDate().toString()}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
