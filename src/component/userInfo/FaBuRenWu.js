import React from 'react'
import { message } from 'antd'
import { InputNumber,Input,Form, DatePicker } from 'antd';
import axios from 'axios'

import '../../css/xuqiu.css'
import BorderShadowWrap from "../BorderShadowWrap";
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;
const { TextArea } = Input;

class FaBuRenWu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_id_check:"",
            token_check:"",
            title:"",
            titletype:"",
            price:"",
            pricetype:"",
            address:"",
            timeb:"",
            timee:"",
            des:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.companyNameChange = this.companyNameChange.bind(this)

        this.titleChange = this.titleChange.bind(this)
        this.priceChange = this.priceChange.bind(this)
        this.pricetypeChange = this.pricetypeChange.bind(this)
        this.titletypeChange = this.titletypeChange.bind(this)
        this.desChange = this.desChange.bind(this)
        this.typeChange = this.typeChange.bind(this);
        this.addressChange = this.addressChange.bind(this)
        this.onStartTimeChange = this.onStartTimeChange.bind(this)
        this.onEndTimeChange = this.onEndTimeChange.bind(this)
    }
    onStartTimeChange(dates, dateStrings) {
        const timebNum = new Date(dateStrings).getTime()
        this.setState({
            timeb:dateStrings
        })

    }
    onEndTimeChange(dates, dateStrings) {
        const timeeNum = new Date(dateStrings).getTime()
        this.setState({
            timee:dateStrings
        })

    }
    onOk(value) {
        console.log('onOk: ', value);
    }
    componentWillMount(){
        const userid = localStorage.getItem("hyquser_id")
        const usertoken = localStorage.getItem("hyqutoken")
        this.setState({user_id_check:userid})
        this.setState({token_check:usertoken})
    }
    priceChange(value){
        this.setState({price:value})
    }
    titleChange(e){
        this.setState({title:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        var _that=this
        axios.post("/user/goods/add",{
            user_id_check:_that.state.user_id_check,
            token_check:_that.state.token_check ,
            title:_that.state.title,
            titletype:_that.state.titletype,
            price:_that.state.price,
            pricetype:_that.state.pricetype,
            address:_that.state.address,
            timeb:_that.state.timeb,
            timee:_that.state.timee,
            des:_that.state.des,
        }).then(function (response) {
            if(response.data.res === 1){
                message.success("提交成功")
                window.location.href=`/userinfo`
            }else{
                message.error(response.data.err)
            }
        }).catch(function (err) {
            message.error(err)
        })
    }
    titletypeChange(e){
        this.setState({titletype:e.target.value})
    }
    pricetypeChange(e){

        this.setState({pricetype:e.target.value})
    }
    companyNameChange(e){
        this.setState({companyName:e.target.value})
    }
    addressChange(e){
        this.setState({address:e.target.value})
    }
    desChange(e){
        this.setState({des:e.target.value})
    }
    typeChange(e){
        const flang = e.target.checked;
        const value = e.target.value
        this.setState({type:value})
    }
    fileOnChange(file){
        console.log(file)
        this.setState({file:file})
    }
    render() {
        const titletype = this.state.titletype
        const pricetype = this.state.pricetype
        const fileList = this.state.fileList;
        const type = this.state.type
        return (
            <BorderShadowWrap title={'任务发布'}>
                <form onSubmit={this.handleSubmit}>

                    <p className="d-flex align-items-center my-3 pl-4">
                        <span className="fontSize18">任务名称</span>
                    </p>
                    <div className="input-group d-flex align-items-center pl-4 mb-5">

                        <Input placeholder="请填写您的任务名称" className="form-control"  size="large"
                               name="title"  onChange={this.titleChange} value={this.state.title}/>
                        <div className="input-group-append">
                            <div className="custom-radio custom-control mx-3">

                                请选择您的任务类型
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="titletypeRadio1"  name="titletype" checked={titletype == 1} value={1} onChange={this.titletypeChange} className="custom-control-input" />
                                <label className="custom-control-label 3"   htmlFor="titletypeRadio1">兼职</label>
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="titletypeRadio2" name="titletype" checked={titletype == 2} value={2} onChange={this.titletypeChange} className="custom-control-input" />
                                <label className="custom-control-label "   htmlFor="titletypeRadio2">全职</label>
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="titletypeRadio3" name="titletype" checked={titletype == 3} value={3} onChange={this.titletypeChange} className="custom-control-input" />
                                <label className="custom-control-label "   htmlFor="titletypeRadio3">其他</label>
                            </div>
                        </div>
                    </div>


                    <p className="d-flex align-items-center my-3 pl-4">
                        <span className="fontSize18">项目金额</span>
                    </p>
                    <div className="input-group d-flex align-items-center pl-4 mb-5">
                        <InputNumber min={1}  className="form-control" size="large" placeholder="请输入您的项目金额" onChange={this.priceChange}/>
                        <div className="input-group-append">
                            <div className="custom-radio custom-control mx-3">

                                请选择您的结算方式
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="pricetypeRadio1"  name="pricetype" checked={pricetype == 1} value={1} onChange={this.pricetypeChange} className="custom-control-input" />
                                <label className="custom-control-label 3"   htmlFor="pricetypeRadio1">月结</label>
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="pricetypeRadio2" name="pricetype" checked={pricetype == 2} value={2} onChange={this.pricetypeChange} className="custom-control-input" />
                                <label className="custom-control-label "   htmlFor="pricetypeRadio2">日结</label>
                            </div>
                            <div className="custom-radio custom-control mx-3">
                                <input type="radio" id="pricetypeRadio3" name="pricetype" checked={pricetype == 3} value={3} onChange={this.pricetypeChange} className="custom-control-input" />
                                <label className="custom-control-label "   htmlFor="pricetypeRadio3">其他</label>
                            </div>
                        </div>
                    </div>

                    <p className="d-flex align-items-center my-3 pl-4">
                        <span className="fontSize18">职位详情</span>
                    </p>
                    <Form.Item className="form-group ml-3">
            <TextArea name="des"  onChange={this.desChange} value={this.state.des}
                      placeholder="请描述职位所需信息" autosize={{ minRows: 5, maxRows: 10 }} />
                    </Form.Item>

                    <p className="d-flex align-items-center my-3 pl-4">
                        <span className="fontSize18">工作时间</span>
                    </p>
                    <div className="input-group pl-4 d-flex justify-content-between align-content-center">

                        <DatePicker
                            showTime
                            size="large"
                            placeholder="选择开始时间"
                            onChange={this.onStartTimeChange}
                            onOk={this.onOk}
                            style={{width:"46%"}}
                        />
                        ~
                        <DatePicker
                            showTime
                            size="large"
                            placeholder="选择结束时间"
                            onChange={this.onEndTimeChange}
                            onOk={this.onOk}
                            style={{width:"46%"}}
                        />
                    </div>

                    <p className="d-flex align-items-center my-3 pl-4">
                        <span className="fontSize18">工作地点</span>
                    </p>
                    <div className="input-group pl-4">
                        <Input placeholder="请填写办公地点 如：网络、驻场"    className="form-control rounded-0 mb-5"  size="large"
                               name="address"  onChange={this.addressChange} value={this.state.address}/>
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <input type="submit" value="发布任务" className="btn btn-warning px-4 text-white" />
                    </div>
                </form>
            </BorderShadowWrap>
        );
    }
}

export  default  FaBuRenWu;
