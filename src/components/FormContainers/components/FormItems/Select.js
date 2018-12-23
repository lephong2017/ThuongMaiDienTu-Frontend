import React,{Component} from 'react';
import {Select, Form} from 'antd';

// import {validation} from 'containers/FormContainers/validations/FormItem/Input';
const FormItem = Form.Item;
const Option = Select.Option;
export default class extends Component {
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
          return {
            ...(nextProps.value || {}),
          };
        }
        return null;
      }
    constructor(props) {
        super(props);
        this.state = {
          val: 0,
        };
      }
      triggerChange = (e) => {
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(Object.assign({}, this.state, e));
        }
      }
      handleChange = (val) => {
        if (!('value' in this.props)) {
          this.setState({ val });
        }
        this.triggerChange({ val });
      }
      checkRule=(option,data ) =>{
        if(option.length===0){
            const optionRule={
                initialValue:data.defaultValue,
                // rules: validation.require
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
              <Select
                  key={attr}
                  showSearch
                  placeholder={render.placeholder}
                  // defaultValue={data.defaultValue}
                  onChange={this.handleChange}
              >
                {
                    data.config.options.map((option) => {
                        return (
                            <Option key={option.text} value={option.value}>{option.text}</Option>
                        );
                    })
                }
              </Select>
            )
          }
          </FormItem>
        );
    }
}


