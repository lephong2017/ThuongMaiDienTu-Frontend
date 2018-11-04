import React,{Component} from 'react';
import AppRouter from './AppRoute';
import { Layout,Row,Col } from 'antd';
import MenuContent from 'containers/menu/Menu';
const {  Content } = Layout;
class App extends Component {
    state={
        visible: false,
    }
    render(){
        const {url} = this.props.match;
        return(
            <Layout>
                <Row>
                    <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                        <MenuContent/>
                    </Col>
                </Row>
                <Row>
                    <Layout>
                        <Content>
                                <AppRouter url={url} />
                        </Content>
                    </Layout>
                </Row>
            </Layout>
        );
    }
}
export default App;