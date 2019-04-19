import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import LoginWrap from "./LoginWrap";
import Header from "./Header";
import LoginNav from "./LoginNav";
import '../css/login.css'

class  SmsLogin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      phone: '',
      smscode:'',
      getsmscode:true,
      tiemout:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.smscodeChange = this.smscodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCode = this.getCode.bind(this)
    this.tick = this.tick.bind(this)
  }
  handleChange(event) {
    this.setState({phone: event.target.value});
    const reg = /^[1][0-9]{10}$/
    if(!reg.test(event.target.value)){
      this.setState({getsmscode:true})
    }else{
      this.setState({getsmscode:false})
    }
    if(this.state.smscode !== "" && this.state.phone !== ""&& reg.test(this.state.phone)){
      this.setState({login:false})
    }else {
      this.setState({login:true})
    }
  }
  smscodeChange(event){
    console.log(this)
    this.setState({smscode:event.target.value})
  }
  tick() {
    if(this.state.tiemout === 0){
      clearInterval(this.interval);
    }else {
      this.setState(prevState =>({
        tiemout:prevState.tiemout-1
      }))
    }
  }
  getCode(event){
    this.setState({tiemout:3})
    this.interval = setInterval(() => this.tick(), 1000);
    axios.post('/index/api/sms', {
      phone: this.state.phone,
      number: 2
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    const _that = this
    axios.post('index/api/loginphone',{
         phone:this.state.phone,
         smscode:this.state.smscode
       }).then(function (response) {
         console.log(response)
         if(response.data.res === 1 ){
           const user_id = response.data.data.user_id
           const usertoken = response.data.data.token
           console.log(user_id)
           console.log(usertoken)
           console.log(_that)
           localStorage.setItem('hyquser_id',user_id)
           localStorage.setItem('hyqutoken',usertoken)
           window.location.href="/"
         }else{
            alert(response.data.err)
         }
       }).catch(function (error) {
         console.log(error);
    });
  }
  render() {
    return (
      <div>
        <LoginWrap>
          <LoginNav />
          <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-around">
            <div className="input-group rounded inputborder mb-5 mt-5">
              <div className="input-group-prepend bg-white d-flex align-items-center">
                <div className="iconfont icon-shouji text-secondary mx-3 fontSize30 "></div>
              </div>
              <input type="text" autoComplete="off" className="form-control border-0 fontSize26"
                     name="phone"  value={this.state.phone} style={{height:"59px"}}
                     onChange={this.handleChange} placeholder="请输入手机号码" />
            </div>
            <div className="input-group inputborder mb-5">
              <div className="input-group-prepend bg-white d-flex align-items-center">
                <div className="iconfont icon-yanzhengma1 text-secondary mx-3 fontSize30 "></div>
              </div>
              <input type="text" className="form-control border-0 fontSize26"
                     name="smscode" value={this.state.smscode} onChange={this.smscodeChange}
                     style={{height:"59px"}}/>
              <div className="input-group-append d-flex align-items-center">
                <span className="iconfont icon-shuxian-copy-copy fontSize26 text-warning fontSize26"></span>
                <input type="button" className="btn text-warning fontSize26" onClick={this.getCode}
                       disabled={this.state.getsmscode | this.state.tiemout}  style={{}}
                       value={this.state.tiemout ? "重新发送" + this.state.tiemout : "获取验证码"}/>
              </div>
            </div>
            <div className="form-group mb-5">
              <input type="submit" className="btn btn-block bg-warning fontSize28 text-white rounded"  style={{height:"59px"}}
                     disabled={!this.state.smscode | !this.state.phone} value="登录"/>
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

export default SmsLogin;
