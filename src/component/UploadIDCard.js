import React from 'react';
import { Upload, Icon, Modal } from 'antd';
const user_id_check =  localStorage.getItem("hyquser_id");
const token_check =  localStorage.getItem("hyqutoken");


class UploadIDCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            imgData:{
                user_id_check:user_id_check,
                token_check:token_check,
                file:this.props.name
            },
        };
        this.handleChange = this.handleChange.bind(this)
    }


    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange({ fileList }){
        const _that = this;
        const _fileList = { fileList };

        if(_fileList.fileList.length>0){
            const reponse = _fileList.fileList[0].response
            if(reponse){
                _that.props.IdCardUpload(reponse.data)

            }
        }





        this.setState({ fileList })

    }
    render() {
        const { previewVisible, previewImage, fileList } = this.state;

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">{this.props.titleName}</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="user/api/file_upload"
                    listType="picture-card"
                    fileList={fileList}
                    data={this.state.imgData}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}
export default UploadIDCard;
