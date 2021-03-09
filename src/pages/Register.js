import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useTranslation} from "react-i18next";
import axios from "axios";
import {Redirect} from "react-router";

const RegisterPage = ({history})=>{

    const {t} = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function handleVerifyPassword(event){
        setPasswordVerify(event.target.value)
    }

   /* function resetForm(){
        setEmail('')
        setPassword('')
        setPasswordVerify('')
    }*/



    async function handleSubmit(event){
        event.preventDefault()

        try{
            const data = {
                email: email,
                password: password,
                passwordVerify: passwordVerify
            }

            await axios.post('http://localhost:5000/auth/', data).then((data)=>{
                history.push('/login')

            })
        }catch (err){
            console.error(err)
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{t('Email address')}</Form.Label>
                <Form.Control type="email" placeholder={t('Enter email')} onChange={handleEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>{t('Password')}</Form.Label>
                <Form.Control type="password" placeholder={t('Password')} onChange={handlePassword} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>{t('Confirm password')}</Form.Label>
                <Form.Control type="password" placeholder={t('Confirm password')} onChange={handleVerifyPassword}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                {t('Register')}
            </Button>
        </Form>
    )
}

export default RegisterPage