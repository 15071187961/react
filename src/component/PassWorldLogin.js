import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form,Input,Button,Icon} from 'antd'
import LoginWrap from "./LoginWrap";
import LoginNav from "./LoginNav";

class  PwdLogin extends React.Component{
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err,vlaues)=>{
      if(err){
        return
      }
      console.log(vlaues)
      axios.post("/index/api/loginpassword",{
        phone:vlaues.phone,
        password:vlaues.password
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
    })
  }
  render() {
    const {getFieldDecorator } = this.props.form;

    return (
      <LoginWrap>
        <LoginNav/>
        <Form onSubmit={this.handleSubmit} className="mt-5">
          <Form.Item >
            {getFieldDecorator("phone",{
              rules:[{required:true,message:'请输入手机号码'}]
            })(
              <Input size="large" placeholder="请输入手机号码"
                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password",{
              rules:[{required:true,message:'请输入密码'}]
            })(
              <Input type="password" size="large" placeholder="请输入密码"

                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )}
          </Form.Item>
          <Form.Item  >
            <Button  className="mt-3" type="primary" size="large" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
         <p className="fontSize18 text-center mt-5">没有账号?<Link to="/register" className="text-warning">立即注册</Link></p>
      </LoginWrap>
    );
  }
}
const  PassWorldLogin = Form.create({name:"pwdlogin"})(PwdLogin)
export default PassWorldLogin;
