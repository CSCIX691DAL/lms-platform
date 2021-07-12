import firebase from "firebase/app";
import "firebase/firestore";
const WriteGeneralAnnouncement = () => {
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('Announcements')
                .doc() 
                .set({
                    title: 'Test2',
                    paragraph: 'sample text',
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(alert('Announcement was successfully added.'))
                console.log('sent')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
}
