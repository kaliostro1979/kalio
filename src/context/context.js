import React, {createContext, useEffect, useState} from 'react'
import {useSelector} from "react-redux";

export const Context = createContext()

function ContextProvider ({children}){

    const user = useSelector(state=>state.currentUser)
    const [token, setToken] = useState('')
    const [currentUser, setCurrentUser] = useState('')

    if (user !== null){
        localStorage.setItem('token', user.token)
        localStorage.setItem('currentUser', JSON.stringify(user))
    }

    useEffect(()=>{
        const storageToken = localStorage.getItem('token')
        const storageUser = localStorage.getItem('currentUser')
        setToken(storageToken)
        setCurrentUser(storageUser)
    },[user, token])




    return(
        <Context.Provider value={{ token, currentUser, setToken }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider