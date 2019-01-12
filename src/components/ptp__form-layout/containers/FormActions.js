import { Col, Form, Row } from 'antd';
import { renderFormItem } from 'components/ptp__form-layout/components/index';
import { renderTriggerItem } from 'components/ptp__form-layout/components/trigger/index';
import React, { Component } from 'react';
import '../css/index.scss';
const edit_submit = 1;
class FormLayoutContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submit: null
    };
  }

  findFieldWithAttr = (listFields, attri) => {
      const result = listFields.filter(singleField => singleField.attrbField === attri);
      return result[0];
  }

  findTriggerWithAttr = (listTrigger, attri) => {
      const result = listTrigger.filter(singleTrigger => singleTrigger.attrbTrigger === attri);
      return result[0];
  }

  getFunction = (attr) => {
      const {actions} = this.props;
      const actionContent= actions.filter(act=>act.attrbtn === attr)[0];
      return actionContent;
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const onSubmit = this.getFunction('save').content;
          onSubmit(values);
        }else{
          const onSubmit = this.getFunction('save').content;
          onSubmit('error');
        }
      });
  }
  getOptionRule = (colValues) => {
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
    console.log(this.props.submit);
    const { formID, layouts, actions, trigger, classNames, type, listFields, submit } = this.props;

    const formItemLayout = type === 'horizontal' ? {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 }
    } : null;
    if (submit === edit_submit) {
      document.getElementById(`submitBtn-${formID}`).click();
    }
    return (layouts) ?
      (
          <Form id={formID} layout={type} className={classNames} onSubmit={this.handleSubmit}>
          <button id={`submitBtn-${formID}`} type='submit' style={{ display: 'none' }} />
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
                      const optionsRule = this.getOptionRule(colValues);
                      return <Col key={index} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                        {
                          renderFormItem(
                            listFields,
                            cols.attrbLayout,
                            this.props.form,
                            optionsRule,
                            formItemLayout
                          )
                        }
                      </Col>;
                    } else{
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
