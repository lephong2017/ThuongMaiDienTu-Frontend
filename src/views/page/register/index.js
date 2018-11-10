import { Form, Input,  Checkbox, Button,  } from 'antd';
import React,{Component} from 'react';
import {actRegister,actGetIAM} from 'actions/auth0/index';
import { withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {showNotification} from 'components/notification/Notification';
const FormItem = Form.Item;


class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    dataAPI:{}
  };
  handleSubmit = (e) => {
    e.preventDefault();
    showNotification("Đăng ký rồi","Đợi xíu đi","topRight","success");
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const data = {
          email:{
            value:values.email,
            primary:true
          },
          userName:values.email,
          password:values.password
        }
        this.props.actGetIAM();
        this.props.actRegister(data);
      }else{
        console.log("ok error");
      }
    });
    this.props.onClose();
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
            <Checkbox>Tôi <Link to="#">đồng ý</Link> với điều khoản của bạn</Checkbox>
          )}
        </FormItem>
        <FormItem >
          <Button style={{float:'right'}} type="primary" htmlType="submit">Đăng ký</Button>
        </FormItem>
      </Form>
    );
  }
}

const FormRegister=  Form.create()(RegistrationForm);

const mapStateToProps = state => {
  return {
      auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actRegister:(data)=>{
          dispatch(actRegister(data));
    },
    actGetIAM:()=>{
          dispatch(actGetIAM());
    }

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormRegister));