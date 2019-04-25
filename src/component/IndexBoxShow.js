import React from 'react'

class IndexBoxShow extends React.Component {
  render() {
    return (
      <div className="border shadow d-flex flex-column py-5 justify-content-around" style={{width:"300px",height:"300px"}}>
        <div className="d-flex justify-content-center">
          <img src={this.props.src} width="68" height="74" alt=""/>
        </div>
        <div className="fontSize20  mt-1 mt-5  text-center">{this.props.titleOne}</div>
        <div className="fontSize18  text-center">{this.props.titleTow}</div>
      </div>
    );
  }
}

export default IndexBoxShow;
