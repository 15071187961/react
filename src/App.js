import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './component/Header';
import Foot from './component/Foot';
import Register from './component/Register'
import RegisterStep2 from './component/RegisterStep2'
import RegisterStep3 from './component/RegisterStep3'
import RegisterStep4 from './component/RegisterStep4'
import FaBuRenWu from './component/userInfo/FaBuRenWu'
import IndexContent from  './component/IndexContent'
import './css/App.css';
import SmsLogin from "./component/SmsLogin";
import RqLogin from "./component/RqLogin";
import PassWorldLogin from "./component/PassWorldLogin";
import Qiye from './page/Qiye'
import Yunduan from './page/Yunduan'
import Yunqi from './page/Yunqi'
import Jiejue from './page/Jiejue'
import Xiaoguo from './page/Xiaoguo'
import Guanyu from './page/Guanyu'
import XuQuFaBu from './component/XuQuFaBu'
import UserInfo from './component/userInfo/UserInfo'
import Demo from './page/Demo'
import Project from './component/project/Project'
import Contract from "./component/contract/Contract";
import UserSelfInfo from './component/userSelfinfo/UserSelfInfo'
import UserOrderInfo from "./component/userSelfinfo/UserOrderInfo";




function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={IndexContent} />
        <Route path="/pwdlogin" component={PassWorldLogin} />
        <Route path="/smslogin" component={SmsLogin} />
        <Route path="/rqlogin" component={RqLogin} />
        <Route path="/register" component={Register} />
        <Route path="/qiye" component={Qiye} />
        <Route path="/yunduan" component={Yunduan} />
        <Route path="/yunqi" component={Yunqi} />
        <Route path="/jiejue" component={Jiejue} />
        <Route path="/xiaoguo" component={Xiaoguo} />
        <Route path="/guanyu" component={Guanyu} />
        <Route path="/xq" component={XuQuFaBu} />
        <Route path="/userinfo" component={UserInfo}/>
        <Route path="/userself" component={UserSelfInfo}/>
        <Route path="/project/:projectid" component={Project}/>
        <Route path="/register2" component={RegisterStep2}/>
        <Route path="/register3" component={RegisterStep3}/>
        <Route path="/register4" component={RegisterStep4}/>
        <Route path="/contract" component={Contract}/>
        <Route path="/faburenwu" component={FaBuRenWu}/>
        <Route path="/order" component={UserOrderInfo}/>
        <Route path="/d" component={Demo}/>
      </div>
      <Foot />
    </Router>
  );
}

export default App;
