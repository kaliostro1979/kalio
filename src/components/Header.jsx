import React from 'react'
import {Header} from "antd/lib/layout/layout";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Menu from "antd/lib/menu";
import {Link} from "react-router-dom";
import {homeUrl, postsUrl, usersUrl} from "../layout/URL";




const BlockHeader = ()=>{
    return(
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to={homeUrl}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<LaptopOutlined />}>
                    <Link to={postsUrl}>
                        Posts
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<NotificationOutlined />}>
                    <Link to={usersUrl}>
                        Users
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}


export default BlockHeader