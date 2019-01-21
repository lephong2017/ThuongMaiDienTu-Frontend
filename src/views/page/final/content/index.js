import { Form,Row,Col, } from 'antd';
import React,{Component} from 'react';
import '../css/form.css';
import iconSuccess from 'images/icon/step3.png';
class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    //   0
    return (
      <Row style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <Col md={24}>
            <Row className="content_order_wrapper">
                <Col md={16}>
                    <img alt="" src={iconSuccess} width="180" />
                    <p className="title-header-final">Đặt xe thành công</p>
                </Col>
                <Col md={16}>
                    <p >Mã đặt xe của bạn:</p>
                    <p className="code-order">HNIOT181110166</p>
                </Col>
                <Col md={16}>
                    <p >
                        Yêu cầu đặt xe của bạn đã được hệ thống ghi nhận.
                        Chúng tôi sẽ liên lạc lại với bạn để thông báo tình trạng 
                        của xe ít nhất 6h trước thời điểm thuê xe.
                    </p>
                </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm ;