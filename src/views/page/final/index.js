import React ,{Component} from 'react';
import { Layout, Row,Col } from 'antd';
import SidebarContent from './sidebar/Sidebar';
import HeaderContent from 'views/layout/Header';
import FooterContent from 'views/layout/Footer';
import StepContent from 'containers/step/Step';
import FormInfoCustomer from './content';
import 'containers/filterbar/function.css';
import './css/sidebar.css';
import './css/index.css';

import {reqAddOrders} from 'redux/orders/actions';
import {reqSendMail} from 'redux/email/actions';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONST_VARIABLE from 'utils/const/index';
const { Header, Content,Footer } = Layout;
class ContentApp extends Component{
    state={
        collapsed: false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillMount(){
        const access_token = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const val = this.props.location.orderinfo;
        const order = {
            nameCustomer: val.nameCustomer.fistNameAndLastName,
            nameCar: val.nameCar,
            priceOrder: val.priceOrder,
            dateOfhire: val.dateOfhire,
            carReturnDay: val.carReturnDay,
            locationReceive: val.locationReceive
        }
        this.props.handleAddOrders(order, access_token);
        this.props.handleSendMail(val.nameCustomer.email, order, access_token);
    }
      render() {
         const info = this.props.location.info;
         
        return (
            <Layout>
                <Header className="header_content">
                    <HeaderContent/>
                </Header>
                <Content>
                    <div className="step_content">
                        <StepContent step={4}/>
                    </div>
                    <Layout>
                        <Row className="resposive_content_final_order" gutter={16} >
                            <Col md={6} className="sidebar_content" >
                                <SidebarContent info={info} collapsed={this.state.collapsed}/>
                            </Col>
                            <Col md={17} style={{padding: 16, background: '#fff',height:"100%"}}>
                                <FormInfoCustomer/>
                            </Col>
                        </Row>
                    </Layout>
                </Content>
                <Footer>
                    <FooterContent/>
                </Footer>
            </Layout>
          
        );
    }
}
const mapStateToProps = state => {
    return {
        itemCar: state.itemCar
    }
  }
   
  const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddOrders:(Order ,accesstoken)=>{
            dispatch(reqAddOrders(Order ,accesstoken)) ;
        },
        handleSendMail:(email, content, accesstoken)=>{
            dispatch(reqSendMail(email, content, accesstoken)) ;
        },
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentApp));
  