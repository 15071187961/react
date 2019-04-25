import  React from 'react';
import {Tabs, Radio, Button} from 'antd';
import axios from 'axios'
import UserInfoTabsOrder from "./UserInfoTabs_myOrder";
import MyOrderDetail01 from "./MyOrderDetail01"
import UserSeting from "../userSelfinfo/UserSeting";
import UserSetingPwd from "../userSelfinfo/UserSetingPwd";
const TabPane = Tabs.TabPane;
class UserInfoTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
            current:0,
            tab01Flat:true,
            goodsDetail:{},
            tab01Data:{},
            order_id_ok:false

        };
        Object.assign(this.state,this.props)
        this.tab01Flat = this.tab01Flat.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    TabClick(e){
        this.setState({
            tab01Flat:true,
        })
    }
    loginOut(event){
        event.preventDefault();
        alert("logout")
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
                }
            }).catch(function (err) {
                alert(err)
            })
        }
    }
    tab01Flat (a,b, c){
        if(a.order_id_ok){
            this.setState({
                order_id_ok:true
            })
        }
        const ID = a.id;
        const _that = this;
        axios.post("/index/goods/goodsinfo",{
            id:ID,

        }).then(function (response) {
            if(response.data.res === 1){
                _that.setState({
                    tab01Data: response.data.data,
                    tab01Flat:false
                })
            }else{
                alert(response.data.err)
            }
        }).catch(function (err) {
            alert(err)
        })
    }
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }

    render() {
        const { mode } = this.state;

        return (
            <div>
            <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        tabPosition={mode}
        onTabClick={this.TabClick.bind(this)}
        style={{ position:"static" }}
    >
        <TabPane tab="我的订单" key="1">
            {this.state.tab01Flat?<UserInfoTabsOrder tab01Flat={this.tab01Flat}/>:<MyOrderDetail01  _data={this.state.tab01Data} orderIdOk = {this.state.order_id_ok}/>}



        </TabPane>
        <TabPane tab="个人设置" key="2"><UserSeting userInfor={this.props.userInfor}/></TabPane>
        <TabPane tab="修改密码" key="3"><UserSetingPwd /></TabPane>
        <TabPane tab="退出登陆" key="4" onClick={this.loginOut}>Content of tab 4</TabPane>
        </Tabs>
        </div>
    );
    }
}

export default UserInfoTabs;
