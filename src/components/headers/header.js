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
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130"
                         height="70" className="d-inline-block align-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home" >
                                <i className="fa fa-home" aria-hidden="true"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/network" >
                                <i className="fa fa-users" aria-hidden="true"></i>
                                My Network
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs" >
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                Jobs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <i className="fa fa-commenting" aria-hidden="true"></i>
                                Messaging
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notification" >
                                <i className="fa fa-bell" aria-hidden="true"></i>
                                Notifications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="#">
                                <img src={`http://localhost:3002/profile/${user && user.user.picturePath}`} className="profileAvatarPost"/>
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