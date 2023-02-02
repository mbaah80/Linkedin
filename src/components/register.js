import React, {useState}  from "react";
import {useDispatch} from "react-redux";
import {register} from "../store/actions/userAction";
import './login.css'

let Register = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let dispatch = useDispatch();

    const registerHandler = (e) =>{
        e.preventDefault();
        dispatch(register(name, email, password));
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
                          <a href="#passwordForgot" className="join">
                            Already Have an account ? Sign in
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

export default Register;
