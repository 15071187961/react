import React from 'react';

class BorderLineBlock extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
        <div className="borderlineblock"></div>
        <div className="fontSize32 mx-3 letter-spacing4">{this.props.title}</div>
        <div className="borderlineblock"></div>
      </div>
    );
  }
}

export default BorderLineBlock;
