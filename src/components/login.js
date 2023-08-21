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
    const [loading, setLoading] = useState(false)
    let location = useNavigate();
    let dispatch = useDispatch();

    const {user, isError, isSuccess, isLoading, message} = useSelector(state => state.auth)

    useEffect(()=>{
        if(isError){
            setError(message)
        }
        dispatch(reset())

    },[isError, isSuccess, isLoading, message, location, dispatch])


    const loginHandler = (e) =>{
        e.preventDefault();
        setLoading(true)
        let userData = {
            email,
            password
        }
        if(userData.email !== '' && userData.password !== ''){
            dispatch(login(userData)).then((res)=>{
                setLoading(false)
                if(res.error){
                    setError(res.error.message)
                } else{
                    location('/home')
                }
            })
        }else{
            setError('Email or Password field can\'t be empty')
            setLoading(false)
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
                            <button type="submit"
                                    style={{backgroundColor: `${loading ? '#a6a6a6' : '#000000'}`}}
                                    className="registerBtn" disabled={loading}>
                                {!loading && (<span className="signinLabelHolder">Login in</span>)}
                                {loading && (<span>Signing in... </span>)}
                            </button>
                            <button type="submit" disabled={loading}
                                    style={{
                                        borderRadius: '7px',
                                        backgroundColor: '#eaeaea',
                                        color: '#000',
                                        border: 'none',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        width: '100%',
                                        height: '40px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                <img
                                    src="https://img.icons8.com/color/28/000000/google-logo.png"
                                    alt="google icon"
                                    style={{
                                        marginRight: '10px',
                                        width: '20px',
                                        height: '20px',
                                        objectFit: 'contain'
                                }}
                                />
                                Login in with Google
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
