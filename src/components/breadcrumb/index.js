import { Breadcrumb } from 'antd';
import React,{Component} from 'react';
import './breadcrumb.css';
class BreadcrumbContent extends Component{
    render(){
        return (
            <Breadcrumb className="breadcrumb_wrapper">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default BreadcrumbContent;