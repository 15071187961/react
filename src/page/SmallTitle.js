import React from 'react'

class SmallTitle extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
               <p className='fontSize24 font-weight-light text-center smallTitle'>{this.props.title}</p>
    );
    }
}

export default SmallTitle;
