import { Menu, Icon } from 'antd';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import options from './options';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class HeaderContent extends Component {
  state = {
    current: 'mail',
  }
  getMenuItem = ({ singleOption, }) => {
    const { key, label, leftIcon, children } = singleOption;
    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span >
              <Icon type={leftIcon} />
              <span>{label} </span>
            </span>
          }
        >
          {children.map(child => {
            return (
              <Menu.Item  key={child.key}>
                <Link  to={child.key}>
                  <span>{child.label} </span>
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={key}>
        <Link to={`/${key}`}>
          <span>
            <Icon type={leftIcon} />
            <span > {label}  </span>
          </span>
        </Link>
      </Menu.Item>
    );
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {/* <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item> */}
        {options.map(singleOption =>  this.getMenuItem({singleOption })  )}
      </Menu>
    );
  }
}

export default HeaderContent;