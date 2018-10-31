import { Steps } from 'antd';
import React,{Component} from 'react';
import './step.css';
const Step = Steps.Step;
class StepContent extends Component{
    render(){
        return(
            <Steps size="small" current={this.props.step-1}>
                <Step title="Chọn xe" />
                <Step title="Xem thông tin xe" />
                <Step title="Điền thông tin của bạn" />
                <Step title="Hoàn tất" />
            </Steps>      
        );
    }
}
export default StepContent;