import {DatePicker} from 'antd';
import React,{Component} from 'react';
import { Form} from 'antd';
import moment from 'moment';
import {validation} from 'containers/FormContainers/validations/FormItem/Input';
const  FormItem = Form.Item;
export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  triggerChange = (e) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, e.target.value));
    }
  }
  checkRule=(option,data ) =>{
    const dateFormat = 'YYYY/MM/DD';
    if(option.length===0){
        const optionRule={
            initialValue:moment(data.defaultValue, dateFormat),
            rules: validation.require
          }
        return optionRule;
    }else{
        return option;
    }
  }
  render(){ 
      const { attr, data, render, form, optionsRule, formItemLayout} = this.props;
      const { getFieldDecorator } = form;
      const checkRule = this.checkRule(optionsRule, data);
      return (
        <FormItem
              key={attr}
              label={render.label}
              {...formItemLayout}
          >
        {
          getFieldDecorator(`${attr}`, checkRule)(
            <DatePicker 
                key={attr}
                onChange={this.triggerChange}
                placeholder={render.placeholder}  
                style={{width:'100%'}}
                />
          )
        }
        </FormItem>
      );
  }
}