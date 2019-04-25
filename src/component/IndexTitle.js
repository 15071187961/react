import React from 'react'

class IndexTitle extends React.Component {

  render() {
    return (
      <div className="">
        <div style={{fontSize:"28px"}} className="text-center mt-3 mb-1">{this.props.title}</div>
        <div className="row d-flex justify-content-center">
          <div className="my-1" style={{width:"80px",height:"2px",backgroundColor:"#ff9709"}}></div>
        </div>
      </div>
    );
  }
}

export default IndexTitle;
