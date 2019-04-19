import React from 'react';
import BorderShadowWrap from "../BorderShadowWrap";
import {Row,Col,Button,Pagination,Empty,Icon} from 'antd'
import axios from 'axios'
import  ProjectModal from './ProjectModal'

import {message} from 'antd';
import {user_id_check,token_check} from '../userInfo/LocalStorage'


class Project extends React.Component{
  constructor(props){
      super()
      this.state={projectinfo: "",user_id_check:'',token_check:"",projectid:props.match.params.projectid }
      this.handleClick = this.handleClick.bind(this);
      this.clickAagree = this.clickAagree.bind(this)
  }
  componentDidMount() {
    this.loadData();
  }
  loadData(){
    const _that = this;
    axios.post("/index/goods/goodsinfo",{
      id:_that.state.projectid,
    }).then(function(response){
      if(response.data.res === 1){
        _that.setState({projectinfo:response.data.data})
        _that.setState({user_id_check:localStorage.getItem("hyquser_id")})
        _that.setState({token_check:localStorage.getItem("hyqutoken")})
      }else {
        message.error(response.data.err)
      }
    }).catch(function (err) {
      message.error(err)
    })
  }
  //发起接单申请
  handleClick(e){
    console.log(user_id_check)
    const _that = this;
    axios.post("/user/goodsorder/add",{
      user_id_check:user_id_check,
      token_check:token_check,
      goods_id:_that.state.projectid,
      type:0,
      user_id:user_id_check,
      team_id:'',
      msg:""
    }).then(function (response) {
      if(response.data.res === 1){
        message.success("申请成功")
      } else {
        message.warning(response.data.err)
      }
    }).catch(function (err) {
      message.error(err)
    })
  }

  clickAagree(e){
    console.log(e.target.getAttribute("data_user_id"))
    const order_id=e.target.getAttribute("data_user_id")
    const _that=this;
    axios.post("/user/goods/ok",{
      user_id_check:_that.state.user_id_check,
      token_check:_that.state.token_check  ,
      goods_id:_that.state.projectid,
      order_id:_that.state.projectid
    }).then(function (response) {
      if(response.data.res ===1){
        message.success("发起成功")
      }else {
        message.warning(response.data.err)
      }
    }).catch(function (err) {
      message.error(err)
    })

  }
  render() {
    const  projectinfo = this.state.projectinfo
    return (
      <div style={{marginBottom:"100px"}}>
        <BorderShadowWrap title={"云企工坊>项目详情"}>
          <Row className=" mt-1" >
            <Col span={24}>
              <span>更新：{projectinfo.timee}</span>
              <span>浏览：{projectinfo.id}</span>
              <span>申请：{projectinfo.id}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h2 className="d-flex justify-content-between my-4">
                {projectinfo.title}
                <div className="text-warning">
                  {parseFloat(projectinfo.price).toFixed(2)} <span className="text-dark fontSize18">元</span>
                </div>
              </h2>
            </Col>
            <Col span={24}>
              <ProjectModal userinfo={this.state}/>
            </Col>
          </Row>
        </BorderShadowWrap>
        <div className="container">
          <Row className="bg-white px-5 py-3 mt-3 shadow ">
            <Col span={24}>
              <h6 className="my-3 text-break">
                <p className="small">任务详情</p>
                <span style={{width:"40px",height:'2px',backgroundColor:"#808080"}}></span>
              </h6>
            </Col>
            <p className="my-4 fontSize16 text-dark">任务类型：{projectinfo.titletype}</p>
            <p className="my-4 fontSize16 text-dark">项目金额：{projectinfo.price}</p>
            <p className="my-4 fontSize16 text-dark">结算方式：{projectinfo.pricetype}</p>
            <p className="my-4 fontSize16 text-dark">职位详情：{projectinfo.des}</p>
            <p className="my-4 fontSize16 text-dark">工作时间：{projectinfo.timeb}</p>
            <p className="my-4 fontSize16 text-dark">工作地点：{projectinfo.address}</p>
            <p className="my-4 fontSize16 text-dark">公司名称：{projectinfo.user_id}</p>
          </Row>
        </div>
      </div>

    );
  }
}
export default Project;
