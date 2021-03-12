import React, {useEffect} from 'react'
import {Row, Col} from "react-bootstrap";
import Card from "antd/lib/card";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {usersUrl} from "../layout/URL";
import {loadSingleUser} from "../redux/actions/getUserProfile";
import {loadUsers} from "../redux/actions/getUsers";
import {useTranslation} from "react-i18next";



const Users = () => {

    const users = useSelector((state) => state.users)
    const dispatcher = useDispatch()
    const{t} = useTranslation()


    useEffect(() => {
        dispatcher(loadUsers(users.users))
    }, [dispatcher])


    return (
        <Row>
            <Col lg={12} className="text-center mb-3">
                <h3>{t('All Users')}</h3>
            </Col>
            <Col lg={12} className="users__block">
                <Row>
                    {
                        users.users.map((user) => {
                            return (
                                <Col lg={6} className="user-block mb-3" key={user._id}>
                                    <Link to={usersUrl + '/' + user._id} onClick={()=>{dispatcher(loadSingleUser(user._id))}}>
                                        <Card title={user.firstName + ' ' + user.lastName} className="users-card__main">
                                            <div className="user-data mb-2 user-email">{t('Email')}: <span>{user.email}</span>
                                            </div>
                                            <div className="user-data mb-2 user-phone">{t('Phone')}: <span>{user.phone}</span>
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}
export default Users