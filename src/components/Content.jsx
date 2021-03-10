import React, {useEffect, useState} from 'react'
import BreadCrumbs from "./BreadCrumbs";
import Posts from "../pages/Posts";
import {Route, useHistory} from "react-router-dom";
import Users from "../pages/Users";
import {Container, Row, Col} from "react-bootstrap";
import BlockSidebar from "./Sidebar";
import ProfilePage from "../pages/ProfilePage";
import {addPostUrl, homeUrl, loginUrl, postsUrl, profileUrl, registerUrl, usersUrl} from "../layout/URL";
import Home from "../pages/Home";
import LogInPage from "../pages/LogIn";
import RegisterPage from "../pages/Register";
import AddPostPage from "../pages/AddPost";
import {useSelector} from "react-redux";


const BlockContent = () => {

    const user = useSelector((state)=>state.currentUser)
    const history = useHistory()

    const [loggedIn, setLoggedIn] = useState(undefined)

    async function getLoggedIn(){
        const loggedInRes = await fetch('http://localhost:5000/auth/loggedIn', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res=>{
                return res.json()
            })
            .then((data)=>{
                return data
            })
        console.log(loggedInRes);
        setLoggedIn(loggedInRes)
    }

    useEffect(()=>{
        getLoggedIn()
    }, [])



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
                    <Route exact path={postsUrl} component={Posts}/>
                    <Route exact path={usersUrl} component={Users}/>
                    <Route exact path={profileUrl} component={ProfilePage}/>
                    <Route exact path={loginUrl} component={LogInPage}/>
                    <Route exact path={registerUrl} component={RegisterPage}/>
                    <Route exact path={addPostUrl} component={AddPostPage}/>
                </Col>
            </Row>
        </Container>

    )
}


export default BlockContent