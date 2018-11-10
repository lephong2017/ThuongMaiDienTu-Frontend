import React,{Component} from 'react';
import {Row, Col,Icon ,Button,List, Avatar} from 'antd';
import './css/pricing.css';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import plus2Image from 'images/car/hyundai.png';
const data = [
    {
        title: 'Ant Design Title 1',
        description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        title: 'Ant Design Title 2',
        description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        title: 'Ant Design Title 3',
        description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        title: 'Ant Design Title 4',
        description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
  ];
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
                            <img src={plus2Image}/>
                        </div>
                        <Button className="btn-select-package" ><Icon type="check"/>Chọn gói</Button>
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
                            <img src={plus2Image}/>
                        </div>
                        <Button className="btn-select-package" ><Icon type="check"/>Chọn gói</Button>
                    </div>
                    <div className="detail-package">
                        {this.renderListDetail(data)}
                    </div>
                </Col>
                <Col md={8} className="package-service-pricing">
                    <div className="title-header-package">Rental plus+</div>
                    <div className="content-package">
                        Bạn sẽ đăng tải được 25 xe lên hệ thống của chúng tôi.
                        <div className="image-about-package">
                            <img src={plus2Image}/>
                        </div>
                        <Button className="btn-select-package" ><Icon type="check"/>Chọn gói</Button>
                    </div>
                    <div className="detail-package">
                        {this.renderListDetail(data)}
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Pricing;