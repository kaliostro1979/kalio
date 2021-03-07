import React, {useEffect, useState} from 'react'
import {Row, Col} from "react-bootstrap";
import Card from "antd/lib/card";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {usersUrl} from "../layout/URL";
import {loadSingleUser} from "../redux/actions/getUserProfile";
import {loadUsers} from "../redux/actions/getUsers";



const Users = () => {

    const users = useSelector((state) => state.users)
    const dispatcher = useDispatch()



    useEffect(() => {
        dispatcher(loadUsers(users.users))
    }, [])


    return (
        <Row>
            <Col lg={12} className="text-center mb-3">
                <h3>All Users</h3>
            </Col>
            <Col lg={12} className="users__block">
                <Row>
                    {
                        users.users.map((user) => {
                            return (
                                <Col lg={6} className="user-block mb-3" key={user.id}>
                                    <Link to={usersUrl + '/' + user.id} onClick={()=>{dispatcher(loadSingleUser(user.id))}}>
                                        <Card title={user.name}>
                                            <div className="user-data mb-2 user-name">{user.username}</div>
                                            <div className="user-data mb-2 user-email">Email: <span>{user.email}</span>
                                            </div>
                                            <div className="user-data mb-2 user-phone">Phone: <span>{user.phone}</span>
                                            </div>
                                            <div className="user-data mb-2 user-web">Website: <span>{user.website}</span>
                                            </div>
                                            <div
                                                className="user-data mb-2 user-company">Company: <span>{user.company.name}</span>
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