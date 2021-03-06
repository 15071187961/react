import  React from 'react'
import Huibiao from "./Huibiao";

class BorderShadowWrap extends  React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container-fluid" style={{margin:"30px 0 120px 0"}}>
        <div className="container" >
          <h3 className="fontSize20 mt-5">{this.props.title}</h3>
          <div className="row ">
            <div className="col-12" >
              <div className="border shadow px-5 py-5" >{this.props.children}</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export  default BorderShadowWrap;
