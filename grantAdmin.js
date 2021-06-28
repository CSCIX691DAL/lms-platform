import { getFirebaseAdmin } from "next-firebase-auth";
import initAuth from "./initAuth";

initAuth();

export const grantAdmin = async (email) => {
  const user = await getFirebaseAdmin().auth().getUserByEmail(email);
  console.log(user);
  if (user.customClaims && user.customClaims.admin == true) {
    console.log("user is admin");
    return;
  }
  return admin.auth().setCustomUserClaims(user.uid, {
    admin: true,
  });
};
