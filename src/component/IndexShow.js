import React from 'react'

class IndexShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div style={{border:"1px solid #dcdcdc",borderRadius:"50%",boxShadow:"0px 0px 10px #eeeeee"}}>
          <div>
            <img src={this.props.src} alt=""/>
          </div>
        </div>
        <p className="text-center mt-3">{this.props.title}</p>
      </div>
    );
  }
}

export default IndexShow;
