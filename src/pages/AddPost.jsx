import React from "react";
import {Col, Form, Button, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const AddPostPage = () => {

    const {t} = useTranslation()


    return (
        <Row>
            <Col lg={12}>
                <div className="all-posts__block text-center mb-3">
                    <h3>{t('Add new Post')}</h3>
                </div>
            </Col>
            <Col lg={12}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AddPostPage