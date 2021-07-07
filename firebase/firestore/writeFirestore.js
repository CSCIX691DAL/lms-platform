//Send announcement data to Firestore. Fixed 
const WriteGeneralAnnouncement = () => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Announcements')
                .doc() // leave as .doc() for a random unique doc name to be assigned
                .set({
                    title: 'Title ',
                    paragraph: 'some text announcement',
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Announcement was successfully added.'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
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
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Announcement was successfully added.'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    
    //Sends content to the databsase
    const WriteContent = () => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Content')
                .doc(CourseCode)
                .collection(Unit)
                .set({
                    title: 'Title ',
                    file: filename,
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Content successfully uploaded.'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    
  /* Not sure if this is how to make a collection, it's probably not correct yet.
   const AddQuiz = ()  => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Quiz')
                .doc(CourseCode) 
                .collection(quizName)
                .set({
                    question: quiz
                })
                .then(alert('Data was successfully sent to cloud firestore!'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    
    */
    
    //Adding questions. Would depend on above. 
    const AddQuestion = () => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Quiz')
                .doc(CourseCode) 
                .collection(quizName)
                .set({
                    question: questionText,
                    answer: answerText,
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Data was successfully sent to cloud firestore!'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
