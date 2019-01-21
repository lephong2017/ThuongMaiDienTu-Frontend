import React ,{Component} from 'react';
import { Layout, Row,Col } from 'antd';
import SidebarContent from './Sidebar';
import HeaderContent from 'views/layout/Header'; 
import FooterContent from 'views/layout/Footer';
import FunctionFilter from 'containers/filterbar/FunctionFilter';
import StepContent from 'containers/step/Step';
import GridCard from './GridCard';
import PaginationContent from 'components/pagination/Pagination'
import 'containers/filterbar/function.css';
import './css/sidebar.css';
import { withRouter,} from 'react-router-dom';
import { connect } from 'react-redux';
import {reqLoadDataPaging, reqSearchProduct, reqCountData} from 'redux/car/actions';
import {reqLoadCarFilterDateAndLocation} from 'redux/car/actions';
import * as CONST_VARIABLE from 'utils/const/index';
const { Header, Content,Footer } = Layout;
class ContentApp extends Component{
    state={
        collapsed: false,
        pageIndex:1, 
        pageSize: 12,
        priceStart:0, 
        priceEnd:10000,
        dateRental:null,
        dateReturn:null,
        city:null,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillMount(){
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize,} = this.state;
        this.props.loadProductAct(pageIndex,pageSize,accesstoken);
        this.props.loadCountData();

        this.setState({
            dateRental:this.props.location.state.dateRental,
            dateReturn:this.props.location.state.dateReturn,
            city: this.props.location.state.city
        });
    }

    componentDidMount(){
        this.props.loadCountData();
    }

    onShowSizeChange = (current, pageSize)=> {
        // console.log(current, pageSize);
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        this.props.loadProductAct(current,pageSize,accesstoken);
    }

    onSearch= (keyword, order) =>{
        console.log(keyword);
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize, priceStart, priceEnd} = this.state;
        this.props.searchProductAct(keyword, pageIndex, pageSize, order, priceStart, priceEnd, accesstoken);
    }

    onSearchPrice=(priceStart, priceEnd)=>{
        const accesstoken = sessionStorage.getItem(CONST_VARIABLE.ACCESS_TOKEN);
        const {pageIndex, pageSize,} = this.state;
        const keyword= '';
        const order= 'ASC';
        this.props.searchProductAct(keyword, pageIndex, pageSize, order, priceStart, priceEnd, accesstoken);
    }

    onChangeCity=(val)=>{
        this.setState({city:val} );
        this.props.handleLoadCarFilterDateAndLocation(val, this.state.dateRental, this.state.dateReturn, 'accesstoken');
    }
    onChangeDateRental=(val)=>{
        this.setState({dateRental:val})
        this.props.handleLoadCarFilterDateAndLocation(this.state.city, val, this.state.dateReturn, 'accesstoken');
    }
    onChangeDateReturn=(val)=>{
        this.setState({dateReturn:val})
        this.props.handleLoadCarFilterDateAndLocation(this.state.city, this.state.dateRental, val, 'accesstoken');
    }
    
    render() {
        const {car} = this.props;
        const {dateReturn, dateRental, city} = this.state;
    return (
    <Layout>
        <Header className="header_content">
            <HeaderContent/>
        </Header>
        <Content>
            <div className="step_content">
                <StepContent step={1}/>
            </div>
            <Layout>
                <Row className="resposive_content_find_car" gutter={8} >
                    <Col md={6} className="sidebar_content" >
                        <SidebarContent 
                            city={city}
                            dateReturn={dateReturn}
                            dateRental={dateRental}
                            onSearchPrice={this.onSearchPrice} 
                            onChangeCity={this.onChangeCity}
                            onChangeDateRental={this.onChangeDateRental}
                            onChangeDateReturn={this.onChangeDateReturn}
                            collapsed={this.state.collapsed}/>
                    </Col>
                    <Col md={18}>
                        <Row style={{display:'flex',flexDirection:'column'}}>
                            <Col md={24}>
                                <FunctionFilter onSearch={this.onSearch} className="function_filter"/>
                            </Col>
                            <br/>
                            <Col md={24}>
                                <Content style={{ marginTop: '34px', padding: '12px 0', background: '#fff' }}>
                                    <Row>
                                        <Col md={24} sm={24}>
                                            <GridCard 
                                                city={city}
                                                dateReturn={dateReturn}
                                                dateRental={dateRental}
                                                products={car}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={24} sm={24} className="pagination-bar" >
                                            <PaginationContent 
                                                total={this.props.numberCar} 
                                                onShowSizeChange={this.onShowSizeChange}/>
                                        </Col>
                                    </Row>
                                </Content>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </Content>
        <Footer>
            <FooterContent/>
        </Footer>
    </Layout>
        
    );
    }
}
const mapStateToProps = state => {
    return {
        car: state.car,
        numberCar: state.numberCar
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProductAct:(pageIndex,pageSize,accesstoken)=>{
            dispatch(reqLoadDataPaging(pageIndex,pageSize,accesstoken)) ;
        },
        
        searchProductAct:(keyword, pageIndex, pageSize, sortOrder, priceStart, priceEnd, accesstoken)=>{
            dispatch(reqSearchProduct(keyword, pageIndex, pageSize, sortOrder, priceStart, priceEnd, accesstoken)) ;
        },

        loadCountData:()=>{
            dispatch(reqCountData()) ;
        },

        handleLoadCarFilterDateAndLocation:(location, dateRental, datereturn, accesstoken)=>{
            dispatch(reqLoadCarFilterDateAndLocation(location, dateRental, datereturn, accesstoken)) ;
        },

    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentApp));