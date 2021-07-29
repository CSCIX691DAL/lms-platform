import React, { useState } from 'react';
import Head from 'next/head';
import { Topnav } from '../../components/admin/nav/Topnav';
import { AdminCourseDisplay } from '../../components/admin/Courses/AdminCourseDisplay';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth';

function Courses() {
  const AuthUser = useAuthUser();

  return (
    <>
      <div className="bg-gray-200">
        <Head>
          <title>Main</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topnav email={AuthUser.email} signOut={AuthUser.signOut} />

        <main>
          <AdminCourseDisplay user={AuthUser} />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(Courses);
