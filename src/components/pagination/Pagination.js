import { Pagination,Row,Col } from 'antd';
import React,{Component} from 'react';

class PaginationContent extends Component{
    render(){
        return (
            <Row>
                <Col>
                    <Pagination 
                        defaultPageSize={12}
                        showSizeChanger 
                        onChange={
                            (page, pageSize)=>{
                                this.props.onShowSizeChange(page, pageSize );
                            }
                        }
                        onShowSizeChange={
                            (page, pageSize)=>{
                                this.props.onShowSizeChange(page, pageSize);
                            }
                        }
                        pageSizeOptions={["12", "24", "36", "48"]}
                        defaultCurrent={1} 
                        total={this.props.total} 
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    />
                </Col>
            </Row>
        )
    }
}
export default PaginationContent;