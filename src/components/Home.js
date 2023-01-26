import React from "react";
import Leftsidebar from "./sidebars/leftsidebar";
import Rightsidebar from "./sidebars/rightsidebar";
import HomeCard from "./homecard";
import Header from './headers/header'

let Home = () => {
    return(
       <div>
         <div className="header">
            <Header/>
        </div>
         <div className="container">
            <div className="row">
                <Leftsidebar />
                <HomeCard />
                <Rightsidebar/>
            </div>
        </div>
       </div>
    )
}

export default Home;