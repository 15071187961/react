import  React from 'react';
import { Table, Button } from 'antd';
import axios from "axios";

import "../../css/PayType.css";
const columns = [{
    title: '申请人列表',
    dataIndex: 'user_id',
}, {
    title: '申请时间',
    dataIndex: 'time',
}, {
    title: '联系方式',
    dataIndex: 'phone',
},
    {
        title: '申请者专业',
        dataIndex: 'zhuanye',
    },
    {
        title: '以往作品',
        dataIndex: 'file',
        render:function(text,record){
            const _href = text.split(",")
            var str = []
            _href.map(function(key,index){
                const href = "http://www.huiqiyun.com"+key
                const className = "mr-1 text-warning"
                const target ="_blank"

                str.push(<a href={href} target={target} className={className}>图{index}</a>)
            })
            return  <div>
                {str}

            </div>
        }
    },
    {
        title: '操作',
        dataIndex: 'address',
        render:function(text,record){
                return  <div>
          <a href="javascript:;">查看详情 </a>
          <a href="javascript:;" className="text-warning ml-1">匹配</a>
        </div>
        }
    }
];
const data = [];
for (let i = 0; i < 6; i++) {
    data.push({
        id: i,
        name: `小红花 ${i}`,
        time:"2019/12/22",
        phone:1234567864,
        zhuanye:"美术",
        age: 32,
        address: `新加坡. ${i}`,
    });
}
class SelectAccepting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            data:[]
        };

      this.start = this.start.bind(this)
      this.onSelectChange = this.onSelectChange.bind(this)
        Object.assign(this.state,this.props)
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
        }).then(
            function (response) {
                if(response.data.res == 1){
                    const _data = response.data.data.data;

                    for(let i=0;i<_data.length;i++){
                        if(_data[i].id ==_that.props.orderData.id){
                            _that.setState({
                                data:_data[i].order_id_list
                            })
                        }

                    }

                }
            }
        ).catch(
            function (error) {
                console.log(error);
            }
        )
    }
    start(){
        const user_id_check = localStorage.getItem("hyquser_id")
        const token_check = localStorage.getItem("hyqutoken")
        const order_id = this.state.selectedRowKeys.join(",")
        const _that = this;
        axios.post("/user/goods/ok",{
            user_id_check: user_id_check,
            token_check:token_check,
            goods_id:_that.state.orderData.id,
            order_id:order_id,
        }).then(function(response){
            if(response.data.res == 1){
                _that.props.selectSuccess(_that.state.selectedRowKeys)

            }
        }).catch(function(error){
            console.log(error);
        })

        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }

    onSelectChange(selectedRowKeys){
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }


    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (
            <div>

                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={false} className="fontSize14" rowKey="id">

                </Table>

                <div className="text-center">
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                        style={{margin:"30px auto"}}
                    >
                        选择用工
                    </Button>
                   {/* <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>*/}
                </div>
            </div>
        );
    }
}

export default SelectAccepting;
