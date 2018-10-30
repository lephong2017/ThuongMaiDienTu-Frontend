import { Card, Icon, Avatar,Row ,Col } from 'antd';
import React,{Component} from 'react';
import ItemCar from './ItemCar';
const gridStyle = {
    padding:'0 20px',
};
const carStyle={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
}

class GridItem extends Component{
    render(){
        return (
            <Row title="List car" style={carStyle} gutter={16}>
                <Col md={8} style={gridStyle}>
                    <ItemCar/>
                </Col>
                <Col md={8} style={gridStyle}>
                    <ItemCar/>
                </Col>
                <Col md={8} style={gridStyle}>
                    <ItemCar/>
                </Col>
            </Row>
        )
    }
}
export default GridItem;