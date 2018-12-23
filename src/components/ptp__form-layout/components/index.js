import React from 'react';
import Input from './form-items/Input';
import TextArea from './form-items/TextArea';
import Email from './form-items/Email';
import NumberInput from './form-items/NumberInput';
import PasswordInput from './form-items/PasswordInput';
import PhoneNumberInput from './form-items/PhoneNumberInput';

import Select from './form-items/Select';
import MultiSelect from './form-items/MultiSelect';
import RadioButton from './form-items/RadioButton';
import Checkbox from './form-items/Checkbox';
import Link from './form-items/Link';
import DatePicker from './form-items/DatePicker';
import URL from './form-items/Url';

const findFieldWithAttr = (listFields, attri) => {
  const result = listFields.filter(singleField => singleField.attrbField === attri);
  return result[0];
};
export const renderFormItem = (listFields, attribute, form, optionsRule, formItemLayout) => {
  const field = findFieldWithAttr(listFields, attribute);
  switch (field.data.dataType) {
    case 'TEXT':
      return <Input
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action}
      />;
    case 'TEXT_AREA':
      return <TextArea
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action}
      />;
    case 'EMAIL':
      return <Email
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action}
      />;
    case 'PASSWORD':
      return <PasswordInput
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'NUMBER':
      return <NumberInput
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'PHONE':
      return <PhoneNumberInput
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'SELECT':
      return <Select
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'MULTI_SELECT':
      return <MultiSelect
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'CHECKBOX':
      return <Checkbox
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'RADIO':
      return <RadioButton
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'LINK':
      return <Link
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'DATE_PICKER':
      return <DatePicker
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    case 'URL':
      return <URL
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
    default:
      return <Input
        formItemLayout={formItemLayout}
        optionsRule={optionsRule}
        form={form}
        attr={field.attrbField}
        data={field.data}
        render={field.render}
        action={field.action} />;
  }
};
