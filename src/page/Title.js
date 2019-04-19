import React from 'react'
import '../css/Title.css'
class Title extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <h2 className='text-white text-center letter-spacing3  title'>{this.props.title}</h2>
    );
  }
}

export default Title;
