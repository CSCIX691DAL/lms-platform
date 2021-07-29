import { Sidebar } from './Sidebar';
import { CourseDisplays } from './CourseDisplays';
import ReadFirestore from '../firebase/firestore/ReadFirestore';
import firebase from '../initFirebase';
import EditableLabel from 'react-inline-editing';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import react , {useState , useEffect} from 'react';
import "firebase/auth";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth';

firebase();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(60),
    height: theme.spacing(80),
  },
}));


export const ProfileDisplay = () => {
  const classes = useStyles();
  const user = useAuthUser();


  return (
    <section className="mainLayout h-screen bg-gray-100 pt-16">
      <div className="max-w-full h-full pb-4 ml-12 mr-12 grid grid-cols-12">
        <div className="col-span-2 h-full bg-gray-100 text-black">
          <div className="courseNav container mt-4 h-1/4">
            <div>
              <h1 className="mx-auto font-bold text-black border-b-2">
                {' '}
                Courses{' '}
              </h1>
            </div>
            <div className="mt-2">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="workNav container h-3/4">
            <h1 className="mx-auto font-bold text-black border-b-2">Modules</h1>
          </div>
        </div>
        <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 items-center flex flex-col">
          <div className="mainContentData w-full bg-white py-2 shadow">
            <h1 className="px-2 "> Profile</h1>
            <h2 className="px-2 font-bold text-lg">ID: <span className="font-medium">{user.id}</span></h2>
          </div>
          <div className="p-5 bg-gray-50 w-full shadow mx-auto space-y-4 flex flex-col">
            <div className="mx-auto text-center flex flex-col space-y-2 rounded">
              <img src="" alt="" className="w-80 h-80 mx-auto" />
              <div className="bg-gray-100 p-1 flex flex-col space-y-1">
              <div className="text-lg text-center w-full px-2"><EditableLabel text={user.displayName} /></div>
              <div className="text-center w-full px-2"><EditableLabel text="(Degree)" /></div>
              <div className="text-center font-semibold w-full pt-2 px-2"><EditableLabel text={user.email} /></div>
            </div>
            </div>
            <div className="p-2 bg-gray-100 w-full rounded font-semibold text-lg">
              Status <br />
              <span className="text-base font-normal">
                {' '}
                <EditableLabel
                  text="Hello"
                />
              </span>
            </div>
            <div className="p-2 bg-gray-100 w-full rounded font-semibold text-lg">
              Bio <br />
              <span className="text-base font-normal">
                {' '}
                <EditableLabel
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  feugiat lacus in lobortis interdum. Curabitur at nisi eu augue
                  aliquam cursus. Etiam eleifend maximus lacus quis bibendum.
                  Integer elit odio, aliquet sed convallis in, sodales sed enim.
                  Phasellus maximus nulla at urna blandit, eu aliquam elit
                  molestie."
                />
              </span>
            </div>
            <div className="m-auto">
              <button className="bg-green-400 px-4 py-2 rounded font-semibold text-white">
                Save
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
