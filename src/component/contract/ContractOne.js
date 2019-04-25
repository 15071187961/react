import React from 'react'
import {Row,Col,Radio,DatePicker,Cascader,Input,InputNumber,Button,Form,Checkbox,TimePicker } from 'antd'
import {options} from './Option'
import FormIcon from "./FormIcon";
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const plainOptions  = [
  { label: '工作日', value: '工作日' },
  { label: '周末', value: '周末' },
];
const format = 'HH:mm';
class FormOne extends React.Component{
  constructor(props){
    super(props)
    this.state={
      from:{
        work_scope:1
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const _that=this
    this.props.form.validateFields((err,feidsValues)=>{
      if(!err){
        console.log(feidsValues['workTime'])
        const data={
          ...feidsValues,
          workTime:feidsValues.workTime.map(value => value.format("YYYY-MM-DD"))
        }
        _that.props.submitFormOne(data)
        _that.props.next(1)
      }
    })
  }
  render() {
    const inputwidth={width:"100%"}
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="my-3">
          <h6 className="mt-5">选择工作时间</h6>
          <Form.Item>
            {getFieldDecorator('workDay',{
              rules:[{required:true,message:'请选择工作时间'}]
            })(
              <CheckboxGroup options={plainOptions}/>
            )}
          </Form.Item>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator('workTime', {
                rules:[{required:true,message:'请选择时间'}]
              })(
                <RangePicker style={inputwidth} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h6>每周工作时长</h6>
            <Form.Item>
              {getFieldDecorator("weekWorkTime",{
                rules:[{required:true,message:'请选择工作时间'}]
              })(
                <RadioGroup>
                    <Radio value={10}>15小时一下</Radio>
                    <Radio value={15}>15-25小时</Radio>
                    <Radio value={25}>25-40小时</Radio>
                    <Radio value={40}>40小时以上</Radio>
                </RadioGroup>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h6>可工作区域</h6>
            <Form.Item>
              {getFieldDecorator("workScope",{
                rules:[{required:true,message:'请选择工作地点'}]
              })(
                <RadioGroup>
                  <Radio value="远程工作">远程工作</Radio>
                  <Radio value="驻场工作">驻场工作</Radio>
                  <Radio value="其他">其他</Radio>
                </RadioGroup>
              )}
            </Form.Item>
          </Col>
        </Row>
        <h6>可选工作地点</h6>
        <Row className="d-flex align-items-stretch">
          <Col span={20}>
            <Form.Item>
              {getFieldDecorator("address",{
                rules:[{required:true,message:'请选择居住地点'}]
              })(
                <Cascader className="my-3" style={inputwidth} options={options} onChage={this.onChange} placeholder="请选择居住地址"></Cascader>
              )}
            </Form.Item>
          </Col>
          <Col span={4} className="pt-4 pl-1">
            住:(可选择驻场地点)
          </Col>
        </Row>
        <h6>日薪</h6>
        <Row>
          <Col span={20}>
            <Form.Item>
              {getFieldDecorator('price',{
                rules: [
                  {required: true,message: "请填写日薪"},
                  ]
              })(
                <InputNumber style={inputwidth} min={1} max={999999999}/>
              )}
            </Form.Item>
          </Col>
          <Col span={4} className="pt-3 pl-1">
            元/每天&nbsp;&nbsp;(8小时)
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col span={3}>
            <Form.Item >
              <Button type="primary" htmlType="submit">下一步</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
const ContractOne=Form.create({name:'validate_other'})(FormOne)
export  default ContractOne;
