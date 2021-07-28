import { Sidebar } from './Sidebar';
import { CourseDisplays } from './CourseDisplays';
import ReadFirestore from '../firebase/firestore/ReadFirestore';
import firebase from '../initFirebase';
import Modules from '../components/Modules';

firebase();

export const MainDisplay = () => {
  return (
    <section className="mainLayout h-screen bg-gray-100">
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
            <div className="mt-2">
              <Modules />
            </div>
          </div>
        </div>
        <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 items-center shadow flex flex-col">
          <div className="w-full px-5">
            <CourseDisplays></CourseDisplays>
          </div>
        </div>
      </div>
    </section>
  );
};
