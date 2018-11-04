import React ,{Component} from 'react';
import { Layout,Row,Col } from 'antd';
import BreadcumbContent from 'components/breadcrumb/index';
import SidebarContent from './sidebar/index';
import ManagementRouter from '../route';
const {Content } = Layout;
class LayoutContent extends Component{
    render(){
        const {url} = this.props.match;
        return(
            <Layout style={{display:'flex', flexDirection:'row'}}>
                <SidebarContent/>
                <Content>
                    <Layout>
                        <BreadcumbContent/>
                        <Content>
                            <Row style={{display:'flex', flexDirection:'column'}}>
                                <Col md={24}>
                                    <ManagementRouter url={url}/>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            
        )
    }
}
export default LayoutContent;