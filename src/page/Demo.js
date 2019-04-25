import React from 'react'
import bannerImg from '../img/1.jpg'
import {FirstLevelTitle, Banner, SixLevelTitle, TowLevelTitle} from "../component/BaseComponents";
import FabuBtn from "./FabuBtn";

class Demo extends React.Component{
  render() {
    return (
      <Banner bannerImg={bannerImg}>
        <FirstLevelTitle  className="pb-3" title="惠企云一站式综合服务平台"/>
        <TowLevelTitle  className=" mb-5" title="推动共享经济发展 · 缔造自由职业者新工坊"/>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center ">
              <FabuBtn linktitle="发布信息"/>
            </div>
          </div>
        </div>

      </Banner>
    );
  }
}
export  default Demo;
