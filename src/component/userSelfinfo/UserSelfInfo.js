import  React from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button } from 'antd';
import UserPhoto from "./UserPhoto";
import UserInfoTool from "./UserInfoTool";
import UserInfoTabs from "./UserInfoTabs";
import "../../css/userInfo.css";
import isLogin from "../IsLogin";
class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      userdata:"",
    }
  }
  componentWillMount(){
    console.log(localStorage.getItem("hyquser_id"))
   /* const userid = localStorage.getItem("hyquser_id")
    const usertoken = localStorage.getItem("hyqutoken")
    const _that = this
    axios.post("/user/info/info",{
      user_id_check:userid,
      token_check:usertoken
    }).then(function (response) {
      debugger;
      console.log(response)
      if(response.data.res === 1){
        console.log("用户认证成功")
        _that.setState({userdata: response.data.data})
      }else{
        alert(response.data.err)
        localStorage.removeItem("hyquser_id");
        localStorage.removeItem("hyqutoken")
        window.location.href="/smslogin"
      }
    }).catch(function (err) {
      alert(err)
    })*/
    const _that=this
    if(isLogin()){
      const userid = localStorage.getItem("hyquser_id")
      const usertoken = localStorage.getItem("hyqutoken")
      if(userid && usertoken){
        axios.post("/user/info/info",{
          user_id_check:userid,
          token_check:usertoken
        }).then(function (response) {
          _that.setState({userdata:response.data.data})
        }).catch(function (err) {
          alert(err)
        })
      }
      _that.setState({userid: userid,usertoken:usertoken});
    }
  }
  render() {
    return (
      <div className="container-fluid position-relative" style={{paddingBottom:"60px",paddingTop:"30px"}}>
        <div className="container d-flex align-items-center justify-content-between" style={{marginBottom:"15px"}}>
          <div></div>
          <div>
          </div>
        </div>
        <div className="container d-flex position-relative">
          <div style={{width:"300px"}}>
            <UserPhoto userInfor={this.state.userdata}/>
            <UserInfoTool />
          </div>
          <div className="margin_left10 shadow borderGray" style={{flex:1}}>
            <UserInfoTabs userInfor={this.state.userdata}/>
          </div>
        </div>
      </div>
    );
  }
}

export  default UserInfo;
