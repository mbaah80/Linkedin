import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register, reset} from "../features/auth/authSlice";
import {useDropzone} from 'react-dropzone';
import Spinner from './spinner'
import './login.css'

let Register = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [userlocation, setUserLocation] = useState("");
    let [occupation, setOccupation] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState('')
    let location = useNavigate();
    let dispatch = useDispatch();

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept: 'image/*'});
    const files = acceptedFiles.map(file => (
        <img className="profileImage" key={file.path} src={URL.createObjectURL(file)} alt={file.name} />
    ));

    const {user, isError, isSuccess, isLoading, message} = useSelector(state => state.auth)

    useEffect(()=>{
        if(isError){
            setError(message)
        }
        if(isSuccess || user){
            location('/home')
        }
        fetchUserLocation()
        dispatch(reset())

    },[user, isError, isSuccess, isLoading, message, location, dispatch])

    let fetchUserLocation = () =>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let {latitude, longitude} = position.coords;
            fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=12089947731624610099x54883`)
            .then(response => response.json())
            .then(data => {setUserLocation(data.city + ', ' + data.state)})
        })
    }

    const registerHandler = (e) =>{
        e.preventDefault();

        let userData =  new FormData();
        userData.append('name', name)
        userData.append('email', email)
        userData.append('location', userlocation)
        userData.append('occupation', occupation)
        acceptedFiles.forEach(file => {userData.append('profileImage', file)})
        userData.append('password', password)
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
                    {/*<img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />*/}
                <div class="card">
                    <div class="card-body">
                    <form onSubmit={registerHandler}>
                        {error && (<div className="alert alert-danger" role="alert">{error}</div>)}
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                           <div className="profileImageContainer">
                               <button type="button" className="btn btn-default">
                                   {files.length > 0 ? files : <i className="fa fa-user-circle-o profileIcon" aria-hidden="true"></i>}
                               </button>
                           </div>
                        </div>



                    <div class="form-group">
                            <label for="name">Full name</label>
                            <input type="text" class="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Location</label>
                            <input type="text" className="form-control" id="userlocation" value={userlocation}
                                   onChange={(e) => setUserLocation(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Occupation</label>
                            <input type="text" className="form-control" id="occupatoin" value={occupation}
                                   onChange={(e) => setOccupation(e.target.value)}/>
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
