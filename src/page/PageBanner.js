import React,{Component} from 'react'
import bg from '../img/bg-lp.jpg'
import '../css/PageBanner.css'
class PageBanner extends  Component{
  render() {
    return (
      <div className="container-fluid  position-relative pagebanner"  style={{backgroundImage:"url("+this.props.bgimg+")"}}>
        {this.props.children}
      </div>
    );
  }
}
PageBanner.defaultProps={
  bgimg:bg
}
export  default PageBanner;
