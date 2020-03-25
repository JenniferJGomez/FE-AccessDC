import React from 'react'

class LoginPage extends React.Component{
    render(){
        return(
            <div className="login-div">
                <h1>Welcome Back!</h1>
                <form>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage