import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form,Input,Button,Icon,Row,Col} from 'antd'
import LoginWrap from "./LoginWrap";
import LoginNav from "./LoginNav";

class  pwdLogin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      smscode:'',
      getsmscode:true,
      tiemout:0,
    };
    this.handleChange = this.handleChange.bind(this)
    this.getCode = this.getCode.bind(this)
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err,vlaues)=>{
      if(err){
        return
      }
      console.log(vlaues)
      axios.post("/index/api/loginphone",{
        phone:vlaues.phone,
        smscode:vlaues.smscode
      }).then(function (resopnse) {
        console.log(resopnse)
        if(resopnse.data.res === 1 ){
          const user_id = resopnse.data.data.user_id
          const usertoken = resopnse.data.data.token
          console.log(user_id)
          console.log(usertoken)
          localStorage.setItem('hyquser_id',user_id)
          localStorage.setItem('hyqutoken',usertoken)
          window.location.href="/"
        }else{
          alert(resopnse.data.err)
        }
      }).catch(function (err) {
        alert(err)
      })
    })
  }
  handleChange(event) {
    this.setState({phone: event.target.value});
    const reg = /^[1][0-9]{10}$/
    if(!reg.test(event.target.value)){
      this.setState({getsmscode:true})
    }else{
      this.setState({getsmscode:false})
    }

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
    })
      .then(function (response) {
        if (response.data.res == 0){
          alert(response.data.err)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const {getFieldDecorator } = this.props.form;
    console.log(new Boolean(this.state.tiemout) )
    const smsBtn = (
      <span type="primary" size="large"  style={{borderRadius:"0 4px 4px 0 "}}
            onClick={this.getCode}
            disabled={this.state.getsmscode || this.state.tiemout}
            block
      >{this.state.tiemout ? "重新发送"+this.state.tiemout :"获取验证码"}</span>
    )
    return (
      <LoginWrap>
        <LoginNav/>
         <Form onSubmit={this.handleSubmit} className="mt-5">
           <Form.Item >
             {getFieldDecorator("phone",{
               rules:[{required:true,message:'请输入手机号码'}]
             })(
               <Input autocomplete="off" size="large" placeholder="请输入手机号码"
                      onChange={this.handleChange}
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
             )}
           </Form.Item>
           <Row>
             <Col span={24}>
               <Form.Item>
                 {getFieldDecorator("smscode",{
                   rules:[{required:true,message:'请输入验证码'}]
                 })(
                   <Input  size="large" placeholder="请输入验证码"
                           addonAfter={<span type="primary" size="large"  style={{borderRadius:"0 4px 4px 0 "}}
                                             onClick={this.getCode}
                                             disabled={this.state.getsmscode || this.state.tiemout}
                                             block
                           >{this.state.tiemout ? "重新发送"+this.state.tiemout :"获取验证码"}</span>}
                           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                   />
                 )}
               </Form.Item>
             </Col>
           {/*  <Col span={6}>
               <Button type="primary" size="large" style={{borderRadius:"0 4px 4px 0 "}}
                       onClick={this.getCode}
                       disabled={this.state.getsmscode || this.state.tiemout}
                       block
               >{this.state.tiemout ? "重新发送"+this.state.tiemout :"获取验证码"}</Button>
             </Col>*/}
           </Row>
           <Form.Item>
           </Form.Item>
           <Form.Item>
             <Button type="primary" size="large" htmlType="submit" block>登录</Button>
           </Form.Item>
         </Form>
         <p className="fontSize18 text-center mt-5">没有账号?<Link to="/register" className="text-warning">立即注册</Link></p>
      </LoginWrap>
    );
  }
}
const  RqLogin = Form.create({name:"pwdlogin"})(pwdLogin)
export default RqLogin;
