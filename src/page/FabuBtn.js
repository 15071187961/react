import  React from 'react'
import {Link} from 'react-router-dom'
class FabuBtn extends  React.Component{
  constructor(){
    super()
  }
  render() {
    return (
      <Link to={this.props.link}
            className="col-3 bg-orgin mx-5 d-block align-items-center rounded text-white d-flex justify-content-center fontSize24"
      >{this.props.linktitle}</Link>
    );
  }
}
export default FabuBtn;
