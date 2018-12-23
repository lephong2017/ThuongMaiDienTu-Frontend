import { Card, Icon, Avatar } from 'antd';
import React,{Component} from 'react';
import img from 'images/banner6.png';
import {Link} from 'react-router-dom';
import './css/product.css';
const { Meta } = Card;

class ItemCar extends Component{
    render(){
        const {car} =this.props;
        return(
            <Card
                className="item-car"
                style={{ width: '100%' }}
                cover={<img alt="example"  src={img} />}
                actions={
                    [
                        <Icon type="eye" theme="outlined" />,
                        <Icon type="select" theme="outlined" />,
                        <Link to={`detail/${car.id}`}>
                            <Icon type="shopping-cart" theme="outlined" />
                        </Link>
                    ]
                }
            >
                <Meta
                    avatar={<Avatar icon="car" />}
                    title={car.price}
                    description={car.name}
                    />
            </Card>
        )
    }
}
export default ItemCar;