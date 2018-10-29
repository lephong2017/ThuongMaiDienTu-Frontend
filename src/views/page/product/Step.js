import { Steps } from 'antd';
import React,{Component} from 'react';
import './css/step.css';
const Step = Steps.Step;
class StepContent extends Component{
    render(){
        return(
            <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
            </Steps>      
        );
    }
}
export default StepContent;