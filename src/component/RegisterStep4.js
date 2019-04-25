import React from 'react';
import {Link} from 'react-router-dom'
import UploadIDCard from "./UploadIDCard";
import { Steps} from 'antd';
import { Icon } from 'antd';
import axios from 'axios';
import '../css/Register.css'

const Step = Steps.Step;



class RegisterStep2 extends React.Component{
    constructor(){
        super();
        this.state = {
            phone: '',
            smscode:'',
            getsmscode:true,
            tiemout:0,
            step:"0"
        };

        this.handleReback = this.handleReback.bind(this);
        this.handleTagUserInfor = this.handleTagUserInfor.bind(this);
    }
    handleReback(event) {
        console.log("ni")

        window.location.href="/#/qiye"
    }
    handleTagUserInfor(event) {
        const userid = localStorage.getItem("hyquser_id")
        const usertoken = localStorage.getItem("hyqutoken")
        const _that = this
        axios.post("/user/info/info",{
            user_id_check:userid,
            token_check:usertoken
        }).then(function (response) {
            console.log(response)
            if(response.data.res === 1){

                if(response.data.data.usertype=="企业用户"){
                    window.location.href="/#/userinfo"

                }else if(response.data.data.usertype=="个人用户"){
                    window.location.href="/#/UserInfo"
                }else{
                    localStorage.removeItem("hyquser_id");
                    localStorage.removeItem("hyqutoken")
                    window.location.href="/#/Register"
                }

            }else{
                alert(response.data.err)
                localStorage.removeItem("hyquser_id");
                localStorage.removeItem("hyqutoken")
                window.location.href="/#/smslogin"
            }
        }).catch(function (err) {
            alert(err)
        })

    }
    render() {
        return (
            <div style={{height:"600px"}} className="container-fluid d-flex align-items-center">

                <div className="container shadow d-flex flex-column align-items-center">
                    <Steps current={3} className="mt-5" style={{width:"800px"}}>
                        <Step title="验证手机号" description="请验证您的手机号码" />
                        <Step title="实名认证" description="认证您的身份信息" />
                        <Step title="设置密码" description="请设置您的登录密码" />
                        <Step title="完成操作" description="按提示操作" />
                    </Steps>
                    <Icon type="check-circle"  theme="filled" className="mt-5 fontSize60 text-warning"/>
                    <p className="fontSize24">恭喜您注册成功</p>
                    <p  className=" fontSize16">赶快去个人中心完善您的资料吧！<span onClick={this.handleTagUserInfor}  className="text-warning cursor-pointer">》》前往</span></p>
                    <div className="form-group mb-5 mt-5 d-flex align-items-center justify-content-center">
                        <input className="btn btn-block bg-warning fontSize16 text-white rounded"  style={{height:"35px",width:"100px"}}
                            /*disabled={!this.state.smscode | !this.state.phone}*/ value="返回首页" onClick={this.handleReback}/>
                    </div>
                </div>

            </div>
        );
    }
}
export default RegisterStep2;
