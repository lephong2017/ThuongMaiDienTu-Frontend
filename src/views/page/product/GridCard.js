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
                <Row title="List car" className="responsive_list_car" gutter={8}>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                </Row>
                <Row title="List car" className="responsive_list_car" gutter={8}>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                    <Col sm={24} md={6} style={gridStyle}>
                        <ItemCar/>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default GridItem;