import  React from 'react'
import { Modal, Button } from 'antd';
 import icon1 from "../../img/projectdefault.jpg"





class ShowPicture extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
        };
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }
    showModal(e){
        this.setState({
            visible: true,
        });
    }
   componentWillMount(){
        console.log(this.props)
   }
    handleOk(e){

        this.props._selectedClick(this.props)
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel(e){


        this.setState({
            visible: false,

        });
    }


    componentDidMount(){


    }
    render() {
        return(
            <div>
                <a type="primary" className="text-warning mr-1" onClick={this.showModal}>
                    {this.props.title}
                </a>
                <Modal
                    closable="false"
                    bodyStyle={{padding:"0"}}
                    title=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    width="800px"
                    onCancel={this.handleCancel}

                >
                    <img src={this.props.dataHref} alt="" style={{width:"100%"}}/>

                </Modal>

            </div>
        )
    }
}



export default ShowPicture;

