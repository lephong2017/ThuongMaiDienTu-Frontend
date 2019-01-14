import { Form,DatePicker , Select, Row, Col, Button, } from 'antd';
import React,{Component} from 'react';
import moment from 'moment';
import { withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import 'views/page/home/css/form.css';
import {reqAllLocation,} from 'redux/location/actions';
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

  componentWillMount(){
    this.props.handleReqAllLocation('123456789');
  }
  change_alias=(alias)=> {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(" ",""); 
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"");
    str = str.replace(/ + /g,"");
    str = str.trim(); 
    return str;
}
  render() {
    // const { getFieldDecorator } = this.props.form;
    const {location} = this.props;
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
                    {
                      (location)?
                      location.map((val, ind)=>{
                         return <Option key={val} value={this.change_alias(val)}>{val}</Option>
                      }):
                        <Option key='thuduc' value="Thủ Đức">Thủ Đức</Option>
                    }
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


const mapStateToProps = state => {
  return {
      location: state.location
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleReqAllLocation:(accesstoken)=>{
          dispatch(reqAllLocation(accesstoken)) ;
      },

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuickBook));