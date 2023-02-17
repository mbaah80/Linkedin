import React, {useEffect} from "react";
import Leftsidebar from "./sidebars/leftsidebar";
import Rightsidebar from "./sidebars/rightsidebar";
import HomeCard from "./homecard";
import Header from './headers/header'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

let Home = () => {

    let location = useNavigate();
    const {user} = useSelector(state => state.auth)

    useEffect(()=>{
        if(!user){
            location('/')
        }
    },[user, location])



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