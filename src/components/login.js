import React, {useState, useEffect}  from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login, reset} from "../features/auth/authSlice";
import Spinner from './spinner'
import './login.css'

let Login = () => {

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
        <div className="row registerContainer">
            <div className="col-md-6 loginLeftContainer">
                <img src="/images/login.jpg" alt="" className="loginImage"/>
            </div>
            <div className="loginContainer ">
                <div className="card">
                    <h3 className="text-center welcomeLoginMessage">
                        Hello, 👋🏽 welcome back
                    </h3>
                    {error && (<div className="alert alert-danger" role="alert">{error}</div>)}
                    <div className="card-body">
                        <form onSubmit={loginHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input placeholder="Enter your email" type="email" className="form-control" id="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input placeholder="Enter your password" type="password" className="form-control" id="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <small>
                                <a href="#passwordForgot" className="forgotPassword">Forgot Password ?</a>
                            </small>
                            <button type="submit" className="registerBtn" disabled={isLoading}>
                                {!isLoading && (<span className="signinLabelHolder">Sign in</span>)}
                                {isLoading && (<span className="spinner-border text-secondary" role="status"></span>)}
                            </button>

                            <small>
                                <Link to="/register" className="join">
                                    Don't Have an account ? Join now
                                </Link>
                            </small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
