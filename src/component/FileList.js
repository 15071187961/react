import React from 'react'
import {Link} from 'react-router-dom'

class FileList extends React.Component{
  constructor(props) {
    super(props);
    this.hanhandleClick=this.handleClick.bind(this)
  }
  handleClick(e){
    this.props.func(e.target.name)
  }
  render() {
    const filelist = this.props.fileList;
    const removerfile = this.props.func
    const listItem = filelist.map((list)=>
      <li><Link href={list.url}>文件{list.id}</Link><input type="button" value="删除" name={list.id} onClick={this.hanhandleClick}/></li>
    )
    return (
      <div>
          <ul>
            {listItem}
          </ul>
      </div>
    );
  }
}
export default FileList;
