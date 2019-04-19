import  React from 'react'
import PageBanner from "./PageBanner";
import Title from "./Title";
import aboutbanner from '../img/about.jpg'
import SecondTitle from "./SecondTitle";
import FabuBtn from "./FabuBtn";
import BorderLineBlock from "./BorderLineBlock";
import GuanyuMap from "./GuanyuMap";
import GuanyuUs from "./GuanyuUs";

class Guanyu extends React.Component{
  render() {
    return(
      <div className="container-fluid p-0">
        <PageBanner bgimg={aboutbanner}>
          <Title title="关于我们"/>
          <SecondTitle title="文案文案文案文案文案文案文案"/>
          <div className="d-flex justify-content-center">
            <FabuBtn link="/xq" linktitle="了解详情" />
          </div>
        </PageBanner>
        <BorderLineBlock title="公司介绍"/>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12">
              <blockquote className=" shadow fontSize26 font-weight-light" style={{textIndent:"40px",padding:"85px 40px"}}>
                2018年,惠企云项目团队正式成立,中兴瑞华集团(成立于2012年1月,总部位于
                北京,是一家集政府服务外包和企业商业服务于一体的政企服务外包公司)作为全资母
                公司独立支持项目研发及运作,整合公司线上线下业务,"以点带面"的全国战略布局正
                式启动。通过惠企云一站式服务平台,互联网技术和大数据技术的应用,使平台对企业
                用工需求和就业者求职需求间的信息做到了精准、快速的匹配,通过信息的透明化,可
                形成海量的人力资源供给,真正做到企业供给侧改革,为企业“去产能,降成本”,为个
                人“促创业,增收入",充分融合了当下开展双创,发展共享经济、数字经济,落实“放管
                服”大政方针。地方政府可以通过“惠企云一站式服务平台汇聚全国创业者,形成经济新
                动能,加速新老经济动能的有效转变化,通过平反弹吸引全国各领域的企业,形成共享
                经济总部,产生集群效应,创造新税源</blockquote>
            </div>
          </div>
        </div>
        <GuanyuMap/>
        <GuanyuUs/>
      </div>

    )
  }
}

export default Guanyu;
