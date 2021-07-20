import { Sidebar } from "./Sidebar";
import { CourseDisplays } from "./CourseDisplays"
import ReadFirestore from "../firebase/firestore/ReadFirestore";
import firebase from "../initFirebase"
import { ProfileDisplay } from "./ProfileDisplay";

firebase();

export const MainDisplay = () => {
  
  return (
    <section className="mainLayout h-screen bg-gray-100 pt-16">
      <div className="max-w-full h-full pb-4 ml-12 mr-12 grid grid-cols-12">
        <div className="col-span-2 h-full bg-gray-100 text-black">
          <div className="courseNav container mt-4 h-1/4">
            <div>
              <h1 className="mx-auto font-bold text-black border-b-2"> Courses </h1>
            </div>
            <div className="mt-2">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="workNav container h-3/4">
            <h1 className="mx-auto font-bold text-black border-b-2">
              Modules
            </h1>
          </div>
        </div>
            <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 items-center shadow flex flex-col">
              <div className="mainContentData w-full bg-white py-2 shadow-sm">
                <h1 className="px-2 ">Course 1</h1>
                <h2 className="px-2 font-bold text-lg">Course Material</h2>
              </div>
              <div className="w-full px-5">
              <CourseDisplays></CourseDisplays>
              </div>
          <div >
            
            <button className="bg-green-400 p-4 m-2">
              <ReadFirestore></ReadFirestore>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}