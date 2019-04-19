import React from 'react'
import {Modal} from 'antd'
import guanzhu from '../img/7.jpg'
import {Link} from 'react-router-dom'
import LoginCompoent from "./LoginCompoent";

class HeadTop extends React.Component{
  constructor(props){
    super()
    this.state={visible:false}
  }
  componentWillMount(){
  }
  showModal = () =>{
    this.setState ({visible: true})
  }
  handleCancel = () =>{
    this.setState ({visible: false})
  }
  render() {
    return (
      <div className="container-fluid py-1 bg-dark d-flex align-items-center" id="hread">
        <div className="container bg-dark align-items-center">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-md-12 text-white fontSize14">
              <a className="d-flex align-items-center" onClick={this.showModal} data-toggle="modal" >
                <span className="iconfont icon-weixin fontSize18"></span>
                <span className="mr-2"></span>
                <span className="">关注微信公众号</span>
              </a>
              <Modal
                title="扫码关注微信公众号"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
              >
                <div className="d-flex justify-content-center">
                  <img src={guanzhu} alt=""/>
                </div>
              </Modal>
            </div>
            <div className="align-items-center col-xl-6 col-lg-6 col-md-12 col-md-12 text-white fontSize14 d-flex justify-content-between"  >
              <LoginCompoent userid={this.props.userid}/>
              <span className="iconfont icon-iconfonticonshutiao1" ></span>
            {/*  <Link to="/"  className="text-white">我的订单</Link>
              <Link to="/"  className="text-white">申请成为服务商</Link>*/}
              <span>热线电话：233-233-3333</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HeadTop;
