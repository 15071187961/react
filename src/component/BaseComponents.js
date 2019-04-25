import React from 'react'
import bannerImg from "../img/1.jpg";
/*蒙版*/
const Mengban = (props) =>(
  <div className="position-absolute w-100 h-100"
       style={{ pointerEvents: "none",backgroundColor:" rgba(55,55,55,0.4)"}}></div>
)
/*大banner*/
class Banner extends React.Component{
  render() {
    return (
      <div className="container-fluid position-relative  d-flex flex-column justify-content-around"
           style={{
             backgroundImage:"url("+this.props.bannerImg+")",
             height:"600px",
             padding:"180px 0",
             backgroundPosition:'center center',
             backgroundAttachment:"fixed",
           }}>
        <Mengban/>
        {this.props.children}
      </div>
    );
  }
}
const FirstLevelTitle = (props) =>(
  <div className={props.className}  style={{fontSize:"32px",textAlign:"center",color:"#ffffff",position:"relative"}}>{props.title}</div>
)
const TowLevelTitle = (props) =>(
  <div className={props.className}  style={{fontSize:"24px",textAlign:"center",color:"#ffffff",position:"relative"}}>{props.title}</div>
)
const ThreeLevelTitle = (props) =>(
  <div style={{fontSize:"18px"}}>{props.title}</div>
)
const FourLevelTitle = (props) =>(
  <div style={{fontSize:"16px"}}>{props.title}</div>
)
const FiveLevelTitle = (props) =>(
  <div style={{fontSize:"14px"}}>{props.title}</div>
)
const SixLevelTitle = (props) =>(
  <div style={{fontSize:"12px"}}>{props.title}</div>
)
const BannerBtn = (props) =>(
  <a href="#" className="px-5 bg-orgin mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize18">
    {props.title}
  </a>
)

export {
  Mengban,
  Banner,
  FirstLevelTitle,
  TowLevelTitle,
  ThreeLevelTitle,
  FourLevelTitle,
  FiveLevelTitle,
  SixLevelTitle,
  BannerBtn
};
