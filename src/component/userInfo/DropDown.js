import  React from 'react'
import {Menu, Dropdown, Icon, message,} from 'antd';



class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _data:this.props._data,
            children:[]
        }
        this.searchClick = this.searchClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);


    }
    searchClick({ key }) {
        console.log("子组件")
        console.log({ key });
    }


    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }

    render() {
        if(this.props._data){
            var menu = this.props._data.map((value,key)=>
                <Menu.Item key={value.id}>{value.text}</Menu.Item>
            )
        }

        const menu1 = (
            <Menu onClick={this.props.searchClick}>
                {menu}
            </Menu>
        )

        return(
            <Dropdown overlay={menu1}>
                <a className="ant-dropdown-link" href="#">
                    {this.props.title}<Icon type="caret-down"  style={{marginLeft:"10px"}}/>
                </a>
            </Dropdown>
        )
    }
}



export default DropDown;
