import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useTranslation} from "react-i18next";
import {postsUrl} from "../layout/URL";
import {getCurrentUser} from "../redux/actions/getCurrentUser";
import {useDispatch} from "react-redux";

const LogInPage = ({history})=>{

    const {t} = useTranslation()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const dispatch = useDispatch()

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    const data={
        email:email,
        password:password
    }

    async function handleSubmit(event){
        event.preventDefault()
        await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>res.json())
            .then((user)=>{
                dispatch(getCurrentUser(user))
            })
            .then(history.push(postsUrl))
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{t('Email address')}</Form.Label>
                <Form.Control type="email" placeholder={t('Enter email')} onChange={handleEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>{t('Password')}</Form.Label>
                <Form.Control type="password" placeholder={t('Password')} onChange={handlePassword}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                {t('Login')}
            </Button>
        </Form>
    )
}

export default LogInPage