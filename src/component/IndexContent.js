import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import indexicon1 from '../img/indexIcon-1.png';
import indexicon2 from '../img/indexIcon-2.png';
import indexicon3 from '../img/indexIcon-3.png';
import indexicon4 from '../img/indexIcon-4.png';
import indexicon5 from '../img/indexIcon-5.png';
import indexicon6 from '../img/indexIcon6.png';
import indexicon7 from '../img/indexIcon-7.png';
import indexicon8 from '../img/indexIcon-8.png';
import indexicon9 from '../img/indexIcon-9.png';
import indexbg2 from '../img/2.jpg'
import indexbg3 from '../img/3.jpg'
import isLogin from "../component/IsLogin";
import FabuBtn from "../page/FabuBtn";
import IndexTitle from "../component/IndexTitle";
import IndexShow from "../component/IndexShow";
import IndexBgImg from "../component/IndexBgImg";
import IndexBoxShow from "../component/IndexBoxShow";
import {Banner, FirstLevelTitle, TowLevelTitle} from "./BaseComponents";
import bannerImg from "../img/1.jpg";

class Demo  extends React.Component{
  constructor(props){
    super(props)
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
      window.location.href="/#/pwdlogin"
    }else if(this.state.userInfo.usertype === "个人用户"){
      alert("您是个人用户不能发布需求")
    }else {
      window.location.href="/#/faburenwu"
    }
  }
  handelqianyue =() =>{
    if(!this.state.userInfo){
      alert("您还没有登录，请先登录")
    }else if(this.state.userInfo.usertype === "企业用户" ){
      alert("您是企业用户不能申请签约金订单")
    }else{
      window.location.href="/#/contract"
    }

  }
  render(){
    return(
      <div>
        <Banner bannerImg={bannerImg}>
          <FirstLevelTitle  className="pb-3" title="惠企云一站式综合服务平台"/>
          <TowLevelTitle  className=" mb-5" title="推动共享经济发展 · 缔造自由职业者新工坊"/>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <FabuBtn linktitle="发布信息"/>
                <a  onClick={this.handelqianyue}
                    className="col-2 indexborder mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize18">申请签约金接单</a>
              </div>
            </div>
          </div>
        </Banner>

        <div className="container-fluid p-0 d-flex flex-column justify-content-around" style={{height:"500px"}}>
          <IndexTitle title="我们的服务"/>
          <p className="text-center my-1 mb-5" style={{color:"#5f5f5f"}}>
            专业安全稳定的用工平台<br/>
            灵活只能的匹配用工解决用工难题
          </p>
          <div className="container mb-5">
            <div className="row d-flex justify-content-between">
              <IndexShow src={indexicon1} title="企业难题" />
              <IndexShow src={indexicon2} title="自由职业者难题" />
              <IndexShow src={indexicon3} title="会企云解决方案" />
            </div>
          </div>
        </div>
        <IndexBgImg bgimg={indexbg2}/>
        <div className="container-fluid p-0 d-flex flex-column justify-content-around" style={{height:"580px"}}>
          <IndexTitle title="云端工作"/>
          <div className="container mb-5">
            <div className="row d-flex justify-content-between">
              <IndexBoxShow src={indexicon4} titleOne="互联网" titleTow="互联网用工平台"/>
              <IndexBoxShow src={indexicon5} titleOne="大数据" titleTow="专业数据化分析处理"/>
              <IndexBoxShow src={indexicon6} titleOne="人工智能" titleTow="更快,更便捷匹配用工"/>
            </div>
          </div>
        </div>
        <IndexBgImg bgimg={indexbg3}/>
        <div className="container-fluid p-0 d-flex flex-column justify-content-around" style={{height:"580px"}}>
          <IndexTitle title="云端工作"/>
          <div className="container mb-5">
            <div className="row d-flex justify-content-between">
              <IndexBoxShow src={indexicon6} titleOne="企业用工" titleTow="互联网用工平台"/>
              <IndexBoxShow src={indexicon7} titleOne="解决方案" titleTow="结合大数据解决用工难题"/>
              <IndexBoxShow src={indexicon8} titleOne="多元化服务" titleTow="满足多元招工需求"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
