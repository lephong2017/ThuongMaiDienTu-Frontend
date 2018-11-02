import { Form, Input,DatePicker , Select, Row, Col, Button,  } from 'antd';
import React,{Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import '../css/form.css';
const FormItem = Form.Item;
const Option = Select.Option;

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
    // const { getFieldDecorator } = this.props.form;

    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : null;
    const rowStyleOrder={
        display:'flex',
        flexDirection:'row',
        // alignItems:'left',
        justifyContent:'space-between'
    }
    return (
      <Row className="form_content">
          <Col md={24} >
            <Form layout={null} onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Hình thức nhận xe"
                    >
                    <Select
                        // value={state.currency}
                        // size={size}
                        defaultValue="AT_PRODUCER"
                        style={{ width: '100%' }}
                        // onChange={this.handleCurrencyChange}
                        >
                            <Option value="AT_HOME">Nhận xe tại nhà</Option>
                            <Option value="AT_PRODUCER">Nhận xe tại đại lý</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chọn ngày thuê "
                    >
                      <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="Select Time"
                        onChange={this.onChange}
                        onOk={this.onOk}
                        style={{width:'100%'}}
                        />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chọn ngày trả"
                    >
                      <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="Select Time"
                        onChange={this.onChange}
                        onOk={this.onOk}
                        style={{width:'100%'}}
                        />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Mã giảm giá: "
                    >
                      <Input style={{width:'100%'}} placeholder="Nhập mã giảm giá" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Giới hạn quảng đường: "
                    >
                      <p className="text">Tối đa 250km/ngày, phụ trội 3.000 đ/km</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chi tiết giá: "
                    >
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

                </FormItem>
                
                <FormItem style={{float:'right',width:'100%'}}>
                    <Row >
                        <Col md={24}>
                            <Link to="info-rental-car">
                                <Button style={{width:'100%'}} type="primary" htmlType="submit">Chọn xe này</Button>
                            </Link>
                        </Col>
                    </Row>
                </FormItem>
            </Form>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;