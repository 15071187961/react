import React from 'react';
import {Link} from 'react-router-dom'
import UploadIDCard from "./UploadIDCard";
import { Steps,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import axios from 'axios';
import '../css/Register.css'

const Step = Steps.Step;
const Search = Input.Search;



class RegisterStep2 extends React.Component{
    constructor(){
        super();
        this.state = {
            pwd: '',
            repwd:'',
            flagPwd:true,
            flagRePwd:true,
            step:"0"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.preStep = this.preStep.bind(this);
        this.handleChangeRePwd = this.handleChangeRePwd.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }
    handleChangePwd(event) {
        this.setState({pwd: event.target.value});
        event.preventDefault();
        const reg1 = /^[A-Za-z0-9]+$/
        this.setState({flagPwd:!reg1.test(event.target.value)})
    }
    handleChangeRePwd(event) {
        this.setState({Repwd: event.target.value});
        event.preventDefault();
        this.setState({flagRePwd:!(this.state.pwd==event.target.value)})
    }
    preStep(event) {
        console.log("ni")
        event.preventDefault();
        window.location.href="/#/register2"
    }
    handleSubmit(event) {
        const user_id_check =  localStorage.getItem("hyquser_id")
        const token_check =  localStorage.getItem("hyqutoken")
        console.log(user_id_check)
        event.preventDefault();
        const  form = this.props.form;
        form.validateFields((err,values)=>{
            if(err){return}
            axios.post('user/info/editpassword',{
                user_id_check:user_id_check,
                token_check:token_check,
                password:values.pwd
            }).then(function (response) {
                console.log(response)
                if(response.data.res === 1 ){
                    window.location.href="/#/register4"
                }else{
                    alert(response.data.err)
                }
            }).catch(function (error) {
                console.log(error);
            });
        })


    }
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
        return (
            <div style={{height:"600px"}} className="container-fluid d-flex align-items-center">

                <div className="container shadow d-flex flex-column align-items-center">
                    <Steps current={2} className="mt-5" style={{width:"800px"}}>
                        <Step title="验证手机号" description="请验证您的手机号码" />
                        <Step title="实名认证" description="认证您的身份信息" />
                        <Step title="设置密码" description="请设置您的登录密码" />
                        <Step title="完成操作" description="按提示操作" />
                    </Steps>
                    <form className="mt-5" onSubmit={this.handleSubmit} style={{width:"420px","margin":"0 auto"}}>
                        <Form.Item
                            label="请设置您的密码："
                            className="d-flex"
                            style={{justifyContent:"flex-end"}}
                        >
                            {getFieldDecorator("pwd",{
                                rules:[
                                    {required:true,message:"请输入密码"},
                                    {pattern:/^[a-z0-9_-]{6,18}$/,message:'密码为6-16位的数组和字母组成'}
                                ]
                            })(
                                <Input.Password
                                    size="large"
                                    style={{width:"299px"}}
                                    type="password" />
                            )}


                        </Form.Item>
                        <Form.Item
                            label="请确认您的密码："
                            className="d-flex"
                            style={{justifyContent:"flex-end"}}
                        >
                            {getFieldDecorator("repwd",{
                                rules:[
                                    {required:true,message:"请输入密码"},
                                    {pattern:/^[a-z0-9_-]{6,18}$/,message:'密码为6-16位的数组和字母组成'},
                                    {validator: this.checkPassword}
                                ]
                            })(
                                <Input.Password
                                    type="password"
                                    size="large"
                                    style={{width:"299px"}}
                                />
                            )}
                        </Form.Item>


                        <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                            <input  className="btn btn-block bg-warning fontSize16 text-white rounded"   onClick={this.preStep}  style={{height:"35px",width:"100px"}}
                                /*disabled={!this.state.smscode | !this.state.phone}*/ value="上一步"/>
                            <Form.Item style={{marginBottom:"4px"}}>
                                <Button type="primary" htmlType="submit" className="btn bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px",marginLeft:".5rem"}}>确认修改</Button>
                            </Form.Item>
                                                </div>

                    </form>
                </div>

            </div>
        );
    }
}
const RegisterStep3 = Form.create({name:"set_password"})(RegisterStep2)
export default RegisterStep3;
