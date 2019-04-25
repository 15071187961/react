import  React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import UserPhoto from "./UserPhoto";
import UserInfoTool from "./UserInfoTool";
import UserInfoTabs from "./UserInfoTabs";
import _modal from "./modal";
import UserInfoTabsOrder from "./UserInfoTabs_myOrder";
import "../../css/userInfo.css";
import SearchComponent from "./Search";
import SelectComponent from "./SelectComponent";
class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      userdata:"",
        myTask:[
            "我发布的任务",
            "我承接的任务"
        ],
        taskType:[
            "全职任务",
            "兼职任务",
            "企业任务"
        ],
        orderStatus:[
            "审核中",
            "等待发布",
            "已发布",
            "进行中",
            "等待配置",
            "已验收"
        ]
    }
  }

  componentDidMount(){
    const userid = localStorage.getItem("hyquser_id")
    const usertoken = localStorage.getItem("hyqutoken")
    const _that = this
    axios.post("/user/info/info",{
      user_id_check:userid,
      token_check:usertoken
    }).then(function (response) {
      console.log(response)
      if(response.data.res === 1){
        console.log("用户认证成功")
          console.log(response.data.data)
          if(response.data.data.usertype=="未知"){
              localStorage.removeItem("hyquser_id");
              localStorage.removeItem("hyqutoken")
              window.location.href="/#/Register"
          }
        _that.setState({userdata: response.data.data})
      }else{
        alert(response.data.err)
        localStorage.removeItem("hyquser_id");
        localStorage.removeItem("hyqutoken")
        window.location.href="/#/smslogin"
      }
    }).catch(function (err) {
      alert(err)
    })
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
