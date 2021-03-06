
import firebase from "../../initFirebase"
import { Sidenav } from './nav/Sidenav'
import { Courses } from './courses/Courses'

firebase();

export const AdminDisplay = ({ user }) => {
  if (user.claims.admin) {
    return ( 
      <>
        <section className="mainLayout h-screen bg-gray-100">
          <div className="max-w-full h-full pb-4 ml-12 mr-12 grid grid-cols-12">          
            <div className="col-span-2 h-full bg-gray-100 text-black">
              <div className="courseNav container mt-4">
                <div>
                  <h1 className="mx-auto font-bold text-black border-b-2"> Navigation </h1>
                </div>
                <div className="mt-2">
                  <Sidenav />
                </div>
              </div>
            </div>
            <div className="mainContent overflow-auto col-span-10 h-full bg-gray-100 flex flex-col items-center">
              <p className="mx-auto mt-4 text-4xl font-bold text-black">
                Hi {user.email}
              </p>
              <p className=" mt-10 mx-auto text-2xl text-black">
                Welcome to the Admin Panel.  Navigate to the Side Navigation to direct yourself to your desired action.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return (
      <section className="mainLayout h-screen bg-gray-100">
        <div className="max-w-full h-full">          
          <div className="mainContent overflow-auto h-full flex flex-col items-center">
            <h1 className="mx-auto text-8xl font-bold text-red-600">
              403.
            </h1>
            <p className="font-semibold text-xl text-red-600">Access Denied, please return to home page.</p>
            <img src="https://wallpapercave.com/wp/wp4266693.png" alt="denied" className="mx-auto" />
          </div>
        </div>
      </section>
    )
  }
  
}