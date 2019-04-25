import  React from 'react'
import {Icon} from 'antd'
import '../css/qiye.css'
import icon1 from '../img/icon12.png'
import icon2 from '../img/icon6.png'
import icon3 from '../img/icon14.png'
import icon4 from '../img/icon8.png'
import icon5 from '../img/icon7.png'
import BorderLineBlock from "./BorderLineBlock";

class QiyeFour extends React.Component{

  render() {
    return (
      <div className="container-fluid  qiyeforu">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
              <BorderLineBlock color="black" title="合作流程"/>
            </div>
          </div>
          <div className="row d-flex align-items-center flex-nowrap" style={{marginTop: "60px"}}>
            <div className="col flex-shrink-0">
              <div className="bg-white rounded-circle qiyefourimg d-flex align-items-center justify-content-center" >
                <img src={icon1}  alt="" />
              </div>
              <p className="text-warning my-3 fontSize26 text-center">发布流程</p>
            </div>
            <div className="col">
              <Icon type="swap-right" className="text-warning fontSize35 mb-5 text-center" />
            </div>
            <div className="col flex-shrink-0">
              <div className="bg-white rounded-circle qiyefourimg d-flex align-items-center justify-content-center">
                <img src={icon2}  alt=""/>
              </div>
              <p className="text-warning my-3 fontSize26 text-center">需求梳理</p>
            </div>
            <div className="col">
              <Icon type="swap-right" className="text-warning fontSize35 mb-5 text-center" />
            </div>
            <div className="col flex-shrink-0">
              <div className="bg-white rounded-circle qiyefourimg d-flex align-items-center justify-content-center" >
                <img src={icon3}  alt=""/>
              </div>
              <p className="text-warning my-3 fontSize26 text-center">平台报价</p>
            </div>
            <div className="col">
              <Icon type="swap-right" className="text-warning fontSize35 mb-5 text-center" />
            </div>
            <div className="col flex-shrink-0">
              <div className="bg-white rounded-circle qiyefourimg d-flex align-items-center justify-content-center" >
                <img src={icon4}  alt=""/>
              </div>
              <p className="text-warning my-3 fontSize26 text-center">项目实施</p>
            </div>
            <div className="col">
              <Icon type="swap-right" className="text-warning fontSize35 mb-5 text-center" />
            </div>
            <div className="col flex-shrink-0">
              <div className="bg-white rounded-circle qiyefourimg d-flex align-items-center justify-content-center">
                <img src={icon5} alt=""/>
              </div>
              <p className="text-warning my-3 fontSize26 text-center">项目验收</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QiyeFour;
