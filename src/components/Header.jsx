import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import NavBlock from "./NavBlock";
import UserControl from "./UserControl";


const BlockHeader = () => {
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