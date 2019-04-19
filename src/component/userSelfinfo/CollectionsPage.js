import React from 'react'
import {
  Button, Modal, Form, Input, Radio,message
} from 'antd';
import axios from 'axios'
import ProjectFileUpload from "../project/ProjectFileUpload";
const user_id_check = localStorage.getItem("hyquser_id")
const token_check  = localStorage.getItem("hyqutoken")

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onCreate, form,onChange,sourceonChange
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="上传作品相关文件"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item>
              {getFieldDecorator("over",{
                rules:[{required:true,message:'请上传相关资料'}]
              })(
                <ProjectFileUpload onChange={onChange} listtyp="picture" filemaxlenght={6}  uploadtitle="上传作品相关图片最多上传6张"/>
              )}

            </Form.Item>
            <Form.Item>
              {getFieldDecorator("source",{
                rules:[{required:true,message:'请上传相关图片'}]
              })(
                <ProjectFileUpload   onChange={sourceonChange} filemaxlenght={1} uploadtitle="请将所有源文件打包后上传"/>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const  _that = this;

      console.log(this.state)
      console.log(this.props)
      axios.post("/user/goods_order/ok",{
        user_id_check:user_id_check,
        token_check:token_check,
        id:_that.props.orderid,
        over:_that.state.over.join(','),
        source:_that.state.source.join(',')
      }).then(function(response){
        console.log(response)
        if(response.data.res === 1 ){
          message.success("提交成功")
        }
      }).catch(function (err) {
        alert(err)
      })
      form.resetFields();
      this.setState({ visible: false });
    });

  }
  onChange = (file) =>{
    console.log(file)
    this.setState({over:file});
  }
  sourceonChange = (file) => {
    console.log(file)
    this.setState({source:file});
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>上传作品</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onChange={this.onChange}
          sourceonChange={this.sourceonChange}
        />
      </div>
    );
  }
}
export default CollectionsPage;
