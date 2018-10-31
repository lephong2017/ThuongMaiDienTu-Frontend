import React ,{Component} from 'react';
import { Layout ,Row,Col } from 'antd';
import SidebarContent from 'views/page/detail/sidebar/Sidebar';
import HeaderContent from 'views/layout/Header';
import FooterContent from 'views/layout/Footer';
// import FunctionFilter from 'containers/filterbar/FunctionFilter';
import StepContent from 'containers/step/Step';
import InfoCarContent from './content';
// import PaginationContent from 'components/pagination/Pagination'
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
        const contentStyle={ 
            margin: '24px 16px', 
            // padding: 24, 
            background: '#fff', 
            minHeight: 280 
        }
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
                        <Layout>
                            {/* <FunctionFilter className="function_filter"/> */}
                            <Content style={contentStyle}>
                                <Row>
                                    <Col>
                                        <InfoCarContent/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{float:'right'}}>
                                        {/* <PaginationContent/> */}
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                        <SidebarContent className="sidebar_content" />
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