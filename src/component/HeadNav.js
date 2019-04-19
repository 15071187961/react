import React from 'react'
import logo1 from "../logo.svg";
import {NavLink} from 'react-router-dom'
import '../css/headnav.css'

class HeadNav extends React.Component{
  render() {
    return (
      <div className="container-fluid p-0 bg-white d-flex align-items-center border-bottom" id="nav" >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col d-flex ">
              <a href="/" className="d-flex">
                <img src={logo1} className="mr-2 d-block" width="50" height="50" alt="logo" />
                <h1 className="text-secondary">惠企云</h1>
              </a>
            </div>
            <div id="navright" className="col-7 line-height90 h-100 fontSize18 d-flex justify-content-between">
              <NavLink to="/" exact className="fontSize18" activeClassName='active'>首页</NavLink>
              <NavLink to="/qiye" className="fontSize18" activeClassName='active'>企业整包</NavLink>
              <NavLink to="/yunduan" className="fontSize18" activeClassName='active'>云端工作</NavLink>
              <NavLink to="/yunqi" className="fontSize18" activeClassName='active'>云企工坊</NavLink>
              <NavLink to="/jiejue" className="fontSize18" activeClassName='active'>解决方案</NavLink>
              <NavLink to="/xiaoguo" className="fontSize18" activeClassName='active'>效果保障</NavLink>
              <NavLink to="/guanyu" className="fontSize18" activeClassName='active'>关于我们</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadNav;
