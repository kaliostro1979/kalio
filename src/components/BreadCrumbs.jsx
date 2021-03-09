import React from 'react'
import { Breadcrumb } from 'antd';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";





const BreadCrumbs = ()=>{

    const {t} = useTranslation()

    return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to='/'>{t('Home')}</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/users'>{t('Users')}</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/users'>{t('Posts')}</Link></Breadcrumb.Item>
            </Breadcrumb>
    )
}


export default BreadCrumbs