import { Radio } from 'antd';
import React, { Component } from 'react';

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      val: 0
    };
  }
    triggerChange = (e) => {
        const onChange = this.props.onChange;
        if (onChange) {
        onChange(Object.assign({}, this.state, e.target.value));
        }
    }
  render () {
    const { attr, data } = this.props;
    return (
      <Radio
        key={attr}
        onChange={this.triggerChange}
        checked={data.config.checked}
      />
    );
  }
}
