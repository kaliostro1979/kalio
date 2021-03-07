import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux";
import Text from "antd/lib/typography/Text";


const Home = () => {

    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [])


    return (
        <Row>
            <Col lg={12}>
                <div className="all-posts__block text-center mb-3">
                    <h3>All Posts</h3>
                </div>
            </Col>
            <Col lg={12} className="posts__block">
                <Row>
                    {
                        posts.posts.map((post) => {
                            post.time = new Date().toLocaleDateString()
                            return (
                                <Col lg={12} className='post-main__block' key={post.id}>
                                    <Row>
                                        <Col lg={12}>
                                            <h5>{post.title}</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Text>{post.body}</Text>
                                            <div className="mt-2"><strong>{post.time}</strong></div>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )


}

export default Home