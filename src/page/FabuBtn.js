import  React from 'react'
import {Link} from 'react-router-dom'
import isLogin from "../component/IsLogin";
import axios from 'axios'
class FabuBtn extends  React.Component{
  constructor(){
    super()
  }
  componentWillMount(){
    const _that=this
    if(isLogin()){
      const userid = localStorage.getItem("hyquser_id")
      const usertoken = localStorage.getItem("hyqutoken")
      if(userid && usertoken){
        axios.post("/user/info/info",{
          user_id_check:userid,
          token_check:usertoken
        }).then(function (response) {
          _that.setState({userInfo:response.data.data})
        }).catch(function (err) {
          alert(err)
        })
      }
      _that.setState({userid: userid,usertoken:usertoken});
    }
  }
  handleFabu = () => {
    if(!this.state.userInfo){
      alert("您还没有登录，请先登录")
    }else if(this.state.userInfo.usertype === "个人用户"){
      alert("您是个人用户不能发布需求")
    }else {
      window.location.href='/#/faburenwu'
    }
  }
  render() {
    return (
      <a  onClick={this.handleFabu}
            className="col-2 bg-orgin mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize18"
      >{this.props.linktitle}</a>
    );
  }
}
export default FabuBtn;
