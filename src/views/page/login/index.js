import { Form, Input,  Row, Col, Checkbox, Button,  } from 'antd';
import React,{Component} from 'react';

import {tenantId} from 'settings/index';
import {actLogin} from 'actions/auth0/index';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import {showNotification} from 'components/notification/Notification';
const FormItem = Form.Item;


class LoginForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const data ={
          grant_type  :  values.password,
          tenantId  :  tenantId,
          username :  values.email,
          password : values.password

        }
        showNotification("Đăng nhập rồi","Đợi xíu đi","topRight","success");
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
            }]
          })(
            <Input type="password" />
          )}
        </FormItem>
       
        <FormItem >
          <Button style={{float:'right'}} type="primary" htmlType="submit">Đăng nhập</Button>
        </FormItem>
      </Form>
    );
  }
}

const FormLogin= Form.create()(LoginForm);


const mapStateToProps = state => {
  return {
      auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actLogin:(data)=>{
          dispatch(actLogin(data));
    },

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormLogin));