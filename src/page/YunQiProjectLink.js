import React from 'react';
import {Row,Col} from 'antd'
import {Link} from 'react-router-dom'
class YunQiProjectLink  extends  React.Component{
  render() {
    const data = this.props.value;
    return (
      <Col span={6} className="projectLink mb-3">
        <Link to={`/project/${data.id}`} className="p-3 bg-white d-block">
          <div className="my-2"><span className="iconfont icon-iconfonticonshutiao1" style={{marginLeft:"-5px"}}></span>{data.title}</div>
          <div className="fontSize20">{data.type}</div>
          <div className="my-2">
            <span>{data.titletype}</span>
            <span className="px-2">|</span>
            <span>{data.address}</span>
            <span className="px-2">|</span>
            <span>{data.show}</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div className="m-0"><strong className="fontSize18 text-warning">{data.price}</strong>元/月</div>
            <span className="border px-1">{data.pricetype}</span>
          </div>
        </Link>
      </Col>
    );
  }
}
export default YunQiProjectLink;
