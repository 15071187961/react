import  React from 'react';
import {Table, Button, Divider, Popconfirm,} from 'antd';
import axios from "axios";
import ShowPicture from './ShowPicture'

import "../../css/PayType.css";
const { Column, ColumnGroup } = Table;



class PiPeiRenYuan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            title:"匹配人员",
            data:[],
            isShowBtn:false,
            fileArr:{}
        };

        this.start = this.start.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.selectedProduct = this.selectedProduct.bind(this)
        this.querenyanshou = this.querenyanshou.bind(this)
        Object.assign(this.state,this.props)
    }
    querenyanshou(e){
        const user_id_check = localStorage.getItem("hyquser_id")
        const token_check = localStorage.getItem("hyqutoken")
        const id = e.id;
        const _googsId = this.props.orderData.id
        console.log("e.id")
        console.log(e.id)
        console.log(_googsId)
          const _that =this;
        axios.post("/user/goods/pay",{
            user_id_check: user_id_check,
            token_check:token_check,
            id: e.id,
            price:e.price,
        }).then(function(response){
               if(response.data.res ==1){
                   axios.post("/user/goods/index",{
                       user_id_check: user_id_check,
                       token_check:token_check,
                   }).then(function(response){
                       console.log("response")
                       console.log(response.data.data.data);
                       const _data = response.data.data.data
                       if(response.data.res ==1){
                           axios.post("/user/goods/index",{
                               user_id_check: user_id_check,
                               token_check:token_check,
                           }).then(function(response){
                               const _goodsdata = response.data.data.data
                               if(response.data.res ==1){
                                   for(let k=0;k<_goodsdata.length;k++){
                                       if(_goodsdata[k].id==_googsId){
                                           _that.setState({
                                               data :_goodsdata[k]["order_id_ok"]
                                           })
                                       }
                                   }

                               }else{
                                   alert(response.data.err)
                               }
                           }).catch(function(error){
                               console.log(error)
                           })
                       }else{
                           alert(response.data.err)
                       }
                   }).catch(function(error){
                       console.log(error)
                   })
               }else{
                   alert(response.data.err)
               }
        }).catch(function(error){
            console.log(error)
        })

    }
    selectedProduct(e){
        const title= e.title
        const ID=e.dataSource.id
        const selectedFile = e.dataFile
        this.state.fileArr[title] = e.dataFile
        e.dataSource.selectedFile=this.state.fileArr
        this.setState({
            data:this.state.data,
            isShowBtn:true
        })
    }
    start(){
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }

    onSelectChange(selectedRowKeys){
        console.log("xuanzeid:"+selectedRowKeys)
        this.setState({
            selectedRowKeys,
            isShowBtn:true
        });

    }

  componentWillMount(){

      const user_id_check = localStorage.getItem("hyquser_id")
      const token_check = localStorage.getItem("hyqutoken")
      const show = this.props.orderData.show=="未审核"?0:1
      const pay =  this.props.orderData.pay=="未支付"?0:1
      const suan =  this.props.orderData.suan=="未结算"?0:1
      const _that = this
      axios.post("/user/goods/index",{
          user_id_check: user_id_check,
          token_check:token_check,
          show:show,
          pay:pay,
          suan:suan,
      }).then(function(response){
          console.log("response")
          console.log(response)
          console.log(response.data.data.data)
          if(response.data.res == 1){
              const _data = response.data.data.data;
              for(let i=0;i<_data.length;i++){
                  if(_data[i].id ==_that.props.orderData.id){
                      const _DATA = _data[i].order_id_ok
                      _that.setState({
                          data:_DATA
                      })
                  }

              }


          }
      }).catch(function(error){
          console.log(error)
      })
  }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (
            <div className="mt-3 pl-2 pr-2">
                <hr/>
                <p>匹配人员名单</p>
                <Table dataSource={this.state.data} pagination={false}  rowKey="id">
                    <Column
                        title="姓名"
                        dataIndex="user_id"
                    />
                    <Column
                        title="电话"
                        dataIndex="id"
                    />
                    <Column
                        title="专业"
                        dataIndex="time"

                    />
                    <Column
                        title="上传作品"
                        dataIndex="file"
                        render={(text,record)=>{
                            const _href = text.split(",")
                            const _that = this
                            var str = []
                            _href.map(function(key,index){
                                const href = key
                                const className = "mr-1 text-warning"
                                const target ="_blank"
                                const title = "图"+index
                                str.push(<ShowPicture title={title} dataHref={href} _selectedClick={_that.selectedProduct} dataSource ={record} dataFile={key}/>)
                            })
                            return  <div className="d-flex">
                                {str}

                            </div>
                        }}
                    />
                    <Column
                        title="操作"
                        dataIndex="id"
                        render={(text,record)=>(

                            <span>

                                {record.ok=="已完结"?(record.state=="锁定"?<a href={record.source} target="_blank" className="tableBtn fontSize14">下载源文件</a>:<a href="javascript:;" value="3432" className="tableBtn fontSize14" onClick={()=>{this.querenyanshou(record)}}>确认验收</a>):""}
                            </span>
                            )}

                           /* var str = []

                            for(var key in text){
                                const href = "http://www.huiqiyun.com"+text[key]
                                const className = "mr-1 text-warning"
                                const target ="_blank"
                                str.push(<a type="primary" href={href} className="text-warning mr-1">
                                    {key}
                                </a>)
                            }

                            return  <div className="d-flex">
                                共{str.length}个
                                {str}

                            </div>*/

                    />
                </Table>

                <div className="text-center">
                    <Button
                        type="primary"


                        loading={loading}
                        style={{margin:"30px auto",display:this.state.isShowBtn?"none":"none"}}
                    >
                        确认验收
                    </Button>
                    {/* <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>*/}
                </div>
            </div>
        );
    }
}

export default PiPeiRenYuan;
