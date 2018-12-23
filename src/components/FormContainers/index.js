import React,{Component} from 'react';
import FormContent from 'containers/FormContainers/containers/Layout';
export default class extends Component{
    render(){
        const {layouts, actions, trigger, classNames, type,listFields} = this.props;
        return(
                <FormContent
                    layouts={layouts}
                    actions={actions} 
                    trigger={trigger} 
                    classNames={classNames} 
                    type={type} 
                    listFields={listFields}
                />
        );   
    }
}
