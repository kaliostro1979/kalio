import React, {useEffect} from 'react'
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "antd/lib/card";
import Text from "antd/lib/typography/Text";
import {useDispatch, useSelector} from "react-redux";
import {loadUserPosts} from "../redux/actions/getUserPosts";
import {useTranslation} from "react-i18next";



const ProfilePage = () => {

    const profile = useSelector(state => state.profile)
    const userPosts = useSelector(state => state.userPosts)
    const dispatcher = useDispatch()

    const {t} = useTranslation()


    useEffect(() => {
        dispatcher(loadUserPosts(profile.id))
    }, [dispatcher, profile.id])

    console.log(profile);

    return (
        <>
            <Row className="mb-5">
                <Col lg={4}>
                    <div className="profile-avatar">
                        <img src="/assets/images/avatar.jpg" alt="avatar" />
                    </div>
                </Col>
                <Col lg={8}>
                    <Card title={profile.firstName + ' ' + profile.lastName} className="profile-card">
                        <div className="user-data mb-2 user-email">{t('Email')}: <span>{profile.email}</span>
                        </div>
                        <div className="user-data mb-2 user-phone">{t('Phone')}: <span>{profile.phone}</span>
                        </div>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={12}>
                            <h3 className="text-center mb-4">User Posts</h3>
                        </Col>
                        <Col lg={12} className="posts-main">
                            {
                                userPosts.userPosts.map((post)=>{
                                    return (
                                        <Row className="post-main__block" key={'postTitle' + post.id}>
                                            <Col lg={12}>
                                                <h5>{post.title}</h5>
                                            </Col>
                                            <Col lg={12}>
                                                <Text>{post.body}</Text>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}


export default ProfilePage