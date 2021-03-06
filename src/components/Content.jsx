import React from 'react'
import BreadCrumbs from "./BreadCrumbs";
import Home from "../pages/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Users from "../pages/Users";
import {Container, Row, Col} from "react-bootstrap";
import BlockSidebar from "./Sidebar";
import ProfilePage from "../pages/ProfilePage";
import {homeUrl, profileUrl, usersUrl} from "../layout/URL";


const BlockContent = () => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <BreadCrumbs/>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <BlockSidebar/>
                </Col>
                <Col lg={8}>
                    <Route exact path={homeUrl} component={Home}/>
                    <Route exact path={usersUrl} component={Users}/>
                    <Route exact path={profileUrl} component={ProfilePage}/>
                </Col>
            </Row>
        </Container>

    )
}


export default BlockContent