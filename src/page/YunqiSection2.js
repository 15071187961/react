import React from 'react';
import {Row,Col} from 'antd'
import '../css/Title.css'
import img1 from '../img/u1656_03.jpg'
import img2 from '../img/u1656_05.jpg'
import img3 from '../img/u1656_06.jpg'
import img4 from '../img/u1656_08.jpg'
import img5 from '../img/u1656_14.jpg'
import img6 from '../img/20190409103055.png'
import YunQiProjectLink from "./YunQiProjectLink";
import axios from 'axios'

class YunqiSection2 extends  React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
     const _that = this;
     axios.post("/index/goods/index",{

     }).then(function (response) {
        console.log(response)
       if(response.data.res ===1){
         _that.setState({data:response.data.data.data})
       }
     }).catch(function (err) {

     })
  }
  render() {
    let list;
    if(this.state.data){
      list = this.state.data.splice(0,4).map(value =>
        <YunQiProjectLink value={value} key={value.id}/>
      )
    }
    return (
      <div className="container-fluid bg-secondary">
        <div className="pt-5"></div>
        <div className="container">
          <Row>
            <Col span={24} className="bg-white">
              <h1 className="mt-4 text-dark px-3 font-weight-bold">高薪全职</h1>
            </Col>
          </Row>
          <Row className="pb-2 bg-white border-bottom">
            <Col span={4} className="px-3">
              <span>企业值聘有保障</span>
            </Col>
            <Col span={17} className="d-flex justify-content-end">
              <span className="mx-2">服务员</span>
              <span className="mx-2">餐饮工</span>
              <span className="mx-2">促销导购</span>
              <span className="mx-2">送餐员</span>
              <span className="mx-2">快递配送</span>
              <span className="mx-2">传单派发</span>
              <span className="mx-2">问卷调查</span>
              <span className="mx-2">话务服务</span>
            </Col>
            <Col span={3}>
              <span className="text-dark ml-3 font-weight-bold">查看更多全职&nbsp;></span>
            </Col>
          </Row>
          <Row gutter={2} className="mb-5">
            {list}
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col span={24} className="bg-white">
              <h1 className="mt-4 px-3 text-dark font-weight-bold">靠谱兼职</h1>
            </Col>
          </Row>
          <Row className="bg-white pb-2 border-bottom">
            <Col span={4} className="px-3">
              <span>极速上岗结算快</span>
            </Col>
            <Col span={17} className="d-flex justify-content-end">
              <span className="mx-2">传单派发</span>
              <span className="mx-2">服务员</span>
              <span className="mx-2">问卷调查</span>
              <span className="mx-2">打包分拣</span>
              <span className="mx-2">充场</span>
              <span className="mx-2">场务</span>
              <span className="mx-2">审核录入</span>
              <span className="mx-2">餐饮工</span>
              <span className="mx-2">展会协作</span>
            </Col>
            <Col span={3}>
              <span className="text-dark ml-3 font-weight-bold">查看更多全职&nbsp;></span>
            </Col>
          </Row>
          <Row gutter={2} className="mb-5">
            {list}
          </Row>
        </div>
        <div className="container ">
          <Row>
            <Col span={24} className="bg-white">
              <h1 className="mt-4 px-3 text-dark font-weight-bold">名企云集</h1>
            </Col>
          </Row>
          <Row className="bg-white pb-2 border-bottom">
            <Col span={4} className="px-3">
              <span>极速上岗结算快</span>
            </Col>
            <Col span={17} className="d-flex justify-content-end">

            </Col>
            <Col span={3}>
              <span className="text-dark ml-3 font-weight-bold">查看更多名企业&nbsp;></span>
            </Col>
          </Row>
          <Row gutter={0}  >
            <MinQ img={img1} title="饿了么"/>
            <MinQ img={img2} title="海底捞"/>
            <MinQ img={img3} title="辛巴克"/>
            <MinQ img={img4} title="麦当劳"/>
            <MinQ img={img5} title="肯德基"/>
            <MinQ img={img6} title="必胜客"/>
          </Row>
          <div className="pb-5"></div>
        </div>
      </div>
    );
  }
}
function MinQ(props) {
  return(
    <Col span={4}>
      <div className="bg-white d-flex flex-column align-items-center">
        <img src={props.img} width="160" height="120" alt={props.title}/>
        <p className="text-center pb-3">{props.title}</p>
      </div>
    </Col>
  )
}
export  default YunqiSection2;
