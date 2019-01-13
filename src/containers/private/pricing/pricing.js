import React,{Component} from 'react';
import {Row, Col,Icon ,Button,List, Avatar} from 'antd';
import './css/pricing.css';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import plus2Image from 'images/car/hyundai.png';
import {data, data30, data365} from './data';
class Pricing extends Component{
    renderListDetail=(dataRender)=>{
        return <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            useWindow={false}
            >
            <List
                itemLayout="horizontal"
                dataSource={dataRender}
                size='small'
                className="list-footer-detail"
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon="check-circle" />}
                            title={<Link to="#">{item.title}</Link>}
                            description={<span>{item.description}</span>}
                        />
                    </List.Item>
                )}
            />
        </InfiniteScroll>
    }
    render(){
        return(
            <Row className="package-wrapper-pricing" gutter={0}>
                <Col md={8} className="package-service-pricing">
                    <div className="title-header-package">Rental car</div>
                    <div className="content-package">
                        Bạn sẽ đăng tải được 5 xe lên hệ thống của chúng tôi.
                        <div className="image-about-package">
                            <img alt="Hình ảnh bảng dùng thử" src={plus2Image}/>
                        </div>
                        <Button 
                            onClick={()=>this.props.onSelectPackage(1)}
                            className="btn-select-package" >
                            <Icon type="check"/>Chọn gói
                        </Button>
                    </div>
                    <div className="detail-package">
                        {this.renderListDetail(data)}
                    </div>
                </Col>
                <Col md={8} className="package-service-pricing">
                    <div className="title-header-package">Rental Plus</div>
                    <div className="content-package">
                        Bạn sẽ đăng tải được 15 xe lên hệ thống của chúng tôi.
                        <div className="image-about-package">
                            <img alt="Hình ảnh bảng dùng 1 tháng" src={plus2Image}/>
                        </div>
                        <Button 
                            onClick={()=>this.props.onSelectPackage(2)}
                            className="btn-select-package" >
                            <Icon type="check"/>Chọn gói
                        </Button>
                    </div>
                    <div className="detail-package">
                        {this.renderListDetail(data30)}
                    </div>
                </Col>
                <Col md={8} className="package-service-pricing">
                    <div className="title-header-package">Rental plus+</div>
                    <div className="content-package">
                        Bạn sẽ đăng tải được 25 xe lên hệ thống của chúng tôi.
                        <div className="image-about-package">
                            <img alt="Hình ảnh bảng dùng 365 ngàt" src={plus2Image}/>
                        </div>
                        <Button 
                            onClick={()=>this.props.onSelectPackage(3)}
                            className="btn-select-package" >
                            <Icon type="check"/>Chọn gói
                        </Button>
                    </div>
                    <div className="detail-package">
                        {this.renderListDetail(data365)}
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Pricing;