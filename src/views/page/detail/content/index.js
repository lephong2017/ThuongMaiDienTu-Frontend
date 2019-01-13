import { Row, Col,Rate,Icon  } from 'antd';
import React, {Component} from 'react';
import './InfoCar.css';
import {reqFindCar} from 'redux/car/actions';
import {loadDataDetailOfCar} from 'redux/car-detail/actProduct';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONST_VARIABLE from 'utils/const/index';
class ContentInfoCar extends Component{

    componentWillMount(){
        this.props.handleDataDetail(this.props.id, CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleFindCar(this.props.id, CONST_VARIABLE.ACCESS_TOKEN);

    }

    render(){
        const rowInfoImgStyle={
            display:'flex',
            flexDirection:'column',
        }
        const {carDetail, itemCar} = this.props;
        
        return(
        <Row >
        {
        (carDetail.name)?
            (
            <Col md={24} style={rowInfoImgStyle}>
                <Row className="infor-car" gutter={8}>
                    <Col md={4} className="image_car">
                        <img src={itemCar.imageLink} width="100%" height="100%" alt="" />
                    </Col>
                    <Col md={15} >
                        <Row className="car_name">
                            <Col md={24}>
                                <h5>{itemCar.name}</h5>
                                <Rate allowClear={false} defaultValue={3} /> 
                                <p>{itemCar.description}</p>
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
                    {
                        carDetail.feature.map((val, ind)=>{
                            return(
                            <Col md={6} key={val}>
                                <Icon type="select" theme="outlined" />
                                <span className="text-feature">{val}</span>
                            </Col>
                            )         
                        })
                    }
                </Row>
                <Row style={{padding:'20px 20px'}}> 
                    <p className="title-label">Thủ tục: </p>
                    {
                        carDetail.procedure.map((val, ind)=>{
                            return (
                            <Col key={val} md={6}>
                                <Icon type="select" theme="outlined" />
                                <span className="text-feature">{val}</span>
                            </Col>
                            )
                        })
                    }
                    
                    
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
                    <Col md={24} style={{marginTop: 10}}>
                        <p className="text-note">- Nên mang theo tiền mặt khi nhận xe </p>
                        <p className="text-note">- Phải giữ gìn cẩn thận sản phẩm của đối tác trong quá trình thuê xe</p>
                    </Col>
                </Row>
            </Col>
            ):
            (
                <p></p>
            )
        }
        </Row>
      )
    }
}

const mapStateToProps = state => {
    return {
        carDetail: state.carDetail,
        itemCar: state.itemCar
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDataDetail:(id ,accesstoken)=>{
            dispatch(loadDataDetailOfCar(id ,accesstoken)) ;
        },
        handleFindCar:(id ,accesstoken)=>{
            dispatch(reqFindCar(id ,accesstoken)) ;
        },

    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentInfoCar));