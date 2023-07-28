import React from "react";
import {useSelector} from "react-redux";
import './sidebars.css'

let Leftsidebar = () =>{

    const loggedInUser = useSelector(state => state.auth.user)

    return(
        <div className="col-md-3 leftSideBar">
            <div class="card">
            <img className="card-img-top coverImage" src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <div className="userProfileImg">
                        <img src={`http://localhost:3002/profile/${loggedInUser && loggedInUser.user.picturePath}`}  className="userProfileAvatar" />
                    </div> 
                    <div className="userProfileName mb-2">
                        <p><a href="#" className="text-dark">{loggedInUser && loggedInUser.user.name}</a></p>
                        <small>{loggedInUser && loggedInUser.user.occupation} - {loggedInUser && loggedInUser.user.location}</small>
                    </div>
                </div>
                <div className="card-footer">
                       <a href="#" className="viewProfiled btn btn-default btn-sm recommedBtn"><small>Who's viewed your profile</small>
                        <small className="actionNumbers">19</small></a>
                        <a href="#" className="viewProfiled btn btn-default btn-sm recommedBtn"><small>Impressions of your post</small>
                        <small className="actionNumbers">{loggedInUser && loggedInUser.user.impressions}</small>
                        </a>
                </div>
                <div className="card-footer">
                       <a href="#" className="btn btn-default btn-sm accessTool text-left">
                        <small>Access exclusive tools & insights</small> <br/>
                        <small> Try Premium for free</small>
                      </a>
                </div>
                <div className="card-footer">
                       <a href="#" className="btn btn-default btn-sm accessTool text-left">
                         <p className="mt-2"><i class="fa fa-bookmark mr-2" aria-hidden="true"></i> My items</p>
                       </a>
                </div>
            </div>
        </div>
    )
}

export default Leftsidebar;