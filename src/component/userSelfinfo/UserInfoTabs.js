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
  }
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="3"
          tabPosition="left"
          style={{ position:"static" }}
        >
          <TabPane tab="我的订单" key="1"><Order/></TabPane>
          <TabPane tab="个人设置" key="2"><UserSeting/></TabPane>
          <TabPane tab="修改密码" key="3"><UserSetingPwd /></TabPane>
          <TabPane tab="我的退款" key="4">Content of tab 4</TabPane>
          <TabPane tab="我的举报" key="5">Content of tab 5</TabPane>
          <TabPane tab="我的维权" key="6">Content of tab 6</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default UserInfoTabs;
