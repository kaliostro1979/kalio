import React from 'react'
import {Link} from "react-router-dom";
import {loginUrl, registerUrl} from "../layout/URL";
import LanguageSwitcher from "./LangSwitcher";
import {useTranslation} from "react-i18next";

const UserControl = ()=>{

    const {t} = useTranslation()

    return(
        <div className="user-control__block">
            <ul>
                <li><Link to={loginUrl}>{t('Login')}</Link></li>
                <li><Link to={registerUrl}>{t('Register')}</Link></li>
                <li><LanguageSwitcher/></li>
            </ul>
        </div>
    )
}

export default UserControl