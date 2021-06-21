import React from "react";

export const Displays = () => {
  return (
    <>
      <div className="contentDisplay w-full bg-gray-50 border">
        <div className="border-b bg-white w-full py-1 px-1 flex">
          <div className="flex-1 m-auto">
            <div className="w-6 h-6 bg-red-400 rounded"></div>
          </div>
          <div className="flex-1 m-auto text-center">time uploaded</div>
          <div className="flex-1 m-auto text-right">delete</div>
        </div>
        <p className="p-1">Testing Iframes</p>
        <iframe
          className="w-full"
          src="https://docs.google.com/presentation/d/e/2PACX-1vT21R4FsbBh7Qsf_87W-mtgvGoryzD56B6cJ6IHSvwNzSi2KWVrIlJMaxEb2ozEfZ4N7zX0-Uof3OFC/embed?start=true&loop=false&delayms=3000"
          frameborder="0"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <div className="contentDisplay w-full bg-gray-50 border h-72">
        <div className="border-b bg-white w-full py-1 px-1 flex">
          <div className="flex-1 m-auto">
            <div className="w-6 h-6 bg-red-400 rounded"></div>
          </div>
          <div className="flex-1 m-auto text-center">time uploaded</div>
          <div className="flex-1 m-auto text-right">delete</div>
        </div>
        <iframe
          className="w-full h-full"
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
