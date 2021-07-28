

//this portion was slightly unfinished due to time constraints
export const AnnoucementForm = () => {

    return (
        <form action="#" method="POST">
        <div className="min-w-full w-full shadow sm:rounded-md sm:overflow-hidden">
        <p className=" mt-4 mx-auto text-2xl text-black">
                Create a new Annoucement
              </p>

            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                <div className="grid grid-cols-3 gap-6">

                  <div className="col-span-full sm:col-span-2">
                    <label for="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="Title" id="title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </input>
                    </div>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <label for="CourseCode" className="block text-sm font-medium text-gray-700">
                        Course Code
                        </label>
                        
                    </div>
                    <input type="text" name="CourseCode" id="CourseCode" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </input>
                  <div>
                <label for="announcementText" className="block text-sm font-medium text-gray-700">
                    Announcement
                </label>
                <div classname="mt-1">
                    <textarea id="announcementText" name="announcementText" rows="5" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                    </textarea>
                </div>
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick="sendData()">
                <WriteCourseAnnouncement></WriteCourseAnnouncement>
                </button>
                
            </div>
            </div>
            </div>
            </div>
            </div>
            </form>
    )
}

//Writes to a specific course's document
const WriteCourseAnnouncement = () => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Announcements')
                .doc(CourseCode) 
                .set({
                    title: title,
                    paragraph: announcementText,
                    course: CourseCode,
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Announcement was successfully added.'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return <button onClick={sendData}>Read Announcement</button>;
  }
