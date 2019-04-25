import  React from 'react'
import axios from 'axios'
import '../css/yunduan.css'
import icon1 from '../img/yuanduanIcon01.png'
import icon2 from '../img/yuanduanIcon02.png'
import icon3 from '../img/yuanduanIcon03.png'
import isLogin from "../component/IsLogin";

class YunduanOne extends React.Component{
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
    }
    if(this.state.userInfo.usertype === "个人用户"){
      alert("您是个人用户不能发布需求")
    }
    if(this.state.userInfo.usertype === "企业用户"){
      window.location.href="/userinfo"
    }
  }
    render() {
        return (
            <div className="container-fluid">
            <div className="container">
            <div className="row d-flex justify-content-between" style={{marginTop:"60px"}}>
            <div className="col-3 ">
            <div className="bg-white text-center">
            <img src={icon1} className="d-inline-block " alt="" />
            <p className="fontSize28  text-warning">优选人才</p>
            </div>


            <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>
            <span>严格筛选，0.5%通过率确保一线水准</span>
        </p>
        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>
            <span>五年以上的工作经验</span>
         </p>

        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>
            <span>平台项目五星好评，能力真实可靠</span>

        </p>

        </div>
        <div className="col-3 ">
            <div  className="bg-white text-center">
            <img src={icon2} className=" d-inline-block"  alt="" />
            <p className="fontSize28 text-warning">快速到岗</p>
            </div>


            <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>1小时欸对接专属顾问，全程协助</span>
        </p>
        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>海量人才库，只能匹配最佳技术人才</span>
        </p>
        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>随时可面试，最快当天到岗</span>
        </p>


        </div>
        <div className="col-3 ">
            <div  className="bg-white text-center">
            <img src={icon3} className=" d-inline-block" alt={icon3} />
        <p className="fontSize24 text-warning">弹性灵活</p>
        </div>


            <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>按时聘用，灵活适应用人需求</span>
        </p>
        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>可选全职兼职，定制每周工时</span>
        </p>
        <p className="fontSize24 font-weight-light d-flex">
            <span className="iconfont text-warning fontSize24 icon-kongxinduigou"></span>

            <span>支持随时更换或结束</span>
            </p>

        </div>
        </div>
        </div>
        </div>
    );
    }
}

export default YunduanOne;
