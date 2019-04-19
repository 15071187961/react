import  React from 'react'
import '../css/jiejue.css'
import icon1 from '../img/jiejue01.png'
import icon2 from '../img/jiejue02.png'
import icon3 from '../img/jiejue03.png'
import icon4 from '../img/icon8.png'
import icon5 from '../img/icon7.png'

class JiejueOne extends React.Component{

    render() {
        return (
            <div className="container-fluid">
            <div className="container">
            <div className="row">
            <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
    <div className="borderlineblock"></div>
            <div className="fontSize32 mx-3 letter-spacing4">商业展示</div>
            <div className="borderlineblock"></div>
            </div>
            </div>
            <div className="row d-flex align-items-center flex-nowrap" style={{marginTop: "60px"}}>
    <div className="col flex-shrink-0">
            <div className="d-flex align-items-center justify-content-center" >
            <img src={icon1}  alt="" />
            </div>
            <p className="text-warning my-3 fontSize26 text-center">企业</p>
            </div>
            <div className="col">
            <div className="jiantou position-relative">
                <div></div>
            </div>
            </div>
            <div className="col flex-shrink-0">
            <div className="d-flex align-items-center justify-content-center">
            <img src={icon2}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">惠企云平台</p>
            </div>
            <div className="col">
            <div className="jiantou position-relative"><div></div></div>
            </div>
            <div className="col flex-shrink-0">
            <div className="d-flex align-items-center justify-content-center" >
            <img src={icon3}  alt=""/>
            </div>
            <p className="text-warning my-3 fontSize26 text-center">创客</p>
            </div>






            </div>
            <div class="fontSize26 boderDash yewutip letter-spacing3">
            惠企云打造全新灵活工模式，重新定义了企业与员工的工作契约关系， 平台上的灵活就业者（创客）利用工作时间以外发生的其他经营行为，提供剩余劳动价值的供给，平台可将创客与企业用工需求精准匹配，形成三者之间一种全新的“外包一分包”商务合作关系
            </div>
            </div>
            </div>
    );
    }
}

export default JiejueOne;
