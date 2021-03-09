import React from "react";
import i18next from "i18next";



const LanguageSwitcher = ()=>{

    const changeLang = (lang)=>{
        i18next.changeLanguage(lang)
    }

    return(
        <div className="lang-switcher">
            <ul>
                <li>
                    <div className="lang-icon">
                        <img src="/assets/images/usa.png" alt=""/>
                    </div>
                    <span className="lang-switcher__btn" onClick={()=>{changeLang('en')}}>en</span>
                </li>
                <li>
                    <div className="lang-icon">
                        <img src="/assets/images/rus.png" alt=""/>
                    </div>
                    <span className="lang-switcher__btn" onClick={()=>{changeLang('ru')}}>ru</span>
                </li>
            </ul>
        </div>
    )
}

export default LanguageSwitcher