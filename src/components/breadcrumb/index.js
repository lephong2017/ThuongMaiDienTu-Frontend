import { Breadcrumb } from 'antd';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './breadcrumb.css';
class BreadcrumbContent extends Component{
    render(){
        return (
            <Breadcrumb className="breadcrumb_wrapper">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><Link  to="#">Application Center</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="#">Application List</Link></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default BreadcrumbContent;