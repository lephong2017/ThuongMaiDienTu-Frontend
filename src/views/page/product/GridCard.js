import {  Row ,Col } from 'antd';
import React,{Component} from 'react';
import ItemCar from './ItemCar';
const gridStyle = {
    padding:'0 20px',
};
const carStyle={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom:'10px'
}

class GridItem extends Component{
    render(){
        return (
            <div>
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
            </div>
        )
    }
}
export default GridItem;