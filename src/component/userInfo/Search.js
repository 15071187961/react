import  React from 'react'
import {Row,Col,Form,Input} from 'antd'
const Search= Input.Search;


class SearchComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render() {

        return(
            <Form>
                <Search className="my-3"
                        placeholder="搜素条件"
                        enterButton="搜索"
                        onSearch={value => this.props.searchBtn(value)}
                />
            </Form>
        )
    }
}



export default SearchComponent;
