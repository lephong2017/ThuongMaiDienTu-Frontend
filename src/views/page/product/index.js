import React ,{Component} from 'react';
import { Layout, Icon, Button,Row,Col } from 'antd';
import SidebarContent from './Sidebar';
import HeaderContent from 'views/layout/Header';
import FooterContent from 'views/layout/Footer';
import FunctionFilter from './FunctionFilter';
import StepContent from './Step';
import GridCard from './GridCard';
import './css/function.css';
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
                        <StepContent/>
                    </div>
                    <Layout>
                        <SidebarContent className="sidebar_content" collapsed={this.state.collapsed}/>
                        <Layout>
                            <FunctionFilter className="function_filter"/>
                            {/* <Header style={{ background: '#fff', padding: 0 }}>
                                <Button
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header> */}
                            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                <Row>
                                    <Col>
                                        <GridCard/>
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
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