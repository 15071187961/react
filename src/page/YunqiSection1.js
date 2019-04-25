import React from 'react'
import {Row,Col,Form,Input} from 'antd'
import {Banner, FirstLevelTitle, TowLevelTitle} from "../component/BaseComponents";
import bannerImg from "../img/_501043111_banner.jpg";
import FabuBtn from "./FabuBtn";
const Search= Input.Search;
class YunqiSection1 extends React.Component{
  render() {
    return (
      <Banner bannerImg={bannerImg}>
        <div className="container">
          <Row gutter={0} style={{paddingTop:"35px"}}>
            <Col  style={{fontSize:"100px"}} span={24} className="text-white">
              <div  className="d-flex align-items-center justify-content-between" >
                <span>好工作</span>
                <span style={{fontSize:"65px"}} className="mx-2">●</span>
                <span>选择多</span>
                <span style={{fontSize:"65px"}} className="mx-2">●</span>
                <span>上手快</span>
              </div>
            </Col>
            <Form>
              <Row>
                <Col  span={24}>
                  <div className="d-flex justify-content-center">
                    <Search className="my-3"
                            placeholder="传单派发"
                            enterButton="搜索"
                            size="large"
                            onSearch={value => console.log(value)}
                    />
                  </div>
                </Col>
              </Row>

              <Row gutter={40}>
                <Col span={12}>
                  <h2 className="text-white font-weight-bold" >职位推荐</h2>
                  <section className="text-white d-flex flex-wrap">
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>服务员</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>餐饮工</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>促销导购</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>送餐员</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>快递配送</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>传单派发</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>问卷调查</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>话务服务</span>
                  </section>
                </Col>
                <Col span={12}>
                  <h2 className="text-white font-weight-bold" >名企推荐</h2>
                  <section className="text-white  d-flex flex-wrap">
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>饿了么</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>麦当闹</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>海底捞</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>优衣库</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>必胜客</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>星巴克</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>肯德基</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>麦当闹</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>屈臣氏</span>
                    <span className="mr-4 my-4 fontSize18 text-nowrap" data-value={'服务员'}>新东方</span>
                  </section>
                </Col>
              </Row>
            </Form>
          </Row>
        </div>
      </Banner>
    );
  }
}

export  default YunqiSection1;
