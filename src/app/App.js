import React,{Component} from 'react';
// import AppRouter from 'containers/private/route';
import AppRouter from './AppRoute';
import {Link, } from 'react-router-dom';
import { Layout,Row,Col,Button, Icon,Modal } from 'antd';
import MenuContent from 'containers/menu/Menu';
import './css/App.css';
import Pricing from 'containers/private/pricing/pricing';
import * as CONST_VARIABLE from 'utils/const';
import { withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import {reqSendEmailAllPartner} from 'redux/sendmail/actions';
const {  Content } = Layout;
class App extends Component {
    state={
        visible: false,
        showModal:false,
        auth:false,
        error: null,
        showError: false
    }

    componentWillMount(){
        const role = sessionStorage.getItem(CONST_VARIABLE.ROLE_ACCOUNT);
        if(role){
            this.setState({
                auth: false,
                showModal:false
            });
        }else{
            this.setState({
                auth: true,
                showModal:true
            });
        }
    }

    onCloseModal=()=>{
        var ok = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        if(ok){
            this.setState({error:'Bạn cần phải đăng nhập trước!!!'});
        }
        this.setState({showModal:false, auth:true});
    }

    onSelectPackage = (val) => {
        // var ok = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        if( val !== 1 ){
            this.setState({
                error:'Bạn cần phải đăng nhập trước!!!',
                showError:true
            });
        }
        console.log(val);
    }


    render(){
        const {url} = this.props.match;
        const {auth} = this.state;

       return (
            <Layout>
                {
                    (auth)?
                    <Row>
                        <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                            <MenuContent/>
                        </Col>
                        {
                            (this.state.error)?
                            <Col md={24} >
                                <div className={(this.state.showError)?'error-block':'error-none'}>
                                    <span>{this.state.error}</span>
                                    <Button 
                                        onClick={()=> this.setState({showError:false})}
                                        className="btn btn-close-message"><Icon type="close"/></Button>
                                </div>
                            </Col>:
                            <Col md={24}>
                            </Col>
                        }

                        <Col md={24} >
                            <Pricing onSelectPackage={this.onSelectPackage}/>
                        </Col>

                        <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                            <Modal
                                visible={this.state.showModal}
                                title="Chào mừng bạn đến với hệ thống của chúng tôi!"
                                closable={true}
                                onCancel={this.onCloseModal}
                                footer={null}
                                width={900}
                            >   
                                <Row className="modal-content-wrapper">
                                    <Col md={24}>
                                        <div className="title-about-use-service">Bạn muốn sử dụng dịch vụ gì của chúng tôi?</div>
                                        <div className></div>
                                    </Col>
                                    <Col md={24} className="service-content">
                                        <Col md={8} className="service-items">
                                            <div className="image-service-1"></div>
                                            <div>Dùng thử tính năng cho thuê xe của hệ thống</div>
                                            <Link to="dashboard/management" onClick={this.onCloseModal}  >
                                                <Button  >
                                                <Icon type="car" theme="outlined" />Dùng thử một lần</Button>
                                            </Link>
                                        </Col>
                                        <Col md={8} className="service-items">
                                            <div className="image-service-2"></div>
                                            <div>Dịch vụ này đang cập nhật</div>
                                            <Link to="dashboard/management" >
                                                <Button onClick={this.onCloseModal} disabled >
                                                <Icon type="car" theme="outlined" />Dùng thử một lần</Button>
                                            </Link>
                                        </Col>
                                        <Col md={8} className="service-items">
                                            <div className="image-service-3"></div>
                                            <div>Dịch vụ này đang cập nhật</div>
                                            <Link to="dashboard/management" >
                                                <Button onClick={this.onCloseModal}  disabled={true}  >
                                                <Icon type="car" theme="outlined"/>Dùng thử một lần</Button>
                                            </Link>
                                        </Col>
                                    </Col>
                                </Row>
                            </Modal>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Layout>
                            <Content>
                                    <AppRouter url={url} style={{height:'100%'}}/> 
                            </Content>
                        </Layout>
                    </Row>
                    }
            </Layout>
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
        handleSendMail: (listPartner)=>{
            dispatch(reqSendEmailAllPartner(listPartner))
        }

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));