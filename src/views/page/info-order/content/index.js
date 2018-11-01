import { Form, Icon, Input,Row,Col, Button, Select } from 'antd';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/form.css';
const FormItem = Form.Item;
const { TextArea } = Input;

const Option = Select.Option;
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
    const { getFieldDecorator } = this.props.form;
    return (
      <Row style={{display:'flex',justifyContent:'center'}}>
          <Col md={12}>
            <p className="title-header">Nhập thông tin của bạn</p>
            <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical">
                <FormItem label="Họ và tên:" >
                    {getFieldDecorator('fullname', {
                        rules: [{ required: true, message: 'Vui lòng nhập họ và tên!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Họ và tên" />
                    )}
                </FormItem>
                <FormItem label="Số điện thoại:" >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="Số điện thoại" />
                    )}
                </FormItem>
                <FormItem label="Email:" >
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Vui lòng nhập email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem label="Hình thức thanh toán:" >
                    {getFieldDecorator('paymentMethod', {
                        rules: [{ required: true, message: 'Vui lòng chọn hình thức thanh toán!' }],
                    })(
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
                    )}
                </FormItem>
                <FormItem label="Lưu ý:" >
                    <TextArea rows={4} />
                </FormItem>
                <FormItem>
                    <Link to="/final">
                        <Button style={{float:'right'}} type="primary" htmlType="submit" className="login-form-button">
                            Hoàn tất
                        </Button>
                    </Link>
                </FormItem>
            </Form>
          </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm ;