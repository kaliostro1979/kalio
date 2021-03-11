import React, {useContext} from 'react'
import LanguageSwitcher from "./LangSwitcher";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {logOut} from "../redux/actions/setLogout";
import {Context} from "../context/context";
import {loginUrl} from "../layout/URL";
import {getCurrentUser} from "../redux/actions/getCurrentUser";


const LoggedInUserControl = ({history})=>{
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const {token, currentUser, setToken} = useContext(Context)
    const user = JSON.parse(currentUser)


    async function handleLogOut(){
        dispatch(logOut())
        localStorage.clear()
        setToken('')
        dispatch(getCurrentUser(null))
        //history.push(loginUrl)
    }

    if (token){
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