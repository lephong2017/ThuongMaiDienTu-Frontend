import React,{Component} from 'react';
import AppRouter from './AppRoute';
import {Link,} from 'react-router-dom';
import { Layout,Row,Col,Button, Icon,Modal } from 'antd';
import MenuContent from 'containers/menu/Menu';
import './css/App.css';
import Pricing from 'containers/private/pricing/pricing';
const {  Content } = Layout;
class App extends Component {
    state={
        visible: false,
        showModal:false,
        auth:true,
    }
    onCloseModal=()=>{
        this.setState({showModal:false});
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
                        <Col md={24} >
                            <Pricing/>
                        </Col>
                        <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                            <Modal
                                visible={this.state.showModal}
                                title="Chào mừng bạn đến với hệ thống của chúng tôi!"
                                closable={true}
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
                                            <Link to="management/car" >
                                                <Button onClick={this.onCloseModal}  >
                                                <Icon type="car" theme="outlined" />Dùng thử một lần</Button>
                                            </Link>
                                        </Col>
                                        <Col md={8} className="service-items">
                                            <div className="image-service-2"></div>
                                            <div>Dịch vụ này đang cập nhật</div>
                                            <Link to="dashboard/management/car" >
                                                <Button onClick={this.onCloseModal} disabled >
                                                <Icon type="car" theme="outlined" />Dùng thử một lần</Button>
                                            </Link>
                                        </Col>
                                        <Col md={8} className="service-items">
                                            <div className="image-service-3"></div>
                                            <div>Dịch vụ này đang cập nhật</div>
                                            <Link to="dashboard/management/car" >
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
export default App;