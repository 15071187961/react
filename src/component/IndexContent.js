import React from 'react'
import {Link} from 'react-router-dom'
import icon1 from '../img/icon.png'
import icon2 from '../img/icon (2).png'
import icon3 from '../img/icon (3).png'

class IndexContent  extends React.Component{
  render(){
    return(
      <div>
        <div className="container-fluid p-0 section600 section1">
          <div className="container-fluid p-0 h-100  gb55">
            <div className="container h-100">
              <div className="row h-50 align-items-end">
                <div className="col">
                  <h1 className="text-white fontSize60 text-center letter-spacing8 font-weight-light">惠企云一站式综合服务平台</h1>
                  <p className="fontSize32 text-white text-center font-weight-light">推动共享经济发展 · 缔造自由职业者新工坊</p>
                </div>
              </div>
              <div className="row justify-content-center h-50 align-items-start pt-5">
                <Link to="/xq"
                   className="col-4 bg-orgin mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize28"
                   >免费发布需求</Link>
                <a href="/"
                   className="col-4 indexborder mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize28"
                   >申请签约金接单</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 section600 section2">
          <div className="container-fluid p-0 h-100  gb55">
            <div className="container d-flex h-100 flex-column justify-content-center">
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className="borderline"></div>
                  <h2 className="fontSize52 text-white text-center mx-3 letter-spacing8 font-weight-light">云端工作</h2>
                  <div className="borderline"></div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-7">
                  <ol className="text-white fontSize30">
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 section600 section3">
          <div className="container-fluid p-0 h-100  gb55">
            <div className="container d-flex h-100 flex-column justify-content-center">
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className="borderline"></div>
                  <h2 className="fontSize52 text-white text-center mx-3 letter-spacing8 font-weight-light">企云公坊</h2>
                  <div className="borderline"></div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-7">
                  <ol className="text-white fontSize30 font-weight-light">
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                    <li className="py-2">1.文字文字文字文字文字文字文字文字文字文字</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 section1080">
          <div className="row h-100 no-gutters">
            <div className="col-4 section4  w-100 h-100">
              <div className="container-fluid p-0 h-100  gb55 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center my-1"><img src={icon1} width="245"
                                                                         height="200" alt=""/></div>
                <p className="fontSize45 text-white text-center font-weight-light letter-spacing3">企业难题</p>
              </div>
            </div>
            <div className="col-4 section5 d-flex flex-column justify-content-center w-100 h-100">
              <div className="container-fluid p-0 h-100 gb55 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center my-1"><img src={icon2} width="245"
                                                                         height="200" alt=""/></div>
                <p className="fontSize45 text-white text-center font-weight-light letter-spacing3">自由职业者难题</p>
              </div>
            </div>
            <div className="col-4 section6 d-flex flex-column justify-content-center w-100 h-100">
              <div className="container-fluid p-0 h-100 gb55 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center my-1"><img src={icon3} width="245"
                                                                         height="200" alt=""/></div>
                <p className="fontSize45 text-white text-center font-weight-light letter-spacing3">惠企云解决方案</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default IndexContent;
