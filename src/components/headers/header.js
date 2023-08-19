import React from "react";
import {
    Link, useNavigate
} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout, reset} from "../../features/auth/authSlice";
import './header.css';

let Header = () => {

    let location = useNavigate();
    let dispatch = useDispatch();

    const {user} = useSelector(state => state.auth)
    const logoutHandle = () =>{
        dispatch(logout())
        dispatch(reset())
        location('/')
    }



    return (
        <div className="container headerHome">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                <img src={`${user && user.user.picturePath}`} className="profileAvatarPost"/>
                                <b>{user && user.user.name}</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                |
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-default d-flex align-items-center"  onClick={logoutHandle}><i
                                className="fa fa-sign-out mr-2" aria-hidden="true"></i> Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;