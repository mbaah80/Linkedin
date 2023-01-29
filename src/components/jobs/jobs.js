import React from 'react';
import Header from '../headers/header';
import './jobs.css';

let Jobs = () => {
  return (
    <div>
        <div className="header">
            <Header/>
        </div>
        <div className="container Jobs">
            <div className="row">
                <div className="col-md-3">
                    <div className="card leftCard">
                        <div className="card-body">
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-bookmark" aria-hidden="true"></i> My jobs</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-bell" aria-hidden="true"></i> Jobs alert</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-check" aria-hidden="true"></i> Demonstrate skills</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-file-text" aria-hidden="true"></i> Interview prep</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-file" aria-hidden="true"></i> Resume Builder</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-bell" aria-hidden="true"></i> Job seeker guidance</p>
                            </a>
                            <a href="#" className=" btn btn-default btn-sm ">
                                <p><i className="fa fa-cog" aria-hidden="true"></i> Application settings</p>
                            </a>
                        </div>
                    </div>
                    <button className="btn btn-primary postJobBtn">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Post a free job
                    </button>
                </div>
                <div className="col-md-5 middleCard">
                    <div className="card  mb-3">
                        <div className="card-title keyWords">
                            <h6>Suggested job searches</h6>
                            <button className="btn btn-default btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> interface developer</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> frontend developer</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> user experience engineer</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> React</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> Node</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> MongoDB</a></li>
                                <li><a href="#"><i className="fa fa-search " aria-hidden="true"></i> Angular</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card connectCard mb-4">
                        <div className="card-title jobListHeader">
                            <h6>Similar to a job you applied 11 days ago</h6>
                            <small>Based on your profile and search history</small>
                        </div>
                        <div className="card-body">
                            <div className="jobList">
                               <div className="JobImgContent">
                                   <img src="https://media.licdn.com/dms/image/C4E0BAQF7JjDauQhSPQ/company-logo_100_100/0/1655139231486?e=1683158400&v=beta&t=YPW60iMprB79zsbmWjQMJSgf2FMcGCbj0rAlPOLr-Rg" alt="jobImage"/>
                                   <div className="jobListContent">
                                       <h6>Frontend Developer</h6>
                                       <small className="companyName">Company Name</small>
                                       <small>Bosnia and Herzegovina (Remote)</small>
                                       <small><i className="fa fa-calendar-check-o mr-2" aria-hidden="true"></i><small className="badge">You have a preferred skill badge</small></small>
                                       <small className="time">1 hour ago</small>
                                   </div>
                               </div>
                                <button className="btn btn-default saveJob"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
                            </div>
                            <div className="jobList">
                                <div className="JobImgContent">
                                    <img src="https://media.licdn.com/dms/image/C4D0BAQEY5usd7AOEQQ/company-logo_100_100/0/1549390548552?e=1683158400&v=beta&t=KDIPc7pdy1yEow4A--DH2-f8f5hE77y78OO9v_A3VR0" alt="jobImage"/>
                                    <div className="jobListContent">
                                        <h6>Backend Developer</h6>
                                        <small className="companyName">Xanlo</small>
                                        <small>Usa (Remote)</small>
                                        <small><i className="fa fa-calendar-check-o mr-2" aria-hidden="true"></i><small className="badge">You have a preferred skill badge</small></small>
                                        <small className="time">1 hour ago</small>
                                    </div>
                                </div>
                                <button className="btn btn-default saveJob"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
                            </div>
                            <div className="jobList">
                                <div className="JobImgContent">
                                    <img src="https://media.licdn.com/dms/image/C560BAQHe_lrJphYBMQ/company-logo_100_100/0/1615166672414?e=1683158400&v=beta&t=Lsb5dpKV4zF1Gv-3s_SKkQcbOKA0iWED3rF3Ewv38JU" alt="jobImage"/>
                                    <div className="jobListContent">
                                        <h6>React Developer</h6>
                                        <small className="companyName">Company Name</small>
                                        <small>France</small>
                                        <small><i className="fa fa-calendar-check-o mr-2" aria-hidden="true"></i><small className="badge">You have a preferred skill badge</small></small>
                                        <small className="time">1 hour ago</small>
                                    </div>
                                </div>
                                <button className="btn btn-default saveJob"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
                            </div>
                            <div className="jobList">
                                <div className="JobImgContent">
                                    <img src="https://media.licdn.com/dms/image/C4D0BAQGb0Gos2y5HVQ/company-logo_100_100/0/1654123962564?e=1683158400&v=beta&t=qbCVOiusHoKriwdS7RydQtM0vZD4f80t8OByqsP8VzA" alt="jobImage"/>
                                    <div className="jobListContent">
                                        <h6>.Net Developer</h6>
                                        <small className="companyName">Company Name</small>
                                        <small>India</small>
                                        <small><i className="fa fa-calendar-check-o mr-2" aria-hidden="true"></i><small className="badge">You have a preferred skill badge</small></small>
                                        <small className="time">1 hour ago</small>
                                    </div>
                                </div>
                                <button className="btn btn-default saveJob"><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="showAll">Show all <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 rightCard">
                    <div className="card">
                        <div className="card-title">
                            <h6>Job seeker guidance</h6>
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
                        <a href="#" className="text-dark actionButton">
                            Show more <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Jobs;