import  React from 'react'
import '../css/yunduan.css'
import SecondTitle from "./SecondTitle";

import icon4 from '../img/canvas.png'
import icon5 from '../img/canvas01.png'
import icon6 from '../img/canvas02.png'
import icon7 from '../img/canvas03.png'
import icon8 from '../img/canvas04.png'
import icon1 from "../img/icon12.png";
import icon2 from "../img/icon6.png";
import icon3 from "../img/icon14.png";

class YunduanTwo extends React.Component{
    constructor(){
        super()
    }
    render() {
        return (
            <div className="container-fluid " style={{paddingBottom: "60px"}}>
            <div className="container">

            <div className="row d-flex align-items-center flex-nowrap" style={{marginTop: "60px"}}>
    <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon4}  alt="" />
            </div>
            <p className="text-warning my-3 fontSize26 text-center">产品经理</p>

            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center">
            <img src={icon5}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">UI设计师</p>

            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon6}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">前端开发</p>

            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center" >
            <img src={icon7}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">后端开发</p>

            </div>

            <div className="col flex-shrink-0">
            <div className="  d-flex align-items-center justify-content-center">
            <img src={icon8} alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">项目经理</p>
            
            </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                 <div class="canvas_left fontSize24">传统招聘</div>
                 <div  class="canvas_right marginLeft20 fontSize24">云端工作</div>

            </div>
            <div>
            <p class="fontSize24 text-center margin-b5 margin-t20">互联网3~5年从业员薪酬对比</p>
            <p  class="fontSize24 text-center margin-b10">*以每周30小时的有效工作时间，作为预估参考基准</p>
            </div>
            </div>
            </div>
    );
    }
}

export default YunduanTwo;
