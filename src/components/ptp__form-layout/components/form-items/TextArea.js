import React,{Component} from 'react';
import {Input, Form} from 'antd';

import {validation} from 'components/ptp__form-layout/validations/form-item/Input';
const  FormItem = Form.Item;
const { TextArea } = Input;
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
    if(option.length===0){
        const optionRule={
            initialValue:data.defaultValue,
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
            <TextArea  
                key={attr}
                onChange={this.triggerChange}
                placeholder={render.placeholder} 
                autosize={{ minRows: 2, maxRows: 6 }} 
                // defaultValue={data.defaultValue} 
                />
          )
        }
        </FormItem>
      );
  }
}