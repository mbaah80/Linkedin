import React, {useState}  from "react";
import {useDispatch} from "react-redux";
import {login} from "../store/actions/userAction";
import './login.css'


let Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let dispatch = useDispatch();

    const loginHandler = (e) =>{
        e.preventDefault();
        dispatch(login(email, password));
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
                          <a href="#passwordForgot" className="join">
                            Don't Have an account ? Join now
                          </a>
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
