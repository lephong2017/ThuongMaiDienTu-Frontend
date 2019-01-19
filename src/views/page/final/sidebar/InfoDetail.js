import { Form , Row, Col,   } from 'antd';
import React,{Component} from 'react';
import '../css/form.css';

class BookCar extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  
  render() {
    const {info} = this.props;
    console.log(info);
      
    return ( 
      <Row className="form_content">
          <Col span={24} >
            <Row>
              <p className="title-header-banner">Chi tiết đặt xe</p>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Trạng thái:</p>
                <span className="text-order">Xe đã sẳn sàng</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Thanh toán:</p>
                <span className="text-order">Trả sau</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Giá trị:</p>
                <span className="text-order">{info.priceOrder} VNĐ</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Hình thức nhận xe:</p>
                <span className="text-order">
                  {
                    (info.locationReceive==='AT_HOME')?"Nhận xe tại nhà":
                    "Nhận xe tại đại lý"
                  }
                  </span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Thời gian:</p>
                <span className="text-order">{info.dateOfhire} - {info.carReturnDay}</span>
              </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;