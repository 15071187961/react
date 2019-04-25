import  React from 'react'
import '../css/qiye.css'
import icon1 from '../img/cion2.png'
import icon2 from '../img/iocn3.png'
import icon3 from '../img/icon1.png'
import BorderLineBlock from "./BorderLineBlock";

class QiyeTow extends React.Component{
  constructor(){
    super()
  }
  render() {
    return (
      <div className="container-fluid  qiyetwo">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
              <BorderLineBlock color="black" title="平台优势"/>
            </div>
            <div className="col-4 d-flex flex-column justify-content-between align-items-center">
              <div className="bg-white qiyetwoimg">
                <img src={icon1} className="d-inline-block qiyetwoimg" alt="" />
              </div>
              <p className="fontSize28 my-2">专业的需求梳理服务</p>
              <blockquote className="fontSize24 font-weight-light px-5">
                资深产品专家协助前期 需要分析、梳理、让产 品想法更好的落地，节 约开发成本，提升交付 效率。
              </blockquote>
            </div>
            <div className="col-4 d-flex flex-column justify-content-between align-items-center">
              <div  className="bg-white qiyetwoimg">
                <img src={icon2} className="qiyetwoimg d-inline-block"  alt="" />
              </div>
              <p className="fontSize28 my-3 ">智能匹配全球资深开发者</p>
              <blockquote className="fontSize24 font-weight-light px-5">
                专职项目经理全程监管，确保 项目进度和质量；可视化的在线监督进度、产出 一目了然。
              </blockquote>
            </div>
            <div className="col-4 d-flex flex-column justify-content-between align-items-center">
              <div  className="bg-white qiyetwoimg">
                <img src={icon3} className="qiyetwoimg d-inline-block" alt={icon3} />
              </div>
              <p className="fontSize28 my-3 ">过程可控 省心高效</p>
              <blockquote className="fontSize24 font-weight-light px-5">
                海量技术人才库；平台 签约服务团队至上；具 备3年以上相关经验, 快 速匹配最合适您的团队。
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QiyeTow;
