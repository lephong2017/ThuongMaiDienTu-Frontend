import React, { Component } from 'react';
import { renderTriggerItem } from 'components/ptp__form-layout/components/trigger/index';
import '../css/index.scss';
import { Col, Form, Row } from 'antd';
const FormItem = Form.Item;
class FormLayoutContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submit: props.submit
    };
  }
  findFieldWithAttr=(listFields,attri)=>{
      const result = listFields.filter(singleField => singleField.attrbField===attri);
      return result[0];
  }
  findTriggerWithAttr=(listTrigger,attri)=>{
      const result = listTrigger.filter(singleTrigger => singleTrigger.attrbTrigger===attri);
      return result[0];
  }
  getFunction=(attr)=>{
      const {actions} =this.props;
      const actionContent= actions.filter(act=>act.attrbtn===attr)[0];
      return actionContent;
  }

  getOptionRule=(colValues)=>{
      if(!colValues.data.validation) return [];
      if(!colValues.data.validation.rules) return [];
      const rules =colValues.data.validation.rules;
      const checkHasRule= (rules!==undefined && rules.length!==0)?true:false;
      if(checkHasRule ){
          return {
              initialValue:colValues.data.defaultValue,
              rules: rules,
          }
      }else if(!checkHasRule ){
          return {
              initialValue:colValues.data.defaultValue,
              rules: [],
          }
      }
  }
  render () {
    const { formID, layouts, actions, trigger, classNames, type, listFields  } = this.props;

    const formItemLayout = type === 'horizontal' ? {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 }
    } : null;
    return (layouts) ?
      (
          <Form id={formID} layout={type} className={classNames} >
          {
            layouts.map((rowForm, index) => {
              return <Row key={index} className='row-form-item' gutter={16}>
                {
                  rowForm.map((cols, index) => {
                    const { sm, md, lg, xl, xxl } = cols.width;
                    const colValues = this.findFieldWithAttr(listFields, cols.attrbLayout);
                    if (cols.attrbTrigger) {
                      const colTrigger = this.findTriggerWithAttr(trigger, cols.attrbTrigger);
                      if (colTrigger !== undefined) {
                        return <Col key={index} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                                          {renderTriggerItem(trigger, cols.attrbTrigger, actions)}
                        </Col>;
                      }else {
                        return <div key={index} />;
                      }
                    } else
                    if (colValues !== undefined) {
                      return <Col key={colValues.attrbField} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                        <FormItem
                          key={colValues.attrbField}
                                          {...formItemLayout}
                                          label={colValues.render.label}>
                          {colValues.data.defaultValue}
                        </FormItem>
                      </Col>;
                    }else {
                      return <div key={index} />;
                    }
                  })
                }
              </Row>;
            })
          }
        </Form>
      )
        :(
        <div />
      );
  }
}

export default Form.create()(FormLayoutContent);
