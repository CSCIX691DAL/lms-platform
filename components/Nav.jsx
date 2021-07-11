import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import bxNotification from "@iconify/icons-bx/bx-notification";
import firebase from "firebase/app";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// This  Nav bar is referred to from https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1
export const Nav = ({ email, signOut }) => {
  const router = useRouter();
  const current = router.pathname;
  const base = current.split("/")[1];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const home = "/" + base + "/";
  const quiz = "/" + base + "/quiz";
  const assignment = "/" + base + "/assignment";

  return (
    <>
      <nav className="flex justify-between bg-white w-full p-2 fixed h-16 shadow">
        <div className="my-auto ">
          <a className="p-4 font-bold text-xl">
            <link rel="stylesheet" href="{home}" />
            LMS <span className="font-normal">Platform</span>
          </a>
        </div>

        <div className="my-auto flex">
          <ul className="flex space-x-10 ">
            <li>
              <button className="bg-gray-100 px-5 py-3 rounded font-semibold hover:bg-blue-400 hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-5 py-3 rounded font-semibold hover:bg-blue-400 hover:text-white">
                Course Content
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-5 py-3 rounded font-semibold hover:bg-blue-400 hover:text-white">
                Quizes
              </button>
            </li>
          </ul>

          <div className="my-auto">
            {" "}
            <Icon
              className="mx-8 inline-block"
              icon={bxNotification}
              style={{ color: "#0f172a", fontSize: "30px" }}
            />
          </div>
          <div className="m-auto">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link href="/profile">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
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
        </div>
      </nav>
    </>
  );
};
