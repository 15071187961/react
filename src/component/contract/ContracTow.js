import React from 'react'
import axios from 'axios'
import moment from 'moment'
import {Form,Row,Col,Select,Button,DatePicker,Icon,Input,Upload} from 'antd'
import FormIcon from "./FormIcon";
import '../../css/Title.css'
import FileUpload from "../../page/FileUpload";
import ProjectFileUpload from "../project/ProjectFileUpload";
const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;
let id = 0;
class FormTow extends React.Component{
  constructor(props) {
    super(props)
    this.state = {fileList: [], file: []}
    this.fileOnChange = this.fileOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.workAdd = this.workAdd.bind(this)
    this.workRemove = this.workRemove.bind(this)
    this.addStu = this.addStu.bind(this)
    this.stuRmove = this.stuRmove.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const _that = this;
    this.props.form.validateFields((err,values)=>{
      if(!err){
        let work= [
          {
            begin:values.wokeTime.map(value => value.format("YYYY-MM-DD"))[0],
            end:values.wokeTime.map(value => value.format("YYYY-MM-DD"))[1],
            company:values.company,
            job:values.job,
            des:values.des,
          }
         ]
        if(values.rewokeTime){
          for (let i=0;i<values.rewokeTime.length;i++){
            work.push(
              {
                begin:values.rewokeTime[i].map(value => value.format("YYYY-MM-DD"))[0],
                end:values.rewokeTime[i].map(value => value.format("YYYY-MM-DD"))[1],
                company:values.recompany[i],
                job:values.rejob[i],
                des:values.redes[i]
              }
            )
          }
        }
        let stu =[
          {
            begin:values.stuTime.map(value => value.format("YYYY-MM-DD"))[0],
            end:values.stuTime.map(value => value.format("YYYY-MM-DD"))[1],
            school :values.jioayuYxm,
            job :values.jiaoyuZy,
            li:values.jioayuXl,
            des:values.study,
          }
        ]
        if(values.restuTime){
          for (let j= 0;j<values.restuTime.length;j++){
            stu.push(
              {
                begin:values.restuTime[j].map(value => value.format("YYYY-MM-DD"))[0],
                end:values.restuTime[j].map(value => value.format("YYYY-MM-DD"))[1],
                school:values.rejioayuYxm[j],
                job:values.rejiaoyuZy[j],
                li:values.rejioayuXl[j],
                des:values.restudy[j]
              }
            )
          }
        }
        const data ={
          pationStatus:values.pationStatus,
          pationFangxiang:values.pationFangxiang,
          pationJob:values.pationJob,
          self:values.self,
          work:work,
          stu:stu
        }
        _that.props.submitFormTow(data)
        _that.props.next(2)
      }
    })
  }
  fileOnChange(file){
    console.log(file)
    this.setState({file:file})
  }
  workAdd(){
    const {form} = this.props
    const keys = form.getFieldValue('keys');
    const netkeys = keys.concat(id++)
    form.setFieldsValue({
        keys: netkeys
    })
  }
  addStu(){
    const {form}  = this.props
    const stu = form.getFieldValue('stu');
    const netstu= stu.concat(id++)
    form.setFieldsValue({
      stu:netstu
    })
  }
  stuRmove(k){
    const {form} = this.props;
    const stu = form.getFieldValue('stu')
    if(stu.length ===0 ){
      return
    }
    form.setFieldsValue({
      stu:stu.filter(stu => stu !== k)
    })
  }
  workRemove(k){
    const {form}  =this.props;
    const keys = form.getFieldValue('keys')
    if(keys.length === 0){
      return
    }
    form.setFieldsValue({
      keys: keys.filter(key =>key !==k)
    })
  }


