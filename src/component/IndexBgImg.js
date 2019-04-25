import React from 'react'
import '../css/indexBgImg.css'
import {Mengban} from './BaseComponents'

class IndexBgImg extends React.Component {

  render() {
    return (
      <div className="container-fluid position-relative p-0 indexbgimg section600"
           style={{backgroundImage:"url("+this.props.bgimg+")",
                    backgroundAttachment:"fixed"
          }}
      >
        <Mengban/>
        {this.props.children}
      </div>
    );
  }
}

export default IndexBgImg;
