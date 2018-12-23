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
            car:null,
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
                purchDate: '2018-12-22T09:48:25.350Z'
            }
            this.props.onSubmitEdit( id, {...values, ...obj});
        }

    }

    render(){
        const { edit,  } = this.state;
        const { car } = this.props;
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
                attrbField:'name',
                data:{
                    dataType:'TEXT',
                    defaultValue:car.name,
                },
                render:{
                    placeholder:'Vui lòng nhập tên xe',
                    label:'Tên xe: ',

                },
                action:{
                }
            },
            {
                attrbField:'color',
                data:{
                    dataType:'TEXT',
                    defaultValue:car.color,
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
                    placeholder:'Vui lòng nhập màu sắc',
                    label:'Màu sắc xe: ',
                },
                action:{
                }
            },
            {
                attrbField:'brank',
                data:{
                    dataType:'TEXT',
                    defaultValue:car.brank,
                },
                render:{
                    placeholder:'Vui lòng nhập brank ',
                    label:'Brank: ',

                },
                action:{
                }
            },
            {
                attrbField:'description',
                data:{
                    dataType:'TEXT_AREA',
                    defaultValue:car.description,
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
                    placeholder:'Vui lòng nhập mô tả',
                    label:'Mô tả: ',
                },
                action:{
                }
            },
            {
                attrbField:'typeCar',
                data:{
                    dataType:'SELECT',
                    config:{
                        options:[
                            {
                                text:'Xe số',
                                value:'xeso',
                            },
                            {
                                text:'Xe tay ga',
                                value:'tayga',
                            },
                            {
                                text:'Xe con',
                                value:'xecon',
                            },
                        ]
                    },
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    },
                    defaultValue:'tayga',
                },
                render:{
                    placeholder:'Vui lòng chọn loại xe',
                    label:'Loại xe: ',
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
                        formID= "editCar"
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