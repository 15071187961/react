import  React from 'react'
import SmallTitle from "./SmallTitle";
import FabuBtn from "./FabuBtn";
import YunduanOne from "./YunduanOne";
import YunduanTwo from "./YunduanTwo";
import YunduanThree from "./YunduanThree";
import BorderLineBlock from "./BorderLineBlock";
import bannerImg from "../img/3.jpg";
import {Banner, FirstLevelTitle, TowLevelTitle} from "../component/BaseComponents";

class Yunduan extends React.Component{
  render() {
    return(
      <div>
        <Banner bannerImg={bannerImg}>
          <FirstLevelTitle  className="pb-3" title="按时聘用尖端人才，最快一天到岗"/>
          <TowLevelTitle  className=" mb-5" title="帮助大量中小型企业快速补充优质人才"/>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <FabuBtn linktitle="发布需求"/>
              </div>
            </div>
          </div>
        </Banner>
        <BorderLineBlock title="高效的优质员工招聘决绝方案"/>
          <SmallTitle title="按需灵活用工、大幅节省招聘、用人成本"/>
         <YunduanOne />
        <BorderLineBlock title="每个岗位，平均为企业节省55%的人力成本"/>
          <SmallTitle title="按月雇佣、支持定制每周工时，避免人力资源闲置导致的隐形成本仅工资一项支出，无需负担五险一金、场地、设备等附加成本"/>
          <YunduanThree />
          <YunduanTwo />
      </div>
    )
  }
}

export default Yunduan;
