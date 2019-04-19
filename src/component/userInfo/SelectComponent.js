import  React from 'react'
import { Select } from 'antd';

const Option = Select.Option;


class SelectComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _data:this.props._data,
          children:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        const _data = this.state._data
        const _length = _data.length

        for (let i = 0; i < _length; i++) {
            const _str=_data[i];
            this.setState({
                children:this.state.children.push(<Option key={i}>{_str}</Option>)
            })

        }
        console.log(this.props._data)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

     handleFocus() {
        console.log('focus');
    }

    render() {

        return(
            <Select
                showSearch
                style={{ marginRight: "10px",width:"150px" }}
                placeholder={this.props.title}
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {this.state.children}
            </Select>
        )
    }
}



export default SelectComponent;
