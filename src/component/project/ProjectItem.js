import React from 'react';
import defualt from '../../img/projectlistdefualt.jpg'


class ProjectItem extends React.Component{
  constructor(props){
    super()
  }
  render() {

    return (
      <div className="border d-flex justify-content-between my-3 p-3">
        <div className="col-auto p-0 d-flex justify-content-between">
          <img src={defualt} alt=""/>
        </div>
        <div className="col d-flex justify-content-around flex-column">
          <p>{this.props.order.type}</p>
          <div>
            <span className="mr-3">成交量：{this.props.order.msg}</span>
            <span className="mr-3">评分：{this.props.order.time}</span>
          </div>
        </div>
        <div className="col-auto align-items-center justify-content-end d-flex">
          {this.props.user_id_check !==this.props.order.user_id?<button className="px-3 btn-warning btn text-white mr-5" onClick={this.props.clickAagree} data_user_id={this.props.order.user_id}>选择合作</button>:""}
          <button className="btn-outline-warning btn  ">查看公司详情</button>
        </div>
      </div>
    );
  }
}
export default ProjectItem;
