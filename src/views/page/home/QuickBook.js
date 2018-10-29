import { Form, Input,DatePicker , Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React,{Component} from 'react';
import moment from 'moment';
import './css/form.css';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { MonthPicker, RangePicker } = DatePicker;

const range=(start, end)=> {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
}
class BookCar extends React.Component {
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
  
    disabledDate=(current) =>{
    // Can not select days before today and today
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
    const { getFieldDecorator } = this.props.form;

    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : null;
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Row className="form_content">
          <Col span={24} >
            <Form layout={null} onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Chọn Tỉnh/ Thành phố"
                    >
                    <Select
                        // value={state.currency}
                        // size={size}
                        style={{ width: '100%' }}
                        // onChange={this.handleCurrencyChange}
                        >
                            <Option value="BinhDuong">Bình Dương</Option>
                            <Option value="ThuDuc">Thủ Đức</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chọn ngày thuê và ngày trả"
                    >
                      <RangePicker
                        disabledDate={this.disabledDate}
                        disabledTime={this.disabledRangeTime}
                        showTime={{
                            hideDisabledOptions: true,
                            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                        }}
                        style={{width:'100%'}}
                        format="YYYY-MM-DD HH:mm:ss"
                        />
                </FormItem>
                
                <FormItem style={{float:'right'}}>
                     <Button type="primary" htmlType="submit">Chọn xe</Button>
                </FormItem>
            </Form>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;