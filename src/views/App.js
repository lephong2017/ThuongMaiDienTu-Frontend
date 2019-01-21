import React, {Component} from 'react';
import { Layout } from 'antd';
import HeaderContent from './layout/Header';
// import FooterContent from './layout/Footer';
import ContentSite from './layout/Content';
import 'antd/dist/antd.css';
import './css/app.css';

const { Header, Content } = Layout;
class App extends Component{
    render(){
        return (
            <div className="layout-theme" style={{ backgroundColor: "#f5f5f5" }}>
                <Layout>
                    <Header className="header_content">
                        <HeaderContent/>
                    </Header>
                    <Content className="content_sites">
                        <ContentSite/>
                    </Content>
                    {/* <Footer className="footer_content">
                        <FooterContent/>
                    </Footer> */}
                    
                </Layout>
            </div>
        );
    }
 }
 
export default App;