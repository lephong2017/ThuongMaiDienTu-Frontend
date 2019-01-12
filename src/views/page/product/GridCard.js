import {  Row ,Col } from 'antd';
import React,{Component} from 'react';
import ItemCar from './ItemCar';
const gridStyle = {
    padding:'0 20px',
};
class GridItem extends Component{
    renderListCard=(products)=>{
        
        const {dateReturn, dateRental, city} = this.props;
        return(
            <Row title="List car" className="responsive_list_car" gutter={0}>
            { 
                products.map((car,ind)=>{
                    return(
                    <Col key={car.id} sm={24} md={6} style={gridStyle}>
                        <ItemCar 
                            city={city}
                            dateReturn={dateReturn}
                            dateRental={dateRental}
                            key={ind} 
                            car={car}/>
                    </Col>
                    )
                })
            }
            </Row>
        ) 
    }
    render(){
        const {products} =this.props;
        return (
            <div>
                {this.renderListCard(products)}
            </div>
        )
    }
}
export default GridItem;