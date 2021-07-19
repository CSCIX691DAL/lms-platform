import React from 'react';
import { List } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const CourseDisplays = () => {
  const router = useRouter();
  const current = router.pathname;
  const { module, content } = router.query;
  const [contentList, setContentList] = useState();
  const [courseData, setCourseData] = useState();
  const course = current.split('/')[1];
  const contentArray = [];
  useEffect(() => {
    const db = firebase.firestore();
    if (module && !content) {
      try {
        db.collection('LMS')
          .doc(course)
          .collection('Modules')
          .doc(module)
          .collection('Contents')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              contentArray.push(doc.id);
            });
            const displayArray = [];
            contentArray.forEach((i, index) => {
              const path = current + `?module=${module}&content=` + i;
              displayArray.push(<Link href={path}>{i}</Link>);
            });
            setContentList(displayArray);
          });
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    if (module && content) {
      try {
        db.collection('LMS')
          .doc(course)
          .collection('Modules')
          .doc(module)
          .collection('Contents')
          .doc(content)
          .get()
          .then((querySnapshot) => {
            setCourseData(querySnapshot.data());
          });
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  }, [router]);

  if (module && !content) {
    return (
      <List
        header={<div>{module}</div>}
        size="large"
        bordered
        dataSource={contentList}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    );
  }

  if (module && content) {
    return (
      <>
        <div className="contentDisplay w-full my-2 shadow-lg bg-white">
          <div className=" bg-white font-semibold p-2 flex">
            <div className="flex-1 m-auto">
              <div className="inline-flex m-auto">
                <div className="w-7 h-7 bg-red-500 rounded-sm mx-auto"></div>
                <span className="m-auto px-2 mx-auto">
                  Author: {courseData ? courseData.author : ''}
                </span>
              </div>
            </div>
            <div className="flex-1 m-auto text-right">
              {' '}
              {courseData ? courseData.title : ''}
            </div>
          </div>
          <div className="shadow-sm w-full bg-gray-100 p-2 text-lg">
            Random Text
          </div>
          <iframe
            className="w-full h-screen"
            src={courseData ? courseData.url : ''}
          ></iframe>
        </div>
      </>
    );
  }

  return <h1>Welcome to LMS Platform</h1>;
};
