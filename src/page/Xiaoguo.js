import  React from 'react'
import FabuBtn from "./FabuBtn";
import xiaoguo from '../img/xiaoguo2.jpg'
import BorderLineBlock from "./BorderLineBlock";
import {Banner, FirstLevelTitle, TowLevelTitle} from "../component/BaseComponents";
import bannerImg from "../img/xiaoguobanner.jpg";

class Xiaoguo extends React.Component{
  render() {
    return(
      <div className="container-fluid p-0">
        <Banner bannerImg={bannerImg}>
          <FirstLevelTitle  className="pb-3" title="惠企云平台效果保障"/>
          <TowLevelTitle  className=" mb-5" title="文案文案文案文案文案文案文案"/>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <FabuBtn linktitle="发布需求"/>
              </div>
            </div>
          </div>
        </Banner>
        <BorderLineBlock title="我们在做"/>
        <div className="my-5 d-flex justify-content-center">
          <img src={xiaoguo} className="d-inline-block" alt=""/>
        </div>
      </div>

    )
  }
}

export default Xiaoguo;
