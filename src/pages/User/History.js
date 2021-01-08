import React from 'react'
import UserNav from '../../components/nav/UserNav'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const History = () => {
    let dispatch = useDispatch();
    let { user } = useSelector((state) => ({ ...state }));
  
    let history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
                <UserNav />
            </div>
                <div className="col mt-4">
                    <span>Current user </span> <h4>{user.email && user.email.split("@")[0]}</h4>
                </div>
            </div>
        </div>
    )
}

export default History
