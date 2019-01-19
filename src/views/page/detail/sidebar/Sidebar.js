import React, {Component} from 'react';
import {   Row,Col } from 'antd';
import FormContent from 'views/page/detail/sidebar/FormContent';
import {reqFindCar} from 'redux/car/actions';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONST_VARIABLE from 'utils/const/index';
class SidebarContent extends Component{
    constructor(props){
        super(props)
        this.state={
            priceStart:0,
            priceEnd:1000000,
        }
    }
    componentWillMount(){
        this.props.handleFindCar(this.props.id, CONST_VARIABLE.ACCESS_TOKEN);
    }
    
    render(){
        const rowstyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(255, 255, 255, 0.815)',
        }
        const {dateReturn, dateRental,customerInfo, city, itemCar} = this.props;
        return (
            <Row style={rowstyle}>
                <Col md={20}>
                    <FormContent
                        city={city}
                        dateReturn={dateReturn}
                        dateRental={dateRental}
                        itemCar={itemCar}
                        customerInfo={customerInfo}
                    />
                </Col>
            </Row>
        )
    }
}
const mapStateToProps = state => {
    return {
        itemCar: state.itemCar
    }
  }
   
  const mapDispatchToProps = (dispatch, props) => {
    return {
        handleFindCar:(id ,accesstoken)=>{
            dispatch(reqFindCar(id ,accesstoken)) ;
        },
        
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarContent));