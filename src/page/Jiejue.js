import  React from 'react'
import PageBanner from "./PageBanner";
import Title from "./Title";
import SecondTitle from "./SecondTitle";
import FabuBtn from "./FabuBtn";
import JiejueOne from "./JiejueOne";
class Jiejue extends React.Component{
  constructor(){
    super()
  }
  render() {
    return(
     <div>
        <PageBanner>
        <Title title="企业人资规划方案"/>
          <SecondTitle title="文案文案文案文案文案文案文案"/>
          <div className="d-flex justify-content-center">
          <FabuBtn link="/xq" linktitle="咨询电话：400-888-1234" />
          </div>
          </PageBanner>
         <JiejueOne />

      </div>
    )
  }
}

export default Jiejue;
