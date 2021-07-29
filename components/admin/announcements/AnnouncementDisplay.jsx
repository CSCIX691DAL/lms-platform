
import firebase from "../../../initFirebase"
import { Sidenav } from '../nav/Sidenav'
import { AnnouncementTable } from './AnnouncementTable'

firebase();

export const AnnouncementDisplay = ({ user }) => {
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
                Announcements
              </p>
              <p className=" mt-4 mx-auto text-2xl text-black">
                View or add new announcements below.
              </p>
              <AnnouncementTable />
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return (
      <section className="mainLayout h-screen bg-gray-100">
        <div className="max-w-full h-full pb-4 ml-12 mr-12">          
          <div className="mainContent overflow-auto h-full bg-gray-100 flex items-center">
            <h1 className="mx-auto text-4xl font-bold text-black">
              You do not have access, please return to the home page.
            </h1>
            <div >
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}