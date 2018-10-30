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
        {options.map(singleOption =>  this.getMenuItem({singleOption })  )}
      </Menu>
    );
  }
}

export default HeaderContent;