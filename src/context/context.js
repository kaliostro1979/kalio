import React, {createContext, useEffect, useState} from 'react'
import {useSelector} from "react-redux";

export const Context = createContext()

function ContextProvider ({children}){

    const user = useSelector(state=>state.currentUser)
    const [token, setToken] = useState('')
    const [currentUser, setCurrentUser] = useState('')

    console.log('user ------ ', user);

    if (user !== null){
        localStorage.setItem('token', user.token)
        localStorage.setItem('currentUser', JSON.stringify(user))
    }




    useEffect(()=>{
        const storageUser = localStorage.getItem('currentUser')
        const storageToken = localStorage.getItem('token')
        setCurrentUser(storageUser)
        setToken(storageToken)
    },[user, token])

    console.log('token ----- ', token);


    return(
        <Context.Provider value={{ token, currentUser, setToken }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider