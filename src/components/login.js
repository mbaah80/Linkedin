import React, {useState, useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/actions/userAction";
import {Link, useLocation} from "react-router-dom";
import './login.css'

let Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState('')
    let [loading, setLoading] = useState(false)
    let [success, setSuccess] = useState(false)

    let isLoggedIn = useSelector(state => state.auth)
    let message = useSelector(state => state.message)

    let dispatch = useDispatch();
    let location = useLocation()

    useEffect(()=>{
        if (error){
            const timer = setTimeout(()=>{
                setError("")
            }, 5000)
            return () => clearTimeout(timer)
        }
    },[error])

    const loginHandler = (e) =>{
        e.preventDefault();
        let emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\n';
        if(email !== '' && password !== ''){
            dispatch(login(email, password))
        }else{
            setError('Email or Password field can\'t be empty')
        }
    }


    return (
      <div>
            <div className="row rowBackgroundImg">
                <div className="col-md-6"></div>
                <div className="col-md-6 loginContainer">
                <div class="card">
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />
                    { error && (<div className="alert alert-danger" role="alert">{error}</div>)}
                    { message && (<div className="alert alert-danger" role="alert">{message}</div>)}
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
                        <button type="submit" class="btn btn-primary signBtn" disabled={loading}>
                            {!loading && (<span className="signinLabelHolder">Sign in</span>)}
                            {loading && (<span className="spinner-border text-secondary" role="status"></span>)}

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
