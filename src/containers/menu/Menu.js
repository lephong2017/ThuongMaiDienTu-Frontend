import { Menu, Icon,Button, } from 'antd';
import React,{Component} from 'react';
import {Link, } from 'react-router-dom';
import options from './options';
import Register from 'views/page/register/index';
import Login from 'views/page/login/index';
import Drawer from 'components/Drawer/Drawer';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import {updateIndex} from 'utils/key-component/settings_key_antd';
import * as CONST_VARIABLE from 'utils/const/index';
const SubMenu = Menu.SubMenu;
class HeaderContent extends Component {
  
  state = {
    current: 'mail',
    visibleLogin: false,
    visibleRegister: false,
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
              <Menu.Item  key={`${child.key}`}>
                <Link  to={`/${child.key}`}>
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
  
  onCloseLogin = () => { this.setState({ visibleLogin: false, }) };
  showDrawerLogin = () => {  this.setState({  visibleLogin: true, }); };
  onCloseRegister = () => { this.setState({ visibleRegister:false}) };
  showDrawerRegister = () => {  this.setState({  visibleRegister: true, }); };
  handleClick = (e) => {
    if(e.key==='register'){
      this.showDrawerRegister();
    }else if(e.key==='login'){
      this.showDrawerLogin();
    }
    this.setState({
      current: e.key,
    });
  }

  render() {
    const listPropForDrawerLogin={
      styleProps:{
        title:"Vui lòng đăng nhập để sử dụng hệ thống này!",
        width:420,
        height:'100%',
        maskStyle:{
            color:'red'
        },
          mask:true,
          maskClosable:true,
        style:{
            backgroundColor:'#fafafa'
        },
        className:"ok",
        zIndex:1,
        placement:"left",
        closable:this.state.visibleLogin,
        destroyOnClose:false,
      },
      onClose:this.onCloseLogin,
      visible:this.state.visibleLogin,
      hasButtonFooter:false,
      componentWillShow:()=> <Login key={`${updateIndex()}`} onClose={this.onCloseLogin}/>,
  }
    const listPropForDrawerRegister={
      styleProps:{
        title:"Vui lòng đăng ký để sử dụng hệ thống này!",
        width:420,
        height:'100%',
        maskStyle:{
            color:'red'
        },
          mask:true,
          maskClosable:true,
        style:{
            backgroundColor:'#fafafa'
        },
        className:"ok",
        zIndex:1,
        placement:"left",
        closable:this.state.visibleRegister,
        destroyOnClose:false,
      },
      onClose:this.onCloseRegister,
      visible:this.state.visibleRegister,
      hasButtonFooter:false,
      componentWillShow:()=> <Register key={`${updateIndex()}`} onClose={this.onCloseRegister}/>,
  }
  const role = sessionStorage.getItem(CONST_VARIABLE.ROLE_ACCOUNT);
  const user = JSON.parse(sessionStorage.getItem(CONST_VARIABLE.LOGIN));
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {options.map(singleOption =>  this.getMenuItem({singleOption })  )}
        {
          (role)?
            <Menu.Item key={"dashboard/management"}>
              <Link to="dashboard/management">
                <Button onClick={this.handleClick}>Quản lý</Button>
              </Link>
            </Menu.Item>
          :
            <Menu.Item key={"dashboard"}>
              <Link to="dashboard/management">
                <Button onClick={this.handleClick}>Dùng thử</Button>
              </Link>
            </Menu.Item>
        }
        
        {
        (role)?
          <div key={`${updateIndex()}`}></div>:
          <Menu.Item key={"register"}>
              <Button onClick={this.handleClick}>Đăng ký</Button>
          </Menu.Item>
        }

        {
        (role)?
        <div key={`${updateIndex()}`}></div>:
          <Menu.Item key={"login"}>
              <Button onClick={this.handleClick}>Đăng nhập</Button>
          </Menu.Item>
        }

        {
          (user)?
          <Menu.Item key={"username"}>
            <Button onClick={()=> sessionStorage.clear()} style={{color: 'red', textTransform: 'UPPERCASE'}}>{user.userName}</Button>
          </Menu.Item>
          :
          <span></span>
        }

        <Drawer 
            key={'registerDrawer'}
            styleProps={listPropForDrawerRegister.styleProps} 
            visible={listPropForDrawerRegister.visible} 
            onClose={listPropForDrawerRegister.onClose}
            hasButtonFooter={listPropForDrawerRegister.hasButtonFooter}    
            componentWillShow={listPropForDrawerRegister.componentWillShow}
        />
        <Drawer 
            key={'loginDrawer'}
            styleProps={listPropForDrawerLogin.styleProps} 
            visible={listPropForDrawerLogin.visible} 
            onClose={listPropForDrawerLogin.onClose}
            hasButtonFooter={listPropForDrawerLogin.hasButtonFooter}    
            componentWillShow={listPropForDrawerLogin.componentWillShow}
        />
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
      auth0: state.auth0,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContent));