import { Row, Col,Rate,Icon  } from 'antd';
import React, {Component} from 'react';
import './InfoCar.css';
import imageCar from 'images/car/hyundai.png';
class ContentInfoCar extends Component{
    render(){
        const rowInfoImgStyle={
            display:'flex',
            flexDirection:'column',
        }
        return(
            <Row >
                <Col md={24} style={rowInfoImgStyle}>
                    <Row className="infor-car" gutter={8}>
                        <Col md={4} className="image_car">
                            <img src={imageCar} width="100%" height="100%" alt="" />
                        </Col>
                        <Col md={15} >
                            <Row className="car_name">
                                <Col md={24}>
                                    <h5>HYUNDAI I10 HATCHBACK 1.0 AT 2017</h5>
                                    <Rate allowClear={false} defaultValue={3} /> 
                                </Col>
                                <Col md={20} className="grid-feature">
                                    <Row style={{display:'flex', flexDirection:'row'}}> 
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">Xăng</span>
                                        </Col>
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">1.5 Lit</span>
                                        </Col>
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">Số tự động</span>
                                        </Col>
                                    </Row>
                                    <Row style={{display:'flex', flexDirection:'row'}}> 
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">5 chỗ</span>
                                        </Col>
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">Sedan</span>
                                        </Col>
                                        <Col md={8} className="grid-icon-feature">
                                            <Icon type="select" theme="outlined" />
                                            <span className="text-feature">250km/h</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{padding:'20px 20px'}}> 
                        <p className="title-label">Tính năng:</p>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Điều hòa (A/C)</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Định vị (GPS)</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Blutooh</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Khe cắm USB</span>
                        </Col>
                    </Row>
                    <Row style={{padding:'20px 20px'}}> 
                        <p className="title-label">Thủ tục: </p>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">CMND</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Đặt cọc</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Bằng lái</span>
                        </Col>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Sổ hộ khẩu</span>
                        </Col>
                    </Row>
                    <Row style={{padding:'20px 20px'}}> 
                        <p className="title-label">Chấp nhận thanh toán: </p>
                        <Col md={6}>
                            <Icon type="select" theme="outlined" />
                            <span className="text-feature">Trả sau</span>
                        </Col>
                    </Row>
                    <Row style={{padding:'20px 20px'}}> 
                        <p className="title-label">Ghi chú: </p>
                        <Col md={24}>
                            <p className="text-note">- CMND: Bản gốc </p>
                            <p className="text-note">- Đặt cọc: giá trị từ 20 triệu đồng trở lên hoặc tài sản tương đương</p>
                            <p className="text-note">- Sổ hộ khẩu: Bản gốc (hộ khẩu TP hoặc Giấy phép đăng ký kinh doanh)</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ContentInfoCar;