import { Menu, Button } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { FileTextTwoTone } from '@ant-design/icons';

export const Modules = () => {
  const [modules, setModules] = useState([]);
  const [clicked, setClicked] = useState('');
  const router = useRouter();
  const current = router.pathname;
  const course = current.split('/')[1];
  const moduleArray = [];

  useEffect(() => {
    const db = firebase.firestore();
    const { module } = router.query;

    try {
      db.collection('LMS')
        .doc(course)
        .collection('Modules')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            moduleArray.push(doc.id);
          });
          const displayArray = [];
          moduleArray.forEach((i, index) => {
            const path = current + '/?module=' + i;
            if (i === module) {
              setClicked(index.toString());
            }
            displayArray.push(
              <Menu.Item
                key={index}
                icon={<FileTextTwoTone />}
                onClick={() => setClicked(index.toString())}
              >
                <Link href={path}>{i}</Link>
              </Menu.Item>
            );
          });

          setModules(displayArray);
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [router]);

  return (
    <>
      <Menu selectedKeys={clicked} mode="inline">
        {modules}
      </Menu>
    </>
  );
};

export default Modules;
