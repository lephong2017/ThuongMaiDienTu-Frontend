import { Menu, Icon } from 'antd';
import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import history from '../../../../history';
import './index.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {

  handleClick = (e) => {
    history.push( this.props.url+'/'+ e.key);
    window.location.reload();
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
          
          <MenuItemGroup key="g1" title="Module">

            <Menu.Item key="car">
                Tất cả xe của hệ thống
            </Menu.Item>

            <Menu.Item key="partner">
                  Quản lý đối tác
              </Menu.Item>

              <Menu.Item key="oders">
                  Quản lý đơn hàng
              </Menu.Item>

              <Menu.Item key="customer">
                  Quản lý khách hàng
              </Menu.Item>

              {/* <Menu.Item key="customercar">
                  Khách hàng cho thê xe
              </Menu.Item> */}

              <Menu.Item key="feature">
                  Tính năng xe
              </Menu.Item>

              <Menu.Item key="packages">
                  Gói dịch vụ
              </Menu.Item>

              <Menu.Item key="payment">
                  Phương thức thanh toán
              </Menu.Item>

              <Menu.Item key="procedure">
                  Thủ tục đặt xe
              </Menu.Item>

          </MenuItemGroup>
          
          {/* <MenuItemGroup key="g2" title="Đơn hàng">
            <Menu.Item key="3">Danh sách đơn hàng</Menu.Item>
          </MenuItemGroup>

          <MenuItemGroup key="g4" title="Đối tác">
              
          </MenuItemGroup>
          <MenuItemGroup key="g5" title="Đơn hàng">
            
          </MenuItemGroup> */}
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Thông tin</span></span>}>
            <Menu.Item key="5">Cập nhật mật khẩu</Menu.Item>
            <Menu.Item key="6">Cập nhật thông tin</Menu.Item>
            <SubMenu key="sub3" title="Giới thiệu">
                <Menu.Item key="7">Hệ thống</Menu.Item>
                <Menu.Item key="8">Cá nhân</Menu.Item>
            </SubMenu>
        </SubMenu>
      </Menu>
    );
  }
}
export default Sider;