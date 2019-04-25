import  React from 'react'
import BorderLineBlock from "./BorderLineBlock";
import map from '../img/aboutmap.png'
import {Icon} from 'antd'

class GuanyuMap extends React.Component{
  constructor(){
    super()
  }
  render() {
    return(
      <div className="container-fluid p-0 bg-secondary" style={{height:"800px"}}>
          <BorderLineBlock color="black" title="商务布局"/>
          <div className="text-center fontSize18"> 惠企云平台在全国业务布局三大区域  <br/>  华中大区+华北大区+华南大区    <br/> （我们已经有招商团队入驻）</div>
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex justify-content-center flex-column">
                <p className="align-items-center fontSize26">惠企云在全国重点城市设点 </p>
                <p className="align-items-center d-flex">
                  <span className="iconfont icon-dizhi3 text-warning fontSize35"></span><span className="fontSize26 text-dark">北京</span>
                </p>
                <p className="align-items-center d-flex">
                  <span className="iconfont icon-dizhi3 text-warning fontSize35"></span><span className="fontSize26 text-dark mr-3">武汉</span>
                  <span className="iconfont icon-dizhi3 text-warning fontSize35"></span><span className="fontSize26 text-dark mr-3">天津</span>
                  <span className="iconfont icon-dizhi3 text-warning fontSize35"></span><span className="fontSize26 text-dark mr-3">深圳</span>
                  <span className="iconfont icon-dizhi3 text-warning fontSize35"></span><span className="fontSize26 text-dark mr-3">广州</span>
                </p>
                <p className="align-items-center d-flex">
                  <span className="iconfont icon-dizhi3  fontSize35"></span><span className="fontSize26 text-dark mr-3">上海</span>
                  <span className="iconfont icon-dizhi3  fontSize35"></span><span className="fontSize26 text-dark mr-3">郑州</span>
                  <span className="iconfont icon-dizhi3  fontSize35"></span><span className="fontSize26 text-dark mr-3">成都</span>
                  <span className="iconfont icon-dizhi3  fontSize35"></span><span className="fontSize26 text-dark mr-3">合肥</span>
                </p>
              </div>
              <div className="col-6">
                <img src={map} alt=""/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}



export default GuanyuMap;
