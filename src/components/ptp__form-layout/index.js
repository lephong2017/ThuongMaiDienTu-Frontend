import React, { Component } from 'react';
import FormView from './containers/FormView';
import FormActions from './containers/FormActions';
export default class extends Component {
  render () {
    const { layouts, actions, trigger, classNames, type, listFields, mode, submit, formID } = this.props;
    return (mode === 'view')
      ? (

        <FormView
          layouts={layouts}
          actions={actions}
          trigger={trigger}
          classNames={classNames}
          type={type}
          listFields={listFields}
          submit={submit}
          formID={formID}
        />
      )
      : (
        <FormActions
          layouts={layouts}
          actions={actions}
          trigger={trigger}
          classNames={classNames}
          type={type}
          listFields={listFields}
          submit={submit}
          formID={formID}
        />

      );
  }
}
