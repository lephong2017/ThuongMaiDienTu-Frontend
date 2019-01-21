import React, {Component} from 'react';
import {reqAddCustomer} from 'redux/customer/actions';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import * as CONST_VARIABLE from 'utils/const/index';
import { Form, Input , Row, Col, Button,  } from 'antd';
// const FormItem = Form.Item;
class SidebarContent extends Component{
    constructor(props){
        super(props)
        this.state={
            disableForm: false,
        }
    }
    componentWillMount(){
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const access_token = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.handleAddCustomer(values, access_token);
            this.props.saveInfoCustomer(values);
            this.setState({disableForm: true});
          }
        });
      }
    render(){
        const rowstyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(255, 255, 255, 0.815)',
        }
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          } : null;
          const { getFieldDecorator } = this.props.form;
        return (
            <Row style={rowstyle}>
                <Col md={20}>
                    <Form layout={null} onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label="Họ và tên của bạn: "
                            >
                            {getFieldDecorator('fistNameAndLastName', {
                                rules: [{ required: true, message: 'Vui lòng nhập tên của bạn!' }],
                            })(
                                <Input disabled={this.state.disableForm} style={{width:'100%'}} placeholder="VD: Nguyễn Lê Phong" />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Số điện thoại liên hệ: "
                            >
                            {getFieldDecorator('phoneNumber', {
                                rules: [
                                    { required: true, message: 'Vui lòng nhập số điện thoại để chủ xe liên hệ!' },
                                    // { type: 'number', message: 'Số điện thoại bạn nhập không đúng!' },
                                ],
                            })(
                                <Input disabled={this.state.disableForm} style={{width:'100%'}} placeholder="VD: 0985490107" />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Địa chỉ email: "
                            >
                            {getFieldDecorator('email', {
                                rules: [
                                    { required: true, message: 'Vui lòng nhập email để chủ xe liên hệ!' },
                                    { type: 'email', message: 'Email bạn nhập chưa chính xác!' },
                                ],
                            })(
                                <Input disabled={this.state.disableForm} style={{width:'100%'}} placeholder="VD: phongnguyen@gmail.com" />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="Lưu ý: "
                            >
                            <div style={{color: 'red', fontWeight:'bold', lineHeight: '20px'}}>
                                Vui lòng cung cấp đúng thông tin liên hệ để chủ xe liên hệ với
                                bạn cung cấp các thông tin khác. Nếu hệ thống tự xác nhận đó 
                                là thông tin không chính xác, hệ thống sẽ tự động hủy đơn hàng
                                mà không thông qua ý kiến của bạn. Xin cảm ơn!
                            </div>
                        </Form.Item>
                        <Form.Item style={{float:'right',width:'100%'}}>
                            <Row>
                                <Button 
                                    style={{width:'100%'}} 
                                    type="primary" 
                                    disabled={this.state.disableForm}
                                    htmlType="submit">Lưu thông tin</Button>
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const WrappedNormalCustomerForm = Form.create()(SidebarContent);

const mapStateToProps = state => {
    return {
        itemCar: state.itemCar
    }
  }
   
  const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddCustomer : ( customer , accesstoken)=>{
            dispatch(reqAddCustomer(customer, accesstoken))
        }
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedNormalCustomerForm));