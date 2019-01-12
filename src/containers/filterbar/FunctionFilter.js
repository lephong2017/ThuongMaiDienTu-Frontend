import { Menu,   } from 'antd';
import React,{Component} from 'react';
import { Select ,Input} from 'antd';
const Option = Select.Option;
const Search = Input.Search;
class HeaderContent extends Component {
  state = {
    current: 'mail',
    order: 'ASC'
  }
  handleChange=(val)=>{
    this.setState({order: val.key});
    this.props.onSearch('', val.key);
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
          onSearch={value => this.props.onSearch(value, this.state.order)}
          style={{ width: "100%" }}
        />
      </Menu.Item>
      <Menu.Item key="filter">
        <Select labelInValue defaultValue={{ key: 'ASC' }} style={{ width: '120%' }} onChange={this.handleChange}>
          <Option value="ASC">Giá tăng dần</Option>
          <Option value="des">Giá giảm dần</Option>
        </Select>
      </Menu.Item>
      
    </Menu>
    );
  }
}

export default HeaderContent;