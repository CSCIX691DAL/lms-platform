import React from "react";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 16,
  },
};

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h1 className="font-bold text-center text-4xl">LMS Platform</h1>
        <FirebaseAuth />
      </div>
    </div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Login);
