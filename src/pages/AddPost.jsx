import React, {useContext, useState} from "react";
import {Col, Form, Button, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {currentUser} from "../redux/reducers/currentUser";
import {Context} from "../context/context";

const AddPostPage = () => {

    const {t} = useTranslation()
    const {currentUser} = useContext(Context)

    const[postTitle, setPostTitle] = useState('')
    const[postBody, setPostBody] = useState('')

    const user = JSON.parse(currentUser)


    function handlePostTitle(event){
        setPostTitle(event.target.value)
    }

    function handlePostBody(event){
        setPostBody(event.target.value)
    }

    const postData={
        title: postTitle,
        body: postBody,
        date: new Date().toLocaleDateString(),
        author: user.firstName + ' ' + user.lastName,
        userId: user.id
    }

    async function handlePostAddingSubmit(event){
        event.preventDefault()
        await fetch('http://localhost:5000/post/',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(postData)
        })
        event.target.reset();
    }


    return (
        <Row>
            <Col lg={12}>
                <div className="all-posts__block text-center mb-3">
                    <h3>{t('Add new Post')}</h3>
                </div>
            </Col>
            <Col lg={12}>
                <Form onSubmit={handlePostAddingSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder={t('Post title')} onChange={handlePostTitle}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder={t('Post message')} onChange={handlePostBody}/>
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AddPostPage