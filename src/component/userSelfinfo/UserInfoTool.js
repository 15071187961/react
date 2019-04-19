import  React from 'react'
import "../../css/userInfo.css";
import icon1 from "../../img/messageIcon.png"
import icon2 from "../../img/parterIcon.png";
import icon3 from "../../img/cartIcon.png";
class UserInfoTool extends React.Component{
  constructor(){
    super()
  }
  render() {
    return(
      <div className="position-relative w-100 d-flex align-items-center justify-content-between fontSize16 shadow borderGray margin_top10" style={{padding:"20px 30px",marginBottom:"510px"}}>
        <a className="d-flex align-items-center justify-content-center flex-column">
          <div className="position-relative">
            <img src={icon1}  alt="" />
            <span className="numTip fontSize12">25</span>
          </div>
          <div className="fontSize14 margin_top10">新的信息</div>
        </a>
        <a className="d-flex align-items-center justify-content-center flex-column">
          <div>
            <img src={icon2}  alt="" />

          </div>
          <div  className="fontSize14 margin_top10">会员等级</div>
        </a>
        <a className="d-flex align-items-center justify-content-center flex-column">
          <div>
            <img src={icon3}  alt="" />
          </div>
          <div  className="fontSize14 margin_top10">钱包中心</div>
        </a>
      </div>
    )
  }
}



export default UserInfoTool;
