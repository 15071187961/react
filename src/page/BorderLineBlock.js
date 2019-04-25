import React from 'react';

class BorderLineBlock extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="col-12 text-center d-flex justify-content-center align-items-center" style={{height:'155px'}}>
        <div className="borderlineblock" style={{backgroundColor:this.props.color}}></div>
        <div className="fontSize32 mx-3 letter-spacing4" style={{color:this.props.color}}>{this.props.title}</div>
        <div className="borderlineblock" style={{backgroundColor:this.props.color}}></div>
      </div>
    );
  }
}

export default BorderLineBlock;
