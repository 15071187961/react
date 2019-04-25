import React from 'react';
import '../css/login.css'
import logo from '../logo.svg'

class LoginWrap extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container-fluid d-flex align-items-center" id="loginwrap">
        <div className="container d-flex justify-content-center">
          <div className="row rounded-lg bg-white  shadow no-gutters justify-content-center"  id="login">
            <div className="col-6 h-100  d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <img src={logo} width="72" height="72" alt=""/>
              </div>
              <h4 className="text-center my-2  text-warning">惠企云</h4>
            </div>
            <div className="col-6  h-100 px-5">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginWrap;
