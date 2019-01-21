import { Menu, Icon } from 'antd';
import React , {Component} from 'react';
// import {Link} from 'react-router-dom';
import history from '../../../../history';
import './index.css';
import * as CONST_VARIABLE from 'utils/const/index';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {

  handleClick = (e) => {
    history.push( this.props.url+'/'+ e.key);
    window.location.reload();
  }


  render() {
    const role = sessionStorage.getItem(CONST_VARIABLE.ROLE_ACCOUNT);
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={(role==='PARTNER')?['sub1', 'sub4']:['sub1','sub2', 'sub4']}
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

        <SubMenu key="sub2" 
            // disabled={(role==='PARTNER')?true:false}
            title={<span><Icon type="appstore" /><span>Quản lý của admin</span></span>}>
          {/* <MenuItemGroup key="g1" title="Module"> */}
            <Menu.Item disabled={(role==='PARTNER')?true:false} key="car">
                Tất cả xe của hệ thống
            </Menu.Item>

            <Menu.Item disabled={(role==='PARTNER')?true:false} key="partner">
                  Quản lý đối tác
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="oders">
                  Quản lý đơn hàng
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="customer">
                  Quản lý khách hàng
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="customercar">
                  Khách hàng cho thê xe
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="feature">
                  Tính năng xe
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="packages">
                  Gói dịch vụ
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="payment">
                  Phương thức thanh toán
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="procedure">
                  Thủ tục đặt xe
              </Menu.Item>

              <Menu.Item disabled={(role==='PARTNER')?true:false} key="partnerpackage">
                  Gói partner
              </Menu.Item>
          {/* </MenuItemGroup> */}
        </SubMenu>

        
        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>Quản lý của partner</span></span>}>
            <Menu.Item disabled={(role==='MANAGER'|| role==='ADMIN')?true:false} key="carOfPartner">Quản lý xe</Menu.Item>
            <Menu.Item disabled={(role==='MANAGER'|| role==='ADMIN')?true:false} key="ordersOfPartner">Đơn hàng</Menu.Item>
            <Menu.Item disabled={(role==='MANAGER'|| role==='ADMIN')?true:false} key="InfoService">Thông tin dịch vụ</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default Sider;