import React from 'react'
import '../../css/upload.css'
import {Upload,Modal,Button,Icon,message} from 'antd'
const user_id_check =  localStorage.getItem("hyquser_id");
const token_check =  localStorage.getItem("hyqutoken");
class ProjectFileUpload extends  React.Component{
  constructor(props){
    super(props)
    this.state={
      previewVisible: false,
      previewImage: '',
      fileList: [],
      imgData:{
        user_id_check:user_id_check,
        token_check:token_check,
        file:"作品图片"
      },
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleCancel = () => this.setState({ previewVisible: false })
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleChange(info){
      console.log(info.file.status)
      const status = info.file.status === "uploading" || info.file.status === "done" || info.file.status === "removed";
      if(status){
        this.setState({fileList:info.fileList})
        let file = info.fileList.map(value => {
          if(value.response){
            return value.response.data.url
          }
        })
        this.props.onChange(file)
      }


  }
  render() {
    const _that = this;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div className="d-flex flex-column justify-content-between align-items-center">
        <Icon type="upload" className="fontSize35" />
        <div className="text-center">{this.props.uploadtitle}</div>
      </div>
    );
    return (
      <div>
        <Upload
          action= '/user/api/file_upload'
          data={this.state.imgData}
          fileList={fileList}
          onPreview={this.handlePreview}
          listType={this.props.listtyp}
          onChange={this.handleChange}
          beforeUpload={this.props.beforeUpload}
        >
          { fileList.length>= this.props.filemaxlenght ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export  default ProjectFileUpload;
