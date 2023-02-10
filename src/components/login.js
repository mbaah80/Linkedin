import React, {useState, useEffect}  from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login, reset} from "../features/auth/authSlice";
import Spinner from './spinner'
import './login.css'

let Login = () => {

    const toastHand = () => {

    }

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState('')
    let location = useNavigate();
    let dispatch = useDispatch();

    const {user, isError, isSuccess, isLoading, message} = useSelector(state => state.auth)

    useEffect(()=>{
        if(isError){
            setError(message)
        }
        if(isSuccess || user){
           location('/home')
        }
        dispatch(reset())

    },[user, isError, isSuccess, isLoading, message, location, dispatch])


    const loginHandler = (e) =>{
        e.preventDefault();
        let userData = {
            email,
            password
        }
        if(userData.email !== '' && userData.password !== ''){
            dispatch(login(userData))
        }else{
            setError('Email or Password field can\'t be empty')
        }
    }

    if(isLoading){
        return <Spinner/>
    }


    return (
      <div>
            <div className="row rowBackgroundImg">
                <div className="col-md-6"></div>
                <div className="col-md-6 loginContainer">
                <div class="card">
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />
                    { error && (<div className="alert alert-danger" role="alert">{error}</div>)}
                    <div class="card-body">
                    <form onSubmit={loginHandler}>
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
                        <button type="submit" class="btn btn-primary signBtn" disabled={isLoading}>
                            {!isLoading && (<span className="signinLabelHolder">Sign in</span>)}
                            {isLoading && (<span className="spinner-border text-secondary" role="status"></span>)}
                        </button>

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
