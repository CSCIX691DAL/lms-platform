import Link from 'next/link';
import { useState } from 'react';
import { Avatar, Image } from 'antd';

// This  Nav bar is referred to from https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
export const Nav = () => {
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
                <Link href="/">
                    <a className="hidden lg:block items-center p-2 mr-4 ">
                        <span className="text-2xl mr-2 text-black font-bold uppercase tracking-wide">
                            LMS
                        </span>
                        <span className="text-xl text-black tracking-wide">
                            Platform
                        </span>
                    </a>
                </Link>
                <button
                    className=" inline-flex p-3 hover:bg-purple-500 rounded lg:hidden text-white  hover:text-white outline-none"
                    onClick={handleClick}
                >
                    <span className="text-2xl mr-2 text-black font-bold uppercase tracking-wide">
                        LMS
                    </span>
                    <span className="text-xl text-black tracking-wide">
                        Platform
                    </span>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-purple-500 hover:bg-opacity-50 hover:text-white ">
                                Home
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black items-center justify-center hover:bg-purple-500 hover:bg-opacity-50 hover:text-white">
                                Lectures
                            </a>
                        </Link>
                        <Link href="/quiz">
                            <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-purple-500 hover:bg-opacity-50  hover:text-white">
                                Quizzes
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-purple-500 hover:bg-opacity-50  hover:text-white">
                                Assignment
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="ml-auto">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
            </nav>
        </>
    );
};
