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
            id:'',

        }
    }

    changeView = () => {
        this.setState({edit: edit_submit});
    }

    handleSubmit = (values) => {
        this.setState({edit: edit_view});
        
        if(values!=='error'){
            const id= this.props.id;
            const obj= {
                id: id,
            }
            this.props.onSubmitEdit( id, {...values, ...obj});
        }

    }

    render(){
        const { edit,  } = this.state;
        const { customer } = this.props;
        console.log(customer);
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
                attrbField:'fistNameAndLastName',
                data:{
                    dataType:'TEXT',
                    defaultValue:customer.fistNameAndLastName,
                },
                render:{
                    placeholder:'Vui lòng nhập tên khách hàng',
                    label:'Tên khách hàng: ',

                },
                action:{
                }
            },
            {
                attrbField:'phoneNumber',
                data:{
                    dataType:'NUMBER',
                    defaultValue:customer.phoneNumber,
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập số điện thoại',
                    label:'Số điện thoại: ',
                },
                action:{
                }
            },
            {
                attrbField:'email',
                data:{
                    dataType:'EMAIL',
                    defaultValue:customer.email,
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            },
                            {
                                type: 'email',
                                message: 'Bạn phải nhập đúng định dạng email!!!'
                              },
                        ],
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập email ',
                    label:'Email: ',

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
                        formID= "editCustomer"
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