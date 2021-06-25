import React from "react";

export const CourseDisplays = () => {

  return (
    <>
      <div className="contentDisplay w-full my-2 shadow-lg bg-white">
        <div className=" bg-white font-semibold p-2 flex">
          <div className="flex-1 m-auto">
            <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
          </div>
          <div className="flex-1 m-auto text-center">time uploaded</div>
          <div className="flex-1 m-auto text-right">delete</div>
        </div>
        <iframe
          className="w-full"
          src="https://docs.google.com/presentation/d/e/2PACX-1vT21R4FsbBh7Qsf_87W-mtgvGoryzD56B6cJ6IHSvwNzSi2KWVrIlJMaxEb2ozEfZ4N7zX0-Uof3OFC/embed?start=true&loop=false&delayms=3000"
          frameborder="0"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>

      <div className="contentDisplay w-full my-2 bg-white">
        <div className=" bg-white font-semibold p-2 flex">
          <div className="flex-1 m-auto">
            <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
          </div>
          <div className="flex-1 m-auto text-center">time uploaded</div>
          <div className="flex-1 m-auto text-right">delete</div>
        </div>
        <iframe
          className="w-full"
          src="https://docs.google.com/presentation/d/e/2PACX-1vT21R4FsbBh7Qsf_87W-mtgvGoryzD56B6cJ6IHSvwNzSi2KWVrIlJMaxEb2ozEfZ4N7zX0-Uof3OFC/embed?start=true&loop=false&delayms=3000"
          frameborder="0"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </>
  );
};
