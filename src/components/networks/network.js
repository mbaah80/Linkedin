import React from "react";
import Header from '../headers/header'
import './network.css'

let Network = () =>{
  return(
    <div className="network">
        <div className="header">
            <Header/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div class="card">
                    <h6 className="card-title">
                      Manage my network
                    </h6>
                <div class="card-body">
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-users mr-2 ml-2" aria-hidden="true"></i> Connections</p>
                         <p className="actionNumbers">19</p>
                         </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-address-book mr-2 ml-2" aria-hidden="true"></i>Contacts</p>
                         <p className="actionNumbers">199</p>
                        </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-user mr-2 ml-2" aria-hidden="true"></i> Following & followers</p>
                         <p className="actionNumbers">9</p>
                         </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-users mr-2 ml-2" aria-hidden="true"></i>Groups</p>
                         <p className="actionNumbers">19</p>
                        </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-calendar-check-o mr-2 ml-2" aria-hidden="true"></i> Events</p>
                         <p className="actionNumbers">9</p>
                         </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-building-o mr-2 ml-2" aria-hidden="true"></i>Pages</p>
                         <p className="actionNumbers">19</p>
                        </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-newspaper-o mr-2 ml-2" aria-hidden="true"></i> Newsletter</p>
                         <p className="actionNumbers">1</p>
                         </a>
                        <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i class="fa fa-hashtag mr-2 ml-2" aria-hidden="true"></i>Hashtags</p>
                         <p className="actionNumbers">19</p>
                        </a>
                </div>
            </div>
                </div>
                <div className="col-md-9">
                    <div className="card connectCard mb-4">
                        <h6 className="card-title">
                             Pending/No invitations
                        </h6>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card connectUserCard">
                                            <img className="card-img-top coverImage"
                                                 src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
                                                 alt="Card image cap"/>
                                            <div className="card-body p-2">
                                                <div className="userProfileImg">
                                                    <img
                                                        src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"
                                                        className="userProfileAvatar"/>
                                                </div>
                                                <div className="userProfileName">
                                                    <p><a href="#" className="text-dark">Michael Yeboah</a></p>
                                                    <small>Frontend Developer at Heny</small>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary btn-sm connectBtn">Accept</button>
                                                <button className="btn btn-danger btn-sm connectBtn">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                <div class="card connectCard mb-4">
                    <h6 className="card-title">
                    Groups you may be interested in
                    </h6>
                    <div class="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Michael Yeboah</a></p>
                                                <small>Frontend Developer at Heny</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://media.istockphoto.com/id/1350800599/photo/happy-indian-business-man-leader-manager-standing-in-office-headshot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=pz5kwfLy64_AQIwiv9FDDJWWkAzb2Lf1F5fjZW23dBo="
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Erik Gabrielsen</a></p>
                                                <small>Member’s occupation</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://media.istockphoto.com/id/1301953681/photo/young-woman-student-outdoor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=eOWDZtzQ3pO4gM4GxDNmEorKcyyobgukLfnzjtguhKo="
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Angelina Rose</a></p>
                                                <small>Sales personnel</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://musnaz.org/wp-content/uploads/2020/09/professional-headshot-backgrounds.jpg"
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Lincoln Foster Kodua</a></p>
                                                <small>Backend Developer at Liwis</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Michael Yeboah</a></p>
                                                <small>Frontend Developer at Heny</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://media.istockphoto.com/id/1350800599/photo/happy-indian-business-man-leader-manager-standing-in-office-headshot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=pz5kwfLy64_AQIwiv9FDDJWWkAzb2Lf1F5fjZW23dBo="
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Erik Gabrielsen</a></p>
                                                <small>Member’s occupation</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://media.istockphoto.com/id/1301953681/photo/young-woman-student-outdoor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=eOWDZtzQ3pO4gM4GxDNmEorKcyyobgukLfnzjtguhKo="
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Angelina Rose</a></p>
                                                <small>Sales personnel</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card connectUserCard">
                                        <img className="card-img-top coverImage"
                                             src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body p-2">
                                            <div className="userProfileImg">
                                                <img
                                                    src="https://musnaz.org/wp-content/uploads/2020/09/professional-headshot-backgrounds.jpg"
                                                    className="userProfileAvatar"/>
                                            </div>
                                            <div className="userProfileName">
                                                <p><a href="#" className="text-dark">Lincoln Foster Kodua</a></p>
                                                <small>Backend Developer at Liwis</small>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-sm connectBtn">Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Network;