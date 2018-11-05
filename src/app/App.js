import React,{Component} from 'react';
import AppRouter from './AppRoute';
import {Link,Redirect} from 'react-router-dom';
import { Layout,Row,Col,Button, Icon,Modal } from 'antd';
import MenuContent from 'containers/menu/Menu';
import './css/App.css';
const {  Content } = Layout;
class App extends Component {
    state={
        visible: false,
        showModal:true,
    }
    onCloseModal=()=>{
        this.setState({showModal:false});
       return <Redirect to="management/car" />;
    }
    render(){
        const {url} = this.props.match;
        return(
            <Layout>
                <Row>
                    <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                        <MenuContent/>
                    </Col>
                    <Col md={24} style={{height:'50px',width:'100%', background: "#fafafa",}}>
                        <Modal
                            visible={this.state.showModal}
                            title="Chào mừng bạn đến với hệ thống của chúng tôi!"
                            footer={null}
                            width={900}
                        >
                            <Button onClick={this.onCloseModal} shape="circle" >
                            <Icon type="car" theme="outlined" />Dùng thử một lần</Button>
                        </Modal>
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