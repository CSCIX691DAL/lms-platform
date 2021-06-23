import { Menu, Button } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BookOutlined } from '@ant-design/icons';

export const Sidebar = () => {
    const [clicked, setClicked] = useState('0');
    const router = useRouter();
    const current = router.pathname;
    const base = current.split('/')[1];
    useEffect(() => {
        switch (base) {
            case 'CSCI2691':
                setClicked('1');
                break;
            case 'CSCI3691':
                setClicked('2');
                break;
            case 'CSCI4691':
                setClicked('3');
                break;
        }
    }, [base]);

    return (
        <>
            <Menu selectedKeys={clicked} mode="inline">
                <Menu.Item key="1" icon={<BookOutlined />}>
                    <Link href="/CSCI2691">CSCI 2691</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<BookOutlined />}>
                    <Link href="/CSCI3691">CSCI 3691</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<BookOutlined />}>
                    <Link href="/CSCI4691">CSCI 4691</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};
