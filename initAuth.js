import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    debug: false,
    authPageURL: "/",
    appPageURL: "/home",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    // firebaseAuthEmulatorHost: "localhost:9099",
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
          : undefined,
      },
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDmGrCHU6U5C8aCFC6dgjmLRpUNOpl7fq0", // required
      authDomain: "lms-project-x691.firebaseapp.com",
      projectId: "lms-project-x691",
    },
    cookies: {
      name: "LMSPlatform", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      // keys: [
      //   process.env.COOKIE_SECRET_CURRENT,
      //   process.env.COOKIE_SECRET_PREVIOUS,
      // ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: false,
    },
  });
};

export default initAuth;
