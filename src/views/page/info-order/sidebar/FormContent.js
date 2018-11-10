import { Form , Row, Col, Button,  } from 'antd';
import React,{Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import '../css/form.css';
// const FormItem = Form.Item;

const range=(start, end)=> {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
}
class BookCar extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  onChange=(value, dateString)=> {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  onOk=(value)=> {
    console.log('onOk: ', value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
  disabledDate=(current) =>{
    return current && current < moment().endOf('day');
  }
  
   disabledDateTime=() =>{
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  
   disabledRangeTime=(_, type)=> {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }

  render() {

    // const { formLayout } = this.state;
    // const formItemLayout = formLayout === 'horizontal' ? {
    //     labelCol: { span: 4 },
    //     wrapperCol: { span: 14 },
    //   } : null;
    const rowStyleOrder={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
    return (
      <Row className="form_content">
          <Col md={24} >
            <Row>
              <Col md={24}>
                <p className="title-label">Hình thức nhận xe:</p>
                <span className="text-order">Nhận xe tại nhà</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Thời gian:</p>
                <span className="text-order">22:00 31/10/2018 - 19:00 01/11/2018</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Mã giảm giá:</p>
                <span className="text-order">SCH134KsfnH</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Giới hạn quảng đường:</p>
                <span className="text-order">Tối đa 250km/ngày, phụ trội 3.000 đ/km</span>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="title-label">Chi tiết giá:</p>
                
                <Row style={rowStyleOrder} className="row-info-order">
                    <Col span={12} ><span>Đơn giá ngày</span></Col>
                    <Col span={12} ><span className="span-info-order">900 000đ</span></Col>
                </Row>
                <Row style={rowStyleOrder} className="row-info-order">
                    <Col span={12}><span>Ngày</span></Col>
                    <Col span={12}><span className="span-info-order">7 Ngày</span></Col>
                </Row>
                <hr/>
                <Row style={rowStyleOrder} className="row-info-order">
                    <Col span={12}><span>TỔNG</span></Col>
                    <Col span={12}><span className="span-info-order">7 Đ</span></Col>
                </Row>
              </Col>
            </Row>
            <Row >
                <Col md={24} style={{float:'right',width:'100%',padding:'10px 0'}}>
                    <Link to="tim-xe">
                        <Button style={{width:'100%'}} type="primary" htmlType="submit">Chọn xe này</Button>
                    </Link>
                </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;