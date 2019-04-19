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
            RePwd:'',
            flagPwd:true,
            flagRePwd:true,
            step:"0"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.preStep = this.preStep.bind(this);
        this.handleChangeRePwd = this.handleChangeRePwd.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
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
        window.location.href="/register2"
    }
    handleSubmit(event) {
        const user_id_check =  localStorage.getItem("hyquser_id")
        const token_check =  localStorage.getItem("hyqutoken")
        console.log(user_id_check)
        event.preventDefault();
        axios.post('user/info/editpassword',{
            user_id_check:user_id_check,
            token_check:token_check,
            password:this.state.pwd
        }).then(function (response) {
            console.log(response)
            if(response.data.res === 1 ){
                window.location.href="/register4"
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

                            <input type="text"  autoComplete="off" className="form-control "
                                   name="pwd"
                                   size="large"
                                   style={{width:"299px"}}
                                   onChange={this.handleChangePwd} placeholder="请输入字母+数字组合密码" />

                        </Form.Item>
                        <Form.Item
                            label="请确认您的密码："
                            className="d-flex"
                            style={{justifyContent:"flex-end"}}
                        >

                            <input type="text"  autoComplete="off" className="form-control "
                                   name="RePwd"
                                   size="large"
                                   style={{width:"299px"}}
                                   onChange={this.handleChangeRePwd} placeholder="请再次输入您的密码" />

                        </Form.Item>


                        <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                            <input  className="btn btn-block bg-warning fontSize16 text-white rounded"   onClick={this.preStep}  style={{height:"35px",width:"100px"}}
                                /*disabled={!this.state.smscode | !this.state.phone}*/ value="上一步"/>
                            <input type="submit" className="btn bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px",marginLeft:".5rem"}}
                                disabled={this.state.flagPwd || this.state.flagRePwd} value="下一步"/>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}
export default RegisterStep2;
