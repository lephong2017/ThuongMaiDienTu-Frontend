import React,{Component} from 'react';
import {Row, Col, Button,   } from 'antd';
import './index.css';
import FunctionbarContent from './function/index';
import PanelWrapper from 'containers/wrapper/Panel.style';
import TableContent from 'components/ptp__table/index';
// import TableContent from 'components/table/MyTable';

// import {demoData} from './list-Location-dumy';
import DrawerContent from 'components/Drawer/Drawer';
import FormLocation from './action/add/FormLocation'; 
import FormEditLocation from './action/edit/edit'; 

import { withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import {showNotification} from 'components/notification/Notification';
import {reqLoadDataPaging, reqSearchLocation, reqCountData,
     reqFindLocation, reqDeleteLocation, reqAddLocation, reqUpdateLocation} from 'redux/location/actions';
import * as CONST_VARIABLE from 'utils/const/index';

class LocationManagement extends Component{
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
        this.props.handleFindLocation(id, accesstoken);
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
        // console.log("change value in rrow: ");
        // console.log(value, this.state.recordSelected);
    }
    
    handleOnSearch= (val) =>{
        //console.log(this.state.pagination);
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        // console.log(val);
        if(val!==''){
            // this.props.countAllLocation(accesstoken);    
            this.props.handleSearchLocation(val, this.state.pageIndex, this.state.pageSize, accesstoken);
       
        }else{
            const {pageIndex, pageSize}= this.state;
            this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
            this.props.countAllLocation(accesstoken);    

        }
    }


    componentWillMount(){
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize}= this.state;
        this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
        this.props.countAllLocation(accesstoken);
    }

    componentDidMount(){
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize}= this.state;
        this.props.loadDataPaging(pageIndex, pageSize,  accesstoken);
        this.props.countAllLocation(accesstoken);
    }

    handleSubmit=(obj)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleAddLocation(obj, accesstoken);
        this.onCloseAdd();
        showNotification("Thêm thành công", "Bạn vừa thực hiện thêm một locaiton!!!", "topRight", "success");
    }

    handleDelete=(id)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleDeleteLocation(id, accesstoken);
        showNotification("Xóa thành công", "Bạn vừa thực hiện xóa một location!!!", "topRight", "success");
    }

    handleSubmitEdit=(id, obj)=>{
        var accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.handleUpdateLocation(id, obj, accesstoken);
        this.onCloseEdit();
        this.setState({id:null});
        showNotification("Sửa thành công", "Bạn vừa thực hiện cập nhật thông tin một location!!!", "topRight", "success");
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
                title: 'Tên thành phố',
                dataIndex: 'city',
                key: 'city',
                sorter: (a, b) => a.city.length - b.city.length,
                sortlocation: sortedInfo.columnKey === 'city' && sortedInfo.location,
            }, 
            {
                title: 'Quốc gia',
                dataIndex: 'country',
                key: 'country',
               
            }, 
            {
                title: 'Địa chỉ',
                dataIndex: 'address',
                key: 'address',
               
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
                // blocationed: true
            },
            pagination:{
                defaultPageSize:5,
                total: this.props.numberLocation
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
            componentWillShow:(key)=> <FormLocation
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
            componentWillShow:(key)=> <FormEditLocation 
                key={key}
                id={this.state.idEdit} 
                location={this.props.itemLocation} 
                onSubmitEdit={this.handleSubmitEdit}
            />,
        }
        // console.log("adasdasdas");
        // console.log(this.props.itemLocation);
        // console.log("adasdasdas");
        return (
            <Row className="content_manager_wrapper" style={{height:'100%'}}>
                <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                    <FunctionbarContent showDrawerAdd={this.showDrawerAdd} handleFullScreenMode={this.handleFullScreenMode}/>
                    <Col md={24} className="table-wrapper">
                        <TableContent
                            rowSelection={rowSelection}
                            data={this.props.location} 
                            columns={columns} 
                            config={config} 
                            event={event}
                            info={info}
                        />
                        
                    </Col>
                    <DrawerContent 
                        key={'addlocation'}
                        styleProps={listPropForDrawer.styleProps} 
                        visible={listPropForDrawer.visible} 
                        onClose={listPropForDrawer.onClose}
                        hasButtonFooter={listPropForDrawer.hasButtonFooter}    
                        componentWillShow={listPropForDrawer.componentWillShow}
                    />
                    <DrawerContent 
                        key={'editlocation'}
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
        location: state.location,
        itemLocation: state.itemLocation,
        numberLocation: state.numberLocation
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddLocation: (object, accesstoken)=>{
            dispatch(reqAddLocation(object, accesstoken));
        },
        handleFindLocation: (id, accesstoken)=>{
            dispatch(reqFindLocation(id, accesstoken));
        },
        handleUpdateLocation: (id, object, accesstoken)=>{
            dispatch(reqUpdateLocation(id, object, accesstoken));
        },
        handleDeleteLocation: (id, accesstoken)=>{
            dispatch(reqDeleteLocation(id, accesstoken));
        },
        loadDataPaging: (pageIndex, pageSize, accesstoken)=>{
            dispatch(reqLoadDataPaging(pageIndex, pageSize, accesstoken));
        },
        countAllLocation: ( accesstoken)=>{
            dispatch(reqCountData( accesstoken));
        },
        handleSearchLocation: (keyword, pageIndex, pageSize, accesstoken)=>{
            dispatch(reqSearchLocation(keyword, pageIndex, pageSize, accesstoken))
        }

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationManagement));