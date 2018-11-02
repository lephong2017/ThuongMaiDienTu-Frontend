import { Form, Input,  Checkbox, Button,  } from 'antd';
import React,{Component} from 'react';
const FormItem = Form.Item;


class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Mật khẩu bạn nhập không khớp với mật khẩu trên!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;


    return (
      <Form onSubmit={this.handleSubmit} layout="vertical"> 
        <FormItem
          // {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Vui lòng nhập đúng định dạng E-mail!',
            }, {
              required: true, message: 'Vui lòng cung cấp E-mail của bạn!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="Mật khẩu"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Vui lòng nhập password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="Xác nhận mật khẩu"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Vui lòng xác nhận lại password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>Tôi <a href="">đồng ý</a> với điều khoản của bạn</Checkbox>
          )}
        </FormItem>
        <FormItem >
          <Button style={{float:'right'}} type="primary" htmlType="submit">Đăng ký</Button>
        </FormItem>
      </Form>
    );
  }
}

export default  Form.create()(RegistrationForm);
