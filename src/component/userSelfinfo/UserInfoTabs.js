import  React from 'react';
import {Tabs, Radio, Button} from 'antd';
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
        {/*  <TabPane tab="我的退款" key="4">Content of tab 4</TabPane>
          <TabPane tab="我的举报" key="5">Content of tab 5</TabPane>
          <TabPane tab="我的维权" key="6">Content of tab 6</TabPane>*/}
        </Tabs>
      </div>
    );
  }
}

export default UserInfoTabs;
