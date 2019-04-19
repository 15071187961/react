import  React from 'react'
import icon1 from "../../img/userPh.png";


class UserPhoto extends React.Component{
  constructor(props){
    super(props)
  }

  render() {

    return(
      <div className="position-relative w-100 d-flex align-items-center justify-content-center fontSize16 shadow borderGray" style={{height:"300px"}}>
        <div className="text-center">
          <div className="rounded-circle d-flex align-items-center justify-content-center">
            <img src={this.props.userInfor.face} width="180px"  height="180px" style={{borderRadius:"50%"}} alt="" />
          </div>
          <div className="margin_top10">{this.props.userInfor.usertype}</div>
          <div>{this.props.userInfor.phone}</div>
        </div>
      </div>
    )
  }
}



export default UserPhoto;
