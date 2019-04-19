import  React from 'react'
import '../css/qiye.css'
import img from '../img/jpg.jpg'


class QiyeThree extends React.Component{
  constructor(){
    super()
  }
  render() {
    return (
      <div className="container-fluid bg-white d-flex align-items-center" style={{height:"655px"}}>
        <div className="container">
          <div className="row  no-gutters " style={{height: "400px"}}>
            <div className="col-6 h-100">
              <img src={img} width="600" height="400" alt="" />
            </div>
            <div className="col-6 h-100 py-4 d-flex flex-column pl-5 justify-content-between">
              <h2 className="text-warning font-weight-light">可靠贴心的服务保障</h2>
              <p className="fontSize28 font-weight-light">
                <span className="iconfont text-warning fontSize28 icon-kongxinduigou mr-3"></span>
                客户顾问一对一跟进，随时响应需求。
              </p>
              <p className="fontSize28 font-weight-light">
                <span className="iconfont text-warning fontSize28 icon-kongxinduigou mr-3"></span>
                按阶段分期付款，平台进行托管担保。
              </p>
              <p className="fontSize28 font-weight-light">
                <span className="iconfont text-warning fontSize28 icon-kongxinduigou mr-3"></span>
                成熟的风险管理机制，确保交付质量。
              </p>
              <p className="fontSize28 font-weight-light">
                <span className="iconfont text-warning fontSize28 icon-kongxinduigou mr-3"></span>
                项目交付后，可选长期的维护服务。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QiyeThree;
