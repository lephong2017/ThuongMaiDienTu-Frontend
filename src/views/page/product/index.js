import React ,{Component} from 'react';
import { Layout, Row,Col } from 'antd';
import SidebarContent from './Sidebar';
import HeaderContent from 'views/layout/Header';
import FooterContent from 'views/layout/Footer';
import FunctionFilter from 'containers/filterbar/FunctionFilter';
import StepContent from 'containers/step/Step';
import GridCard from './GridCard';
import PaginationContent from 'components/pagination/Pagination'
import 'containers/filterbar/function.css';
import './css/sidebar.css';
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
      render() {
        return (
            <Layout>
                <Header className="header_content">
                    <HeaderContent/>
                </Header>
                <Content>
                    <div className="step_content">
                        <StepContent step={1}/>
                    </div>
                    <Layout>
                        <Row className="resposive_content_find_car" gutter={8} >
                            <Col md={6} className="sidebar_content" >
                                <SidebarContent collapsed={this.state.collapsed}/>
                            </Col>
                            <Col md={18}>
                                <Row style={{display:'flex',flexDirection:'column'}}>
                                    <Col md={24}>
                                        <FunctionFilter className="function_filter"/>
                                    </Col>
                                    <br/>
                                    <Col md={24}>
                                        <Content style={{ marginTop: '34px', padding: '12px 0', background: '#fff' }}>
                                            <Row>
                                                <Col md={24} sm={24}>
                                                    <GridCard/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={24} sm={24} className="pagination-bar" >
                                                    <PaginationContent/>
                                                </Col>
                                            </Row>
                                        </Content>
                                    </Col>
                                </Row>
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