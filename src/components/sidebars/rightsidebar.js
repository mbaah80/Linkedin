import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllUsers, followUser} from "../../features/user/userSlice";
import './sidebars.css'

let Rightsidebar = () =>{

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const loggedInUser = useSelector(state => state.auth.user)

    const otherUsers = users.filter(user => user._id !== loggedInUser.user.id);

    const filteredUser =  otherUsers.filter(user => {
        if(loggedInUser.user.friends.includes(user._id)){
          //don't show that user
            return false
        }else{
            //show that user
            return true
        }
    })

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])

    let followHandler = (userId) =>{
        dispatch(followUser(userId))
    }

    return(
       <div className="col-md-4 rightSidebar">
         <div class="card">
            <div class="card-body">
                <h5 class="card-title ">Add to your feed <button className="btn btn-default"><i class="fa fa-info-circle" aria-hidden="true"></i></button></h5>

                {
                    filteredUser.slice(0,2).map((user =>(
                        <div className="feedContainer mt-4" key={user._id}>
                            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"
                                 className="profileAvatar"/>
                            <div className="avatarInfo">
                                <h6>{user.name}</h6>
                                <small>Founder, Elevate City® and ONE City. Gender and Equality Leadership
                                    networks,</small>
                                <button className="btn btn-primary btn-sm followBtn" onClick={() => followHandler(user._id)}>
                                    <i className="fa fa-plus" aria-hidden="true"></i> Follow
                                </button>
                            </div>
                        </div>
                    )))
                }

                <button className="btn btn-default btn-sm recommedBtn">View all recommendations <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
         </div>

         <div class="card mt-2 mb-2">
            <div class="card-body">
                <h5 class="card-title ">Ad <button className="btn btn-default"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button></h5>
                <div className="feedContainer">
                    <img src="https://media.istockphoto.com/id/1301953681/photo/young-woman-student-outdoor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=eOWDZtzQ3pO4gM4GxDNmEorKcyyobgukLfnzjtguhKo="  className="profileAvatar" />
                    <div className="avatarInfo">
                        <h6>Sara Smith</h6>
                        <small>Company • Nonprofit Organization Management</small>
                        <button className="btn btn-primary btn-sm followBtn"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button>
                    </div>
                </div>
                <button className="btn btn-default btn-sm recommedBtn">View all recommendations <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
         </div>
        
       </div>
    )
}

export default Rightsidebar;