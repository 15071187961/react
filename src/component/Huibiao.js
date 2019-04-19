import React from 'react'

class Huibiao extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <p className="d-flex align-items-center my-3">
                   <span
                     className="huibiao mr-1 text-white fontSize18 d-flex align-items-center justify-content-center">
                                <em>{this.props.num}</em>
                            </span>
        <span className="fontSize18">{this.props.title}</span>
      </p>
    );
  }
}
export default Huibiao;
