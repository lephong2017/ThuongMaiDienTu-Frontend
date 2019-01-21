import React, {Component} from 'react';
import {Button, Icon, Row,Col} from 'antd';
import './index.css';
import 'settings/css/global.scss';
import { withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import {reqGetListPartnerNearHire} from 'redux/partnerPackage/actions';
import {reqSendGroupMail} from 'redux/email/actions';
import * as CONST_VARIABLE from 'utils/const/index';
class FunctionContent extends Component{
    state={
        fullScreen:true,
        visibled:true,
    }
    viewListPartnerHire=()=>{
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleGetListPartnerNearHire(accesstoken);
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

    sendMail=()=>{
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        console.log(this.props.partnerHire);
        // this.props.handleSendMail(this.props.partnerHire, accesstoken);
    }
    render(){
       
        return(
            <Row className="function-bar-wrapper">
                <Col md={24}>
                    <Button type="default" onClick={this.showDrawer} size="small" className="function-btn-left">
                        <Icon type="plus" theme="outlined" /> Thêm
                    </Button>
                    <Button type="default" onClick={this.viewListPartnerHire} size="small" className="function-btn-left">
                        <Icon type="file" theme="outlined" />
                        Xem danh sách hết hạn
                    </Button>
                    <Button type="default" onClick={this.sendMail} size="small" className="function-btn-left">
                        <Icon type="mail" theme="outlined" />
                        Send all email
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

const mapStateToProps = state => {
    return {
        partnerHire: state.partnerHire,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleGetListPartnerNearHire: (accesstoken)=>{
            dispatch(reqGetListPartnerNearHire(accesstoken));
        },
        handleSendMail: (listPartner, accesstoken)=>{
            dispatch(reqSendGroupMail(listPartner, accesstoken))
        }

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FunctionContent));