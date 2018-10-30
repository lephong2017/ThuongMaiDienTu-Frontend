import { Card, Icon, Avatar } from 'antd';
import React,{Component} from 'react';
const { Meta } = Card;
class ItemCar extends Component{
    render(){
        return(
            <Card
                style={{ width: 250 }}
                cover={<img alt="example" 
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={
                    [
                        <Icon type="setting" />, 
                        <Icon type="edit" />, 
                        <Icon type="View" />
                    ]
                }
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Giá: 200 000"
                    description="Toyota"
                    />
            </Card>
        )
    }
}
export default ItemCar;