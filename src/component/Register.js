import React from 'react';
import {Link} from 'react-router-dom'
import LoginWrap from "./LoginWrap";
import RegisterNav from './RegisterNav'
import { Steps,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio } from 'antd';
import axios from 'axios';
import '../css/Register.css'
const Step = Steps.Step;
const Search = Input.Search;
const RadioGroup = Radio.Group;



class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      phone: '',
      smscode:'',
      getsmscode:true,
      tiemout:0,
        step:"0",
        value:1
    };
    this.handleChange = this.handleChange.bind(this);
    this.smscodeChange = this.smscodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCode = this.getCode.bind(this)
    this.tick = this.tick.bind(this)
      this.getsmscode = this.getsmscode.bind(this)
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
    this.setState({smscode:event.target.value})
  }
  componentDidMount() {

  }
    onRadioChange(e){

        this.setState({
            value: e.target.value,
        });
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
    getsmscode(event){
        this.setState({smscode:event.target.value})

    }
  getCode(event){
    this.setState({tiemout:3})
    this.interval = setInterval(() => this.tick(), 1000);
    axios.post('/index/api/sms', {
      phone: this.state.phone
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
   // this.props.history.push('/')
    axios.post('index/api/loginphone',{
      phone:this.state.phone,
      smscode:this.state.smscode,
        usertype:this.state.value
    }).then(function (response) {
      console.log(response)
      if(response.data.res === 1 ){
        const user_id = response.data.data.user_id
        const usertoken = response.data.data.token
        localStorage.setItem('hyquser_id',user_id)
        localStorage.setItem('hyqutoken',usertoken)
        window.location.href="/#/register2"
      }else{
        alert(response.data.err)
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div style={{height:"600px"}} className="container-fluid d-flex align-items-center">

         <div className="container shadow d-flex flex-column align-items-center">
             <Steps current={0} className="mt-5" style={{width:"800px"}}>
                 <Step title="验证手机号" description="请验证您的手机号码" />
                 <Step title="实名认证" description="认证您的身份信息" />
                 <Step title="设置密码" description="请设置您的登录密码" />
                 <Step title="完成操作" description="按提示操作" />
             </Steps>
             <form  className="mt-5" onSubmit={this.handleSubmit} style={{width:"380px","margin":"0 auto",}}>
                 <Form.Item
                     label="手机号码"
                     className="d-flex"
        style={{justifyContent:"flex-end"}}
                 >

                     <input type="text"  autoComplete="off" className="form-control "
                            name="phone"  value={this.state.phone}
                            size="large"
                            style={{width:"299px"}}
                            onChange={this.handleChange} placeholder="请输入手机号码" />

                 </Form.Item>
                 <Form.Item
                     label="手机验证码"
                     className="d-flex "

                 >

                     <Search
                         size="large"
                         style={{width:"299px"}}
                         placeholder="请输入手机验证码"
                         disabled={this.state.getsmscode}
                         enterButton={this.state.tiemout ? "重新发送" + this.state.tiemout : "获取验证码"}
                         className="fontSize12"
                         onSearch={this.getCode}
                         onChange={this.getsmscode}
                     />
                 </Form.Item>
                 <Form.Item
                     label=""
                     className="d-flex align-items-center justify-content-center"
                 >

                     <RadioGroup onChange={this.onRadioChange.bind(this)} value={this.state.value}>
                         <Radio value={1}>个人用户</Radio>
                         <Radio value={2}>企业用户</Radio>

                     </RadioGroup>
                 </Form.Item>
                 <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                     <input type="submit" className="btn btn-block bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px"}}
                            disabled={this.state.getsmscode} value="下一步"/>
                 </div>

             </form>
         </div>

      </div>
    );
  }
}
export default Register;
