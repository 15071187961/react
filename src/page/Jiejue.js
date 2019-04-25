import  React from 'react'
import PageBanner from "./PageBanner";
import Title from "./Title";
import SecondTitle from "./SecondTitle";
import FabuBtn from "./FabuBtn";
import JiejueOne from "./JiejueOne";

import {Banner, FirstLevelTitle, TowLevelTitle,BannerBtn} from "../component/BaseComponents";
import bannerImg from "../img/bg-lp.jpg";
class Jiejue extends React.Component{
  constructor(){
    super()
  }
  render() {
    return(
     <div>
       <Banner bannerImg={bannerImg}>
         <FirstLevelTitle  className="pb-3" title="企业人资规划方案"/>
         <TowLevelTitle  className=" mb-5" title="文案文案文案文案文案文案文案"/>
         <div className="container">
           <div className="row">
             <div className="col d-flex justify-content-center">
               <BannerBtn title="咨询电话：400-888-1234"/>
             </div>
           </div>
         </div>
       </Banner>
       <JiejueOne />
      </div>
    )
  }
}

export default Jiejue;
