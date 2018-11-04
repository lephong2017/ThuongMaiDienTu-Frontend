import React,{Component} from 'react';
import {Row,Col,Button,Icon} from 'antd';
import './index.css';
import FunctionbarContent from './function/index';
import PanelWrapper from 'containers/wrapper/Panel.style';
import TableContent from 'components/table/MyTable';
import {demoData} from './list-car-dumy';
import DrawerContent from 'components/Drawer/Drawer';
import FormCar from './action/add/FormCar'; 
import FormEditCar from './action/edit/edit'; 
class CarManagement extends Component{
    state={
        fullScreenMode:false,
        pageSize:5,
        pageIndex:1,
        listPageVisit:[1],
        listPageVisitFilter:[1],
        iSearch:"ALL",

        visibledAdd:false,
        visibledEdit:false,
    }
    handleFullScreenMode=(val)=> {
        this.setState(() => {
            return {
                fullScreenMode: val
            };
        });
    }
    getItemRow=()=>{

    }
    onPageChange=(pageInd)=>{
        var stringFilter = this.state.iSearch;
        if(stringFilter===''||stringFilter==="ALL"){
            var pageVisit = this.state.listPageVisit;
            this.setState({
                pageIndex:pageInd,
                listPageVisitFilter:[],
        },
            function(){
                var isPageVisit= this.state.listPageVisit.includes(pageInd);
                if(isPageVisit===false){
                    pageVisit.push(pageInd);
                    this.setState({listPageVisit:pageVisit,});
                    
                }
            });
        }else{
            this.setState({pageIndex:pageInd+1,listPageVisit:[]},
                function(){
                    var pageVisit = this.state.listPageVisitFilter;
                    var isPageVisit= this.state.listPageVisitFilter.includes(pageInd);
                    if(isPageVisit===false){
                        pageVisit.push(pageInd);
                        this.setState({listPageVisitFilter:pageVisit, });
                    }

                });
            }
    } 
    showDrawerAdd=()=>{
        this.setState({visibledAdd:true})
    }
    onCloseAdd = () => { this.setState({ visibledAdd: false, }) };

    showDrawerEdit=()=>{
        this.setState({visibledEdit:true})
    }
    onCloseEdit = () => { this.setState({ visibledEdit: false, }) };
    render(){
        var objSetting={
            loadding:false,
            defaultPageSize:5,
            onPageChange:this.onPageChange,
            // onPageSizeChange:this.onPageSizeChange,
            className: "-striped -highlight",
            page:this.state.pageIndex,
            pageSize:this.state.pageSize,
            getObject:this.getItemRow
        }
        const demoCol =[
            {
                title: "id",
                dataIndex: "id",
                key:`ida`,
            },
           {
               title: "Name",
               dataIndex: "name",
               key:`fullName`,
           },
           {
               title: "Phone Number",
               dataIndex: "phoneNumber",
               key:`phoneNumber`,
           },
           {
               title: "Email",
               dataIndex: "email",
               key:`email`,
           },
           {
               key:`idb`,
               dataIndex:"id",
               align:'center',
               render:(text)  => {
                   return (
                       <div className="button-table"> 
                            <Button style={{border:'none'}} onClick={this.showDrawerEdit} icon="edit" />{'    '}
                            <Button style={{border:'none'}}  icon="delete" />
                       </div>
                       )
               }
           },
        ]
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
            componentWillShow:()=> <FormCar/>,
        }
        var listPropForDrawerEdit={
            styleProps:{
              title:"Nhập thông tin sửa chổ!",
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
            componentWillShow:()=> <FormEditCar/>,
        }
        return (
            <Row className="content_manager_wrapper">
                <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                    <FunctionbarContent showDrawerAdd={this.showDrawerAdd} handleFullScreenMode={this.handleFullScreenMode}/>
                    <Col md={24} className="table-wrapper">
                        <TableContent 
                            styleTable="TABLE_ANTD" 
                            data={demoData} 
                            col={demoCol} 
                            ObjSetting={objSetting}
                            />
                    </Col>
                    <DrawerContent 
                        key={'addcar'}
                        styleProps={listPropForDrawer.styleProps} 
                        visible={listPropForDrawer.visible} 
                        onClose={listPropForDrawer.onClose}
                        hasButtonFooter={listPropForDrawer.hasButtonFooter}    
                        componentWillShow={listPropForDrawer.componentWillShow}
                    />
                    <DrawerContent 
                        key={'editcar'}
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
export default CarManagement; 