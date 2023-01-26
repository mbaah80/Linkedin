import React from 'react';
import Header from '../headers/header';

let Jobs = () => {
  return (
    <div>
        <div className="header">
            <Header/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-users mr-2 ml-2" aria-hidden="true"></i> Connections</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-address-book mr-2 ml-2" aria-hidden="true"></i>Contacts</p>
                                <p className="actionNumbers">199</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-user mr-2 ml-2" aria-hidden="true"></i> Following & followers</p>
                                <p className="actionNumbers">9</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-users mr-2 ml-2" aria-hidden="true"></i>Groups</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-calendar-check-o mr-2 ml-2" aria-hidden="true"></i> Events</p>
                                <p className="actionNumbers">9</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-building-o mr-2 ml-2" aria-hidden="true"></i>Pages</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-newspaper-o mr-2 ml-2" aria-hidden="true"></i> Newsletter</p>
                                <p className="actionNumbers">1</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-hashtag mr-2 ml-2" aria-hidden="true"></i>Hashtags</p>
                                <p className="actionNumbers">19</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card connectCard mb-3">
                        <h6 className="card-title">
                            Suggested job searches
                        </h6>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card connectCard mb-4">
                        <h6 className="card-title">
                            Recommended for you
                        </h6>
                        <small>Based on your profile and search history</small>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-users mr-2 ml-2" aria-hidden="true"></i> Connections</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-address-book mr-2 ml-2" aria-hidden="true"></i>Contacts</p>
                                <p className="actionNumbers">199</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-user mr-2 ml-2" aria-hidden="true"></i> Following & followers</p>
                                <p className="actionNumbers">9</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-users mr-2 ml-2" aria-hidden="true"></i>Groups</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-calendar-check-o mr-2 ml-2" aria-hidden="true"></i> Events</p>
                                <p className="actionNumbers">9</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-building-o mr-2 ml-2" aria-hidden="true"></i>Pages</p>
                                <p className="actionNumbers">19</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-newspaper-o mr-2 ml-2" aria-hidden="true"></i> Newsletter</p>
                                <p className="actionNumbers">1</p>
                            </a>
                            <a href="#" className="manageNetworks btn btn-default btn-sm recommedBtn"><p><i
                                className="fa fa-hashtag mr-2 ml-2" aria-hidden="true"></i>Hashtags</p>
                                <p className="actionNumbers">19</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Jobs;