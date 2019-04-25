import React from  'react'
import {Modal,Form,Input,Button,message} from 'antd'
import  ProjectFileUpload from './ProjectFileUpload'
import axios from 'axios'

class  GoodOrder extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const {
      visible, onCancel, onCreate, form,onChange
    } = this.props;
    const {getFieldDecorator } = form;
    return (
      <div>
        <Modal
          title="提交申请"
          visible={visible}
          onOk={onCreate}
          onCancel={onCancel}
        >
          <Form>
            <Form.Item>
              {getFieldDecorator ('msg',{
                rules:[{required:true,message:'请填写声请理由'}]
              })(
                <Input.TextArea placeholder="请填写声请理由"/>
              )}
            </Form.Item>
            <Form.Item>
              <ProjectFileUpload onChange={onChange} listtyp="text" uploadtitle="上传您自己的作品"/>
            </Form.Item>
          </Form>
        </Modal>

      </div>
    );
  }
}
const GoodOrders = Form.create({name:'goods_order'})(GoodOrder);

class ProjectModal extends  React.Component{
  constructor(props){
    super(props)
    this.state = {visible:false,fileList:[],msg:""}
  }
  showModal = (e) => {
    this.setState({visible:true})
  }
  handleCancel = (e) => {
    this.setState({visible:false})
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  handleCreate  = () => {
    const filelist = this.state.fileList.map((key) =>{
      return key.url
    })
    const form = this.formRef.props.form;
    const _that =this;
    form.validateFields((err,values) =>{
      if(err){
        return
      }
      form.resetFields();
      this.setState({visible:false});
      _that.setState({msg:values.msg})
      axios.post("/user/goods_order/add",{
        user_id_check:_that.props.userinfo.user_id_check,
        token_check:_that.props.userinfo.token_check,
        goods_id:_that.props.userinfo.projectinfo.id,
        msg:values.msg,
        file:filelist.join(",")
      }).then(function (response) {
        if(response.res == 0){
          message.error(response.data)
        }else{
          message.success(response.data.err)
        }
      }).catch(function (err) {
        alert(err)
      })
    })

  }
  onChange = (value) => {
    this.setState({file:value})
  };
  render() {
    return (
      <div>
        <button className="btn btn-warning text-white px-4 pt-2"  onClick={this.showModal}>申请项目</button>
        <GoodOrders
          wrappedComponentRef={this.saveFormRef}
          visible = {this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onChange={this.onChange}
          onRemove = {this.onRemove}
        />
      </div>
    );
  }
}
export  default ProjectModal;
