import  React from 'react'
import '../css/qiye.css'
import FabuBtn from "./FabuBtn";
import Title from "./Title";
import SecondTitle from "./SecondTitle";
import PageBanner from "./PageBanner";

class QiyeOne extends React.Component{
    constructor(){
      super()
    }
    render() {
      return (
        <PageBanner>
          <Title title="按时聘用尖端人才，最快一天到岗"/>
          <SecondTitle title="帮助大量中小型企业快速补充优质人才"/>
          <div className="d-flex justify-content-center">
            <FabuBtn link="/xq" linktitle="需求发布" />
          </div>
        </PageBanner>
      );
    }
}

export default QiyeOne;
