import React from 'react'
import { message } from 'antd'
import { InputNumber,Input,Form} from 'antd';
import axios from 'axios'
import IsLogin from './IsLogin'
import Huibiao from './Huibiao'
import '../css/xuqiu.css'
import BorderShadowWrap from "./BorderShadowWrap";
import FileUpload from "../page/FileUpload";
import ProjectFileUpload from "./project/ProjectFileUpload";
const { TextArea } = Input;

class XuQuFaBu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user_id_check:"",
      token_check:"",
      title:'',
      price:"",
      piao:0,
      type:1,
      des:"",
      file:[],
      fileList:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleChange = this.titleChange.bind(this)
    this.priceChange = this.priceChange.bind(this)
    this.piaoChange = this.piaoChange.bind(this)
    this.desChange = this.desChange.bind(this)
    this.typeChange = this.typeChange.bind(this);
    this.fileOnChange = this.fileOnChange.bind(this)
  }
  componentWillMount(){
      const userid = localStorage.getItem("hyquser_id")
      const usertoken = localStorage.getItem("hyqutoken")
      this.setState({user_id_check:userid})
      this.setState({token_check:usertoken})
  }
  priceChange(value){
      this.setState({price:value})
  }
  handleSubmit(e){
    e.preventDefault();
    var _that=this
    axios.post("/user/goods/add",{
      user_id_check:_that.state.user_id_check,
      token_check :_that.state.token_check ,
      title:_that.state.title,
      type :_that.state.type ,
      price :_that.state.price ,
      piao :_that.state.piao,
      des  :_that.state.des,
      file  :_that.state.file.join(',')
    }).then(function (response) {
      if(response.data.res === 1){
        message.success("提交成功")
      }else{
        message.error(response.data.err)
      }
    }).catch(function (err) {
       message.error(err)
    })
  }
  piaoChange(e){
    this.setState({piao:e.target.value})
  }
  titleChange(e){
    this.setState({title:e.target.value})
  }
  desChange(e){
    this.setState({des:e.target.value})
  }
  typeChange(e){
    const flang = e.target.checked;
    const value = e.target.value
    this.setState({type:value})
  }
  fileOnChange(file){
    console.log(file)
    this.setState({file:file})
  }
  render() {
    const piao = this.state.piao
    const fileList = this.state.fileList;
    const type = this.state.type
    return (
      <BorderShadowWrap title={'需求发布'}>
        <form onSubmit={this.handleSubmit}>
          <Huibiao num={1} title="项目名称"/>
          <div className="input-group pl-4">
            <Input placeholder="请输入项目名称，20个字以内"    className="form-control rounded-0 mb-5"  size="large"
                   name="title"  onChange={this.titleChange} value={this.state.title}/>
          </div>
          <Huibiao num={2} title="项目预算"/>
          <div className="input-group d-flex align-items-center pl-4 mb-5">
            <InputNumber min={1}  className="form-control" size="large" onChange={this.priceChange}/>
            <div className="input-group-append">
              <div className="custom-radio custom-control mx-3">
                <input type="radio" id="customRadio1"  name="piao" checked={piao == 0} value={0} onChange={this.piaoChange} className="custom-control-input" />
                <label className="custom-control-label 3"   htmlFor="customRadio1">不需要开发票</label>
              </div>
              <div className="custom-radio custom-control mx-3">
                <input type="radio" id="customRadio2" name="piao" checked={piao == 1} value={1} onChange={this.piaoChange} className="custom-control-input" />
                <label className="custom-control-label "   htmlFor="customRadio2">需要开发票(税率6%)</label>
              </div>
            </div>
          </div>
          <Huibiao num={3} title="选择类型"/>
          <div className="form-group d-flex">
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio" name='type' checked={type == 1} value="1" onChange={this.typeChange} className="sr-only" id="chenkone" />
              <label htmlFor="chenkone"
                     className="iconfont icon-huabanfuben1 border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">互联网开发</p>
            </div>
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio"  name='type' checked={type == 2} value="2" onChange={this.typeChange} className="sr-only" id="chenktow" />
              <label htmlFor="chenktow" className="iconfont icon-fangzi border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">房地产</p>
            </div>
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio"  name='type' checked={type == 3} value="3" onChange={this.typeChange} className="sr-only" id="chenkthree" />
              <label htmlFor="chenkthree"
                     className="iconfont icon-buoumaotubiao39 border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">物流</p>
            </div>
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio"  name='type' checked={type == 4} value="4" onChange={this.typeChange} className="sr-only" id="chenkfour" />
              <label htmlFor="chenkfour" className="iconfont icon-fuwu border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">服务</p>
            </div>
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio"  name='type' value="5" checked={type == 5} onChange={this.typeChange} className="sr-only" id="chenkfive" />
              <label htmlFor="chenkfive" className="iconfont icon-keji border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">科技</p>
            </div>
            <div className="curton-chenkbox position-relative mx-3">
              <input type="radio" name='type'checked={type == 6} value="6" onChange={this.typeChange}  className="sr-only"  id="chenksix" />
              <label htmlFor="chenksix" className="iconfont icon-zixun border px-4 text-secondary "></label>
              <p className="position-absolute text-center  w-100">咨询</p>
            </div>
          </div>
          <Huibiao num={4} title="填写介绍"/>
          <Form.Item className="form-group ml-3">
            <TextArea name="des"  onChange={this.desChange} value={this.state.des}
                        placeholder="请输入您的项目介绍" autosize={{ minRows: 5, maxRows: 10 }} />
          </Form.Item>
          <Huibiao num={5} title="上传相关资料"/>
         {/* <FileUpload fileOnChange={this.fileOnChange}/>*/}
          <ProjectFileUpload onChange={this.fileOnChange} uploadtitle="上传相关资料"/>
          <div className="d-flex justify-content-center my-5">
            <input type="submit" value="发布" className="btn btn-warning px-4 text-white" />
          </div>
        </form>
      </BorderShadowWrap>
    );
  }
}

export  default  XuQuFaBu;
