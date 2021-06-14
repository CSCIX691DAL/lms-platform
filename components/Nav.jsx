import Link from "next/link";
import { useState } from "react";
import { Avatar, Image } from "antd";
import { Icon, InlineIcon } from "@iconify/react";
import bxNotification from "@iconify/icons-bx/bx-notification";
import firebase from "firebase/app";
import Button from "@material-ui/core/Button";

// This  Nav bar is referred to from https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
export const Nav = ({ email, signOut }) => {
  const [active, setActive] = useState(false);
  const [openNotification, setOpenNotification] = useState(null);

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-200 border-b border-gray-400 p-3 ">
        <Link href="/auth">
          <a className="hidden lg:block items-center p-2 mr-4 ">
            <span className="text-2xl mr-2 text-black font-bold uppercase tracking-wide">
              LMS
            </span>
            <span className="text-xl text-black tracking-wide">Platform</span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white  hover:text-white outline-none"
          onClick={handleClick}
        >
          <span className="text-2xl mr-2 text-black font-bold uppercase tracking-wide">
            LMS
          </span>
          <span className="text-xl text-black tracking-wide">Platform</span>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className="lg:hidden ml-auto">
          <Icon
            icon={bxNotification}
            style={{ color: "#0f172a", fontSize: "30px" }}
          />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/auth">
              <a className="text-md lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black items-center justify-center hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
                Lectures
              </a>
            </Link>
            <Link href="/auth/quiz">
              <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50  hover:text-white">
                Quizzes
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50  hover:text-white">
                Assignment
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block ml-auto flex items-center justify-center">
          <Icon
            className="mx-8 inline-block"
            icon={bxNotification}
            style={{ color: "#0f172a", fontSize: "30px" }}
          />
          <div className="mx-4 inline-block">
            <Button
              variant="container"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Button>
            {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
          </div>
        </div>
      </nav>
    </>
  );
};


