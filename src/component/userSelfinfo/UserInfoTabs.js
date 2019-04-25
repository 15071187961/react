import  React from 'react';
import {Tabs, Radio, Button} from 'antd';
import axios from 'axios'
import UserOrderList from "./UserOrderList";
import Order from "./Order";
import UserSeting from "./UserSeting";
import UserSetingPwd from "./UserSetingPwd";
const TabPane = Tabs.TabPane;
class UserInfoTabs extends React.Component{
  constructor(props) {
    super(props);
    this.state={list:true}
  }
  onTabClick = (e) =>{
    if(e == 1){
      this.setState({list:true})
    }else if(e == 4){
      const userid = localStorage.getItem("hyquser_id")
      const usertoken = localStorage.getItem("hyqutoken")
      const _that= this
      if(userid && usertoken){
        axios.post("/index/api/loginout",{
          id:userid,
          token:usertoken
        }).then(function (response) {
          console.log(response)
          if(response.data.res == 0){
            alert(response.data.err)
          }else {
            console.log("退出登录清除ID和token")
            localStorage.removeItem("hyquser_id")
            localStorage.removeItem("hyqutoken")
            _that.setState({userid:'',usertoken:''})
            window.location.href="/"
          }
        }).catch(function (err) {
          alert(err)
        })
      }
    }

  }
  changeList = () =>{
    this.setState({list:false})
  }
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          style={{ position:"static" }}
          onChange={this.onChange}
          onTabClick={this.onTabClick}
        >
          <TabPane tab="我的订单" key="1"><Order list={this.state.list} onChange={this.changeList}/></TabPane>
          <TabPane tab="个人设置" key="2"><UserSeting userInfor={this.props.userInfor}/></TabPane>
          <TabPane tab="修改密码" key="3"><UserSetingPwd /></TabPane>
          <TabPane tab="退出登录" key="4"></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default UserInfoTabs;
