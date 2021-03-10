import React, {useState} from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'
import {useTranslation} from "react-i18next";

const RegisterPage = ({history})=>{

    const {t} = useTranslation()
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')


    function handleFirstName(event){
        setFirstName(event.target.value)
    }

    function handleLastName(event){
        setLastName(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

    function handleVerifyPassword(event){
        setPasswordVerify(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{

            const data = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                passwordVerify: passwordVerify
            }

            const options = {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            }

            await fetch('http://localhost:5000/auth/', options)
                .then((data)=>history.push('/login'))
        }catch (err){
            console.error(err)
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={6}>
                    <Form.Group controlId="formBasicFirstName" ld={6}>
                        <Form.Label>{t('First Name')}</Form.Label>
                        <Form.Control type="text" placeholder={t('Enter first name')} onChange={handleFirstName}/>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group controlId="formBasicLastName" ld={6}>
                        <Form.Label>{t('Last Name')}</Form.Label>
                        <Form.Control type="text" placeholder={t('Enter last name')} onChange={handleLastName}/>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{t('Email address')}</Form.Label>
                <Form.Control type="email" placeholder={t('Enter email')} onChange={handleEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>{t('Password')}</Form.Label>
                <Form.Control type="password" placeholder={t('Password')} onChange={handlePassword} />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
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