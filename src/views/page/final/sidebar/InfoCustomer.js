import { Form , Row, Col,   } from 'antd';
import React,{Component} from 'react';
import '../css/form.css';

class BookCar extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  
  render() {
    const {info} =this.props;
    console.log(info);
    return ( 
      <Row className="form_content">
          <Col span={24} >
            <Row>
              <p className="title-header-banner">Thông tin liên hệ</p>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Họ và tên:</p>
                <span className="text-order">{info.fistNameAndLastName}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Số điện thoại:</p>
                <span className="text-order">{info.phoneNumber}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Email:</p>
                <span className="text-order">{info.email}</span>
              </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;