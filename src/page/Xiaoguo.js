import  React from 'react'
import PageBanner from "./PageBanner";
import Title from "./Title";
import SecondTitle from "./SecondTitle";
import FabuBtn from "./FabuBtn";
import banner from '../img/xiaoguobanner.jpg'
import xiaoguo from '../img/xiaoguo2.jpg'
import BorderLineBlock from "./BorderLineBlock";

class Xiaoguo extends React.Component{
  render() {
    return(
      <div className="container-fluid p-0">
        <PageBanner bgimg={banner}>
          <Title title="惠企云平台效果保障"/>
          <SecondTitle title="文案文案文案文案文案文案文案"/>
          <div className="d-flex justify-content-center">
            <FabuBtn link="/xq" linktitle="需求发布" />
          </div>
        </PageBanner>
        <BorderLineBlock title="我们在做"/>
        <div className="my-5 d-flex justify-content-center">
          <img src={xiaoguo} className="d-inline-block" alt=""/>
        </div>
      </div>

    )
  }
}

export default Xiaoguo;
