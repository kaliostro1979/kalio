import React from 'react'
import {Header} from "antd/lib/layout/layout";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import Menu from "antd/lib/menu";
import {Link} from "react-router-dom";
import {homeUrl, postsUrl, usersUrl} from "../layout/URL";
import {Container, Row, Col} from "react-bootstrap";


const BlockHeader = () => {
    return (
        <header id="header">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="header-inner">
                            <div className="logo">
                                <Link to={homeUrl}><img src="/assets/images/logo.png" alt=""/></Link>
                            </div>
                            <div className="nav">
                                <ul>
                                    <li><Link to={homeUrl}>Home</Link></li>
                                    <li><Link to={postsUrl}>Posts</Link></li>
                                    <li><Link to={usersUrl}>Users</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}


export default BlockHeader