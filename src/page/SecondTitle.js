import React from 'react'
import '../css/SecondTitle.css'
class SecondTitle extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <p className='text-white text-center my-5 letter-spacing3 secondtitle'>{this.props.title}</p>
    );
  }
}

export default SecondTitle;
