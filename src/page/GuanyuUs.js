import  React from 'react'
import BorderLineBlock from "./BorderLineBlock";
import us1 from  '../img/us1.jpg'
import us2 from  '../img/us2.jpg'
import us3 from  '../img/us3.jpg'
import us4 from  '../img/us4.jpg'
import us5 from  '../img/us5.jpg'
import us6 from  '../img/us6.jpg'
function  Title(props) {
  return(
    <div className="position-relative w-100">
      <img src={props.img} alt=""/>
        <div className="position-absolute py-2 pl-3 text-white fontSize32 pl-1 w-100"
             style={{bottom:"0px",backgroundColor:" rgba(95,95,95,0.5)"}}>{props.title}
        </div>
    </div>
  )
}
class GuanyuUs extends React.Component{
  render() {
    return(
      <div className="container-fluid p-0 " style={{height:"775",marginBottom:"130px"}}>
        <BorderLineBlock title="公司活动"/>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div style={{width: "300px"}}>
              <Title title="年会" img={us1}/>
            </div>
            <div style={{width: "350px"}} className="d-flex flex-column justify-content-between">
              <Title title="团建" img={us2}/>
              <Title title="颁奖" img={us3}/>
            </div>
            <div style={{width: "510"}} className="d-flex flex-column justify-content-between">
              <Title title="一日游" img={us4}/>
              <div className="d-flex justify-content-between">
                <div style={{width: "245px"}}>
                  <Title title="生日" img={us5}/>
                </div>
                <div style={{width: "245px"}}>
                  <Title title="办公" img={us6}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default GuanyuUs;
