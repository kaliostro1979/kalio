import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import NavBlock from "./NavBlock";
import UserControl from "./UserControl";
import {useSelector} from "react-redux";
import LoggedInUserControl from "./LoggedInUserControl";



const BlockHeader = () => {
    const user = useSelector((state)=>state.currentUser)


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