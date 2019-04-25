import React from 'react';
class Header extends React.Component{
  render(){
    return(
      <div className="container-fluid bg-dark py-5">
        <div className="container fontSize14 font-weight-light flex-column d-flex justify-content-around h-100 py-3">
          <div className="row">
            <div className="col-6 fontSize14 font-weight-light">
              <div className="row">
                <div className="col-4 ">
                  <p><a href="/" className="text-white">套餐升级</a></p>
                  <p><a href="/" className="text-white">帮助</a></p>
                  <p><a href="/" className="text-white">代理合作</a></p>
                </div>
                <div className="col-4">
                  <p><a href="/" className="text-white">关于我们</a></p>
                  <p><a href="/" className="text-white">加入我们</a></p>
                  <p><a href="/" className="text-white">服务条款</a></p>
                </div>
                <div className="col-4">
                  <p><a href="/" className="text-white">法律申明</a></p>
                  <p><a href="/" className="text-uppercase text-white">下载app</a></p>
                </div>
              </div>
            </div>
            <div className="col-6  text-white justify-content-center  d-flex">
              <span  style={{fontSize:"27px"}}  className="iconfont icon-weixin  ml-4 cursor-pointer" data-toggle="modal"
                    ></span>
              <span style={{fontSize:"32px"}} className="iconfont icon-weibo ml-4 cursor-pointer" data-toggle="modal"
                    ></span>
            </div>
          </div>
          <div className="row text-white fontSize12">
            <div className="col">
              <p className="text-center">©惠企云网络信息（湖北）有限公司2019-2020</p>
              <p className="text-center">鄂ICP备123456789号-0</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export  default  Header;
