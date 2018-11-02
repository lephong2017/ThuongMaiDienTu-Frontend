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
                        <StepContent step={3}/>
                    </div>
                    <Layout>
                        <Row className="resposive_content_info_order" gutter={32} >
                            <Col md={6} className="sidebar_content" >
                                <SidebarContent collapsed={this.state.collapsed}/>
                            </Col>
                            <Col md={18} style={{padding: '12px 32px', background: '#fff' }}>
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
export default ContentApp;