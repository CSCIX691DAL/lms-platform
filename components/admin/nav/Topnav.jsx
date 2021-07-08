import React from 'react'
import Link from 'next/link';

// This  Nav bar is referred to from https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
export const Topnav = ({ email, signOut }) => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-200 border-b border-gray-400 p-3 ">
        <Link href="/admin">
          <a className="hidden lg:block items-center p-2 mr-4 ">
            <span className="text-2xl mr-2 text-black font-bold uppercase tracking-wide">
              LMS
            </span>
            <span className="text-xl text-black tracking-wide">Platform</span>
          </a>
        </Link>

        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/home">
            <a
              className="text-md lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 items-center justify-center text-white hover:text-white transition-colors duration-150 bg-blue-400 rounded focus:shadow-outline hover:bg-blue-500">
              Return to Main Page
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};
