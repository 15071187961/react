import React from 'react'
import {Row,Col,Popconfirm,message} from 'antd'
import {user_id_check,token_check } from '../userInfo/LocalStorage'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserOrderList extends React.Component{
  constructor(props){
    super(props)
    this.state={data:''}
  }
  componentDidMount(){
     this.load()
  }
  load =() =>{
    const userid = localStorage.getItem("hyquser_id")
    const usertoken = localStorage.getItem("hyqutoken")
    const _that = this;
    axios.post("/user/goods_order/index",{
      user_id_check:userid,
      token_check:usertoken,
    }).then(function (response) {
      _that.setState({data:response.data.data})
    }).catch(function (err) {
      alert(err)
    })
  }

  onDelete = (id)=>{
    const _that = this;
    axios.post("/user/goods_order/del",{
      user_id_check:user_id_check,
      token_check:token_check,
      id:id
    }).then(function (response) {
      if(response.data.res === "1"){
        message.success("删除成功")
        _that.load()
      }else{
        message.error(response.data.err)
      }
    }).catch(function (err) {
      alert(err)
    })

  }
  render() {
    let orderlist;
    if(this.state.data){
      orderlist = this.state.data.map((value,index) =>
        <Row className="my-2 border-bottom pb-2" key={index}>
          <Col span={4}>{value.id}</Col>
          <Col span={4}>{value.msg}</Col>
          <Col span={4}>{value.time}</Col>
          <Col span={4}>{value.state}</Col>
          <Col span={4}>{parseFloat(value.price).toFixed(2)}元</Col>
          <Col span={4}>
            <a onClick={this.props.onClick}  data-orderid={value.goods_id} data-id={value.id} className="text-warning mr-2">查看</a>
            <Popconfirm title="确定要删吗？" data-id={value.id} onConfirm={() => this.onDelete(value.id)}   okText="确认" cancelText="取消">
              <a href="#" data-id={value.id} onClick={this.changeOrderId} className="text-warning" >删除</a>
            </Popconfirm>
          </Col>
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
