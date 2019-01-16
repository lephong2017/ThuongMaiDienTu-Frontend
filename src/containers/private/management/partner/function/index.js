import React, {Component} from 'react';
import {Button, Icon, Row,Col} from 'antd';
import './index.css';
import 'settings/css/global.scss';

class FunctionContent extends Component{
    state={
        fullScreen:true,
        visibled:true,
    }
    onClose = () => { this.setState({ visibled: false, }) };
    showDrawer = () => {  
        this.setState({  visibled: true, },this.props.showDrawerAdd(this.state.visibled)); 
        
    };
    setFullScreen=()=>{
        this.setState({fullScreen:true},this.props.handleFullScreenMode(this.state.fullScreen));
    }
    setNotFullScreen=()=>{
        this.setState({fullScreen:false},this.props.handleFullScreenMode(this.state.fullScreen));
    }
    render(){
       
        return(
            <Row className="function-bar-wrapper">
                <Col md={24}>
                    <Button disabled={this.props.disabled}  type="default" onClick={this.showDrawer} size="small" className="function-btn-left">
                        <Icon type="plus" theme="outlined" />
                    </Button>
                    <Button type="default" size="small" className="function-btn-right">
                        <Icon type="close" theme="outlined" />
                    </Button>
                    {
                        (this.state.fullScreen)?
                        <Button 
                            onClick={this.setNotFullScreen}
                            type="default" size="small" className="function-btn-right">
                                <Icon type="fullscreen" theme="outlined" />
                        </Button>:
                        <Button 
                            onClick={this.setFullScreen}
                            type="default" size="small" className="function-btn-right">
                            <Icon type="fullscreen-exit" theme="outlined" />
                        </Button>
                    }
                </Col>
                
            </Row>
        );
    }

}
export default FunctionContent;