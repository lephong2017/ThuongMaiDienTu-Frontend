import { Form,DatePicker , Select, Row, Col, Button, } from 'antd';
import React,{Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'views/page/home/css/form.css';
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
    city:'ThuDuc',
    dateRental:null,
    dateReturn:null,
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

  handleCityChange=(val)=>{
    this.setState({city:val});
    this.props.onChangeCity(val);
  }

  onChangeDateRental=(value, dateString)=> {
    this.setState({dateRental: dateString});
    this.props.onChangeDateRental(dateString);
  }

  onChangeDateReturn=(value, dateString)=> {
    const numDayRental = new Date(dateString).getDate() - new Date(this.state.dateRental).getDate();
    this.setState({dateReturn: dateString, numDayRental: numDayRental });
    this.props.onChangeDateReturn(dateString);
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : null;
      const {dateReturn, dateRental, city} = this.props;
    return (
      <Row className="form_content">
          <Col span={24} >
            <Form layout={null} onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Chọn Tỉnh/ Thành phố"
                    >
                    <Select
                        style={{ width: '100%' }}
                        defaultValue={city}
                        onChange={this.handleCityChange}
                        >
                            <Option value="BinhDuong">Bình Dương</Option>
                            <Option value="ThuDuc">Thủ Đức</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chọn ngày thuê "
                    >
                      <DatePicker
                        format="YYYY-MM-DD"
                        placeholder="Select date"
                        disabledDate={this.disabledDate}
                        disabledTime={this.disabledRangeTime}
                        onChange={this.onChangeDateRental}
                        style={{width:'100%'}}
                        defaultValue={moment(dateRental, 'YYYY-MM-DD')}
                        />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Chọn ngày trả"
                    >
                      <DatePicker
                        // showTime
                        format="YYYY-MM-D"
                        placeholder="Select date"
                        disabledDate={this.disabledDate}
                        disabledTime={this.disabledRangeTime}
                        onChange={this.onChangeDateReturn}
                        style={{width:'100%'}}
                        defaultValue={moment(dateReturn, 'YYYY-MM-DD')}
                        />
                </FormItem>
                {/* <FormItem style={{float:'right'}}>
                        <Link to={{ 
                            pathname: '/tim-xe', 
                            state: { 
                              city: this.state.city, 
                              dateRental: this.state.dateRental,
                              dateReturn: this.state.dateReturn
                              }
                            }}>
                          <Button type="primary" htmlType="submit">Chọn xe</Button>
                        </Link>
                </FormItem> */}
            </Form>
          </Col>
      </Row>
    );
  }
}

const QuickBook = Form.create()(BookCar );
export default QuickBook;