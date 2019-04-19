import React from 'react'
import LoginWrap from "./LoginWrap";
import LoginNav from "./LoginNav";

class  RqLogin extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoginWrap>
        <LoginNav/>
        二维码登录
      </LoginWrap>
    );
  }
}

export default RqLogin;
