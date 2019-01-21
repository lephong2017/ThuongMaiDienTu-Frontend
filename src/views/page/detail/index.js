import React ,{Component} from 'react';
import { Layout ,Row,Col } from 'antd';
import SidebarContent from 'views/page/detail/sidebar/Sidebar';
import SidebarInfoCustomer from 'views/page/detail/sidebar/InfoCustomer';
import HeaderContent from 'views/layout/Header';
import FooterContent from 'views/layout/Footer';
// import FunctionFilter from 'containers/filterbar/FunctionFilter';
import StepContent from 'containers/step/Step';
import InfoCarContent from './content';
// import PaginationContent from 'components/pagination/Pagination'
import 'containers/filterbar/function.css';
import './css/sidebar.css';
import './css/index.css';
const { Header, Content,Footer } = Layout;
class ContentApp extends Component{
    state={
        collapsed: false, 
        city:null,
        dateRental:null,
        dateReturn:null,
        customerInfo:null,
    }
    componentWillMount(){
        this.setState({
            dateRental:this.props.location.state.dateRental,
            dateReturn:this.props.location.state.dateReturn,
            city: this.props.location.state.city
        });
    }
    saveInfoCustomer= (val) =>{
        this.setState({customerInfo : val});
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
      render() {
        const id = this.props.match.params.id;
        const {dateReturn, dateRental, city} = this.state;
        return (
            <Layout>
                <Header className="header_content">
                    <HeaderContent/>
                </Header>
                <Content>
                    <div className="step_content">
                        <StepContent step={2}/>
                    </div>
                    <Layout>
                        <Row className="resposive_content_detail_car" gutter={8} >
                            <Col md={6} className="sidebar_content" >
                                 <SidebarInfoCustomer 
                                    saveInfoCustomer={this.saveInfoCustomer}
                                     id={id} />
                            </Col>
                            <Col md={12}>
                                <Row style={{display:'flex',flexDirection:'column'}}>
                                    <Col md={24}>
                                        <Content style={{ padding: '12px 0', background: '#fff' }}>
                                            <Row>
                                                <Col md={24} sm={24}>
                                                    <InfoCarContent id={id}/>
                                                </Col>
                                            </Row>
                                        </Content>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className="sidebar_content" >
                                 <SidebarContent 
                                    city={city}
                                    dateReturn={dateReturn}
                                    dateRental={dateRental}
                                    id={id}
                                    customerInfo={this.state.customerInfo }
                                 />
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
export default ContentApp;