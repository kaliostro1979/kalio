import React, {useContext} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import NavBlock from "./NavBlock";
import UserControl from "./UserControl";
import LoggedInUserControl from "./LoggedInUserControl";
import {Context} from "../context/context";



const BlockHeader = () => {
    const {token} = useContext(Context)


    if (token){
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