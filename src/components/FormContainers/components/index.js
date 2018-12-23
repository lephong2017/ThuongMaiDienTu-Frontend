import React from 'react';
import Input from './FormItems/Input';
import TextArea from './FormItems/TextArea';
import Email from './FormItems/Email';
import NumberInput from './FormItems/NumberInput';
import PasswordInput from './FormItems/PasswordInput';
import PhoneNumberInput from './FormItems/PhoneNumberInput';

import Select from './FormItems/Select';
import MultiSelect from './FormItems/MultiSelect';
import RadioButton from './FormItems/RadioButton';
import Checkbox from './FormItems/Checkbox';
import Link from './FormItems/Link';
import DatePicker from './FormItems/DatePicker'; 
import URL from './FormItems/Url'; 

const  findFieldWithAttr=(listFields,attri)=>{
    const result = listFields.filter(singleField => singleField.attrbField===attri);
    return result[0];
} 
export const renderFormItem=(listFields,attribute, form, optionsRule, formItemLayout) =>{
    const field= findFieldWithAttr(listFields,attribute);
    switch (field.data.dataType){
        case "TEXT": 
            return <Input 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} 
                />;
        case "TEXT_AREA": 
            return <TextArea 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} 
                />;
        case "EMAIL": 
            return <Email 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} 
                />;
        case "PASSWORD":
            return <PasswordInput 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "NUMBER":
            return <NumberInput 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "PHONE":
            return <PhoneNumberInput 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "SELECT":
            return <Select 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form} 
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "MULTI_SELECT":
            return <MultiSelect 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form}
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "CHECKBOX":
            return <Checkbox 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form}
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "RADIO":
            return <RadioButton 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form}
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "LINK":
            return <Link 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form}
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "DATE_PICKER":
            return <DatePicker 
                formItemLayout={formItemLayout} 
                optionsRule={optionsRule} 
                form={form}
                attr={field.attrbField} 
                data={field.data} 
                render={field.render} 
                action={field.action} />;
        case "URL":
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
}
