import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {message} from 'antd'
import axios from 'axios'
import isLogin from './IsLogin'
import '../css/loginnav.css'


class LoginCompoent extends React.Component{
  constructor(props) {
    super(props);
    this.state={userid:'',usertoken:''}
    this.loginOut = this.loginOut.bind(this)
  }
  componentDidMount(){
    const _that=this
    if(isLogin()){
      const userid = localStorage.getItem("hyquser_id")
      const usertoken = localStorage.getItem("hyqutoken")
      if(userid && usertoken){
        axios.post("/user/info/info",{
          user_id_check:userid,
          token_check:usertoken
        }).then(function (response) {
          _that.setState({userInfo:response.data.data})
          localStorage.setItem("USER_INFO_DATA",JSON.stringify(response.data.data))

        }).catch(function (err) {
          alert(err)
        })
      }


      _that.setState({userid: userid,usertoken:usertoken});
    }

  }
  loginOut(){
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
  render(){
      const {userid,userInfo} = this.state

      if(userid && userInfo){
        return(
          <div>
            <span>欢迎</span><span className="px-1">|</span>
            {userInfo.usertype =="个人用户"
              ? <Link to={`/userself/${userid}`} className="text-white ">个人中心</Link>
              :<Link to={`/userinfo/${userid}`} className="text-white ">个人中心</Link>}
             <span className="px-1">|</span>
            <span to="" onClick={this.loginOut} style={{cursor: "pointer"}}>退出登录</span>
          </div>
        )
      }else {
        return (
          <div >
            <NavLink to="/pwdlogin" className="text-white px-4" activeClassName='headtopactive' >登陆</NavLink>
            <NavLink to="/register"  className="text-white"  activeClassName='headtopactive'>注册</NavLink>
          </div>
        )
      }
  }
}
export default LoginCompoent;
