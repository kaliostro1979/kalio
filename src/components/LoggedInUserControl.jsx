import React from 'react'
import {Link} from "react-router-dom";
import {homeUrl, loginUrl, registerUrl} from "../layout/URL";
import LanguageSwitcher from "./LangSwitcher";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLogout} from "../redux/actions/setLogout";

const LoggedInUserControl = ({history})=>{
    const user = useSelector((state)=>state.currentUser)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    function handleLogOut(){
        dispatch(setLogout())
    }

    if (user !== null){
        return(
            <div className="user-control__block">
                <ul>
                    <li><span>{user.firstName}</span></li>
                    <li><span>{user.lastName}</span></li>
                    <li><span className="logout" onClick={handleLogOut}>{t('Logout')}</span></li>
                    <li><LanguageSwitcher/></li>
                </ul>
            </div>
        )
    }
}

export default LoggedInUserControl