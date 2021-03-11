import React, {useContext} from 'react'
import BreadCrumbs from "./BreadCrumbs";
import Posts from "../pages/Posts";
import {Route} from "react-router-dom";
import Users from "../pages/Users";
import {Container, Row, Col} from "react-bootstrap";
import BlockSidebar from "./Sidebar";
import ProfilePage from "../pages/ProfilePage";
import {addPostUrl, homeUrl, loginUrl, postsUrl, profileUrl, registerUrl, usersUrl} from "../layout/URL";
import Home from "../pages/Home";
import LogInPage from "../pages/LogIn";
import RegisterPage from "../pages/Register";
import AddPostPage from "../pages/AddPost";
import {Context} from "../context/context";


const BlockContent = () => {

    const {token} = useContext(Context)


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
                    <Route exact path={postsUrl} component={token ? Posts : LogInPage}/>
                    <Route exact path={usersUrl} component={token ? Users : LogInPage }/>
                    <Route exact path={profileUrl} component={token ? ProfilePage : LogInPage }/>
                    <Route exact path={addPostUrl} component={token ? AddPostPage : LogInPage}/>
                    <Route exact path={loginUrl} component={LogInPage}/>
                    <Route exact path={registerUrl} component={RegisterPage}/>
                </Col>
            </Row>
        </Container>

    )
}


export default BlockContent