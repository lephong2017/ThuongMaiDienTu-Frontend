import React,{Component} from 'react';
import {Row,Col,Button,Icon} from 'antd';
import './index.css';
import FunctionbarContent from '../function/index';
import PanelWrapper from 'containers/wrapper/Panel.style';
class CarManagement extends Component{
    state={
        fullScreenMode:false,
    }
    handleFullScreenMode=(val)=> {
        this.setState(() => {
            return {
                fullScreenMode: val
            };
        });
    }
    render(){
        return (
            <Row className="content_manager_wrapper">
                <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                    <FunctionbarContent handleFullScreenMode={this.handleFullScreenMode}/>
                    <Col md={24}>
                        <div style={{height:'500px',backgroundColor:'green'}}>abcd</div>
                    </Col>
                </PanelWrapper>

            </Row>
        );
    }
}
export default CarManagement; 