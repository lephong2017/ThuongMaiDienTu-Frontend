import React,{Component} from 'react';
import MyForm from 'components/my-form/MyForm';
class FormCar extends Component{
    handleSubmit=()=>{

    }
    render(){
        var listField=[
            {
                id:"fullName",
                label:"Full name:",
                description:"Full name của bạn vào là ok!",
                icon:"user",
                placeholder:"Enter your full name...",
                message:'Vui lòng nhập fullname',
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                style:{
                },
                fieldType:{
                    type:"INPUT_TEXT",
                }
            },
            {
                id:"avatar", 
                label:"Avatar:", 
                description:"Avatar mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your Avatar...",
                required:true,
                message:'Vui lòng nhập Avatar',
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"INPUT_TEXT",
                },
                style:{
                    // marginTop:'-15px'
                },
                
            },
            {
                id:"address", 
                label:"Address:", 
                description:"Address mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your address...",
                required:true,
                message:'Vui lòng nhập address',
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"INPUT_TEXT",
                },
                style:{
                    // marginTop:'-15px'
                },
                
            },
            {
                id:"phoneNumber", 
                label:"Phone Number:", 
                description:"Phone Number mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your Phone Number...",
                required:true,
                message:'Vui lòng nhập Phone Number',
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"INPUT_NUMBER",
                },
                style:{
                    // marginTop:'-15px'
                },
                
            },
            {
                id:"email", 
                label:"Email:", 
                description:"email mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your email...",
                required:true,
                message:'Vui lòng nhập email',
                typeValidation:"email",
                messageValidation:'Không phải định dạng fullname',
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"INPUT_TEXT",
                },
                style:{
                    // marginTop:'-15px'
                },
            },
          ]
        
        const listButton=[
        ]
        const styles={
            textAlign:'center',

        };
        return(
            <MyForm
                type="ADD" 
                layout="vertical"
                listField={listField}
                styles={styles}
                onSubmit={this.handleSubmit}
                listButton={listButton}
            />
        )
    }
}
export default FormCar;