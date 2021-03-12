import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import Text from "antd/lib/typography/Text";
import {loadPosts} from "../redux/actions/getPosts";
import {useTranslation} from "react-i18next";


const Posts = () => {

    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    return (
        <Row>
            <Col lg={12}>
                <div className="all-posts__block text-center mb-3">
                    <h3>{t('All Posts')}</h3>
                </div>
            </Col>
            <Col lg={12} className="posts__block">
                <Row>
                    {
                        posts.posts.map((post) => {
                            post.time = new Date().toLocaleDateString()
                            return (
                                <Col lg={12} className='post-main__block' key={Math.random()}>
                                    <Row>
                                        <Col lg={12}>
                                            <h5>{post.title}</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Text>{post.body}</Text>
                                            <div className="author-info__block">
                                                <div className="mt-2 text-left">Author: <strong>{post.author}</strong></div>
                                                <div className="mt-2 text-right">Date: <strong>{post.date}</strong></div>
                                            </div>
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

export default Posts