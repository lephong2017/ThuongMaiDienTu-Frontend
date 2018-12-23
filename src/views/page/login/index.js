import { Form, Input,  Button,  } from 'antd';
import React,{Component} from 'react';

// import {actLogin} from 'actions/auth0/index'; 
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import {showNotification} from 'components/notification/Notification';
import {actLoginRequest} from 'actions/auth0/auth0';
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
        showNotification("Đăng nhập rồi","Đợi xíu đi","topRight","success");
        this.props.handleLoginRequest(values);
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
          {getFieldDecorator('userName', {
            rules: [{
              type: 'email', message: 'Vui lòng nhập đúng định dạng E-mail!',
            }, {
              required: true, message: 'Vui lòng cung cấp E-mail của bạn!',
            }],
          })(
            <Input type='email' placeholder='Nhập tên đăng nhập đã đăng ký'/>
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
            <Input type="password" placeholder='Nhập mật khẩu đã đăng ký'/>
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
      auth0: state.auth0,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleLoginRequest:(data)=>{
          dispatch(actLoginRequest(data));
    },

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormLogin));