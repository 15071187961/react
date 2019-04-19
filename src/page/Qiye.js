import  React from 'react'
import QiyeOne from './QiyeOne'
import QiyeTow from './QiyeTow'
import QiyeThree from './QiyeThree'
import QiyeFour from './QiyeFour'

class Qiye extends React.Component{
  constructor(){
    super()
  }
  render() {
    return(
      <div>
        <QiyeOne/>
        <QiyeTow/>
        <QiyeThree/>
        <QiyeFour/>
      </div>
    )
  }
}

export default Qiye;
