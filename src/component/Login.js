import React from 'react';
import LoginWrap from './LoginWrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PassWorldLogin from "./PassWorldLogin";
import SmsLogin from './SmsLogin'
import RqLogin from './RqLogin'

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <LoginWrap>
        <Router>
          <div>
            <Route exact path="/login" component={PassWorldLogin}/>
            <Route exact path="/smslogin" component={SmsLogin} />
            <Route exact path="/rqlogin" component={RqLogin} />
          </div>
        </Router>
      </LoginWrap>
    );
  }
}
export default Login;
