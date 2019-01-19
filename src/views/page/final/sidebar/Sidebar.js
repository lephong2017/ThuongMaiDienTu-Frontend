import React, {Component} from 'react';
import { Row,Col, } from 'antd';
import InfoCustomer from 'views/page/final/sidebar/InfoCustomer';
import InfoDetail from './InfoDetail';
import '../css/sidebar.css';
// const {  Sider,  } = Layout;
class SidebarContent extends Component{
    constructor(props){
        super(props)
        this.state={
            priceStart:0,
            priceEnd:1000000,
        }
    }
    filterPrice=(val)=>{
        this.setState({priceStart:val[0]*1000,priceEnd:val[1]*1000})
    }
    render(){
        const rowstyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'10px 10px'
        }

        return (
            <Row style={rowstyle} gutter={16}>
                <Col md={22} >
                    <InfoCustomer info={this.props.info.customer}/>
                </Col>
                <br/>
                <Col md={22}>
                    <InfoDetail info= {this.props.info.order}/>
                </Col>
            </Row>
        )
    }
}
export default SidebarContent;