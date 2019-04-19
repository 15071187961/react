import React from 'react'
import {NavLink} from "react-router-dom";
import '../css/loginnav.css'
class  LoginNav extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex justify-content-between loginnav" >
        <NavLink to='/pwdlogin'className='text-dark' activeClassName="act">密码登录</NavLink>
        <NavLink to='/smslogin'className='text-dark' activeClassName="act">手机登录</NavLink>
        <NavLink to='/rqlogin' className='text-dark' activeClassName="act">扫码登录</NavLink>
      </div>
    );
  }
}

export default LoginNav;
