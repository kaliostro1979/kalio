import React from 'react'
import {Row, Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";


const Home = ()=>{

    const {t} = useTranslation()

    return (
        <Row>
            <Col lg={12}>
                <h3 className="text-center">{t('Home')}</h3>
            </Col>
        </Row>
    )
}

export default Home