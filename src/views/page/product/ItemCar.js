import { Card, Icon,  } from 'antd';
import React,{Component} from 'react';
// import img from 'images/banner6.png';
import {Link} from 'react-router-dom';
import './css/product.css';

class ItemCar extends Component{
    render(){
        const {car} =this.props;
        const {dateReturn, dateRental, city} = this.props;
        return(
            <Card
                className="item-car"
                style={{ width: '100%'  }}
                cover={<img height="135px" alt="example"  src={car.imageLink} />}
                actions={
                    [
                        <Icon type="eye" theme="outlined" />,
                        <Icon type="select" theme="outlined" />,
                        <Link 
                            to={{ 
                                pathname: `detail/${car.id}`, 
                                state: { 
                                    city: city, 
                                    dateRental: dateRental,
                                    dateReturn: dateReturn
                                }
                            }}
                        >
                            <Icon type="shopping-cart" theme="outlined" />
                        </Link>
                    ]
                }
            >
                <div style={{height:'40px', textAlign:'center'}} >
                    <span style={{color:'red', fontSize:20}}>{car.price}</span>
                    <div style={{color:'BLUE'}}>{car.name}</div>
                </div>
            </Card>
        )
    }
}
export default ItemCar;