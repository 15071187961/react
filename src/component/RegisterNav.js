import React from 'react'
import {NavLink} from "react-router-dom";
import '../css/loginnav.css'
class  RegisterNav extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex  loginnav" >
        <NavLink to='/register' className='' activeClassName="act">注册</NavLink>
      </div>
    );
  }
}

export default RegisterNav;
