import React from 'react'
import {Form,Row,Col,Button,Input,message} from 'antd'
import axios from 'axios'
import {user_id_check ,token_check } from '../userInfo/LocalStorage'
class UserSetPwd extends React.Component {
  constructor(props) {
    super(props)
    this.checkPassword = this.checkPassword.bind(this)
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const  form = this.props.form;
    form.validateFields((err,values)=>{
      if(err){return}
      console.log(values)
      axios.post("/user/info/editpassword",{
        user_id_check:user_id_check,
        token_check:token_check,
        password:values.pwd
      }).then(function (response) {
        if(response.data.res == "1"){
          message.success("修改成功")
          form.resetFields();
        }else {
          message.error(response.data.err)
        }
      }).catch(function (err) {
        alert(err)
      })
    })
  }
  /**
   *  验证两次输入的密码
   * @param rule
   * @param value
   * @param callback
   */
  checkPassword(rule,value,callback){
    const {form} =this.props
    if(value && value !== form.getFieldValue('pwd')){
      callback('两次密码不一致');
    }else{
      callback()
    }
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const inputwidth={width:"100%"}
    return (
      <Form className="p-5" onSubmit={this.handleSubmit}>
        <Row>
          <Col span={4} className="fontSize18">新的密码
          </Col>
          <Col span={12}>
            <Form.Item >
              {getFieldDecorator("pwd",{
                rules:[
                  {required:true,message:"请输入密码"},
                  {pattern:/^[a-z0-9_-]{6,18}$/,message:'密码为6-16位的数组和字母组成'}
                  ]
              })(
                <Input.Password type="password" style={inputwidth}/>
              )}
            </Form.Item>
          </Col>
          <Col span={8} className="mt-2 text-right" >密码为6-16位的数组和字母组成</Col>
        </Row>
        <hr/>
        <Row className="mt-5">
          <Col span={4} className="fontSize18">确认密码
          </Col>
          <Col span={12}>
            <Form.Item >
              {getFieldDecorator("repwd",{
                rules:[
                  {required:true,message:"请输入密码"},
                  {pattern:/^[a-z0-9_-]{6,18}$/,message:'密码为6-16位的数组和字母组成'},
                  {validator: this.checkPassword}
                ]
              })(
                <Input.Password type="password" style={inputwidth}/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}></Col>
        </Row>
        <hr/>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center my-5">
            <Form.Item>
              <Button type="primary" htmlType="submit" >确认修改</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    );
  }
}
const UserSetingPwd = Form.create({name:"set_password"})(UserSetPwd)
export default UserSetingPwd;
