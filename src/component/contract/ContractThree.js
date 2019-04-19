import React from 'react'
import {Form,Row,Col,Icon,Select,Input,Button} from 'antd';
import FileUpload from "../../page/FileUpload";
const Option = Select.Option;
const { TextArea } = Input;
let id = 0
class FormThree extends React.Component{
  constructor(props){
    super(props)
    this.state = {fileList: [], file: []}
    this.fileOnChange = this.fileOnChange.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.removerSkill = this.removerSkill.bind(this)
    this.addProject = this.addProject.bind(this)
    this.removerProject = this.removerProject.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  fileOnChange(file){
    console.log(file)
    this.setState({file:file})
  }
  handleSubmit(e){
    e.preventDefault();
    const _that = this;
    this.props.form.validateFields((err,values)=>{
      if(!err){
        let skill=[
          {
            name :values.skillName,
            fen  :values.skillPin,
          }
        ]
        if(values.reskillName){
          for (let i=0;i<values.reskillName.length;i++){
            skill.push(
              {
                name:values.skillName[i],
                fen:values.skillPin,
              }
            )
          }
        }
        let project = [
          {
            name:values.projectName,
            type:values.projectType,
            link:values.projectLink,
            key:values.projectGongneng,
            des:values.projectDes,
            z:values.projectZhize
          }
        ]
        if(values.reprojectName){
          for(let j =0;values.reprojectName.length;j++){
            project.push(
              {
                name:values.reprojectName[j],
                type:values.reprojectType[j],
                link:values.reprojectLink[j],
                key:values.reprojectGongneng[j],
                des:values.reprojectDes[j],
                z:values.reprojectZhize[j]
              }
            )
          }
        }
        const data={
          skill:skill,
          project:project,
        }
        _that.props.submitFormThree(data)
      }
    })
  }
  addSkill(){
    const {form} = this.props
    const skill = form.getFieldValue('skill');
    const netskill = skill.concat(id++)
    form.setFieldsValue({
      skill: netskill
    })
  }
  removerSkill(k){
    const {form} = this.props;
    const skill = form.getFieldValue('skill')
    if(skill.length === 0 ){
      return
    }
    form.setFieldsValue({
      skill:skill.filter(skill => skill !== k)
    })
  }
  addProject(){
    const {form}  = this.props
    const project = form.getFieldValue('project');
    const netproject= project.concat(id++)
    form.setFieldsValue({
      project:netproject
    })
  }

  removerProject(k){
    const {form}  =this.props;
    const project = form.getFieldValue('project')
    if(project.length === 0){
      return
    }
    form.setFieldsValue({
      project: project.filter(project =>project !==k)
    })
  }


  render() {
    const {getFieldDecorator,getFieldValue} = this.props.form;
    getFieldDecorator('skill',{initialValue: [] })
    const skill = getFieldValue('skill')
    const skillList = skill.map((k,index)=>(
      <Row key={index}>
        <h6 className=" d-flex justify-content-end">
          {skill.length>0?(<span onClick={()=>this.removerSkill(k)} className="text-danger d-flex align-items-center">
             <Icon type="plus" className="mx-1"/><span>删除技能详情</span>
            </span>):null}
        </h6>
        <Col span={11}>
          <div>技能描述</div>
          <Form.Item>
            {getFieldDecorator(`reskillName[${k}]`,{
              rules:[{required:true,message:"填写单个技能名称"}]
            })(
              <Input plaecholder="填写单个技能名称"/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={11}>
          <div>经验自评（1分为新入门，5分为满分）</div>
          <Form.Item>
            {getFieldDecorator(`reskillPin[${k}]`,{
              rules:[{required:true,message:"填写单个技能名称"}]
            })(
              <Select placeholder="评分">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      </Row>
    ))
    getFieldDecorator('project',{initialValue: [] })
    const project = getFieldValue('project')
    const projectList = project.map((k,index)=>(
      <Row key={k}>
        <h6 className="my-3 d-flex justify-content-between">
          <span>工作详情</span>
          {project.length>0?(<span onClick={()=>this.removerProject(k)} className="text-danger d-flex align-items-center">
             <Icon type="plus" className="mx-1"/><span>删除工作详情</span>
           </span>):null}
        </h6>
        <Col span={11}>
          <div>工作名称</div>
          <Form.Item>
            {getFieldDecorator(`reprojectName[$[k]`)(
              <Input placeholder="50字以内"/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={11}>
          <div>行业类型</div>
          <Form.Item>
            {getFieldDecorator(`reprojectType[${k}]`)(
              <Select placeholder="行业类型">
                <Option value="物流运输">物流运输</Option>
                <Option value="建筑">建筑</Option>
                <Option value="教育">教育</Option>
                <Option value="巴拉巴拉">巴拉巴拉</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
        <Col span={11}>
          <div>工作链接</div>
          <Form.Item>
            {getFieldDecorator(`reprojectLink[${k}]`)(
              <Input placeholder="例如：http：//"/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={11}>
          <div>关键功能</div>
          <Form.Item>
            {getFieldDecorator(`reprojectGongneng[${k}]`)(
              <Select placeholder="关键功能">
                <Option value="物流运输">物流运输</Option>
                <Option value="建筑">建筑</Option>
                <Option value="教育">教育</Option>
                <Option value="巴拉巴拉">巴拉巴拉</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
        <Col span={24}>
          <div>工作简介</div>
          <Form.Item>
            {getFieldDecorator(`reprojectDes[${k}]`)(
              <TextArea rows={5} placeholder={"请描述工作主要内容，帮助解决的问题。"}/>
            )}
          </Form.Item>
        </Col>
        <Col span={24}>
          <div>工作职责</div>
          <Form.Item>
            {getFieldDecorator(`projectDesTow[${k}]`)(
              <TextArea rows={5} placeholder={"请描述工作主要内容，帮助解决的问题。"}/>
            )}
          </Form.Item>
        </Col>
      </Row>
    ))
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <h6 className="my-3 mt-5 d-flex justify-content-between">
            <span>技能详情</span>
            <span onClick={this.addSkill} className="text-warning d-flex align-items-center">
             <Icon type="plus" className="mx-1"/><span>添加新的技能</span>
            </span>
          </h6>
          <Col span={11}>
            <div>技能描述</div>
            <Form.Item>
              {getFieldDecorator("skillName",{
                rules:[{required:true,message:'填写单个技能名称'}]
              })(
                <Input plaecholder="填写单个技能名称"/>
              )}
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={11}>
            <div>经验自评（1分为新入门，5分为满分）</div>
            <Form.Item>
              {getFieldDecorator("skillPin",{
                rules:[{required:true,message:'请填写评分'}]
              })(
                <Select placeholder="评分">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        {skillList}
        <Row>
          <h6 className="my-3 d-flex justify-content-between">
            <span>工作详情</span>
            <span onClick={this.addProject} className="text-warning d-flex align-items-center">
             <Icon type="plus" className="mx-1"/><span>添加新的详情</span>
            </span>
          </h6>
          <Col span={11}>
            <div>工作名称</div>
            <Form.Item>
              {getFieldDecorator("projectName",{
                rules:[{required:true,message:'请填写项目名称'}]
              })(
                <Input placeholder="50字以内"/>
              )}
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={11}>
            <div>行业类型</div>
            <Form.Item>
              {getFieldDecorator("projectType",{
                rules:[{required:true,message:'请选择行业类型'}]
              })(
                <Select placeholder="行业类型">
                  <Option value="物流运输">物流运输</Option>
                  <Option value="建筑">建筑</Option>
                  <Option value="教育">教育</Option>
                  <Option value="巴拉巴拉">巴拉巴拉</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={11}>
            <div>工作链接</div>
            <Form.Item>
              {getFieldDecorator("projectLink")(
                <Input placeholder="例如：http：//"/>
              )}
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={11}>
            <div>关键功能</div>
            <Form.Item>
              {getFieldDecorator("projectGongneng",{
                rules:[{required:true,message:'请选择关键功能'}]
              })(
                <Select placeholder="关键功能">
                  <Option value="物流运输">物流运输</Option>
                  <Option value="建筑">建筑</Option>
                  <Option value="教育">教育</Option>
                  <Option value="巴拉巴拉">巴拉巴拉</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <div>工作简介</div>
            <Form.Item>
              {getFieldDecorator("projectDes",{
                rules:[{required:true,message:'请描述工作主要内容'}]
              })(
                <TextArea rows={5} placeholder={"请描述工作主要内容，帮助解决的问题。"}/>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <div>工作职责</div>
            <Form.Item>
              {getFieldDecorator("projectZhize",{
                rules:[{required:true,message:'请描述工作主要内容'}]
              })(
                <TextArea rows={5} placeholder={"请描述工作主要内容，帮助解决的问题。"}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        {projectList}
        <Row>
          <Col span={24}>
            <FileUpload fileOnChange={this.fileOnChange}/>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="mt-5 d-flex justify-content-center">
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
const ContractThree = Form.create({name:"form-three"})(FormThree)

export  default ContractThree;
