import  React from 'react';
import {Button, Col, Row, Tabs} from 'antd';
import axios from "axios";
import icon1 from "../../img/IconWeChat.png";
import icon2 from "../../img/IconZhiFuBao.png";
import icon3 from "../../img/erweima.png";
import icon4 from "../../img/iconNonghang.png";
import icon5 from "../../img/iconZhonghang.png";
import icon6 from "../../img/iconJianhang.png";
import icon7 from "../../img/iconZhaohang.png";
import icon8 from "../../img/iconXingye.png";
import icon9 from "../../img/iconHankou.png";
import icon10 from "../../img/iconPufapng.png";
import icon11 from "../../img/iconGuangda.png";
import icon12 from "../../img/iconMingsheng.png";
import icon13 from "../../img/iconHuifeng.png";
import "../../css/PayType.css";
const TabPane = Tabs.TabPane;
class PayType extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };

        this.tab01Flat = this.tab01Flat.bind(this)
    }
    tab01Flat (a){

        axios.post("/index/goods/goodsinfo",{


        }).then(function (response) {
            if(response.data.res === 1){

            }else{

            }
        }).catch(function (err) {

        })
    }


    render() {


        return (
            <div>
                <Tabs defaultActiveKey="1" animated="false" tabPosition="top">
                    <TabPane tab={<Button block className="textLeft" style={{width:"150px"}}><img src={icon1} style={{marginRight:"10px"}}/>微信支付</Button>} key="1">
                       <div className="d-flex flex-column justify-content-center align-items-center" >
                           <p>请用微信扫码支付</p>
                           <img src={icon3} alt="" style={{width:"150px"}}/>
                       </div>
                    </TabPane>
                    <TabPane tab={<Button block className="textLeft"  style={{width:"150px"}}><img src={icon2}  style={{marginRight:"10px"}}/>支付宝支付</Button>} key="2">
                        <div className="d-flex flex-column justify-content-center align-items-center" >
                            <p>请用支付宝扫码支付</p>
                            <img src={icon3} alt="" style={{width:"150px"}}/>
                        </div>
                    </TabPane>
                    <TabPane tab={<Button block className="textLeft"  style={{width:"150px"}}>更多支付方式</Button>} key="3">
                        <p className="d-flex align-items-center mt-3 mb-0">
                            <span className="fontSize14">网银支付</span>
                        </p>
                        <Row gutter={16}>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon4} style={{width:"20px"}}/>中国农业银行</Button>

                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon5} style={{width:"20px"}}/>中国银行</Button>

                            </Col>



                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon6} style={{width:"20px"}}/>中国建设银行</Button>

                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon7} style={{width:"20px"}}/>中国招商银行</Button>
                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon8} style={{width:"20px"}}/>兴业银行</Button>

                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon9} style={{width:"20px"}}/>汉口银行</Button>
                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block><img src={icon10} style={{width:"20px"}}/>中国浦发银行</Button>

                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon11} style={{width:"20px"}}/>光大银行</Button>
                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon12} style={{width:"20px"}}/>中国民生银行</Button>

                            </Col>
                            <Col span={6} className="d-flex align-items-center mt-3">
                                <Button block className="textLeft"><img src={icon13} style={{width:"20px"}}/>汇丰银行</Button>

                            </Col>
                    </Row>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default PayType;
