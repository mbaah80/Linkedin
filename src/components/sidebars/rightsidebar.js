import React from "react";
import './sidebars.css'

let Rightsidebar = () =>{
    return(
       <div className="col-md-4 rightSidebar">
         <div class="card">
            <div class="card-body">
                <h5 class="card-title ">Add to your feed <button className="btn btn-default"><i class="fa fa-info-circle" aria-hidden="true"></i></button></h5>
                <div className="feedContainer mt-4">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                    <div className="avatarInfo">
                        <h6>Ranbir K. Toor</h6>
                        <small>Founder, Elevate City® and ONE City. Gender and Equality Leadership networks,</small>
                        <button className="btn btn-primary btn-sm followBtn"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button>
                    </div>
                </div>
                <div className="feedContainer mt-4">
                    <img src="https://images.squarespace-cdn.com/content/v1/530a77dee4b035db71736c02/1570812709805-UW9CYAKYVXKSTO845HHI/Connecticut+headshots+-+lawyer+headshot+-+Seshu+Badrinath.jpg?format=1000w"  className="profileAvatar" />
                    <div className="avatarInfo">
                        <h6>Francis Ayivi MBA, ACMA, CGMA</h6>
                        <small>Chartered Management Accountant / Certified Data Protection Supervisor</small>
                        <button className="btn btn-primary btn-sm followBtn"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button>
                    </div>
                </div>
                <div className="feedContainer mt-4">
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