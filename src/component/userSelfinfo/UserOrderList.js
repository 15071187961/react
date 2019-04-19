import React from 'react'
import {Row,Col} from 'antd'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserOrderList extends React.Component{
  constructor(props){
    super(props)
    this.state={data:''}
  }
  componentDidMount(){
    const userid = localStorage.getItem("hyquser_id")
    const usertoken = localStorage.getItem("hyqutoken")
    const _that = this;
    axios.post("/user/goods_order/index",{
      user_id_check:userid,
      token_check:usertoken
    }).then(function (response) {
      console.log(response)
      _that.setState({data:response.data.data})
    }).catch(function (err) {
      alert(err)
    })
  }
  render() {
    let orderlist;
    if(this.state.data){
      orderlist = this.state.data.map(value =>
        <Row className="my-2 border-bottom pb-2" key={value.goods_id}>
          <Col span={4}>{value.id}</Col>
          <Col span={4}>{value.msg}</Col>
          <Col span={4}>{value.time}</Col>
          <Col span={4}>{value.state}</Col>
          <Col span={4}>{parseFloat(value.price).toFixed(2)}元</Col>
          <Col span={4}><span onClick={this.props.onClick}  data-orderid={value.goods_id} data-id={value.id} className="text-warning mr-2">查看</span><span className="text-warning">删除</span></Col>
        </Row>
      )
    }
    return (
      <div className="p-3">
        <Row className="my-3 bg-secondary py-2">
          <Col span={4}>申请ID</Col>
          <Col span={4}>业务类型</Col>
          <Col span={4}>创建时间</Col>
          <Col span={4}>订单状态</Col>
          <Col span={4}>项目金额</Col>
          <Col span={4}>操作</Col>
        </Row>
        {orderlist}
      </div>
    );
  }
}

export default UserOrderList;
