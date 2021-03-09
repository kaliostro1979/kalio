import React from 'react'
import Sider from "antd/lib/layout/Sider";
import Menu from "antd/lib/menu";
import {Link} from "react-router-dom";
import {homeUrl, postsUrl, usersUrl} from "../layout/URL";
import {useTranslation} from "react-i18next";



const BlockSidebar = ()=>{

    const {t} = useTranslation()

    return(
        <Sider>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1"><Link to={homeUrl}>{t('Home')}</Link></Menu.Item>
                <Menu.Item key="2"><Link to={postsUrl}>{t('Posts')}</Link></Menu.Item>
                <Menu.Item key="3"><Link to={usersUrl}>{t('Users')}</Link></Menu.Item>
            </Menu>
        </Sider>
    )
}


export default BlockSidebar