import React, {Component} from 'react';
import {   Slider,Row,Col } from 'antd';
import QuickBook from './QuickBook';
// const {  Sider,  } = Layout;
class SidebarContent extends Component{
    constructor(props){
        super(props)
        this.state={
            priceStart:0,
            priceEnd:10000,
        }
    }
    filterPrice=(val)=>{
        this.setState({priceStart:val[0]*100,priceEnd:val[1]*100});
        this.props.onSearchPrice(val[0]*100, val[1]*100);
    }
    render(){
        const rowstyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(255, 255, 255, 0.815)',
            margin:'10px 0px',
            padding:'10px 0px',
        }
        const {
            dateReturn, dateRental, city, 
            onChangeCity, onChangeDateRental, onChangeDateReturn
        } = this.props;
        return ( 
            <Row style={rowstyle}>
                <Col span={20}>
                    <QuickBook
                        city={city}
                        dateReturn={dateReturn}
                        dateRental={dateRental}
                        onChangeCity={onChangeCity}
                        onChangeDateRental={onChangeDateRental}
                        onChangeDateReturn={onChangeDateReturn}
                    />
                </Col>
                <Col span={20}>
                    <Slider onChange={this.filterPrice} range defaultValue={[this.state.priceStart, this.state.priceEnd]} disabled={false} />
                    <span>Tầm giá từ {this.state.priceStart} đến {this.state.priceEnd}</span>
                </Col>
            </Row>
        )
    }
}
export default SidebarContent;