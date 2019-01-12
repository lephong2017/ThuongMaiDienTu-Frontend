import React, {Component} from 'react';
import FormContent from 'components/ptp__form-layout';
import {layouts} from '../layout';
import {Row, Col, Button, Icon} from 'antd';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


const edit_view = 0, edit_submit= 1;
class FormEditContent extends Component{
    constructor(props){
        super(props);

        this.state={
            edit:edit_view, 
            dataSubmit:{
            },
            order:null,
            id:'',

        }
    }

    changeView = () => {
        this.setState({edit: edit_submit});
    }

    handleSubmit = (values) => {
        this.setState({edit: edit_view});
        
        if(values!=='error'){
            const obj= {
                id:'12',
                purchDate: '2018-12-22T09:48:25.350Z'
            }
            this.props.onSubmitAdd({...values, ...obj});
        }

    }

    render(){
        const { edit,  } = this.state;
        const classNames="field-no-radius form-light";
        const type="vertical";
        const trigger =[
            {
                attrbTrigger:'save',
                render:{
                    type:'BUTTON',
                    size:'default',
                    label:'Lưu lại',
                    icon:'download',
                }
            },  
        ]
        const actions=[
            {
                attrbtn: 'save',
                content: (val) => this.handleSubmit(val)
            },
        ]
        const listFields=[
            {
                attrbField:'nameCustomer',
                data:{
                    dataType:'TEXT',
                },
                render:{
                    placeholder:'Vui lòng nhập tên của bạn',
                    label:'Tên khách hàng: ',

                },
                action:{
                }
            },
            {
                attrbField:'nameCar',
                data:{
                    dataType:'TEXT',
                },
                render:{
                    placeholder:'Vui lòng nhập tên xe ',
                    label:'Tên xe: ',
                },
                action:{
                }
            },
            {
                attrbField:'priceOrder',
                data:{
                    dataType:'NUMBER',
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    },
                },
                render:{
                    placeholder:'Vui lòng nhập giá ',
                    label:'Giá: ',

                },
                action:{
                }
            },
            {
                attrbField:'dateOfhire',
                data:{
                    dataType:'DATE_PICKER',
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    },
                },
                render:{
                    placeholder:'Vui lòng nhập chọn ngày thuê',
                    label:'Ngày thuê: ',
                },
                action:{
                }
            },
            {
                attrbField:'payDate',
                data:{
                    dataType:'DATE_PICKER',
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    },
                },
                render:{
                    placeholder:'Vui lòng nhập chọn ngày trả',
                    label:'Ngày trả: ',
                },
                action:{
                }
            },
            
        ] 
       
        return(
            <Row >
                <Col md={24}>
                    <FormContent
                        layouts={layouts}
                        actions={actions} 
                        trigger={trigger} 
                        classNames={classNames} 
                        type={type} 
                        listFields={listFields}
                        submit= {edit}
                        formID= "addOder"
                        mode= "edit"
                        handleSubmit= {this.handleSubmit}
                    />
                </Col>
                <Col md={24}>
                    <Button onClick={()=>this.changeView()}>
                        <Icon type="save"></Icon> Save
                    </Button>
                </Col>
            </Row>
            
            
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormEditContent));