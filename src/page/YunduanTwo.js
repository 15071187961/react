import  React from 'react'
import '../css/yunduan.css'
import SecondTitle from "./SecondTitle";
import icon4 from '../img/yuanduanIcon04.png'
import icon5 from '../img/yuanduanIcon05.png'
import icon6 from '../img/yuanduanIcon06.png'
import icon7 from '../img/yuanduanIcon07.png'
import icon8 from '../img/yuanduanIcon08.png'
import icon1 from "../img/icon12.png";
import icon2 from "../img/icon6.png";
import icon3 from "../img/icon14.png";

class YunduanTwo extends React.Component{
    constructor(){
        super()
    }
    render() {
        return (
            <div className="container-fluid  qiyeforu">
            <div className="container">
            <div className="row">
            <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
    <div className="borderlineblock"></div>
            <div className="fontSize32 mx-3 letter-spacing4">雇佣只需<span class="text-warning">5</span>步</div>
            <div className="borderlineblock"></div>
            </div>
            </div>
            <div className="row d-flex align-items-center flex-nowrap" style={{marginTop: "60px"}}>
    <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon4}  alt="" />
            </div>
            <p className="text-warning my-3 fontSize26 text-center">第一步</p>
            <blockquote className="fontSize24 font-weight-light text-center">
            提交具体需求
    </blockquote>
            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center">
            <img src={icon5}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">第二步</p>
            <blockquote className="fontSize24 font-weight-light text-center">
            平台审核匹配用工
    </blockquote>
            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon6}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">第三步</p>
            <blockquote className="fontSize24 font-weight-light text-center">
            企业方面试用工
    </blockquote>
            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon7}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">第四步</p>
            <blockquote className="fontSize24 font-weight-light text-center">
            企业方托管用工费
    </blockquote>
            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center">
            <img src={icon8} alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">第五步</p>
            <blockquote className="fontSize24 font-weight-light text-center">
            工作者开始在线工作
    </blockquote>
            </div>
            </div>
            </div>
            </div>
    );
    }
}

export default YunduanTwo;
