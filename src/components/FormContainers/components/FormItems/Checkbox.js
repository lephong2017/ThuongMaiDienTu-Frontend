import React,{Component} from 'react';
import {Checkbox, Form} from 'antd';
const FormItem = Form.Item;
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
    render(){
        const { attr, render, form, optionsRule, formItemLayout} = this.props;
        const { getFieldDecorator } = form;
        return (
          <FormItem
              key={attr}
              label={render.label}
              {...formItemLayout}
            >
          {
            getFieldDecorator(`${attr}`, optionsRule)(
                <Checkbox 
                    key={attr} 
                    onChange={this.triggerChange} 
                />
            )
          }
          </FormItem>
        );
    }
}