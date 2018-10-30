import { Menu, Icon,Button } from 'antd';
import React,{Component} from 'react';
import { Select ,Input} from 'antd';

const Option = Select.Option;
const Search = Input.Search;
class HeaderContent extends Component {
  state = {
    current: 'mail',
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      <Menu.Item key="search">
        <Search
          placeholder="Input search text"
          onSearch={value => console.log(value)}
          style={{ width: "100%" }}
        />
      </Menu.Item>
      <Menu.Item key="filter">
        <Select labelInValue defaultValue={{ key: 'price-up' }} style={{ width: '120%' }} onChange={this.handleChange}>
          <Option value="price-up">Giá tăng dần</Option>
          <Option value="price-down">Giá giảm dần</Option>
        </Select>
      </Menu.Item>
      
    </Menu>
    );
  }
}

export default HeaderContent;