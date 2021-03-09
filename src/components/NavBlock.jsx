import React from 'react'
import {Link} from "react-router-dom";
import {homeUrl, postsUrl, usersUrl} from "../layout/URL";
import {useTranslation} from "react-i18next";

const NavBlock = ()=>{

    const {t} = useTranslation()

    return(
        <div className="nav-block">
            <div className="logo">
                <Link to={homeUrl}><img src="/assets/images/logo.png" alt=""/></Link>
            </div>
            <div className="nav">
                <ul>
                    <li><Link to={homeUrl}>{t('Home')}</Link></li>
                    <li><Link to={postsUrl}>{t('Posts')}</Link></li>
                    <li><Link to={usersUrl}>{t('Users')}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBlock