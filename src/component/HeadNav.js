import React from 'react'
import logo1 from "../logo.svg";
import {NavLink,Link} from 'react-router-dom'
import '../css/headnav.css'

class HeadNav extends React.Component{
  render() {
    return (
      <div className="container-fluid p-0 bg-white d-flex align-items-center border-bottom" id="nav" >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col d-flex ">
              <Link to="/" className="d-flex align-items-center">
                <img src={logo1} className="mr-3 d-block" width="40" height="40" alt="logo" />
                <h3 className="text-dark" >惠企云</h3>
              </Link>
            </div>
            <div id="navright" className="col-7 line-height90 h-100 fontSize18 d-flex justify-content-between">
              <NavLink to="/" exact className="fontSize16 text-dark" activeClassName='active'>首页</NavLink>
              <NavLink to="/qiye" className="fontSize16 text-dark" activeClassName='active'>企业整包</NavLink>
              <NavLink to="/yunduan" className="fontSize16 text-dark" activeClassName='active'>云端工作</NavLink>
              <NavLink to="/yunqi" className="fontSize16 text-dark" activeClassName='active'>云企工坊</NavLink>
              <NavLink to="/jiejue" className="fontSize16 text-dark" activeClassName='active'>解决方案</NavLink>
              <NavLink to="/xiaoguo" className="fontSize16 text-dark" activeClassName='active'>效果保障</NavLink>
              <NavLink to="/guanyu" className="fontSize16 text-dark" activeClassName='active'>关于我们</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadNav;
