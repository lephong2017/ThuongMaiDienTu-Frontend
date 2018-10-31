import { Pagination,Row,Col } from 'antd';
import React,{Component} from 'react';
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
class PaginationContent extends Component{
    render(){
        return (
            <Row>
                <Col>
                    <Pagination 
                        showSizeChanger 
                        onShowSizeChange={onShowSizeChange} 
                        defaultCurrent={3} 
                        total={500} 
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    />
                </Col>
            </Row>
        )
    }
}
export default PaginationContent;