  render() {
    const inputwidth={width:"100%"}
    const {getFieldDecorator,getFieldValue} = this.props.form;
    getFieldDecorator('keys',{initialValue: [] })
    const keys = getFieldValue('keys')
    const formItems = keys.map((k,index)=>(
      <Row key={k}>
        <h6 className="d-flex justify-content-between">
          <span>工作经历/{index+2}</span>
          {keys.length>0?( <span onClick={()=>this.workRemove(k)}  className="text-danger d-flex align-items-center">
              <Icon className="mx-1" type="minus-circle-o"/>删除工作经历
          </span>):null}
        </h6>
        <Col span={24}>
          <Form.Item>
            {getFieldDecorator(`rewokeTime[${k}]`, {
              rules:[{required:true,message:'请选择时间'}]
            })(
              <RangePicker style={inputwidth} />
            )}
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item>
            {getFieldDecorator(`recompany[${k}]`,{
              rules:[
                {required:true,message:'请填写公司名称'},
                {max:50,message:"最多输入50个字符"}
              ]
            })(
              <Input placeholder="请填写公司名称"/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={11}>
          <Form.Item>
            {getFieldDecorator(`rejob[${k}]`,{
              rules:[{required:true,message:'请填写您的职位'}]
            })(
              <Input placeholder="请填写您的职位"/>
            )}
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item>
            {getFieldDecorator(`redes[${k}]`,{
              rules:[
                {required:true,message:'请简要说明您的工作内容'},
                {max:150,message:"最多输入150个字符"}
              ]
            })(
              <TextArea rows={5} placeholder="请简要说明您的工作内容"/>
            )}
          </Form.Item>
        </Col>
      </Row>
    ))
    getFieldDecorator('stu',{initialValue: [] });
    const stu = getFieldValue('stu')
    const stuItem = stu.map((k,index)=>
      <div key={index}>
        <Row>
          <Col span={24}>
            <h6 className="d-flex my-4 justify-content-between">
              <span>教育经历/1</span>
              {stu.length>0? (<span onClick={()=>this.stuRmove(k)} className="text-danger d-flex align-items-center">
               <Icon className="mx-1" type="plus"/>删除教育经历
              </span>):null}
            </h6>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator(`restuTime[${k}]`, {
                rules:[{required:true,message:'请选择时间'}]
              })(
                <RangePicker style={inputwidth} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator(`rejioayuYxm[${k}]`,{
                rules:[
                  {required:true,message:'请输入院校名称'},
                  {max:20,message:"最多输入20个字符"}
                ]
              })(
                <Input placeholder="请输入院校名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator(`rejiaoyuZy[${k}]`,{
                rules:[
                  {required:true,message:'请输入专业名称'},
                  {max:20,message:"最多输入20个字符"}
                ]
              })(
                <Input placeholder="请输入专业名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator(`rejiaoyuXl[${k}]`,{
                rules:[{required:true,message:'请选择学历'}]
              })(
                <Select placeholder="请输入学历">
                  <Option value="大学">大学</Option>
                  <Option value="高中">高中</Option>
                  <Option value="研究生">研究生</Option>
                  <Option value="博士">博士</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator(`restudy[${k}]`,{
                rules:[
                  {required:true,message:'请填写个人经历'},
                  {max:150,message:'最多输入150个字符'},
                ]
              })(
                <TextArea rows={5} placeholder="请说明您的成就，如在校获奖经历，实践经历等（150字以内）"/>
              )}
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
    return (
      <Form onSubmit={this.handleSubmit}>
        <h6 className="mt-5">职业状态</h6>
        {/*职业状态*/}
        <Row gutter={10}>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('pationStatus',{
                rules:[{required:true,message:'请选择工作状态'}]
              })(
                <Select placeholder="请选择工作状态">
                  <Option value="jack">jack</Option>
                  <Option value="lucy">lucy</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('pationFangxiang',{
                rules:[{required:true,message:'选择职业方向'}]
              })(
                <Select placeholder="选择职业方向" >
                  <Option value="失业">失业</Option>
                  <Option value="待业">待业</Option>
                  <Option value="就业">就业</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('pationJob',{
                rules:[{required:true,message:'请选择具体职业'}]
              })(
                <Select placeholder="请选择具体职业" >
                  <Option value="土木工程">土木工程</Option>
                  <Option value="物流管理">物流管理</Option>
                  <Option value="翻译">翻译</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        工作经历
        <Row>
          <h6 className="d-flex justify-content-between">
            <span>工作经历/1</span>
            <span onClick={this.workAdd} className="text-warning d-flex align-items-center">
              <Icon className="mx-1" type="plus"/>添加工作经历
            </span>
          </h6>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator('wokeTime', {
                rules:[{required:true,message:'请选择时间'}]
              })(
                <RangePicker style={inputwidth} />
              )}
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              {getFieldDecorator("company",{
                rules:[
                  {required:true,message:'请填写公司名称'},
                  {max:50,message:"最大输入50个字符"}]
              })(
                <Input placeholder="请填写公司名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={11}>
            <Form.Item>
              {getFieldDecorator("job",{
                rules:[
                  {required:true,message:'请填写您的职位'},
                  {max:50,message:"最大输入50个字符"}]
              })(
                <Input placeholder="请填写您的职位"/>
              )}
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("des",{
                rules:[
                  {required:true,message:'请简要说明您的工作内容'},
                  {max:150,message:"最多输入150个字符"}
                ]
              })(
                <TextArea rows={5} placeholder="请简要说明您的工作内容"/>
              )}
            </Form.Item>
          </Col>
        </Row>
        {formItems}
        资料上传
        <Row>
          <Col span={24}>
            <ProjectFileUpload  onChange={this.fileOnChange}/>
          </Col>
        </Row>
        {/*教育经历时间*/}
        <Row>
          <Col span={24}>
          <h6 className="d-flex my-4 justify-content-between">
            <span>教育经历/1</span>
            <span onClick={this.addStu} className="text-warning d-flex align-items-center">
              <Icon className="mx-1" type="plus"/>添加教育经历
            </span>
          </h6>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator('stuTime', {
                rules:[{required:true,message:'请选择时间'}]
              })(
                <RangePicker style={inputwidth} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('jioayuYxm',{
                rules:[
                  {required:true,message:'请输入院校名称'},
                  {max:50,message:"最多输入50个字符"}
                ]
              })(
                <Input placeholder="请输入院校名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('jiaoyuZy',{
                rules:[
                  {required:true,message:'请输入专业名称'},
                  {max:20,message:"最多输入20个字符"}
                ]
              })(
                <Input placeholder="请输入专业名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('jioayuXl',{
                rules:[{required:true,message:'请选择学历'}]
              })(
                <Select placeholder="请输入专业名称">
                  <Option value="大学">大学</Option>
                  <Option value="高中">高中</Option>
                  <Option value="研究生">研究生</Option>
                  <Option value="博士">博士</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("study",{
                rules:[
                  {required:true,message:'请填写个人经历'},
                  {max:150,message:"最多输入150个字符"}
                  ]
              })(
                <TextArea rows={5} placeholder="请说明您的成就，如在校获奖经历，实践经历等（150字以内）"/>
              )}
            </Form.Item>
          </Col>
        </Row>
        {stuItem}
        {/*自我介绍*/}
        <Row>
          <h6 className="my-3">个人介绍</h6>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("self",{
                rules:[
                  {required:true,message:'请填写个人介绍'},
                  {max:150,message:"最多输入150个字符"}
                ]
              })(
                <TextArea rows={5} placeholder="请填写让人印象深刻的成就经历，丰富个性化信息，提高接单竞争力！"/>
              )}
            </Form.Item>
          </Col>
        </Row>
        {/*提交*/}
        <Row >
          <Col span={24} className="d-flex justify-content-center">
            <Form.Item>
              <Button type='primary' htmlType="submit">
                下一步
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
const ContractTow = Form.create({name:"form-tow"})(FormTow)
export  default ContractTow;
