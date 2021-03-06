import React from 'react'
import { Breadcrumb } from 'antd';
import {Link} from "react-router-dom";





const BreadCrumbs = ()=>{
    return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/users'>Users</Link></Breadcrumb.Item>
            </Breadcrumb>
    )
}


export default BreadCrumbs