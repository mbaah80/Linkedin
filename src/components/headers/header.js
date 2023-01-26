import React from "react";
import './header.css';

let Header = () => {
    return (
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
                <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-inline-block align-top" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <i className="fa fa-users" aria-hidden="true"></i>
                            My Network
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            Jobs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <i class="fa fa-commenting" aria-hidden="true"></i>
                            Messaging
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex align-items-center" href="#">
                            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatarPost" /> 
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                          |
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-default joinBtn" href="#">Join now</a>
                    </li>
                </ul>
            </div>
        </nav>
       </div>
    )
}
export default Header;