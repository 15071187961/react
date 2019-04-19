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
            name: '',
            code:'',
            flagName:true,
            flagID:true,
            user_id_check:"",
            token_check:"",
            pic:"",
            picf:""

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.preStep = this.preStep.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeIDcard = this.handleChangeIDcard.bind(this);
        this.IdCardUpload0ne = this.IdCardUpload0ne.bind(this);
        this.IdCardUploadTwo = this.IdCardUploadTwo.bind(this);
    }
    IdCardUpload0ne(e){
        this.setState({
            pic:e.url
        })
    }
    IdCardUploadTwo(e){
        this.setState({
            picf:e.url
        })
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
        event.preventDefault();
        const reg = /^[\u4e00-\u9fa5]+$/
        this.setState({flagName:!reg.test(event.target.value)})
    }
    handleChangeIDcard(event) {
        this.setState({code: event.target.value});
        event.preventDefault();
        const reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            this.setState({flagID:!reg1.test(event.target.value)})
    }
    preStep(event) {

        event.preventDefault();
        window.location.href="/register1"
    }
    handleSubmit(event) {
        const user_id_check = localStorage.getItem("hyquser_id")
        const token_check = localStorage.getItem("hyqutoken")
        event.preventDefault();
        axios.post('/user/info/person', {
            user_id_check: user_id_check,
            token_check:token_check,
            name:this.state.name,
            code:this.state.code,
            pic:this.state.pic,
            picf:this.state.picf
        })
            .then(function (response) {
                console.log(response);
                if(response.data.res == 1){
                  window.location.href="/register3"
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
                    <div style={{height:"1000px"}} className="container-fluid d-flex align-items-center">

                        <div className="container shadow d-flex flex-column align-items-center">
                            <Steps current={1} className="mt-5" style={{width:"800px"}}>
                                <Step title="验证手机号" description="请验证您的手机号码" />
                                <Step title="实名认证" description="认证您的身份信息" />
                                <Step title="设置密码" description="请设置您的登录密码" />
                                <Step title="完成操作" description="按提示操作" />
                            </Steps>
                            <form className="mt-5" onSubmit={this.handleSubmit} style={{width:"420px","margin":"0 auto"}}>
                                <Form.Item
                                    label="姓名"
                                    className="d-flex"
                                    style={{justifyContent:"flex-end"}}
                                >

                                    <input type="text"  autoComplete="off" className="form-control "
                                           name="name"
                                           size="large"
                                           style={{width:"299px"}}
                                           onChange={this.handleChangeName} placeholder="请输入身份证上的姓名" />

                                </Form.Item>
                                <Form.Item
                                    label="身份证号码"
                                    className="d-flex"
                                    style={{justifyContent:"flex-end"}}
                                >

                                    <input type="text"  autoComplete="off" className="form-control "
                                           name="code"
                                           size="large"
                                           style={{width:"299px"}}
                                           onChange={this.handleChangeIDcard} placeholder="请输入身份证号码" />

                                </Form.Item>
                                <Form.Item
                                    label="上传身份证照片"
                                    className="d-flex "
                                    style={{justifyContent:"flex-end"}}
                                >
                                    <UploadIDCard IdCardUpload={this.IdCardUpload0ne} titleName="添加上传身份证正面照" name="身份证正面照"/>
                                    <UploadIDCard IdCardUpload={this.IdCardUploadTwo} titleName="添加上传身份证反面照" name="身份证反面照"/>

                                </Form.Item>

                                <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                                    <input  className="btn btn-block bg-warning fontSize16 text-white rounded" onClick={this.preStep} style={{height:"35px",width:"100px"}}
                                        /*disabled={!this.state.smscode | !this.state.phone}*/ value="上一步"/>
                                    <input type="submit" className="btn bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px",marginLeft:".5rem"}}
                                           disabled={this.state.flagID || this.state.flagName} value="下一步"/>
                                </div>

                            </form>
                </div>

            </div>
        );
    }
}
export default RegisterStep2;
