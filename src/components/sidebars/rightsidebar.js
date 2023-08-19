import React, { useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllUsers, followUser} from "../../features/user/userSlice";
import './sidebars.css'

let Rightsidebar = () =>{

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const loggedInUser = useSelector(state => state.auth.user)

    let otherUsers = [];
    if (loggedInUser && loggedInUser.user && loggedInUser.user.id) {
        otherUsers = users.filter(user => user._id !== loggedInUser.user.id);
    } else {
        // Handle the case when the user is not logged in.
        // For example, set otherUsers to the original users list or an empty array.
        // otherUsers = users;
        // OR
        // otherUsers = [];
    }

    const filteredUser =  otherUsers.filter(user => {
        if (loggedInUser.user._id === user._id) {
            return false
        } else return !loggedInUser.user.friends.includes(user._id);
    })


    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])

    let followHandler = (userId) =>{
        dispatch(followUser(userId))
    }

    return(
       <div className="col-md-4 rightSidebar">
           {
               filteredUser &&    filteredUser.length > 0  ? (<div className="card" >
                           <div className="card-body">
                               <h6 style={{
                                      borderBottom: '1px solid #d2d2d2',
                                        paddingBottom: '10px',
                                        marginBottom: '10px',
                                        fontWeight: 'bold',
                                        color: '#000',
                                        fontSize: '12px'

                               }}>
                                      <i className="fa fa-user-plus" aria-hidden="true"></i> People you may know
                               </h6>
                               {
                                   filteredUser.slice(0,2).map((user =>(
                                       <div className="feedContainer mt-4" key={user._id}>
                                           <img src={`http://localhost:3002/profile/${user.picturePath}`}
                                                className="friendsprofileAvatar"/>
                                           <div className="avatarInfo" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                               <h6>{user.name}</h6>
                                               <button
                                                  style={{
                                                        backgroundColor: '#fff',
                                                        border: '1px solid #d2d2d2',
                                                        color: '#000',
                                                        padding: '5px 10px',
                                                        borderRadius: '5px',
                                                        fontSize: '10px',
                                                  }}
                                                   onClick={() => followHandler(user._id)}>
                                                   <i className="fa fa-plus" aria-hidden="true"></i> Follow
                                               </button>
                                           </div>
                                       </div>
                                   )))
                               }

                               <button className="btn btn-default btn-sm recommedBtn">View all recommendations <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                           </div>
                       </div>) : null
           }
       </div>
    )
}

export default Rightsidebar;