import React from 'react'
import UserOrderList from "./UserOrderList";
import UserOrderInfo from "./UserOrderInfo";
import axios from 'axios'
const user_id_check = localStorage.getItem("hyquser_id")
const token_check = localStorage.getItem("hyqutoken")
class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state={list:true,orderid:"",orderinfo:""}
  }
  handleClick = (e) =>{
    const dataid = e.target.getAttribute("data-id");
    const orderid=e.target.getAttribute("data-orderid");
    this.setState({orderid:orderid,list:false,dataid:dataid})
    const _that = this;
    axios.post("/index/goods/goodsinfo",{
      id:orderid
    }).then(function (response) {
      console.log(response)
      _that.setState({orderinfo:response.data.data})
    }).catch(function (err) {
      alert(err)
    })
  }
  componentDidMount(){
    this.setState({list:true})
  }
  backClick = () =>{
    this.setState({list:true})
  }
  render() {
    return (
      <div>
        {this.state.list?
          <UserOrderList onClick={this.handleClick}/>
          :<UserOrderInfo  backClick={this.backClick} orderid={this.state.dataid} orderinfo={this.state.orderinfo}/>}
      </div>
    );
  }
}

export default Order;
