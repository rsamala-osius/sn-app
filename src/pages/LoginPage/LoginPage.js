import React, { Component } from 'react'
import {userServices} from "../../actions/userServices";
import {history} from '../../_helpers/historyHelper';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    submitted: false
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      userServices.login({username, password})
          .then(res => {
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
            history.push('/home')
          });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  render () {
    let { username, password, submitted} = this.state;

  const center = {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    'msTransform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)',
    border: '2px solid green',
    padding: '20px'
  };
    return (
      <div className="container">
        <div style={center} >
          <form name="login-form" onSubmit={this.onSubmit}>
            <div className={'form-group ' + (submitted && !username ? ' has-error' : '')}>
              <label className={'float-left'} htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}/>
              {submitted && !username &&
              <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group ' + (submitted && !password ? ' has-error' : '')}>
              <label  className={'float-left'} htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password}
                     onChange={this.handleChange}/>
              {submitted && !password &&
              <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginPage
