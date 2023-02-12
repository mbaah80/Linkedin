import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register, reset} from "../features/auth/authSlice";
import Spinner from './spinner'
import './login.css'

let Register = () => {

    let [name, setName] = useState("");
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

    const registerHandler = (e) =>{
        e.preventDefault();
        let userData = {
            name,
            email,
            password
        }
        if(userData.name !== '' && userData.email !== '' && userData.password !== ''){
            dispatch(register(userData));
        }else{
            setError('All fields are required')
        }
    }


    return (
      <div>
            <div className="row rowBackgroundImg">
                <div className="col-md-6"></div>
                <div className="col-md-6 loginContainer">
                <div class="card">
                    <div class="card-body">
                    <form onSubmit={registerHandler}>
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />
                        {error && (<div className="alert alert-danger" role="alert">{error}</div>)}
                    <div class="form-group">
                            <label for="name">Full name</label>
                            <input type="text" class="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary signBtn">Join now</button>
                        <small >
                          <Link to="/" className="join">
                            Already Have an account ? Sign in
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

export default Register;
