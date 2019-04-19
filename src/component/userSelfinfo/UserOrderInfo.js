import React from 'react'
import {Row,Col,Button,Icon} from 'antd'
import CollectionsPage from "./CollectionsPage";
class UserOrderInfo extends  React.Component{
  constructor(props) {
    super(props);
    this.state={
      userdata:"",
    }
  }

  render() {
    const orderInfo = this.props.orderinfo
    return (
      <div>
        <span  className="mr-2 d-flex align-items-center cursor-pointer my-2 px-4 fontSize20 text-warning" onClick={this.props.backClick}>
              <Icon type="left" />
              返回列表
        </span>
        <Row className="px-4 py-3 bg-secondary ">
          <Col span={6} className="fontSize14">
            订单号:{orderInfo.goodsid}
          </Col>
          <Col span={6}/>
          <Col span={6} className="fontSize14">订单时间:{orderInfo.timeb} </Col>
          <Col span={6} className="text-right fontSize14">订单状态：{orderInfo.show} </Col>
        </Row>
        <div className="px-4">
          <Row>

            <Col span={24} className="my-3">标题：{orderInfo.title}
            </Col>
            <Col span={24} className="my-3">任务类型：{orderInfo.titletype} </Col>
            <Col span={24} className="my-3">价格：{orderInfo.price}</Col>
            <Col span={24} className="my-3">支付状态:{orderInfo.pay}</Col>
            <Col span={24} className="my-3">结算状态：{orderInfo.pricetype}</Col>
            <Col span={24} className="my-3">截至时间：{orderInfo.timee}</Col>
            <Col span={24} className="my-3">地址：{orderInfo.address}</Col>
            <Col span={24} className="my-3">详细信息：{orderInfo.des}</Col>
            <Col span={24} className="my-3">订单ID：{orderInfo.order_id}</Col>
            {orderInfo.order_id
              ?<span style={{backgroundColor:"#eeeeee",color:"#a9a9a9"}} className="d-inline-block px-4 mt-4 mb-1 py-2 rounded">您已被选中</span>:null
             }

          </Row>
          <hr/>
          <div span={24}>上传信息</div>
          <Row  className="bg-secondary py-2 rounded px-3 mt-2">
            <Col span={5}>公司名称</Col>
            <Col span={5}>联系方式</Col>
            <Col span={7}>上传作品</Col>
            <Col span={7}>选中作品</Col>
          </Row>
          <Row className="py-2 px-3">
            <Col span={5}>武汉某某设计公司</Col>
            <Col span={5}>13999991234</Col>
            <Col span={7}>暂无</Col>
            <Col span={7}>选中作品</Col>
          </Row>
          <hr/>
          {orderInfo.order_id
            ? <CollectionsPage  orderid={this.props.orderid}/>:null
          }

        </div>


      </div>


    );
  }
}

export  default  UserOrderInfo;
