import React,{Component} from 'react';
import FormContent from 'containers/FormContainers/containers/Layout';
import {layouts} from 'containers/Page/private/form-test/layout';
import {validation} from 'containers/FormContainers/validations/index';
export default class extends Component{
    handleSubmit = (values) => {
        console.log("da submit");
        console.log(values);
    }
    
    render(){
        const classNames="field-no-radius form-light";
        // const classNames="field-radius form-dark";
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
            {
                attrbTrigger:'send',
                render:{
                    type:'BUTTON',
                    size:'default',
                    label:'Gởi',
                    icon:'send'
                }
            },  
        ]
        const actions=[
            // {
            //     attrbtn:'send',
            //     content:()=>{console.log('send')}
            // },
            {
                attrbtn:'save',
                content:(val)=>{this.handleSubmit(val);}
            },
        ]
        const listFields=[
            {
                attrbField:'username',
                data:{
                    dataType:'TEXT',
                    validation:{
                        rules:[
                            {
                                len:5,
                                message:'Bạn phải nhập đúng 5 ký tự'
                            },
                            {
                                required:true,
                                message:'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                        defaultRule:validation.username,
                    },
                    defaultValue:'PhongNguyen',
                    config:{

                    }
                },
                render:{
                    placeholder:'Vui lòng nhập username',
                    icon:'user',
                    label:'Username: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'email',
                data:{
                    dataType:'EMAIL',
                    validation:{
                    },
                    defaultValue:'phongnguyen@proptechplus.co',
                    config:{

                    }
                },
                render:{
                    placeholder:'Vui lòng nhập username',
                    icon:'user',
                    label:'Email: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'password',
                data:{
                    dataType:'PASSWORD',
                    validation:{
                        // defaultRule:validation.password,
                        rules:[
                            {
                                required:true,
                                message:'Trường dữ liệu này là bắt buộc!!!'
                            },
                        ],
                    },
                    // :'Vui lòng nhập password',
                    icon:'user',
                    label:'Password: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'phone',
                data:{
                    dataType:'PHONE',
                    validation:{
                        rules:[
                            {
                                required:true,
                                message:'Trường dữ liệu này là bắt buộc!!!'
                            },
                        ],
                    },
                    // defaultValue:'01643081355',
                },
                render:{
                    placeholder:'Vui lòng nhập số điện thoại',
                    icon:'user',
                    label:'Số điện thoại: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'address',
                data:{
                    dataType:'TEXT',
                    validation:{
                        defaultRule:validation.username,
                    },
                    defaultValue:'Xa lộ hà nội',
                },
                render:{
                    placeholder:'Vui lòng nhập địa chỉ',
                    icon:'user',
                    label:'Địa chỉ: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'placeOfBirth',
                data:{
                    dataType:'SELECT',
                    validation:{
                    },
                    defaultValue:'BinhThuan',
                    config:{
                        options:[
                            {
                                text:'Bình Thuận',
                                value:'BinhThuan'
                            },
                            {
                                text:'Thủ Đức',
                                value:'ThuDuc'
                            },
                            {
                                text:'Đồng Nai',
                                value:'DongNai'
                            },
                        ]
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập nơi sinh',
                    icon:'user',
                    label:'Nơi sinh: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'checked',
                data:{
                    dataType:'CHECKBOX',
                    validation:{
                    },
                    defaultValue:'',
                    config:{
                        checked:true,
                    }
                },
                render:{
                    placeholder:'Vui lòng check ',
                    icon:'user',
                    label:'Bê đê: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'checkedBoy',
                data:{
                    dataType:'CHECKBOX',
                    validation:{
                    },
                    defaultValue:'',
                    config:{
                        checked:true,
                    }
                },
                render:{
                    placeholder:'Vui lòng check ',
                    icon:'user',
                    label:'Boy: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'checkedGirl',
                data:{
                    dataType:'CHECKBOX',
                    validation:{
                    },
                    defaultValue:'',
                    config:{
                        checked:true,
                    }
                },
                render:{
                    placeholder:'Vui lòng check ',
                    icon:'user',
                    label:'Girl: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'linked',
                data:{
                    dataType:'LINK',
                    validation:{
                    },
                    defaultValue:'',
                    config:{
                        link:'dkdv',
                    }
                },
                render:{
                    placeholder:'Vui lòng xem điều khoản ',
                    icon:'user',
                    label:'Điều khoản dịch vụ: ',

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange')}
                }
            },
            {
                attrbField:'hobby',
                data:{
                    dataType:'MULTI_SELECT',
                    validation:{
                    },
                    defaultValue:'karaoke',
                    config:{
                        options:[
                            {
                                text:'Karaoke',
                                value:'karaoke'
                            },
                            {
                                text:'Xem phim',
                                value:'film'
                            },
                        ],
                        mode:'multiple'
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập nơi sinh',
                    icon:'user',
                    label:'Nơi sinh: ',
                    size:'default'

                },
                action:{
                    onClick:()=>{console.log('onclick')},
                    onChange:()=>{console.log('onChange ')}
                }
            },
        ] 
        return(
            <FormContent
                layouts={layouts}
                actions={actions} 
                trigger={trigger} 
                classNames={classNames} 
                type={type} 
                listFields={listFields}
            />
        );
    }
}
