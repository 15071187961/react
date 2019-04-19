import  React from 'react'
import icon1 from "../../img/userPh.png";
import { Avatar } from 'antd';

class UserPhoto extends React.Component{
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className="position-relative w-100 d-flex align-items-center justify-content-center fontSize16 shadow borderGray" style={{height:"300px"}}>
    <div className="text-center">
            <div className="rounded-circle d-flex align-items-center justify-content-center" >

                <Avatar src={this.props.userInfor.face} size={100}/>
            </div>
            <div className="margin_top10">{this.props.userInfor.usertype}</div>
            <div>{this.props.userInfor.phone}</div>
            </div>
            <a style={{display:"none"}} className="btnTip fontSize14" href>切换到创客</a>
            </div>
    )
    }
}



export default UserPhoto;
