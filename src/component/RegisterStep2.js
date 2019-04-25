import React from 'react';
import {Link} from 'react-router-dom'
import UploadIDCard from "./UploadIDCard";
import { Steps,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import axios from 'axios';
import '../css/Register.css'
import ProjectFileUpload from "./project/ProjectFileUpload";

const Step = Steps.Step;
const Search = Input.Search;



class RegisterStep extends React.Component{
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
            picf:"",


        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.preStep = this.preStep.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeIDcard = this.handleChangeIDcard.bind(this);
        this.IdCardUpload0ne = this.IdCardUpload0ne.bind(this);
        this.IdCardUploadTwo = this.IdCardUploadTwo.bind(this);
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
        window.location.href="/#/register"
    }
    IdCardUpload0ne = (url) =>{
        this.setState({pic:url.join("")})

    }
    IdCardUploadTwo = (url) =>{
        this.setState({picf:url.join("")})

    }
    handleSubmit=(event)=>{
        const user_id_check = localStorage.getItem("hyquser_id")
        const token_check = localStorage.getItem("hyqutoken")
        const _that = this;
        event.preventDefault();
        const  form = this.props.form;
        form.validateFields((err,values)=>{
            if(err){return}
            console.log("values")
            console.log(values)
            axios.post('/user/info/person', {
                user_id_check: user_id_check,
                token_check:token_check,
                name:values.name,
                code:values.code,
                pic:_that.state.pic,
                picf:_that.state.picf
            })
                .then(function (response) {
                    console.log(response);
                    if(response.data.res == 1){
                        window.location.href="/#/register3"
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })


    }
    render() {
        const {getFieldDecorator} = this.props.form;
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
                                    {getFieldDecorator("name", {
                                        initialValue:this.state.name,
                                        rules: [
                                            {required:true,message:"请填写正确姓名"},
                                            {pattern:/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,message:"请填写正确姓名"}
                                        ]
                                    })(
                                        <Input
                                            size="large"
                                            style={{width:"299px"}}
                                            placeholder="请输入身份证上的姓名" />
                                    )}

                                </Form.Item>
                                <Form.Item
                                    label="身份证号码"
                                    className="d-flex"
                                    style={{justifyContent:"flex-end"}}
                                >
                                    {getFieldDecorator("code", {
                                        initialValue:this.state.name,
                                        rules: [
                                            {required:true,message:"请填写正确身份证号码"},
                                            {pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:"请填写正确身份证号码"}
                                        ]
                                    })(
                                        <Input
                                            size="large"
                                            style={{width:"299px"}}
                                            placeholder="请输入身份证号码" />
                                    )}

                                </Form.Item>
                                <Form.Item
                                    label="上传身份正面照"
                                    className="d-flex "
                                >
                                    {getFieldDecorator("pic",{
                                        rules:[{required:true,message:"请上传一张图片"}]
                                    })(
                                        <ProjectFileUpload
                                            listtyp="picture-card"
                                            filemaxlenght={1}
                                            uploadtitle="添加上传身份证正面照"
                                            onChange={this.IdCardUpload0ne}
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item
                                    label="上传身份反面照 "
                                    className="d-flex "
                                >
                                    {getFieldDecorator("picf",{
                                        rules:[{required:true,message:"请上传一张图片"}]
                                    })(
                                        <ProjectFileUpload
                                            listtyp="picture-card"
                                            filemaxlenght={1}
                                            uploadtitle="添加上传身份证反面照"
                                            onChange={this.IdCardUploadTwo}
                                        />
                                    )}
                                </Form.Item>
                                <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                                    <input  className="btn btn-block bg-warning fontSize16 text-white rounded" onClick={this.preStep} style={{height:"35px",width:"100px"}}
                                        /*disabled={!this.state.smscode | !this.state.phone}*/ value="上一步"/>

                                    <Form.Item style={{marginBottom:"4px"}}>
                                        <Button type="primary" htmlType="submit" className="btn bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px",marginLeft:".5rem"}}>下一步</Button>
                                    </Form.Item>
                                </div>

                            </form>
                </div>

            </div>
        );
    }
}
const RegisterStep2  = Form.create({name:"user_form"})(RegisterStep)
export default RegisterStep2;
