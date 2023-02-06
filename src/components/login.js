import React, {useState}  from "react";
import {useDispatch} from "react-redux";
import {login} from "../store/actions/userAction";
import {Link, useLocation} from "react-router-dom";
import './login.css'


let Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState('')
    let dispatch = useDispatch();
    let location = useLocation()

    const loginHandler = (e) =>{
        e.preventDefault();
        let emailRegex = '';
        if(email !== '' && password !== ''){
            dispatch(login(email, password))
        }else{
            //alert("Email or Password field can't be empty")
            setError('Email or Password field can\'t be empty')
        }
    }


    return (
      <div>
            <div className="row rowBackgroundImg">
                <div className="col-md-6"></div>
                <div className="col-md-6 loginContainer">
                <div class="card">
                    <div class="card-body">
                    <form onSubmit={loginHandler}>
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <small >
                          <a href="#passwordForgot" className="forgotPassword">Forgot Password ?</a>
                        </small>
                        <button type="submit" class="btn btn-primary signBtn">Sign in</button> 
                        <small >
                          <Link to="/register" className="join">
                            Don't Have an account ? Join now
                          </Link>
                        </small>
                    </form>
                    </div>
                </div>
                </div>
            </div>
      </div>
    )
}

export default Login;
