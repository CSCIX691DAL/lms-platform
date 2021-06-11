import admin from "firebase-admin";
import serviceAccount from "./secrets.json";

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  return admin
    .auth()
    .veryifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
