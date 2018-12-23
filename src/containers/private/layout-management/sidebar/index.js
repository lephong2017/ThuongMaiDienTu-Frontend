import { Menu, Icon } from 'antd';
import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Thông tin</span></span>}>
            <Menu.Item key="5">Cập nhật mật khẩu</Menu.Item>
            <Menu.Item key="6">Cập nhật thông tin</Menu.Item>
            <SubMenu key="sub3" title="Giới thiệu">
                <Menu.Item key="7">Hệ thống</Menu.Item>
                <Menu.Item key="8">Cá nhân</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Quản lý </span></span>}>
          
          <MenuItemGroup key="g1" title="Xe">
            <Menu.Item key="1">
              <Link to="management/car">
                Danh sách xe cho thuê
              </Link>
            </Menu.Item>
          </MenuItemGroup>
          
          <MenuItemGroup key="g2" title="Đơn hàng">
            <Menu.Item key="3">Danh sách đơn hàng</Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup key="g4" title="Đối tác">
              <Menu.Item key="4">
                <Link to="management/partner">
                  Quản lý đối tác
                </Link>
              </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default Sider;