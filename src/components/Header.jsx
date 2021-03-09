import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import NavBlock from "./NavBlock";
import UserControl from "./UserControl";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LoggedInUserControl from "./loggedInUserCOntrol";


const BlockHeader = () => {
    const user = useSelector((state)=>state.currentUser)
    const {t} = useTranslation()


    if (user !== null){
        return (
            <header id="header">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="header-inner">
                                <NavBlock/>
                                <LoggedInUserControl/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }

    return (
        <header id="header">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="header-inner">
                            <NavBlock/>
                            <UserControl/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )

}


export default BlockHeader