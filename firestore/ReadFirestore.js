import firebase from "firebase/app";
import "firebase/firestore";

const ReadFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("Announcements")
        .doc("test")
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      alert("Data was successfully fetched from cloud");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return <button onClick={readData}>Read Announcement</button>;
};

export default ReadFirestore;
