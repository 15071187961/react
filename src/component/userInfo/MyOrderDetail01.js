import  React from 'react'
import {Row, Col, Input, Button, InputNumber, Select, Form} from 'antd';
import "../../css/userInfo.css";
import axios from 'axios'
import shenhetongguo from "../../img/shenhetongguo.jpg";
import Modal from "./modal"
import PiPeiRenYuan from "./PiPeiRenYuan";



const Option = Select.Option;
class MyOrderDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:"",
            _flat:false,
            user_id_check:"",
            token_check:"",
            address:this.props._data.address,
            des:this.props._data.des,
            id:this.props._data.id,
            goodsid:this.props._data.goodsid,
            pay:this.props._data.pay,
            price:this.props._data.price,
            pricetype:this.props._data.pricetype,
            show:this.props._data.show,
            suan:this.props._data.suan,
            timeb:this.props._data.timeb,
            timee:this.props._data.timee,
            titletype:this.props._data.titletype,
            title:this.props._data.title,
            selectSuccess:false,
            yanshouSuccess:false,
            typedes:this.props._data.typedes,
            typeArr:["互联网开发","房地产","物流","服务","科技","咨询"],
            piaoArr:["不需要开发票","需要开发票(税率6%)"]
        };
        this.chageFlag = this.chageFlag.bind(this);
       this.titleChange = this.titleChange.bind(this)
       this.priceChange = this.priceChange.bind(this)
       this.piaoChange = this.piaoChange.bind(this)
        this.desChange = this.desChange.bind(this)
       this.typeChange = this.typeChange.bind(this);
        this.addrChange = this.addrChange.bind(this);
        this.submitBtn = this.submitBtn.bind(this);
        this.selectSuccessP = this.selectSuccessP.bind(this)
        this.querenyanshouSuccess = this.querenyanshouSuccess.bind(this)
    }
    submitBtn(){

        var _that=this
       //
        axios.post("/user/goods/add",{
            user_id_check:_that.state.user_id_check,
            token_check :_that.state.token_check ,
            title:_that.state.title,
            type :_that.state.type ,
            price :_that.state.price ,
            piao :_that.state.piao,
            des  :_that.state.des,
            file  :""
        }).then(function (response) {
            console.log(response)
            console.log(response.data.res)
           if(response.data.res==1){
               _that.props.handleCancel()
           }
        }).catch(function (err) {
            alert(err)
        })
    }
    addrChange(e){
        this.setState({addr:e.target.value})
    }

    selectSuccessP(e){
        this.setState({
            selectSuccess:true
        })

    }
    querenyanshouSuccess(e){
        alert("确认验收")
    }
    titleChange(e){
        this.setState({title:e.target.value})
    }
    priceChange(value){
        this.setState({price:value})
    }
    piaoChange(e){
        this.setState({piao:e.target.value})
    }
    desChange(e){
        this.setState({des:e.target.value})
    }
    typeChange(e){


        console.log("select")
        console.log(e)

        this.setState({type:e})
    }
    chageFlag(){
        this.setState({

            _flat:!this.state._flat
        })
    }
    componentWillMount(){
        console.log("wodll")
        console.log(this.props.orderIdOk)
        console.log(this.props._data)
        const user_id_check = localStorage.getItem("hyquser_id")
        const token_check = localStorage.getItem("hyqutoken")
        const show = this.props._data.show=="未审核"?0:1
        const pay =  this.props._data.pay=="未支付"?0:1
        const suan =  this.props._data.suan=="未结算"?0:1
        const _that = this;
        axios.post("/user/goods/index",{
            user_id_check: user_id_check,
            token_check:token_check,
            show:show,
            pay:pay,
            suan:suan,
        }).then(function(response){
            if(response.data.res == 1){
                console.log("大爷成功")
                if(_that.props.orderIdOk){
                    _that.setState({
                        selectSuccess:true
                    })
                }

            }
        }).catch(function(error){console.log(error)})
    }
    componentDidMount(){


    }
    render() {
        const piao = this.state.piao
        const getFieldDecorator = this.props.form;
        const _flag = this.props._data.show!=="未审核"
        return(

            <div className="fontSize16 ">
                <Row gutter={16} className="fontSize14 bg-gray " style={{padding:"15px"}}>
                    <Col span={8} >订单号： {this.props._data.goodsid}</Col>
                    <Col span={8} >订单时间： {this.props._data.timeb}</Col>
                    <Col span={8} className="textRight">订单状态：{this.props._data.show}  </Col>
                </Row>
                <Row gutter={16} className="margin_top10 mt-3">
                    <Col span={4} className="textRight">任务名称：</Col>
                    <Col span={20}>
                        <div >{this.props._data.title}</div>
                    </Col>
                </Row>
                <Row gutter={16} className="margin_top10 mt-3">
                    <Col span={4} className="textRight">项目金额：</Col>
                    <Col span={20}>

                        <div >{this.props._data.price}</div>
                    </Col>
                </Row>
                <Row gutter={16} className="margin_top10 mt-3">
                    <Col span={4} className="textRight">结算方式：</Col>
                    <Col span={20}>
                        <div>{this.props._data.pricetype}</div>
                    </Col>
                </Row>
                <Row gutter={16} className="margin_top10 mt-3">
                    <Col span={4} className="textRight">职位详情：</Col>
                    <Col span={20}>
                        <div >{this.props._data.des}</div>
                    </Col>
                </Row>
                <Row gutter={16} className="margin_top10 mt-3">
                    <Col span={4} className="textRight">工作时间：</Col>
                    <Col span={20}>

                        <div>开始时间：{this.props._data.timeb}<br/>
                            结束时间：{this.props._data.timee}
                            </div>
                    </Col>
                </Row>

                <Row gutter={16} className="margin_top10">
                    <Col span={4} className="textRight">工作地点：</Col>
                    <Col span={20}>

                        <div>{this.props._data.address}</div>
                    </Col>
                </Row>
               <div style={{display:_flag?"none":""}}>
                   <div className="d-flex justify-content-center align-content-center mt-5" >
                       <Modal selectSuccessP = {this.selectSuccessP} orderData = {this.props._data} selectSuccess={this.state.selectSuccess} orderIdOk ={this.props.orderIdOk}/>

                   </div>
               </div>
                <div >
                    {this.state.selectSuccess?<PiPeiRenYuan  querenyanshouSuccess = {this.querenyanshouSuccess} orderData={this.props._data}/>:""}
                </div>

            </div>
        )
    }
}

export default MyOrderDetail;

