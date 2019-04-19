import React from 'react'
import axios from 'axios'
import LoginWrap from "./LoginWrap";
import LoginNav from "./LoginNav";
import '../css/login.css'
import {Link} from 'react-router-dom'
import Header from "./Header";

class  PassWorldLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        user:{
          phone:'',
          password:''
        },
        submitted:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
    const {user} = this.state;
    const _that = this;
    if(user.phone && user.password){
       axios.post("/index/api/loginpassword",{
         phone:user.phone,
         password:user.password
       }).then(function (resopnse) {
         console.log(resopnse)
         if(resopnse.data.res == 1){
           const user_id = resopnse.data.data.user_id
           const usertoken = resopnse.data.data.token
           localStorage.setItem('hyquser_id',user_id)
           localStorage.setItem('hyqutoken',usertoken)
           window.location.href="/"
         }else {
           alert(resopnse.data.err)
         }


       }).catch(function (err) {
         alert(err)
       })
    }
  }
  handleChange(event){
    const user = Object.assign({},this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({user})
  }
  render() {
    const { user, submitted } = this.state;
    return (
      <div>
        <LoginWrap>
          <LoginNav />
          <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-around">
            <div className="input-group rounded inputborder mb-5 mt-5">
              <div className="input-group-prepend bg-white d-flex align-items-center">
                <div className="iconfont icon-shouji text-secondary mx-3 fontSize30"></div>
              </div>
              <input type="text" autoComplete="off" className="form-control border-0 fontSize26"
                     name="phone"  value={this.state.phone} style={{height:"59px"}}
                     onChange={this.handleChange} placeholder="请输入手机号码" />
            </div>
            <div className="input-group inputborder mb-5">
              <div className="input-group-prepend bg-white d-flex align-items-center">
                <div className="iconfont icon-yanzhengma1 text-secondary mx-3 fontSize30 "></div>
              </div>
              <input type="password" className="form-control border-0 fontSize26"
                     name="password" value={this.state.password}   onChange={this.handleChange}
                     style={{height:"59px"}}/>
            </div>
            <div className="form-group mb-5">
              <input type="submit" className="btn btn-block bg-warning fontSize28 text-white rounded"
                     style={{height:"59px"}} disabled={!this.state.user.phone | !this.state.user.password} value="登录"/>

            </div>
            <div className="form-group fontSize24 text-center">
              <p>没有账号？<Link to="/register" className="text-warning">立即注册</Link></p>
            </div>
          </form>
        </LoginWrap>
      </div>

    );
  }
}

export default PassWorldLogin;
