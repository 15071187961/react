import React from 'react'
import {Form,Row,Col,Input,Button,message,Cascader,Icon} from 'antd'
import ProjectFileUpload from "../project/ProjectFileUpload";
import axios from 'axios'
import {user_id_check,token_check} from '../userInfo/LocalStorage'
import {options} from "../contract/Option";
function beforeUpload(file) {
  const isJPG = file.type.indexOf("image")>=0
  if (!isJPG) {
    message.error('只能上传jpeg图片');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('请上传2M一下的图片');
  }
  return isJPG && isLt2M ;
}
class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userdata:this.props.userInfor,
      face: [],
      fileList: [{
        uid: '-1',
        url: this.props.userInfor.face,
      }],
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const form = this.props.form;
    form.validateFields((err, values) => {
      if(err){
        return
      }
      const  _that = this;
      axios.post("/user/info/edit",{
        user_id_check:user_id_check,
        token_check:token_check,
        email:values.email,
        face:_that.state.face.join(","),
        address:values.address.join(',')
      }).then(function(response){
        console.log(response)
        if(response.data.res === 1 ){
          message.success("提交成功")
          form.resetFields();
        }
      }).catch(function (err) {
        alert(err)
      })
    })
  }
  onChange = (url) =>{
    this.setState({face:url})
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const inputwidth={width:"100%"}
    return (
      <Form  onSubmit={this.handleSubmit} className="p-5">
        <Row>
          <Col span={4} className="fontSize18">头像
          </Col>
          <Col span={10}>
            <img src={this.state.userdata.face} width="180px" height="180px"  style={{borderRadius:"50%"}} alt=""/>
          </Col>
          <Col span={10}>
            <Form.Item >
              {getFieldDecorator("face",{
                rules:[{required:true,message:"请上传一张图片"}]
              })(
                <ProjectFileUpload
                  listtyp="picture-card"
                  filemaxlenght={1}
                  uploadtitle="上传新头像"
                  onChange={this.onChange}
                  beforeUpload={beforeUpload}
                />
              )}
            </Form.Item>
          </Col>

        </Row>
        <hr/>
        <hr/>
        <Row >
          <Col span={4} className="fontSize18">邮箱
          </Col>
          <Col span={15}>
            <Form.Item >
              {getFieldDecorator("email", {
                initialValue:this.state.userdata.email,
                rules: [
                  {required:true,message:"请填写邮箱地址"},
                  {pattern:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,message:"邮箱格式不正确"}
                ]
              })(
                <Input placeholder="请填写邮箱地址" />
              )}
            </Form.Item>
          </Col>
          <Col span={5} className="text-right" style={{marginTop:"10px"}}></Col>
        </Row>
        <hr/>
        <Row>
          <Col span={4} className="fontSize18">地址</Col>
          <Col span={15}>
            <Form.Item>
              {getFieldDecorator("address",{
                initialValue:this.state.userdata.address.split(","),
                rules:[{required:true,message:'请选择居住地点'}]
              })(
                <Cascader className="my-3" style={inputwidth} options={options}  placeholder="请选择居住地址"></Cascader>
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center my-5">
            <Form.Item>
                <Button type="primary" htmlType="submit" >确认修改</Button>
            </Form.Item>
          </div>
        </div>



      </Form>
    );
  }
}
const UserSeting  = Form.create({name:"user_form"})(UserForm)
export default UserSeting;
