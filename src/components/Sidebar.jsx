import React from 'react'
import Sider from "antd/lib/layout/Sider";
import Menu from "antd/lib/menu";
import SubMenu from "antd/lib/menu/SubMenu";
import {Link} from "react-router-dom";
import {homeUrl, postsUrl, usersUrl} from "../layout/URL";





const BlockSidebar = ()=>{
    return(
        <Sider>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1"><Link to={homeUrl}>Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to={postsUrl}>Posts</Link></Menu.Item>
                <Menu.Item key="3"><Link to={usersUrl}>Users</Link></Menu.Item>
            </Menu>
        </Sider>
    )
}


export default BlockSidebar