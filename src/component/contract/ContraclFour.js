import React from 'react'
import {Icon} from 'antd';
import {Link} from 'react-router-dom'

class ContraclFour extends React.Component{
  render() {
    return (
      <div className="text-center">
        <Icon type="check-circle" theme="filled" className="mt-5 fontSize60 text-warning"></Icon>
        <h5 className="my-2">恭喜您成功提交申请！</h5>
        <p>我们会在24小时内审核您的申请！</p>
        <p>赶快去个人中心完善您的资料吧！》》<Link className="text-warning" to="/">前往</Link></p>
        <p className="d-flex justify-content-center">
          <Link to="/" className="bg-warning text-white px-3 py-1 mt-3 rounded" >返回首页</Link>
        </p>
      </div>
    );
  }
}

export  default ContraclFour;
