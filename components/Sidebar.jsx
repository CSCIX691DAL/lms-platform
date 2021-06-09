import { Menu, Switch } from 'antd';
import { useState } from 'react';
import {} from '@ant-design/icons';

export const Sidebar = () => {
    const [clicked, setClicked] = useState(1);
    const [theme, setTheme] = useState('light');

    const changeTheme = (value) => {
        value === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleClick = (e) => {
        console.log('click ', e);
        setClicked(e.key);
    };

    return (
        <>
            <Menu
                theme={theme}
                onClick={handleClick}
                style={{ width: 256 }}
                selectedKeys={clicked}
                mode="inline"
            >
                <Menu>
                    <Switch
                        checked={theme === 'light'}
                        onChange={() => changeTheme(theme)}
                        unCheckedChildren="Dark"
                        checkedChildren="Light"
                    />
                </Menu>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu>
        </>
    );
};
