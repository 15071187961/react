import React from 'react'
import axios from 'axios'
import IsLogin from './IsLogin'
import Huibiao from './Huibiao'
import Header from './Header'
import ajaxData from '../http/ajaxDada'
import '../css/xuqiu.css'

class XuQuFaBu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user_id_check:"",
      token_check:"",
      title:'',
      price:"",
      piao:'',
      type:"",
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
    this.fileChange = this.fileChange.bind(this);
    this.removerFile = this.removerFile.bind(this);
  }
  componentWillMount(){
    IsLogin()
    const userid = localStorage.getItem("hyquser_id")
    const usertoken = localStorage.getItem("hyqutoken")
    this.setState({user_id_check:userid})
    this.setState({token_check:usertoken})
  }
  priceChange(e){
    this.setState({price:e.target.value})
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
      file  :_that.state.file
    }).then(function (response) {
      ajaxData(response)
      console.log(response)
    }).catch(function (err) {
      alert(err)
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
  fileChange(e){
    const fileDdate = e.target.files[0];
    const filelength = e.target.files.length
    const _that = this;
    for(let i=0;i<filelength;i++){
      const file=e.target.files[i]
      const format = new FormData();
      format.append("file",file);
      axios.post("/user/api/file_upload",format,{
        headers:{"Conten-Type" : "multipart/form-data"}
      }).then(function (response) {
        const fileId= response.data.data.id
        _that.setState({
          fileList: _that.state.fileList.concat(response.data.data)
        })
        _that.setState({
          file:_that.state.file.concat(fileId)
        })
      }).catch(function (error) {
        alert(error)
      })
    }
  }
  removerFile(e){
    const  index = e.target.getAttribute("data-index")
    const newfile = this.state.file.splice(index,1)
    const newFileList = this
    this.setState(function (prev,props) {
      console.log(prev.file.splice(index,1))
      return {
        file:prev.file.splice(index,1)
      }
    })
    this.setState(function (prev, props) {
      console.log(prev.fileList.splice(index,1))
      return{
        file:prev.fileList.splice(index,1)
      }
    })
  }

  render() {
    const state0=0;
    const state1=1;
    const fileList = this.state.fileList;
    return (
      <div className="container-fluid p-0">
        <div className="container  " style={{marginBottom:"100px"}}>
          <h3 className="fontSize20 mt-5" >发布项目</h3>
          <div className="row shadow">
            <div className="col-12 px-5 border">
              <form onSubmit={this.handleSubmit}>
                <Huibiao num={1} title="项目名称"/>
                <div className="input-group pl-4">
                  <input type="text"  name="title" className="form-control rounded-0 mb-5" value={this.state.title}
                         style={{height: "46px"}} placeholder="请输入项目名称，20个字以内" onChange={this.titleChange}/>
                </div>
                <Huibiao num={2} title="项目预算"/>
                <div className="input-group d-flex align-items-center pl-4 mb-5">
                  <input type="number" name="price " onChange={this.priceChange}  value={this.state.price } style={{width:" 200px",height:" 46px"}} placeholder="请输入您的预算" />
                  <div className="input-group-append">
                    <div className="custom-radio custom-control mx-3">
                      <input type="radio" id="customRadio1"  name="piao" value={state0} onClick={this.piaoChange} className="custom-control-input" />
                      <label className="custom-control-label 3"   htmlFor="customRadio1">不需要开发票</label>
                    </div>
                    <div className="custom-radio custom-control mx-3">
                      <input type="radio" id="customRadio2" name="piao"  value={state1} onClick={this.piaoChange} className="custom-control-input" />
                      <label className="custom-control-label "   htmlFor="customRadio2">需要开发票(税率6%)</label>
                    </div>
                  </div>
                </div>
                <Huibiao num={3} title="选择类型"/>
                <div className="form-group d-flex">
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio" name='type' value="1" onClick={this.typeChange} className="sr-only" id="chenkone" />
                    <label htmlFor="chenkone"
                           className="iconfont icon-huabanfuben1 border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">互联网开发</p>
                  </div>
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio"  name='type' value="2" onClick={this.typeChange} className="sr-only" id="chenktow" />
                    <label htmlFor="chenktow" className="iconfont icon-fangzi border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">房地产</p>
                  </div>
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio"  name='type' value="3" onClick={this.typeChange} className="sr-only" id="chenkthree" />
                    <label htmlFor="chenkthree"
                           className="iconfont icon-buoumaotubiao39 border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">物流</p>
                  </div>
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio"  name='type' value="4" onClick={this.typeChange} className="sr-only" id="chenkfour" />
                    <label htmlFor="chenkfour" className="iconfont icon-fuwu border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">服务</p>
                  </div>
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio"  name='type' value="5" onClick={this.typeChange} className="sr-only" id="chenkfive" />
                    <label htmlFor="chenkfive" className="iconfont icon-keji border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">科技</p>
                  </div>
                  <div className="curton-chenkbox position-relative mx-3">
                    <input type="radio" className="sr-only" value="6" onClick={this.typeChange}   id="chenksix" />
                    <label htmlFor="chenksix" className="iconfont icon-zixun border px-4 text-secondary "></label>
                    <p className="position-absolute text-center  w-100">咨询</p>
                  </div>
                </div>
                <Huibiao num={4} title="填写介绍"/>
                <div className="form-group ml-3">
                <textarea className="form-control" value={this.state.des} name="des"
                          onChange={this.desChange} style={{height: "150px"}}></textarea>
                </div>
                <Huibiao num={5} title="上传相关资料"/>
                <ul>
                  {
                    fileList.map((value,index)=>
                      <li key={index}>{value.url}<span className="iconfont icon-icon-test p-2 text-danger border rounded" onClick={this.removerFile} data-index={index}></span></li>
                    )
                  }
                </ul>
                <div className="form-group ml-3 border">
                  <input type="file" onChange={this.fileChange} name="file"/>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <input type="submit" value="发布" className="btn btn-warning px-4 text-white" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export  default  XuQuFaBu;
