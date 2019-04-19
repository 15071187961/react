import React from 'react'
import axios from 'axios'

class FileUpload extends React.Component{
  constructor(props){
    super(props)
    this.state={fileList:[],file:[]}
    this.removerFile = this.removerFile.bind(this)
    this.fileOnChange = this.fileOnChange.bind(this)
  }
  removerFile(e){
    const  index = e.target.getAttribute("data-index")
    const newfile = this.state.file.splice(index,1)
    const newFileList = this
    this.setState(function (prev,props) {
      return {
        file:prev.file.splice(index,1)
      }
    })
    this.setState(function (prev, props) {
      return{
        file:prev.fileList.splice(index,1)
      }
    })
    this.props.fileOnChange(this.state.file)
  }
  fileOnChange(e){
    const fileDdate = e.target.files[0];
    const filelength = e.target.files.length
    const _that = this;
    const file=e.target.files[0]
    const format = new FormData();
    format.append("file",file);
    const user_id_check = localStorage.getItem("hyquser_id")
    const token_check   = localStorage.getItem("hyqutoken")
    axios.post("/user/api/file_upload",{
      file:format.name,
      user_id_check:user_id_check,
      token_check:token_check
    },{
      headers:{"Conten-Type" : "multipart/form-data"}
    }).then(function (response) {
      console.log(response)
      const fileId= response.data.data.id
      _that.setState({
        fileList: _that.state.fileList.concat(response.data.data)
      })
      _that.setState({
        file:_that.state.file.concat(fileId)
      })
      _that.props.fileOnChange(_that.state.file)
    }).catch(function (error) {
      alert(error)
    })
  }
  render() {
    return (
      <div className="" style={{border: "2px #eeeeee dashed"}}>
          {this.state.fileList.map((value,index)=>
            <div className="my-2" key={index}>
              {value.url}
              <span className="iconfont icon-icon-test p-2 text-danger border rounded"
                    onClick={this.removerFile} data-index={index}></span>
            </div>
          )}
        <div className="row">
          <div className="col-12 p-5 d-flex justify-content-center  align-content-center">
            <div className="btn btn-warning position-relative text-white px-3">上传文件
              <input type="file" className="position-absolute w-100 h-100"  onChange={this.fileOnChange} style={{opacity: "0",left:"0",top:"0"}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FileUpload;
