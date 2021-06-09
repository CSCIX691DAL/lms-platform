import { Menu, Button } from 'antd';
import { useState } from 'react';
import React from 'react';

import { BookOutlined } from '@ant-design/icons';

export const Sidebar = () => {
    const [clicked, setClicked] = useState('1');

    const handleClick = (e) => {
        console.log('click ', e);
        setClicked(e.key);
    };

    return (
        <>
            <Menu onClick={handleClick} selectedKeys={clicked} mode="inline">
                <Menu.Item key="1" icon={<BookOutlined />}>
                    Course 1
                </Menu.Item>
                <Menu.Item key="2" icon={<BookOutlined />}>
                    Course 2
                </Menu.Item>
                <Menu.Item key="3" icon={<BookOutlined />}>
                    Course 3
                </Menu.Item>
                <Menu.Item key="4" icon={<BookOutlined />}>
                    Course 4
                </Menu.Item>
            </Menu>
        </>
    );
};
