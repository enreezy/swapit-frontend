import React, { useState } from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { Row, Col, Divider, Badge, Space } from 'antd';
import { Menu } from 'antd';
import { MessageOutlined, GlobalOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DrawerContent from './DrawerContent';

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white'
}

const rightStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'white'
}

export default function PageMenuHeader(){
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);

    function showDrawer() {
        console.log("hello world")
        setVisible(true);
    }

    function onClose() {
        setVisible(false)
    }

    function showChildrenDrawer() {
        setChildrenDrawer(true);
    }

    function onChildrenDrawerClose() {
        setChildrenDrawer(false);
    }

    return (
        <>
            <PageHeader
                className="site-page-header-ghost-wrapper"
                style={rightStyle}
            >

                {/* <div style={{ width: "100%", marginRight: "50px" }}>
                    <Space size="large">
                        <Link><UserOutlined style={{ fontSize: "25px"}} /></Link>
                        <Badge count={5}>
                           <a href="#" onClick={showDrawer}><MessageOutlined style={{ fontSize: "25px"}} /></a>
                        </Badge>
                        <Badge count={1}>
                            <Link><GlobalOutlined style={{ fontSize: "25px" }}/></Link>
                        </Badge>
                    </Space>
                </div> */}
            </PageHeader>

            <Divider style={{ margin: 0 }} />
            <Menu mode="horizontal" style={centerStyle}>
                <Menu.Item>
                    HOME
                </Menu.Item>
                <Menu.Item>
                    FOOD
                </Menu.Item>
                <Menu.Item>
                    PAGES
                </Menu.Item>
                <Menu.Item>
                    BLOG
                </Menu.Item>
                <Menu.Item>
                    ABOUT US
                </Menu.Item>
                <Menu.Item>
                    CONTACT
                </Menu.Item>

                <Menu.Item>
                    PROFILE
                </Menu.Item>
                <Menu.Item onClick={showDrawer}>
                    <Badge count={5}>
                        MESSAGE
                    </Badge>
                </Menu.Item>
            </Menu>

            <DrawerContent 
                visible={visible}
                onClose={onClose}
                showChildrenDrawer={showChildrenDrawer}
                onChildrenDrawerClose={onChildrenDrawerClose}
                childrenDrawer={childrenDrawer}
            />
        </>
    )
}
