import React from 'react';
import { Steps } from 'antd';


class RegisterStep extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <steps current={1}>
                    <step title="Finished" description="This is a description." />
                    <step title="In Progress" description="This is a description." />
                    <step title="Waiting" description="This is a description." />
                </steps>
            </div>
        )
    }
}
export  default  RegisterSteps;
