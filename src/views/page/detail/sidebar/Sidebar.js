import React, {Component} from 'react';
import {   Row,Col } from 'antd';
import FormContent from 'views/page/detail/sidebar/FormContent';
class SidebarContent extends Component{
    constructor(props){
        super(props)
        this.state={
            priceStart:0,
            priceEnd:1000000,
        }
    }
    render(){
        const rowstyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(255, 255, 255, 0.815)',
        }
        return (
            <Row style={rowstyle}>
                <Col md={20}>
                    <FormContent/>
                </Col>
            </Row>
        )
    }
}
export default SidebarContent;