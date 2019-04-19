import React from 'react';
import HeadNav from './HeadNav'
import HeadTop from './HeadTop'
import '../css/App.css'

class Header extends React.Component{
    constructor(props) {
      super(props);
    }

    componentDidUpdate(){
    }

    render(){
      return(
        <div>
          <HeadTop />
          <HeadNav />
        </div>
      )
    }
}
export  default  Header;
