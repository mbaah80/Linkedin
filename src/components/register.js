import React  from "react";
import './login.css'


let Register = () => {
    return (
      <div>
            <div className="row rowBackgroundImg">
                <div className="col-md-6"></div>
                <div className="col-md-6 loginContainer">
                <div class="card">
                    <div class="card-body">
                    <form>
                    <img src="/images/Linkedin-Logo-2048x1280.png" alt="Linkedin-Logo-2048x1280.webp" width="130" height="70" className="d-flex" />
                    <div class="form-group">
                            <label for="name">Full name</label>
                            <input type="text" class="form-control" id="name"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password"/>
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
