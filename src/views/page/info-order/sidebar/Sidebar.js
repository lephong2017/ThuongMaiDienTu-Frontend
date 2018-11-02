import React, {Component} from 'react';
import { Icon,Row,Col, } from 'antd';
import FormContentReadly from 'views/page/info-order/sidebar/FormContent';
import imageCar from 'images/car/hyundai.png';
import '../css/sidebar.css';
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
            <Row style={rowstyle}>
                <Col md={22} className="image_car">
                    <img src={imageCar} width="100%" height="100%" alt="" />
                </Col>
                <Col md={22}>
                    <p className="name-car">TOYOTA VIOS 1.5G (CVT) 2018</p>
                </Col>
                <Col md={22}>
                    <Row style={{display:'flex', flexDirection:'row'}}> 
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Xăng</span>
                        </Col>
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">1.5 Lit</span>
                        </Col>
                    </Row>
                    <Row style={{display:'flex', flexDirection:'row'}}> 
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Số tự động</span>
                        </Col>
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">5 chỗ</span>
                        </Col>
                    </Row>
                    <Row style={{display:'flex', flexDirection:'row'}}> 
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Sedan</span>
                        </Col>
                        <Col md={12} className="grid-icon-feature">
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">81/100km</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={22}>
                    <FormContentReadly/>
                </Col>
            </Row>
        )
    }
}
export default SidebarContent;