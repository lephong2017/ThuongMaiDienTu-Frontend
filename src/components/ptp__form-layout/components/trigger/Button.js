import React from 'react';
import { Button } from 'antd';
export default class extends React.Component {
  getFunction =()=>{
      const {attr,actions} =this.props;
      const actionContent= actions.filter(act=>act.attrbtn===attr)[0];
      return actionContent;
  }
  render () {
    const { render } = this.props;
    // const action = this.getFunction().content;
    return (
    // onClick={action}
      <Button size={render.size} type='primary' htmlType='submit' icon={render.icon} >
        {render.label}
      </Button>
    );
  }
}
