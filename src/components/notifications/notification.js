import React from 'react';
import Header from '../headers/header';
import './notification.css';

let Notification = () => {
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="container notification">
                <div className="row">
                    <div className="col-md-2">
                        <div className="card leftCard">
                            <div className="card-body">
                                <p>Manage your Notifications</p>
                            </div>
                        </div>
                        <button className="btn btn-primary postJobBtn">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i> View settings
                        </button>
                    </div>
                    <div className="col-md-6 middleCard">
                        <div className="card mb-4">
                            <div className="card-body">
                                <a href="#" className="jobList">
                                    <div className="JobImgContent">
                                        <img src="https://media.licdn.com/dms/image/C4E0BAQF7JjDauQhSPQ/company-logo_100_100/0/1655139231486?e=1683158400&v=beta&t=YPW60iMprB79zsbmWjQMJSgf2FMcGCbj0rAlPOLr-Rg" alt="jobImage"/>
                                        <div className="jobListContent">
                                            <span>Your <b>Job Alert</b> for <b>information technology</b> in <b>Ghana</b></span>
                                            <button className="text-dark btn btn-primary btn-small viewJobs">View 2 Jobs</button>

                                        </div>
                                    </div>
                                    <div className="hourActionContainer">
                                        <small>1h</small>
                                        <button className="btn btn-default saveJob"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                                    </div>
                                </a>
                                <a href="#" className="jobList">
                                    <div className="JobImgContent">
                                        <img src="https://media.licdn.com/dms/image/C560BAQGdqumEPWjG8A/company-logo_100_100/0/1629923384807?e=1683158400&v=beta&t=OfC-jsoUyM363zVcJiu9itpnde06zULT_FN_72XR0to" alt="jobImage"/>
                                        <div className="jobListContent">
                                            <span>Your <b>Job Alert</b> for <b>information technology</b> in <b>Ghana</b></span>
                                            <button className="text-dark btn btn-primary btn-small viewJobs">View 12 Jobs</button>

                                        </div>
                                    </div>
                                    <div className="hourActionContainer">
                                        <small>1h</small>
                                        <button className="btn btn-default saveJob"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                                    </div>
                                </a>
                                <a href="#" className="jobList">
                                    <div className="JobImgContent">
                                        <img src="https://media.licdn.com/dms/image/C4D0BAQGu6TQPu_V87w/company-logo_100_100/0/1617715751788?e=1683158400&v=beta&t=w77AnnDjI8oiTWR9mWqDjNQRAFu1_WwhgoPXNd-ESCw" alt="jobImage"/>
                                        <div className="jobListContent">
                                            <span>Your <b>Job Alert</b> for <b>information technology</b> in <b>Ghana</b></span>
                                            <button className="text-dark btn btn-primary btn-small viewJobs">View 22 Jobs</button>

                                        </div>
                                    </div>
                                    <div className="hourActionContainer">
                                        <small>1h</small>
                                        <button className="btn btn-default saveJob"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                                    </div>
                                </a>
                                <a href="#" className="jobList">
                                    <div className="JobImgContent">
                                        <img src="https://media.licdn.com/dms/image/C5603AQHMmoQuvC9UcQ/profile-displayphoto-shrink_100_100/0/1662312290348?e=1680739200&v=beta&t=204J_cA7hYJddzWj6BAFVo3n1113-5YXLGJxLWTCqsE" className="userNotificationAvatar" alt="jobImage"/>
                                        <div className="jobListContent">
                                            <span><b>Marry Kavanga</b> commented on  <b>Davis lux's</b> post: wonderfully design - i love it</span>

                                        </div>
                                    </div>
                                    <div className="hourActionContainer">
                                        <small>1d</small>
                                        <button className="btn btn-default saveJob"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                                    </div>
                                </a>
                                <a href="#" className="jobList">
                                    <div className="JobImgContent">
                                        <img src="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1683158400&v=beta&t=rE_mmZv_yAB0S37fcSHWFE_ov1GBXEdmwBB0XaCWRXc" className="userNotificationAvatar" alt="jobImage"/>
                                        <div className="jobListContent">
                                            <span><b>Google</b> is making major changes to Android for some user. See more news on the decision driving update </span>

                                        </div>
                                    </div>
                                    <div className="hourActionContainer">
                                        <small>1d</small>
                                        <button className="btn btn-default saveJob"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 rightCard">
                        <div className="card">
                            <div className="card-title">
                                <h6>Ads will display here</h6>
                                <small>Recommended based on your activity</small>
                            </div>
                            <div className="card-body">
                                <a href="#" className="btn btn-default btn-sm resumeBuilder">
                                    <p>I want to improve my resume</p>
                                    <img src="https://clipart.world/wp-content/uploads/2021/06/Resume-clipart-png-images.png" alt="resume"/>
                                </a>
                                <p>
                                    Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="text-dark btn btn-primary btn-small adsButton">
                                    Try for free
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;