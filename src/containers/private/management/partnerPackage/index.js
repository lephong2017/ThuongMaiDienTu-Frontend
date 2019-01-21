import React,{Component} from 'react';
import {Row, Col, Button, Icon, Popover, Avatar, Select, notification,   } from 'antd';
import './index.css';
import FunctionbarContent from './function/index';
import PanelWrapper from 'containers/wrapper/Panel.style';
import TableContent from 'components/ptp__table/index';
// import TableContent from 'components/table/MyTable';

// import {demoData} from './list-Feature-dumy';
import DrawerContent from 'components/Drawer/Drawer';
import FormPartnerPackage from './action/add/FormPartnerPackage'; 
import FormEditPartnerPackage  from './action/edit/edit'; 

import { withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import {showNotification} from 'components/notification/Notification';
import {reqLoadDataPaging, reqSearchPartnerTenantPackage, reqCountData,
     reqFindPartnerTenantPackage, reqDeletePartnerTenantPackage, reqAddPartnerTenantPackage, reqUpdatePartnerTenantPackage} from 'redux/partnerPackage/actions';
import * as CONST_VARIABLE from 'utils/const/index';

import {reqSendEmail} from 'redux/sendmail/actions';

class PartnerPackageManagement extends Component{
    state={
        pageSize:5,
        pageIndex:1,
        fullScreenMode:false,
        
        visibledAdd:false,
        visibledEdit:false,

        filteredInfo: null,
        sortedInfo: null, 
        selectedRowKeys: [],
        pagination:null,
        recordSelected:null,
        data:[],
        idEdit:null
    }
    handleFullScreenMode=(val)=> {
        this.setState(() => {
            return {
                fullScreenMode: val
            };
        });
    }
        
    showDrawerAdd=()=>{ this.setState({visibledAdd:true}) }
    onCloseAdd = () => { this.setState({ visibledAdd: false, }) };

    showDrawerEdit=(id)=>{ 
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleFindPartnerTenantPackage(id, accesstoken);
        this.setState({visibledEdit:true, idEdit: id});
     }
    onCloseEdit = () => { this.setState({ visibledEdit: false, }) };


    onSelectChange = (selectedRowKeys) => {
        //console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
            pagination: pagination
        });

    }

    onRowSelect = (record) => {
        this.setState({recordSelected:record});
    }

    clearFilters = (attr, name) => {
        const filteredInfo = this.state.filteredInfo;
        let arrayVal = filteredInfo[attr.val];
        let ind = arrayVal.indexOf(name);
        arrayVal.splice(ind, 1);
        let attrFilter ={
            [attr.val]: arrayVal
        }
        const obj= {...filteredInfo, ...attrFilter};
        this.setState({ filteredInfo: obj });
    }

    clearSorted = () => {
        this.setState({ sortedInfo: null, });
    }
    handleChangeSelectInRow =(value) => {
        //console.log("change value in rrow: ");
        //console.log(value, this.state.recordSelected);
    }
    
    handleOnSearch= (val) =>{
        //console.log(this.state.pagination);
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        // console.log(val);
        if(val!==''){
            // this.props.countAllPartnerTenantPackage(accesstoken);    
            this.props.handleSearchPartnerTenantPackage(val, this.state.pageIndex, this.state.pageSize, accesstoken);
       
        }else{
            const {pageIndex, pageSize}= this.state;
            this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
            this.props.countAllPartnerTenantPackage(accesstoken);    

        }
    }


    componentWillMount(){
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize}= this.state;
        this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
        this.props.countAllPartnerTenantPackage(accesstoken);
    }

    componentDidMount(){
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize}= this.state;
        this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
        this.props.countAllPartnerTenantPackage(accesstoken);
    }

    handleSubmit=(obj)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleAddPartnerTenantPackage(obj, accesstoken);
        this.onCloseAdd();
        showNotification("Thêm thành công", "Bạn vừa thực hiện thêm một gói partner!!!", "topRight", "success");
    }

    handleDelete=(id)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleDeletePartnerTenantPackage(id, accesstoken);
        showNotification("Xóa thành công", "Bạn vừa thực hiện xóa một gói partner!!!", "topRight", "success");
    }

    handleSubmitEdit=(id, obj)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleUpdatePartnerTenantPackage(id, obj, accesstoken);
        this.onCloseEdit();
        this.setState({id:null});
        showNotification("Sửa thành công", "Bạn vừa thực hiện cập nhật thông tin một tính năng!!!", "topRight", "success");
    }

    sendMail=(email)=>{
        this.props.handleSendMail(email);
    }
   
    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const info = {
            sorted: sortedInfo,
            filtered: filteredInfo
        }
        const columns = [
            {
                title: 'Mã partner',
                dataIndex: 'idPartner',
                key: 'idPartner',
            }, 
            {
                title: 'Mã gói',
                dataIndex: 'idPackage',
                key: 'idPackage',
            }, 
            {
                title: 'Ngày',
                dataIndex: 'dateTenant',
                key: 'dateTenant',
            }, 
            {
                title: 'Action',
                align:'center',
                render:(text, record, index)=>{
                    return(
                        <div>
                            <Button onClick={()=>this.showDrawerEdit(text)} className='btn btn-table' icon='edit'></Button>
                            <Button 
                                onClick={()=>this.handleDelete(text)} 
                                className='btn btn-table' 
                                icon='delete'>
                            </Button>
                        </div>
                    );
                },
                dataIndex: 'id',
                key:'id',
                width : 100
               
            },
       ];
        
        const config ={
            table:{
                // bFeatureed: true
            },
            pagination:{
                defaultPageSize:5,
                total: this.props.numberPartnerPackage
            },
        }
        const event={
            table:{
                onChange:this.handleChange,
                clearSorted: this.clearSorted,
                clearFiltered: this.clearFilters,
                onRow: this.onRowSelect,
                onSearch: this.handleOnSearch
            },
            pagination:{
                onChange:
                    (page, pageSize)=>{
                        const accesstoken= sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
                        this.props.loadDataPaging(page, pageSize, accesstoken);
                    },
                onShowSizeChange:
                    (page, pageSize)=>{
                        const accesstoken= sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
                        this.props.loadDataPaging(page, pageSize, accesstoken);
                    }
            }
        }
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                this.setState({
                    selectedRowKeys: [...Array(46).keys()], // 0...45
                });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                    return false;
                    }
                    return true;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                let newSelectedRowKeys = [];
                newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                    return true;
                    }
                    return false;
                });
                this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            // onSelection: this.onSelection,
        };


        var listPropForDrawer={
            styleProps:{
              title:"Nhập thông tin!",
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
              placement:"right",
              closable:this.state.visibledAdd,
              destroyOnClose:false,
            },
            onClose:this.onCloseAdd,
            visible:this.state.visibledAdd,
            hasButtonFooter:false,
            componentWillShow:(key)=> <FormPartnerPackage
                    key={key}
                    onSubmitAdd={this.handleSubmit}
                />,
        }
        var listPropForDrawerEdit={
            styleProps:{
              title:"Nhập thông tin sửa đổi!",
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
              placement:"right",
              closable:this.state.visibledEdit,
              destroyOnClose:false,
            },
            onClose:this.onCloseEdit,
            visible:this.state.visibledEdit,
            hasButtonFooter:false,
            componentWillShow:(key)=> <FormEditPartnerPackage
                key={key}
                id={this.state.idEdit} 
                partnerPackage={this.props.itemPartnerPackage} 
                onSubmitEdit={this.handleSubmitEdit}
            />,
        }
        const { partnerHire} = this.props;
        return (
            <Row className="content_manager_wrapper" style={{height:'100%'}}>
                <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                    <FunctionbarContent showDrawerAdd={this.showDrawerAdd} handleFullScreenMode={this.handleFullScreenMode}/>
                    {
                        partnerHire.map((val, ind)=>{
                            return <div key={ind} className="notification-bar">
                                <span>{val.nameParnert}</span>
                                <Button onClick={()=>this.sendMail(val.email)} className="btn-noti btn-mail-notification-right">
                                    <Icon type='mail'/>
                                     Gởi mail
                                </Button>
                            </div>
                        })
                    }
                    
                    <Col md={24} className="table-wrapper">
                        <TableContent
                            rowSelection={rowSelection}
                            data={this.props.partnerPackage} 
                            columns={columns} 
                            config={config} 
                            event={event}
                            info={info}
                        />
                        
                    </Col>
                    <DrawerContent 
                        key={'addPartnerPackage'}
                        styleProps={listPropForDrawer.styleProps} 
                        visible={listPropForDrawer.visible} 
                        onClose={listPropForDrawer.onClose}
                        hasButtonFooter={listPropForDrawer.hasButtonFooter}    
                        componentWillShow={listPropForDrawer.componentWillShow}
                    />
                    <DrawerContent 
                        key={'editPartnerPackage'}
                        styleProps={listPropForDrawerEdit.styleProps} 
                        visible={listPropForDrawerEdit.visible} 
                        onClose={listPropForDrawerEdit.onClose}
                        hasButtonFooter={listPropForDrawerEdit.hasButtonFooter}    
                        componentWillShow={listPropForDrawerEdit.componentWillShow}
                    />
                </PanelWrapper>

            </Row>
        );
    }
}
const mapStateToProps = state => {
    return {
        partnerPackage: state.partnerPackage,
        itemPartnerPackage: state.itemPartnerPackage,
        partnerHire: state.partnerHire,
        numberPartnerPackage: state.numberPartnerPackage
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddPartnerTenantPackage: (object, accesstoken)=>{
            dispatch(reqAddPartnerTenantPackage(object, accesstoken));
        },
        handleFindPartnerTenantPackage: (id, accesstoken)=>{
            dispatch(reqFindPartnerTenantPackage(id, accesstoken));
        },
        handleUpdatePartnerTenantPackage: (id, object, accesstoken)=>{
            dispatch(reqUpdatePartnerTenantPackage(id, object, accesstoken));
        },
        handleDeletePartnerTenantPackage: (id, accesstoken)=>{
            dispatch(reqDeletePartnerTenantPackage(id, accesstoken));
        },
        loadDataPaging: (pageIndex, pageSize, accesstoken)=>{
            dispatch(reqLoadDataPaging(pageIndex, pageSize, accesstoken));
        },
        countAllPartnerTenantPackage: ( accesstoken)=>{
            dispatch(reqCountData( accesstoken));
        },
        handleSearchPartnerTenantPackage: (keyword, pageIndex, pageSize, accesstoken)=>{
            dispatch(reqSearchPartnerTenantPackage(keyword, pageIndex, pageSize, accesstoken))
        },
        handleSendMail: (email)=>{
            dispatch(reqSendEmail(email))
        }

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PartnerPackageManagement));