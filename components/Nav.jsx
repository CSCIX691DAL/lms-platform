import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxNotification from '@iconify/icons-bx/bx-notification';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// This  Nav bar is referred to from https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
export const Nav = ({ email, signOut }) => {
    const router = useRouter();
    const current = router.pathname;
    const base = current.split('/')[1];

    const [select, setSelect] = useState('home');
    useEffect(() => {
        if (current.split('/').length === 2) {
            setSelect('home');
        } else if (
            current.split('/').length === 3 &&
            current.split('/')[2] === 'quiz'
        ) {
            setSelect('quiz');
        } else if (
            current.split('/').length === 3 &&
            current.split('/')[2] === 'assignment'
        ) {
            setSelect('assignment');
        }
    }, [current]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const home = '/' + base + '/';
    const quiz = '/' + base + '/quiz';
    const assignment = '/' + base + '/assignment';

    return (
        <>
            <nav className='flex items-center flex-wrap bg-gray-200 border-b border-gray-400 p-3 '>
                <Link href={home}>
                    <a className='hidden lg:block items-center p-2 mr-4 '>
                        <span className='text-2xl mr-2 text-black font-bold uppercase tracking-wide'>
                            LMS
                        </span>
                        <span className='text-xl text-black tracking-wide'>
                            Platform
                        </span>
                    </a>
                </Link>

                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href={home}>
                        <a
                            className={`${
                                select === 'home'
                                    ? 'bg-blue-500 bg-opacity-50 text-white '
                                    : 'text-black '
                            }text-md lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded text-black  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50 hover:text-white `}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href={quiz}>
                        <a
                            className={`${
                                select === 'quiz'
                                    ? 'bg-blue-500 bg-opacity-50 text-white '
                                    : 'text-black '
                            } lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50  hover:text-white`}
                        >
                            Quizzes
                        </a>
                    </Link>
                    <Link href={assignment}>
                        <a
                            className={`${
                                select === 'assignment'
                                    ? 'bg-blue-500 bg-opacity-50 text-white '
                                    : 'text-black '
                            } lg:inline-flex lg:w-auto w-full mx-8 px-3 py-1 rounded  items-center justify-center hover:bg-blue-500 hover:bg-opacity-50  hover:text-white`}
                        >
                            Assignment
                        </a>
                    </Link>
                </div>
                <div className='my-auto'>
                    {' '}
                    <Icon
                        className='mx-8 inline-block'
                        icon={bxNotification}
                        style={{ color: '#0f172a', fontSize: '30px' }}
                    />
                </div>
                <div className='my-auto'>
                    <Button
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                    >
                        Open Menu
                    </Button>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
        </>
    );
};
