import React from 'react'
import {Link} from "react-router-dom";
import {loginUrl, registerUrl} from "../layout/URL";
import LanguageSwitcher from "./LangSwitcher";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const LoggedInUserControl = ()=>{
    const user = useSelector((state)=>state.currentUser)
    const {t} = useTranslation()

    return(
        <div className="user-control__block">
            <ul>
                <li><span>{user.firstName}</span></li>
                <li><span>{user.lastName}</span></li>
                <li><Link to={loginUrl}>{t('Logout')}</Link></li>
                <li><LanguageSwitcher/></li>
            </ul>
        </div>
    )
}

export default LoggedInUserControl