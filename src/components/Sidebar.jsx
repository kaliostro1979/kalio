import React from 'react'
import Sider from "antd/lib/layout/Sider";
import Menu from "antd/lib/menu";
import SubMenu from "antd/lib/menu/SubMenu";
import {Link} from "react-router-dom";





const BlockSidebar = ()=>{
    return(
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/users'>Users</Link></Menu.Item>
            </Menu>
        </Sider>
    )
}


export default BlockSidebar