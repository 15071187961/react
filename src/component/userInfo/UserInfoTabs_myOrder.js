import  React from 'react'
import {Table, Divider, Tag, Button} from 'antd';
import axios from 'axios'
import { Popconfirm, message, Input } from 'antd';
import SelectComponent from "./SelectComponent";
import DropDown from "./DropDown";
import SearchComponent from "./Search";
const { Column, ColumnGroup } = Table;

class UserInfoTabsOrder extends React.Component{
    constructor(){
        super()
        this.state = {
            orderData:[],
            user_id_check:"",
            token_check:"",
            deleteID:"",
            myTask:[
                {
                    id:0,
                    text:"我发布的任务",
                },
                {
                    id:1,
                    text:"我承接的任务",
                }
            ],
            taskType:[

                {
                    id:0,
                    text:"全职任务",
                },
                {
                    id:1,
                    text:"兼职任务",
                },
                {
                    id:2,
                    text:"企业任务",
                }
            ],
            orderStatus:[
                {
                    id:0,
                    text:"审核中",
                },
                {
                    id:1,
                    text:"等待发布",
                },
                {
                    id:2,
                    text:"已发布",
                }
            ]

        };
        Object.assign(this.state,this.props)
    }
    searchMyTaskClick(e){
        console.log("我的类型")
        console.log(e)
        console.log(e.key)
    }
    searchTaskClick(e){
        console.log("业务类型")
        console.log(e)
        console.log(e.key)
    }
    changeHref(){
        window.location.href="/faburenwu"
    }
    searchOrderStatusClick(e){
        console.log("订单类型")
        console.log(e)
        console.log(e.key)
    }
    componentDidMount(){
        const userid = localStorage.getItem("hyquser_id")
        const usertoken = localStorage.getItem("hyqutoken")
        const _that = this
        _that.setState({
            user_id_check: userid,
            token_check:usertoken
        })

        axios.post("/user/goods/index",{
            user_id_check:userid,
            token_check:usertoken
        }).then(function (response) {
            if(response.data.res === 1){
               console.log("table")
                console.log( response.data.data)
                _that.setState({orderData: response.data.data})
            }else{
                alert(response.data.err)

            }
        }).catch(function (err) {
            alert(err)
        })
    }
    changePage(current){
        console.log("table翻页")
    }
    cancel(e) {
        console.log("取消删除");

    }
    confirm(ID,index){

        const _that = this;
        axios.post("/user/goods/del",{
            user_id_check:_that.state.user_id_check,
            token_check:_that.state.token_check,
            id:ID
        }).then(function (response) {
            console.log("table")
            console.log(response)
            if(response.data.res === 1){
                _that.state.orderData.data.splice(index, 1);
                _that.setState({ orderData:_that.state.orderData });
            }else{
                alert(response.data.err)
            }
        }).catch(function (err) {
            alert(err)
        })

    }
    render() {
        const _that = this;
        return(
           <div>
               <div className="d-flex align-items-center justify-content-between fontSize16" style={{margin:"0 15px"}}>
                   <div>
                       <SearchComponent />
                   </div>
                   <div>
                       <Button type="primary" onClick={this.changeHref} >发布任务</Button>
                   </div>
               </div>
               <Table dataSource={this.state.orderData.data}
                      pagination={{
                          total:this.state.orderData.total,
                          pageSize: this.state.orderData.per_page,
                          onChange(current){

                              _that.changePage(current)

                          }
                      }}
               >

                   <Column
                       title={< DropDown _data={this.state.myTask} searchClick={this.searchMyTaskClick} title="订单分类"/>}
                       dataIndex="pricetype"
                       key="pricetype"
                   />

                   <Column
                       title={<DropDown _data={this.state.taskType} searchClick={this.searchTaskClick}  title="业务类型"/>}
                       dataIndex="titletype"
                       key="titletype"
                   />
                   <Column
                       title="项目金额（元）"
                       dataIndex="price"
                       key="price"
                       render={(text) =>(text+"元")}
                   />
                   <Column
                       title={<DropDown _data={this.state.orderStatus} searchClick={this.searchOrderStatusClick} title="订单状态"/>}
                       dataIndex="show"
                       key="show"
                   />
                   <Column
                       title="操作"
                       key="id"
                       render={(text, record,index) => (
                           <span>
        <a href="javascript:;" value="3432" className="tableBtn fontSize14" onClick={()=>{this.props.tab01Flat(record,this.state.orderData.data[index],index)}}>查看</a>
        <Divider type="vertical" />

        <Popconfirm title="确定删除?" onConfirm={this.confirm.bind(this,record.id,index)} onCancel={this.cancel} okText="Yes" cancelText="No">
            <a className="tableBtn  fontSize14 delete" href="#">删除</a>
            </Popconfirm>,
            </span>
                       )}


                   />
               </Table>
           </div>
    )
    }
}



export default UserInfoTabsOrder;

