import React,{Component} from 'react';
import {Row, Col,Icon ,Button,List, Avatar} from 'antd';
import './css/pricing.css';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import plus2Image from 'images/car/hyundai.png';
import {data, data30, data365} from './data';

import PaypalBtn from 'react-paypal-checkout';

class Pricing extends Component{
    state={
        disablePackageOne: true,
        disablePackageTwo: true,
        disablePackageThree: true,

    }
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

        const onSuccess = (payment) => {
            this.setState({disablePackageOne : false});
            this.setState({disablePackageTwo : false});
            this.setState({disablePackageThree : false});
            console.log("The payment was succeeded!", payment);
        }		
        
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }	
        
        const onError = (err) => {
            console.log("Error!", err);		
        }			
        
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state  
        // let total = this.state.numDayRental* this.props.itemCar.price;  // same as above, this is the total amount (based on currency) to be 
        let locale = 'en_US'; 
        let style = {
            'label':'pay', 
            'tagline': false, 
            'size':'medium', 
            'shape':'pill', 
            'color':'gold'
        };
        
        const client = {
            sandbox:    'AY1jSZZWe9ubj79SyF4ixwYn32ExUwpeBwUBGiqjcTF3vCdQN3VPOZ7l4GF7SsBYifOWxo4x0RlceB11',
            production: 'EPOgRKs0mDvWhvRXnGFsAcqp3ny-hYeYoSPQPxIYKvc1kGKqgCpV0xI2c7bs0qU8okWyyqbl7ajjH43z',
        }
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
                            // disabled={this.state.disablePackageOne }
                            onClick={()=>this.props.onSelectPackage(1)}
                            // className="btn-select-package" 
                            >
                            <Icon type="check"/> Bắt đầu
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
                        <PaypalBtn 
                            env={env} 
                            client={client} 
                            currency={currency} 
                            total={2500} 
                            locale={locale} 
                            style={style}
                            onError={onError} 
                            onSuccess={onSuccess} 
                            onCancel={onCancel}
                        />
                        <Button 
                             disabled={this.state.disablePackageTwo }
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
                        <PaypalBtn 
                            env={env} 
                            client={client} 
                            currency={currency} 
                            total={3500} 
                            locale={locale} 
                            style={style}
                            onError={onError} 
                            onSuccess={onSuccess} 
                            onCancel={onCancel}
                        />
                        <Button 
                            disabled={this.state.disablePackageThree}
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