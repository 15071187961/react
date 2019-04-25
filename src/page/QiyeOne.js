import  React from 'react'
import '../css/qiye.css'
import FabuBtn from "./FabuBtn";
import bannerImg from "../img/bg-lp.jpg";
import {Banner, FirstLevelTitle, TowLevelTitle} from "../component/BaseComponents";

class QiyeOne extends React.Component{
    constructor(){
      super()
    }

    render() {
      return (
        <Banner bannerImg={bannerImg}>
          <FirstLevelTitle  className="pb-3" title="惠企云一站式综合服务平台"/>
          <TowLevelTitle  className=" mb-5" title="推动共享经济发展 · 缔造自由职业者新工坊"/>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <FabuBtn linktitle="发布需求"/>
              </div>
            </div>
          </div>
        </Banner>
      );
    }
}

export default QiyeOne;
