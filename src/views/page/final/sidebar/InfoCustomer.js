import { Form , Row, Col,   } from 'antd';
import React,{Component} from 'react';
import '../css/form.css';

class BookCar extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  
  render() {

    return ( 
      <Row className="form_content">
          <Col span={24} >
            <Row>
              <p className="title-header-banner">Thông tin liên hệ</p>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Họ và tên:</p>
                <span className="text-order">Nguyễn Lê Phong</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Số điện thoại:</p>
                <span className="text-order">01643081322</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Email:</p>
                <span className="text-order">nguyenlephong1997@mail.com</span>
              </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;