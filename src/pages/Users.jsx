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
                            console.log(user);
                            return (
                                <Col lg={6} className="user-block mb-3" key={user._id}>
                                    <Link to={usersUrl + '/' + user._id} onClick={()=>{dispatcher(loadSingleUser(user.id))}}>
                                        <Card title={user.firstName} className="users-card__main">
                                            {/*<div className="user-data mb-2 user-name"><span>{t('Username')}:</span> {user.username}</div>*/}
                                            <div className="user-data mb-2 user-email">{t('Email')}: <span>{user.email}</span>
                                            </div>
                                            <div className="user-data mb-2 user-phone">{t('Phone')}: <span>{user.phone}</span>
                                            </div>
                                            {/*<div className="user-data mb-2 user-web">{t('Website')}: <span>{user.website}</span>
                                            </div>*/}
                                            {/*<div
                                                className="user-data mb-2 user-company">{t('Company')}: <span>{user.company.name}</span>
                                            </div>*/}
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