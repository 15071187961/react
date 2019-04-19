import  React from 'react'
import {Row, Col, Input, Button, InputNumber, Select, Form} from 'antd';
import "../../css/userInfo.css";
import axios from 'axios'
import icon1 from "../../img/userPh.png";
import PayType from "./PayType"


const Option = Select.Option;
class ZhiFuItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        };
this.charge = this.charge.bind(this)
    }

    componentWillMount(){
        console.log("will")
        console.log(this.props.orderData)
        console.log("wobugan")
    }
    charge(){
        const _chargeSuccess = "true"
        this.props.handleCancel(_chargeSuccess)
    }
    componentDidMount(){


    }
    render() {

        return(

            <div className="fontSize16 position-relative">
                <div className="d-flex justify-content-between align-items-center border-bottom " style={{height:"150px",background:"#eee",padding:"0 30px"}}>
                    <div >
                        <p className="mb-2">商&nbsp;&nbsp;品：{this.props.orderData.title}</p>
                        <p className="mb-2">订单号：{this.props.orderData.goodsid}</p>
                        <p className="mb-2">收款方：慧企云服务平台</p>
                    </div>
                    <div className="textRight">
                        <p className="mb-0">支付 <span className="fontSize24 text-warning ">{this.props.orderData.price.toFixed(2)}</span> 元</p>
                        <p className="fontSize14 mb-0">含平台手续费</p>
                    </div>
                </div>
                <div style={{padding:"0 30px"}}>
                    <p className="d-flex align-items-center mt-3 mb-0">
                        <span className="fontSize14">第三方平台支付</span>
                    </p>
                    <PayType />

                </div>
                 <div  className="mt-5 mb-3 text-center" >
                     <Button className="mb-3" type="primary" onClick={this.charge}>
                         立即支付
                     </Button>
                 </div>



            </div>
        )
    }
}

export default ZhiFuItem;

