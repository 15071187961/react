import  React from 'react'
import { Modal, Button } from 'antd';
import MyOrderDetail01 from "./MyOrderDetail01"
import ZhiFuItem from "./zhifulist"
import SelectAccepting from "./SelectAccepting"
import PiPeiRenYuan from  "./PiPeiRenYuan"




class _modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            chargeSuccess:false,
            selectSuccess:false,
            buttonStr:"确认发布"
        };
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.selectSuccess = this.selectSuccess.bind(this);
    }
    showModal(e){
        this.setState({
            visible: true,
        });
    }

    handleOk(e){
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel(e){

        if(e==="true"){

            alert('已支付')
            this.setState({
                chargeSuccess:true,
                buttonStr:"选择用工"
            });
        }


        this.setState({
            visible: false,

        });
    }
    selectSuccess(e){
        console.log("父组件全部选择selectSuccess")
        console.log(e)

        this.setState({
            visible: false,
            buttonStr:"已匹配用工",
            selectSuccess:true
        });
        this.props.selectSuccessP(this.state.selectSuccess)
    }

    componentDidMount(){
        console.log("匹配用工")
        console.log(this.props)

        if(this.props.orderIdOk){
            this.setState({
                visible: false,
                 buttonStr:"已匹配用工",
                selectSuccess:true
            });
        }

    }
    render() {
        return(
            <div>
                <Button type="primary" onClick={this.showModal} disabled = {this.state.selectSuccess}>
                    {this.state.buttonStr}
                </Button>
                <Modal
                    closable="false"
                    bodyStyle={{padding:"0"}}
                    title=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    width="800px"
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    {this.state.chargeSuccess?<SelectAccepting orderData={this.props.orderData} selectSuccess={this.selectSuccess}/>:<ZhiFuItem  handleCancel={this.handleCancel} orderData={this.props.orderData}/>}


                </Modal>

            </div>
        )
    }
}



export default _modal;

