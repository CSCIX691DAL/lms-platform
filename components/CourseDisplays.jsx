import React from 'react';

export const CourseDisplays = () => {
  return (
    <>
      <div className='contentDisplay w-full my-2 shadow-lg bg-white'>
        <div className=' bg-white font-semibold p-2 flex'>
          <div className='flex-1 m-auto'>
            <div className='inline-flex m-auto'>
              <div className='w-6 h-6 bg-red-500 rounded-sm'></div>
              <span className='m-auto px-2'> Author </span>
            </div>
          </div>
          <div className='flex-1 m-auto text-right'>Title</div>
        </div>
        <div className='shadow-sm w-full bg-gray-100 p-2 text-lg'>Random Text</div>
        <iframe
          className='w-full h-screen'
          src='https://docs.google.com/viewer?embedded=true&url=https://homepages.inf.ed.ac.uk/neilb/math.pdf'
          frameborder='0'
          allowfullscreen='true'
          mozallowfullscreen='true'
          webkitallowfullscreen='true'
        ></iframe>
      </div>
    </>
  );
};
