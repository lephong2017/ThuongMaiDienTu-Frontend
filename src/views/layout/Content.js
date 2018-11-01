import {  Row ,Col, } from 'antd';
import React,{Component} from 'react';
import MainSlider from 'views/list-car-slider/ListCars';
import './css/slider.css';
import './css/content.css';
import QuickBook from 'views/page/home/QuickBook';
class Content extends Component {

  render() {
    return ( 
      <div>
        <Row className="silder_content">
          <MainSlider/>
        </Row>
        {/* <Affix style={{ position: 'absolute', top: '15%', right: '10%'}}> */}
          <Row className="book_content" >
            <Col sm={24} md={16} style={{width:'100%'}}>
                <QuickBook/>
            </Col>
          </Row>
        {/* </Affix> */}
      </div>
    );
  }
}

export default Content;