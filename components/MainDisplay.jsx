import { Sidebar } from "./Sidebar";
import ReadFirestore from "../firebase/firestore/ReadFirestore";
import firebase from "../initFirebase"

firebase();

export const MainDisplay = () => {
  
  return (
    <section className="mainLayout h-screen bg-gray-100">
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
        <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 flex items-center">
          <ReadFirestore></ReadFirestore>
            <h1 className="mx-auto text-6xl font-bold text-black">
              Main Content
            </h1>
        </div>
      </div>
    </section>
  )
}